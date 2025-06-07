import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full">
      <header 
        className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-hero"
      >
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

        <div className="absolute inset-0 z-0">
          <div className="absolute -bottom-2 left-0 w-full h-3/4">
              <Image 
                src="/assets/hill-full.png"
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

      <div className="absolute bottom-[20vh] left-3/4 md:left-5/6 transform -translate-x-1/2 z-50 animate-boat-slide">
        <div className="relative w-52 h-34 md:w-96 md:h-56">
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

      <div className="absolute bottom-[30vh] left-3/4 md:left-5/6 transform translate-x-8 z-50 animate-eye-flip">
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

      <section className="relative w-full h-[40vh] bg-sea overflow-hidden">
        <div className="absolute -bottom-4 left-2/7 transform -translate-x-1/2 z-10">
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

        <div className="absolute -bottom-4 right-4 z-5">
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

      <div className="hidden md:block absolute -bottom-36 right-8 md:right-16 z-30">
        <div className="relative w-32 h-40 md:w-48 md:h-60">
          <Image 
            src="/assets/tree-1.png"
            alt="Tree"
            fill
            style={{
              objectFit: "contain"
            }}
            priority
          />
        </div>
      </div>

      <div className="hidden md:block absolute -bottom-40 lg:-bottom-60 left-0 z-30">
        <div className="relative w-58 h-72 lg:w-96 lg:h-80">
          <Image 
            src="/assets/tree-3.png"
            alt="Left tree"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "bottom"
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

