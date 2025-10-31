"use client";

import React from 'react';

const ScheduleTimetable: React.FC = () => {
  return (
    <div className="w-full">
      {/* Embedded Schedule */}
      <iframe
        src="https://cfp.pycon.my/pyconmy-2025/schedule/"
        className="w-full border-0"
        style={{ minHeight: '800px', height: '100vh' }}
        title="PyCon MY 2025 Schedule"
        loading="lazy"
      />
    </div>
  );
};

export default ScheduleTimetable;
