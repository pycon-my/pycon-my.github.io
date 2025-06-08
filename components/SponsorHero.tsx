import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SponsorHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-land py-16 md:py-24">
      <div className="hidden md:block absolute -top-30 z-50">
        <div className="relative w-60 h-48 md:w-128 md:h-100">
          <Image 
            src="/assets/grass-1.png"
            alt="TrGrassees cluster"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "top left"
            }}
            priority
          />
        </div>
      </div>

      <div className="hidden md:block absolute -top-10 right-10 z-50">
        <div className="relative w-40 h-32 md:w-64 md:h-50">
          <Image 
            src="/assets/tree-4.png"
            alt="Trees cluster"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "top right"
            }}
            priority
          />
        </div>
      </div>

      <div className="relative z-20 md:ml-[10%] md:mt-[10%] max-w-2xl px-6 md:px-8">
        <div className="text-left mb-16">
          <h1 className="text-2xl md:text-4xl font-instrument-serif text-text-primary leading-tight">
            Sponsor PyCon MY 2025!
          </h1>
          
          <p className="font-space-grotesk text-md md:text-lg text-text-secondary mt-4">
            Making 2025&apos;s edition the best one yet! Get your info pack <Link href="/sponsor" className="hover:italic underline">here</Link>.
          </p>
        </div>
      </div>
      
      <div className="absolute top-2/3  xl:right-50 xl:top-1/3 transform -translate-y-1/2 z-10">
        <div className="relative w-48 h-48 md:w-80 md:h-168">
          <Image 
            src="/assets/monkey-cup.png"
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

export default SponsorHero;
