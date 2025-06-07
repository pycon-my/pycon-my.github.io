'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  return (
    <div className="navbar absolute top-0 left-0 w-full bg-transparent px-6 md:px-10 py-2 z-20">
      <div className="navbar-start">
        
        <Link href="/" className="flex items-center">
          <Image 
            src="/assets/PyConMY2025_Logotype.svg" 
            alt="PyCon 2025 Logo" 
            width={150} 
            height={60}
            className="h-16 w-auto" 
            priority
          />
        </Link>
      </div>
      
      
      <div className="navbar-end">
        <div className="hidden lg:flex gap-8 text-2xl font-instrument-serif">
          <Link href="/about" className={`${isActive('/about') ? "text-text-focused" : "text-text-secondary"} hover:text-text-focused cursor-pointer`}>About</Link>
          <Link href="/sponsor" className={`${isActive('/sponsor') ? "text-text-focused" : "text-text-secondary"} hover:text-text-focused cursor-pointer`}>Sponsor</Link>
          <Link href="/cfp" className={`${isActive('/cfp') ? "text-text-focused" : "text-text-secondary"} hover:text-text-focused cursor-pointer`}>CFP</Link>
          <Link href="/schedule" className={`${isActive('/schedule') ? "text-text-focused" : "text-text-secondary"} hover:text-text-focused cursor-pointer`}>Schedule</Link>
          <Link href="/volunteer" className={`${isActive('/volunteer') ? "text-text-focused" : "text-text-secondary"} hover:text-text-focused cursor-pointer`}>Volunteer</Link>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-instrument-serif">
            <li><Link href="/about" className={`${isActive('/about') ? "text-text-focused" : "text-text-secondary"} hover:text-text-focused`}>About</Link></li>
            <li><Link href="/sponsor" className={`${isActive('/sponsor') ? "text-text-focused" : "text-text-secondary"} hover:text-text-focused`}>Sponsor</Link></li>
            <li><Link href="/cfp" className={`${isActive('/cfp') ? "text-text-focused" : "text-text-secondary"} hover:text-text-focused`}>CFP</Link></li>
            <li><Link href="/schedule" className={`${isActive('/schedule') ? "text-text-focused" : "text-text-secondary"} hover:text-text-focused`}>Schedule</Link></li>
            <li><Link href="/volunteer" className={`${isActive('/volunteer') ? "text-text-focused" : "text-text-secondary"} hover:text-text-focused`}>Volunteer</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
