import React from 'react';
import Image from 'next/image';

interface VolunteerCardProps {
  imageName: string;
  className?: string;
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ imageName, className = "" }) => {
  const volunteerName = imageName.replace('.png', '');
  
  // Convert filename to a more readable display name
  const displayName = volunteerName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  return (
    <div className={`overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 ${className}`}>
      <div className="relative h-48">
        <Image
          src={`/volunteers/${imageName}`}
          alt={`${displayName} - PyCon Malaysia Volunteer`}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "top center"
          }}
          className="rounded-t-lg"
        />
      </div>
      
      <div className="relative z-10 p-2 bg-white">
        <p className="text-xs font-medium text-gray-800 text-center leading-tight">
          {displayName}
        </p>
      </div>
    </div>
  );
};

export default VolunteerCard;
