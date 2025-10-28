import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SponsorCard from './SponsorCard';
import { getSponsorsByTier } from '@/lib/sponsors';

const SponsorHero: React.FC = () => {
  const platinumSponsors = getSponsorsByTier('platinum');
  const silverSponsors = getSponsorsByTier('silver');
  const bronzeSponsors = getSponsorsByTier('bronze');
  const communityPartners = getSponsorsByTier('community');

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
            Presenting our 2025 Sponsors
          </h1>
          
          <p className="font-space-grotesk text-md md:text-lg text-text-secondary mt-4">
            This PyCon Malaysia 2025 conference is made possible by the generous support of our sponsors. Interested in becoming a sponsor?{' '}
            <Link href="/sponsor" className="text-primary font-medium underline hover:text-primary/80">
              Learn more
            </Link>
          </p>
        </div>

        {/* Platinum Sponsors */}
        {platinumSponsors.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl md:text-4xl font-instrument-serif font-bold text-tertiary mb-6 text-center">Platinum Sponsor</h2>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 gap-8 w-full max-w-3xl">
                {platinumSponsors.map((sponsor) => (
                  <SponsorCard key={sponsor.name} sponsor={sponsor} size="large" />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl md:text-3xl font-instrument-serif font-bold text-tertiary mb-6 text-center">Silver Sponsors</h2>
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-3xl mx-auto">
              {silverSponsors.map((sponsor) => (
                <div key={sponsor.name} className="w-full md:w-[calc(50%-12px)]">
                  <SponsorCard sponsor={sponsor} size="medium" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bronze Sponsors */}
        {bronzeSponsors.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl md:text-3xl font-instrument-serif font-bold text-tertiary mb-6 text-center">Bronze Sponsors</h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {bronzeSponsors.map((sponsor) => (
                <div key={sponsor.name} className="w-full md:w-48">
                  <SponsorCard sponsor={sponsor} size="small" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Community Partners */}
        {communityPartners.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl md:text-3xl font-instrument-serif font-bold text-tertiary mb-6 text-center">Community Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {communityPartners.map((sponsor) => (
                <div key={sponsor.name} className="w-full md:w-auto md:flex-1 md:max-w-xs">
                  <SponsorCard sponsor={sponsor} size="small" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="hidden md:block absolute top-2/3 xl:right-50 xl:top-1/3 transform -translate-y-1/2 z-10">
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
