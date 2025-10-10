export type Sponsor = {
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'community';
  description: string;
};

export const sponsors: Sponsor[] = [
  {
    name: 'Ørsted Services Malaysia',
    logo: '/sponsor/Orsted_Logo_Blue_RGB.png',
    tier: 'platinum',
    description: `Ørsted is a global leader in developing, constructing, and operating offshore wind farms, with a total renewable energy capacity of 18 GW across Europe, Asia Pacific, and North America. We target an installed renewable capacity up to 27 GW by end of 2027. Our Malaysia office is part of a global team consisting of Engineering, Procurement, IT, Finance specialists and many more, with more than 750 employees located in our office. Ørsted has been active in Malaysia since 2010 and the office has grown to be part of Ørsted's global Centre of Excellence.

Ørsted Malaysia was established as an IT office in 2009 and we've since grown to encompass a wide range of competencies, contributing significantly to the company's operations and growth. Our talents from software engineering, infrastructure, cloud technology, agile delivery, architecture, security, service operations, and management backgrounds work closely with Ørsted colleagues from all other areas to provide efficient business processes.`
  },
  {
    name: 'Magic Pod',
    logo: '/sponsor/magicpod.png',
    tier: 'silver',
    description: `MagicPod is a test automation cloud service in the era of AI capable for both mobile app testing and browser (web app) testing. It supports the acceleration of release cycle with its wide variety of functions and high maintainability.`
  },
  {
    name: 'Navicat',
    logo: '/sponsor/navicat.png',
    tier: 'silver',
    description: `Navicat is a powerful database development tool that helps you manage your databases with ease. It supports various database systems and offers a user-friendly interface for database design, querying, and administration.`
  },
  {
    name: 'Sunway University',
    logo: '/sponsor/FETlogo.png',
    tier: 'community',
    description: `FET is a community partner supporting PyCon Malaysia 2025.`
  },
  {
    name: 'Sunway Tech Club',
    logo: '/sponsor/SunwayTechClubLogo.png',
    tier: 'community',
    description: `Sunway Tech Club is a community partner supporting PyCon Malaysia 2025.`
  },
  {
    name: 'Maslow SA Sdn Bhd',
    logo: '/sponsor/MSA.png',
    tier: 'community',
    description: `Maslow SA Sdn Bhd is a community partner supporting PyCon Malaysia 2025.`
  }
];

export const getSponsorsByTier = (tier: Sponsor['tier']) => {
  return sponsors.filter(sponsor => sponsor.tier === tier);
};
