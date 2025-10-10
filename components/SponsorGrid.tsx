"use client";

import React from 'react';
import SponsorCard from './SponsorCard';
import { sponsors, getSponsorsByTier } from '@/lib/sponsors';

const SponsorGrid: React.FC = () => {
  const platinumSponsors = getSponsorsByTier('platinum');
  const goldSponsors = getSponsorsByTier('gold');
  const silverSponsors = getSponsorsByTier('silver');
  const bronzeSponsors = getSponsorsByTier('bronze');
  const communityPartners = getSponsorsByTier('community');

  return (
    <div className="space-y-12">
      {/* Platinum Sponsors */}
      {platinumSponsors.length > 0 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-instrument-serif font-bold text-tertiary mb-6 text-center">Platinum Sponsors</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-8 w-full max-w-3xl">
              {platinumSponsors.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} size="large" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gold Sponsors */}
      {goldSponsors.length > 0 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-instrument-serif font-bold text-tertiary mb-6 text-center">Gold Sponsors</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              {goldSponsors.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} size="medium" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Silver Sponsors */}
      {silverSponsors.length > 0 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-instrument-serif font-bold text-tertiary mb-6 text-center">Silver Sponsors</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              {silverSponsors.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} size="medium" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bronze Sponsors */}
      {bronzeSponsors.length > 0 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-instrument-serif font-bold text-tertiary mb-6 text-center">Bronze Sponsors</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl">
              {bronzeSponsors.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Community Partners */}
      {communityPartners.length > 0 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-instrument-serif font-bold text-tertiary mb-6 text-center">Community Partners</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
              {communityPartners.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} size="small" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SponsorGrid;
