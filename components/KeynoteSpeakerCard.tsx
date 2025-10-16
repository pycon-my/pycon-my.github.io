import React from 'react';
import Image from 'next/image';

interface KeynoteSpeakerProps {
  image: string;
  name: string;
  designation: string;
  biography: string;
}

const KeynoteSpeakerCard: React.FC<KeynoteSpeakerProps> = ({ 
  image, 
  name, 
  designation, 
  biography 
}) => {
  return (
    <div className="relative mb-8">
      <div className="border-2 border-dashed border-gray-700 rounded-lg px-5 py-2">
        <div className="flex flex-col md:flex-row gap-6">
            {/* Left side - Image, Name, and Designation */}
            <div className="flex-shrink-0 md:w-1/3">
              <div className="relative w-full h-64 md:h-80 mb-4">
                <Image
                  src={`/assets/${image}`}
                  alt={`${name} - Keynote Speaker`}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                  className="rounded-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="card-title text-xl mb-2">{name}</h3>
                <p className="text-sm font-medium text-primary">{designation}</p>
              </div>
            </div>

            {/* Right side - Biography */}
            <div className="flex-1 md:w-2/3">
              <h4 className="text-lg font-semibold mb-3">Biography</h4>
              <div className="leading-relaxed text-justify space-y-3">
                {biography.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeynoteSpeakerCard;