import { NextApiRequest, NextApiResponse } from 'next';

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
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
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
      .filter((submission) => submission.state === 'accepted')
      .flatMap((submission) => submission.speakers);

    res.status(200).json(acceptedSpeakers);
  } catch (error) {
    console.error('Error fetching speakers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}