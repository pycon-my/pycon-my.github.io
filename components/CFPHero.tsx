import React from 'react';
import Image from 'next/image';

const CFPHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-grass py-16 md:py-24">
      <div className="relative z-20 md:ml-[50%] max-w-3xl px-6 md:px-8">
        <div className="text-left mb-16">
          <h1 className="text-2xl md:text-4xl font-instrument-serif text-text-primary leading-tight">
            Call For Proposal is open!
          </h1>
          
          <p className="font-space-grotesk text-md md:text-lg text-text-secondary mt-4">
            Register as this year&apos;s speaker here.
          </p>
        </div>
      </div>
      
      <div className="absolute right-0 top-2/3 transform -translate-y-1/2 z-10">
        <div className="relative w-96 h-96 md:w-160 md:h-160">
          <Image 
            src="/assets/cfp.png"
            alt="Python character"
            fill
            style={{
              objectFit: "contain"
            }}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CFPHero;
