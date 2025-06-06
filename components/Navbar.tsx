import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-20 px-6 md:px-10 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <div className="h-12 w-auto">
            <Image 
              src="/assets/bird.png" 
              alt="PyCon 2025 Mascot" 
              width={60} 
              height={40}
              className="h-10 w-auto" 
            />
          </div>
        </Link>
      </div>
      <div className="hidden md:flex space-x-8 text-lg font-medium font-display">
        <Link href="/about" className="text-[#333333] hover:text-[#4CAF50] transition-colors">
          About
        </Link>
        <Link href="/sponsor" className="text-[#333333] hover:text-[#4CAF50] transition-colors">
          Sponsor
        </Link>
        <Link href="/schedule" className="text-[#333333] hover:text-[#4CAF50] transition-colors">
          Schedule
        </Link>
        <Link href="/attend" className="text-[#333333] hover:text-[#4CAF50] transition-colors">
          Attend
        </Link>
        <Link href="/venue" className="text-[#333333] hover:text-[#4CAF50] transition-colors">
          Venue
        </Link>
        <Link href="/events" className="text-[#333333] hover:text-[#4CAF50] transition-colors">
          Events
        </Link>
        <Link href="/volunteer" className="text-[#333333] hover:text-[#4CAF50] transition-colors">
          Volunteer
        </Link>
      </div>
      
      {/* Search and Login/Signup buttons */}
      <div className="flex items-center space-x-4">
        <button className="md:hidden text-[#333333]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
