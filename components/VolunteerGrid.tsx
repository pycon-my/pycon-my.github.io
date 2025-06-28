import React from 'react';
import VolunteerCard from './VolunteerCard';

interface VolunteerGridProps {
  volunteers: string[];
  title?: string;
  className?: string;
}

const VolunteerGrid: React.FC<VolunteerGridProps> = ({ 
  volunteers, 
  title, 
  className = "" 
}) => {
  if (volunteers.length === 0) {
    return null;
  }

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {volunteers.map((volunteer, index) => (
          <VolunteerCard
            key={`${volunteer}-${index}`}
            imageName={volunteer}
          />
        ))}
      </div>
    </div>
  );
};

export default VolunteerGrid;
