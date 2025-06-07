import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PreviousSponsorLists } from '@/lib/previous-sponsor';

const PreviousSponsorsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-grass pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4 font-instrument-serif">
            Previous Sponsors
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            We are grateful to all the organizations that have supported PyCon MY throughout the years. 
            Their contributions have made our conferences possible and helped grow the Python community in Malaysia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {PreviousSponsorLists.map((sponsor, index) => (
            <Link
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center justify-center h-full">
                {sponsor.img ? (
                  <div className="relative w-full h-16 mb-3 flex items-center justify-center">
                    <Image
                      src={sponsor.img}
                      alt={sponsor.alt || sponsor.name}
                      fill
                      className="object-contain group-hover:opacity-80 transition-opacity duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    />
                  </div>
                ) : (
                  <div className="w-full h-16 mb-3 flex items-center justify-center bg-gray-100 rounded">
                    <span className="text-2xl font-bold text-gray-400">
                      {sponsor.name.charAt(0)}
                    </span>
                  </div>
                )}
                <h3 className="text-sm font-medium text-text-primary text-center group-hover:text-primary transition-colors duration-300">
                  {sponsor.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center pt-32">
          <p className="text-text-secondary mb-6">
            Interested in sponsoring PyCon MY 2025?
          </p>
          <Link
            href="/sponsor"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Become a Sponsor
          </Link>
        </div>
      </div>
      
      {/* Decorative tiger and tropical plants image */}
      <div className="hidden lg:block absolute pt-16 -bottom-8 left-0 w-120 h-72 pointer-events-none">
        <Image
          src="/assets/tiger-grass.png"
          alt="Decorative tiger with tropical plants"
          fill
          className="object-contain object-bottom-left"
          priority={false}
        />
      </div>
    </div>
  );
};

export default PreviousSponsorsPage;
