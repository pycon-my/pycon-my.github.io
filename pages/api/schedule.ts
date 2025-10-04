import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

// Initialize the CORS middleware
const cors = Cors({
  origin: process.env.NODE_ENV === 'development' 
    ? ['http://localhost:3000', 'https://localhost:3000']
    : 'https://pycon.my',
  methods: ['GET'],
});

function runMiddleware(
  req: NextApiRequest, 
  res: NextApiResponse, 
  fn: (req: NextApiRequest, res: NextApiResponse, callback: (result?: unknown) => void) => void
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

type Speaker = {
  code: string;
  name: string;
  biography: string;
  avatar: string;
};

type Room = {
  en: string;
};

type Slot = {
  room_id: number;
  room: Room;
  start: string;
  end: string;
};

type SubmissionType = {
  en: string;
};

type ScheduleSlot = {
  code: string;
  speakers: Speaker[];
  title: string;
  submission_type: SubmissionType;
  submission_type_id: number;
  track: string | null;
  track_id: number | null;
  state: string;
  abstract: string;
  description: string;
  duration: number;
  slot_count: number;
  do_not_record: boolean;
  is_featured: boolean;
  content_locale: string;
  slot: Slot;
  image: string | null;
  resources: unknown[];
  answers: unknown[];
};

type ScheduleResponse = {
  slots: ScheduleSlot[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Validate API key for external requests (same logic as speakers API)
  const origin = req.headers.origin;
  const referer = req.headers.referer;
  const host = req.headers.host;
  
  const isSameOrigin = origin && (
    origin.includes('localhost') || 
    origin.includes('pycon.my') ||
    origin === `http://${host}` ||
    origin === `https://${host}`
  );
  
  const isSameReferer = referer && (
    referer.includes('localhost') ||
    referer.includes('pycon.my')
  );
  
  const isInternalRequest = isSameOrigin || isSameReferer;
  
  if (!isInternalRequest) {
    const apiKey = req.headers['x-api-key'];
    console.log('External request - validating API key');
    
    if (apiKey !== process.env.API_KEY) {
      console.log('API key validation failed for external request');
      return res.status(401).json({ message: 'Unauthorized: Invalid API key' });
    }
    
    console.log('API key validation successful for external request');
  } else {
    console.log('Internal request - skipping API key validation');
  }

  try {
    const response = await fetch(
      'https://cfp.pycon.my/api/events/pyconmy-2025/schedules/latest/',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch schedule data: ${response.statusText}`);
    }

    const data: ScheduleResponse = await response.json();

    // Filter only confirmed slots
    const confirmedSlots = data.slots.filter((slot) => slot.state === 'confirmed');

    // Organize by room and date
    const organizedSchedule = confirmedSlots.reduce((acc, slot) => {
      const roomName = slot.slot.room.en;
      const date = new Date(slot.slot.start).toISOString().split('T')[0];
      
      if (!acc[date]) {
        acc[date] = {};
      }
      
      if (!acc[date][roomName]) {
        acc[date][roomName] = [];
      }
      
      acc[date][roomName].push(slot);
      
      return acc;
    }, {} as Record<string, Record<string, ScheduleSlot[]>>);

    // Sort slots by start time within each room
    Object.keys(organizedSchedule).forEach(date => {
      Object.keys(organizedSchedule[date]).forEach(room => {
        organizedSchedule[date][room].sort((a, b) => 
          new Date(a.slot.start).getTime() - new Date(b.slot.start).getTime()
        );
      });
    });

    res.status(200).json({
      slots: confirmedSlots,
      organized: organizedSchedule,
      rooms: ['Hall 1', 'Hall 2'],
    });
  } catch (error) {
    console.error('Error fetching schedule:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
