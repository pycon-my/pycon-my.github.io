'use client';

import React from 'react';
import Link from 'next/link';

const AnnouncementBanner: React.FC = () => {
  return (
    <div className="bg-focused text-white py-2 px-6 md:px-10 text-center relative z-30">
      <p className="text-sm md:text-base font-medium">
        <span className="font-bold">Announcement:</span> Bulk ticketing is available, contact us at{' '}
        <Link 
          href="mailto:board@pycon.my" 
          className="underline hover:text-gray-200 transition-colors"
        >
          board@pycon.my
        </Link>
      </p>
    </div>
  );
};

export default AnnouncementBanner;