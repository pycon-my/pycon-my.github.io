'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AnnouncementBanner: React.FC = () => {
  const announcements = [
    {
      text: "Bulk ticketing is available, contact us at ",
      link: { href: "mailto:board@pycon.my", text: "board@pycon.my" }
    },
    {
      text: "PyCon MY 2025 is now HRDC claimable! More info ",
      link: { href: "/hrdc-claimable", text: "here" }
    },
    {
      text: "Student tickets are now available! Get yours ",
      link: { href: "https://www.eventbrite.sg/e/pycon-my-2025-tickets-1447422954019", text: "here" }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
        setIsFlipping(false);
      }, 300);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [announcements.length]);

  const currentAnnouncement = announcements[currentIndex];

  return (
    <div className="bg-focused text-white py-2 px-6 md:px-10 text-center relative z-30 overflow-hidden">
      <div className={`transition-transform duration-300 ${isFlipping ? 'animate-flip' : ''}`}>
        <p className="text-sm md:text-base font-medium">
          <span className="font-bold">Announcement:</span> {currentAnnouncement.text}
          {currentAnnouncement.link && (
            <Link 
              href={currentAnnouncement.link.href} 
              className="underline hover:text-gray-200 transition-colors"
            >
              {currentAnnouncement.link.text}
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBanner;