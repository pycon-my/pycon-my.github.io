"use client";

import React, { useState } from 'react';
import Image from 'next/image';

type Sponsor = {
  name: string;
  logo: string;
  tier: string;
  description: string;
};

type SponsorCardProps = {
  sponsor: Sponsor;
  size?: 'small' | 'normal' | 'medium' | 'large' | 'xlarge';
};

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, size = 'normal' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardHeight = size === 'xlarge' ? 'h-48' : size === 'large' ? 'h-40' : size === 'medium' ? 'h-36' : 'h-32';
  const cardPadding = size === 'xlarge' ? 'p-12' : size === 'large' ? 'p-10' : size === 'medium' ? 'p-8' : 'p-6';
  const textSize = size === 'xlarge' ? 'text-2xl' : size === 'large' ? 'text-xl' : size === 'medium' ? 'text-lg' : size === 'small' ? 'text-xs' : 'text-base';

  return (
    <>
      <div
        className={`card bg-base-100 border-2 border-base-300 hover:border-primary transition-all cursor-pointer ${cardPadding}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-col items-center">
          <div className={`relative w-full ${cardHeight} mb-4`}>
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h3 className={`font-bold ${textSize} text-center text-black`}>{sponsor.name}</h3>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box max-w-3xl">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            <div className="mb-6">
              <div className="relative w-full h-32 mb-4">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <h3 className="font-bold text-2xl mb-2">About {sponsor.name}</h3>
            </div>

            <div className="prose max-w-none">
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{sponsor.description}</p>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
            <button>close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SponsorCard;
