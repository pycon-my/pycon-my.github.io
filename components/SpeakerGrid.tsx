"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

interface Speaker {
  name: string;
  avatar: string;
  biography: string;
}

const SpeakerGrid: React.FC = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch('/api/speakers');
        const data = await response.json();
        setSpeakers(data);
      } catch (error) {
        console.error('Error fetching speakers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading speakers...</p>;
  }

  return (
    <div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedSpeaker(speaker)}
          >
            <div className="relative h-48">
              <Image
                src={speaker.avatar}
                alt={`${speaker.name} - PyCon Malaysia Speaker`}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
                className="rounded-t-lg"
              />
            </div>

            <div className="relative z-10 p-2 bg-white">
              <p className="text-xs font-medium text-gray-800 text-center leading-tight">
                {speaker.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedSpeaker && (
        <Modal isOpen={!!selectedSpeaker} onClose={() => setSelectedSpeaker(null)}>
          <h2 className="text-lg font-bold mb-4">{selectedSpeaker.name}</h2>
          <p className="text-sm text-gray-700">{selectedSpeaker.biography}</p>
        </Modal>
      )}
    </div>
  );
};

export default SpeakerGrid;