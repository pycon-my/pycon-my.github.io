import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Hero Section with Hills */}
      <header 
        className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-hero"
      >
        {/* Main logo */}
        <div className="relative z-10 pt-32 flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl mx-auto px-4">
            <div className="w-full relative h-40 md:h-60">
              <Image
                src="/assets/PyConMY2025_EventLogo2.svg"
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
          <div className="absolute -bottom-2 left-0 w-full h-3/4">
              <Image 
                src="/assets/hill_full.png"
                alt="Hills"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom"
                }}
                priority
              />
          </div>
        </div>
      </header>

      {/* Boat with characters - positioned between hero and sea sections */}
      <div className="absolute bottom-[20vh] left-5/6 transform -translate-x-1/2 z-50 animate-boat-slide">
        <div className="relative w-40 h-24 md:w-96 md:h-56">
          <Image 
            src="/assets/sea-boat.png"
            alt="Boat with characters"
            fill
            style={{
              objectFit: "contain"
            }}
            priority
          />
        </div>
      </div>

      {/* Sea eye/creature beside the boat */}
      <div className="absolute bottom-[30vh] left-5/6 transform translate-x-8 z-50 animate-eye-flip">
        <div className="relative w-12 h-12 md:w-24 md:h-24">
          <Image 
            src="/assets/sea-eye.png"
            alt="Sea creature"
            fill
            style={{
              objectFit: "contain"
            }}
            priority
          />
        </div>
      </div>

      {/* Sea Section */}
      <section className="relative w-full h-[40vh] bg-sea overflow-hidden">
        {/* Coconut tree at 2/5 position from left */}
        <div className="absolute bottom-0 left-2/5 transform -translate-x-1/2 z-10">
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            <Image 
              src="/assets/sea-coconut.png"
              alt="Coconut tree"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "bottom"
              }}
              priority
            />
          </div>
        </div>

        {/* Sea stone on the bottom right */}
        <div className="absolute bottom-0 right-4 z-5">
          <div className="relative w-12 h-8 md:w-16 md:h-10">
            <Image 
              src="/assets/sea-stone.png"
              alt="Sea stone"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "bottom"
              }}
              priority
            />
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Hero;

