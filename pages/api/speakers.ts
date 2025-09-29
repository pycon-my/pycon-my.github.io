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
  name: string;
  avatar: string;
  biography: string;
};

type Submission = {
  state: string;
  speakers: Speaker[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Validate API key for all requests except same-origin requests
  const origin = req.headers.origin;
  const referer = req.headers.referer;
  const host = req.headers.host;
  
  // Check if request is from same origin (browser making request from your site)
  const isSameOrigin = origin && (
    origin.includes('localhost') || 
    origin.includes('pycon.my') ||
    origin === `http://${host}` ||
    origin === `https://${host}`
  );
  
  // Check if request is from same site via referer (for cases where origin might not be set)
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
      'https://cfp.pycon.my/api/events/pyconmy-2025/submissions/?format=json&limit=100',
      {
        headers: {
          Authorization: `Token ${process.env.CFP_API_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data: { results: Submission[] } = await response.json();

    const acceptedSpeakers: Speaker[] = data.results
      .filter((submission) => submission.state === 'confirmed')
      .flatMap((submission) => submission.speakers);

    res.status(200).json(acceptedSpeakers);
  } catch (error) {
    console.error('Error fetching speakers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}