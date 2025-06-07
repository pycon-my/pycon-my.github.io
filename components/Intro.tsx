import React from 'react';
import Image from 'next/image';

const Intro: React.FC = () => {
  return (
    <section className="relative w-full min-h-[110vh] bg-land overflow-hidden py-4 md:py-8">
      <div className="hidden md:block absolute -bottom-20 right-0 z-50">
        <div className="relative w-80 h-64 md:w-128 md:h-100">
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

        <div className="flex justify-center mb-4">
          <div className="relative w-32 h-32 md:w-48 md:h-48">
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

        <div className="w-full md:absolute md:left-[15%] md:w-[45%] max-w-2xl md:max-w-none mx-auto md:mx-0 text-left font-space-grotesk text-body">
          <p className="text-lg md:text-xl leading-tight mb-4">
            We are so excited to welcome our community back to the sunny city of 
            Kuala Lumpur for PyCon MY 2025!
          </p>
          <p className="text-lg md:text-xl leading-tight mb-4">
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
