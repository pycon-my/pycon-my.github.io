import React from 'react';
import Image from 'next/image';

const Intro: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-land overflow-hidden py-16 md:py-24">
      {/* Left side coconut tree with flowers */}
      <div className="absolute top-2 left-0 z-10">
        <div className="relative w-48 h-60 md:w-96 md:h-80">
          <Image 
            src="/assets/tree-3.png"
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

      {/* Top right tree */}
      <div className="absolute top-4 right-8 md:right-16 z-10">
        <div className="relative w-32 h-40 md:w-40 md:h-52">
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

      {/* Bottom right trees cluster */}
      <div className="absolute bottom-0 right-0 z-10">
        <div className="relative w-80 h-64 md:w-96 md:h-80">
          <Image 
            src="/assets/tree-2.png"
            alt="Trees cluster"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "bottom right"
            }}
            priority
          />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-8 pt-2">
        <div className="text-center mb-12 font-instrument-serif text-green">
          <h2 className="text-4xl md:text-6xl mb-2 leading-tight">
            Presenting
          </h2>
          <h1 className="text-4xl md:text-6xl mb-2 leading-tight">
            PyCon Malaysia 2025
          </h1>
          <p className="text-4xl md:text-6xl mb-2">
            November 14–22, 2025
          </p>
        </div>

        {/* Python character illustration */}
        <div className="flex justify-center mb-12">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image 
              src="/assets/bird.png"
              alt="Python character"
              fill
              style={{
                objectFit: "contain"
              }}
              priority
            />
          </div>
        </div>

        {/* Description text */}
        <div className="max-w-2xl mx-auto text-left font-space-grotesk text-body">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            We are so excited to welcome our community back to the sunny city of 
            Kuala Lumpur for PyCon MY 2025!
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Mark your calendars and be sure to read the About PyCon MY page for 
            more details. We can&apos;t wait to see you all at the Sunway University&apos;s 
            Conference Hall again this year!
          </p>

        </div>
      </div>

      
    </section>
  );
};

export default Intro;
