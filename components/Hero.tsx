import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-[90vh] bg-gradient-to-b from-[#F5E6B8] to-[#E8D5A3] overflow-hidden">
      {/* Navigation menu */}
      <Navbar />

      {/* Main logo */}
      <div className="relative z-10 pt-16 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl mx-auto px-4">
          <div className="w-full relative h-40 md:h-60">
            <Image
              src="/assets/PyConMY2025_Logotype.svg"
              alt="PyCon Malaysia 2025 Logo"
              fill
              style={{
                objectFit: "contain"
              }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Background hills */}
      <div className="absolute inset-0 z-0">
        {/* Hills */}
        <div className="absolute bottom-0 left-0 w-full h-3/4">
          {/* Left hill */}
          <div className="absolute bottom-0 left-0 w-1/2 h-full">
            <Image 
              src="/assets/left_hill.png"
              alt="Left hill"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "bottom left"
              }}
              priority
            />
          </div>
          
          {/* Right hill */}
          <div className="absolute bottom-0 right-0 w-1/2 h-full">
            <Image 
              src="/assets/right_hill.png"
              alt="Right hill"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "bottom right"
              }}
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute z-5 top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-70"></div>
      <div className="absolute z-5 top-1/3 right-1/3 w-3 h-3 bg-white rounded-full opacity-60"></div>
      <div className="absolute z-5 top-1/5 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
    </header>
  );
};

export default Hero;
