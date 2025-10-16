"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Speaker = {
  code: string;
  name: string;
  biography: string;
  avatar: string;
};

type Room = {
  en: string;
};

type Slot = {
  room_id: number;
  room: Room;
  start: string;
  end: string;
};

type SubmissionType = {
  en: string;
};

type ScheduleSlot = {
  code: string;
  speakers: Speaker[];
  title: string;
  submission_type: SubmissionType;
  submission_type_id: number;
  track: string | null;
  track_id: number | null;
  state: string;
  abstract: string;
  description: string;
  duration: number;
  slot_count: number;
  do_not_record: boolean;
  is_featured: boolean;
  content_locale: string;
  slot: Slot;
  image: string | null;
  resources: unknown[];
  answers: unknown[];
};

type OrganizedSchedule = Record<string, Record<string, ScheduleSlot[]>>;

type ScheduleData = {
  slots: ScheduleSlot[];
  organized: OrganizedSchedule;
  rooms: string[];
};

const ScheduleTimetable: React.FC = () => {
  const [scheduleData, setScheduleData] = useState<ScheduleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSession, setSelectedSession] = useState<ScheduleSlot | null>(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        console.log('Fetching schedule from internal API');
        const response = await fetch('/api/schedule');

        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Error:', errorText);
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const data: ScheduleData = await response.json();
        console.log('Fetched schedule:', data);
        setScheduleData(data);

        // Set first date as default
        const dates = Object.keys(data.organized).sort();
        if (dates.length > 0) {
          setSelectedDate(dates[0]);
        }
      } catch (error) {
        console.error('Error fetching schedule:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to get all sessions including special events for a specific room and date
  const getAllSessions = (room: string, date: string) => {
    const sessions = currentSchedule?.[room] || [];
    const allSessions: Array<{
      time: string;
      type: 'regular' | 'special';
      session?: ScheduleSlot;
      specialEvent?: {
        start: string;
        end: string;
        title: string;
        fullWidth?: boolean;
      };
    }> = [];

    // Add regular sessions
    sessions.forEach(session => {
      allSessions.push({
        time: session.slot.start,
        type: 'regular',
        session
      });
    });

    // Add special events for Day 1
    if (date === dates[0]) {
      // Opening Ceremony - Hall 1 only
      if (room === 'Hall 1') {
        allSessions.push({
          time: date + 'T09:00:00+08:00',
          type: 'special',
          specialEvent: {
            start: '09:00',
            end: '09:30',
            title: 'Opening Ceremony'
          }
        });
      }

      // Lunch Break - add to both halls but mark as full width
      allSessions.push({
        time: date + 'T12:00:00+08:00',
        type: 'special',
        specialEvent: {
          start: '12:00',
          end: '13:15',
          title: 'Lunch Break',
          fullWidth: true
        }
      });

      //Magic Pod
      if (room === 'Hall 2') {
        allSessions.push({
          time: date + 'T14:30:00+08:00',
          type: 'special',
          specialEvent: {
            start: '14:30',
            end: '16:00',
            title: 'Magic Pod Tutorial'
          }
        });
      }

      // Tea Break - add to both halls but mark as full width
      allSessions.push({
        time: date + 'T15:30:00+08:00',
        type: 'special',
        specialEvent: {
          start: '15:30',
          end: '16:00',
          title: 'Tea Break',
          fullWidth: true
        }
      });
    }

    // Add special events for Day 2
    if (date === dates[1]) {
      // Break - add to both halls but mark as full width
      allSessions.push({
        time: date + 'T10:30:00+08:00',
        type: 'special',
        specialEvent: {
          start: '10:30',
          end: '10:45',
          title: 'Break',
          fullWidth: true
        }
      });

      // Lunch - add to both halls but mark as full width
      allSessions.push({
        time: date + 'T12:15:00+08:00',
        type: 'special',
        specialEvent: {
          start: '12:15',
          end: '13:45',
          title: 'Lunch',
          fullWidth: true
        }
      });

      // Tea Break - add to both halls but mark as full width
      allSessions.push({
        time: date + 'T15:15:00+08:00',
        type: 'special',
        specialEvent: {
          start: '15:15',
          end: '15:45',
          title: 'Tea Break',
          fullWidth: true
        }
      });

      if (room === 'Hall 2') {
        allSessions.push({
          time: date + 'T14:30:00+08:00',
          type: 'special',
          specialEvent: {
            start: '14:30',
            end: '16:00',
            title: 'Tutorial Session'
          }
        });
      }

      // Open Forum - Hall 1 only
      if (room === 'Hall 1') {
        allSessions.push({
          time: date + 'T15:45:00+08:00',
          type: 'special',
          specialEvent: {
            start: '15:45',
            end: '16:45',
            title: 'Open Forum'
          }
        });
      }

      // Closing Ceremony - Hall 1 only
      if (room === 'Hall 1') {
        allSessions.push({
          time: date + 'T16:45:00+08:00',
          type: 'special',
          specialEvent: {
            start: '16:45',
            end: '17:15',
            title: 'Closing Ceremony'
          }
        });
      }
    }

    // Sort by time
    allSessions.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

    return allSessions;
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading schedule...</p>;
  }

  if (!scheduleData) {
    return <p className="text-center text-gray-500">No schedule data available.</p>;
  }

  const dates = Object.keys(scheduleData.organized).sort();
  const currentSchedule = scheduleData.organized[selectedDate];

  return (
    <div className="w-full">
      {/* Date Tabs - Sticky on all screen sizes */}
      <div className="sticky top-0 z-10 pt-4 bg-hero flex flex-wrap gap-2 mb-6 border-b-2 border-gray-300 pb-2">
        {dates.map((date) => (
          <button
            key={date}
            className={`px-4 py-2 font-semibold transition-all ${selectedDate === date
                ? 'text-primary border-b-4 border-primary'
                : 'text-gray-500 hover:text-gray-700 border-b-4 border-transparent hover:border-gray-300'
              }`}
            onClick={() => setSelectedDate(date)}
          >
            {formatDate(date + 'T00:00:00')}
          </button>
        ))}
      </div>

      {/* Timetable */}
      {currentSchedule && (
        <div className="overflow-x-auto">
          {/* Room Headers - Hidden on mobile */}
          <div className="hidden lg:grid grid-cols-2 gap-6 mb-4">
            {scheduleData.rooms.map((room, index) => (
              <div
                key={room}
                className="p-4 rounded-t-lg text-black"
                style={{
                  backgroundColor: index === 0 ? 'var(--color-sea)' : 'var(--color-land)'
                }}
              >
                <h3 className="text-xl font-bold text-center">{room}</h3>
              </div>
            ))}
          </div>

          {/* Registration Card - Spanning both halls */}
          {selectedDate === dates[0] && (
            <div className="mb-4">
              <div
                className="card"
                style={{ backgroundColor: 'var(--color-tertiary)', color: 'white' }}
              >
                <div className="card-body p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold mb-1" style={{ color: 'white' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    08:30 - 09:00
                  </div>
                  <h4 className="font-bold text-base" style={{ color: 'white' }}>
                    Registration
                  </h4>
                </div>
              </div>
            </div>
          )}

          {/* Registration Card for Day 2 - Spanning both halls */}
          {selectedDate === dates[1] && (
            <div className="mb-4">
              <div
                className="card"
                style={{ backgroundColor: 'var(--color-tertiary)', color: 'white' }}
              >
                <div className="card-body p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold mb-1" style={{ color: 'white' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    08:30 - 09:00
                  </div>
                  <h4 className="font-bold text-base" style={{ color: 'white' }}>
                    Registration
                  </h4>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-3">
            {/* Render all sessions in chronological order, breaking grid for full-width events */}
            {(() => {
              const allSessionsWithRooms: Array<{
                time: string;
                type: 'regular' | 'special';
                room?: string;
                session?: ScheduleSlot;
                specialEvent?: {
                  start: string;
                  end: string;
                  title: string;
                  fullWidth?: boolean;
                };
              }> = [];

              // Collect all sessions from both rooms
              scheduleData.rooms.forEach(room => {
                const sessions = getAllSessions(room, selectedDate);
                sessions.forEach(item => {
                  // Skip full-width events in the second room (we'll add them once)
                  if (item.type === 'special' && item.specialEvent?.fullWidth && room !== scheduleData.rooms[0]) {
                    return;
                  }
                  allSessionsWithRooms.push({
                    ...item,
                    room
                  });
                });
              });

              // Sort by time
              allSessionsWithRooms.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

              // Group by time to identify concurrent sessions
              const groupedSessions: Array<Array<typeof allSessionsWithRooms[0]>> = [];
              let currentGroup: Array<typeof allSessionsWithRooms[0]> = [];
              let currentTime = '';

              allSessionsWithRooms.forEach(item => {
                if (item.time !== currentTime) {
                  if (currentGroup.length > 0) {
                    groupedSessions.push(currentGroup);
                  }
                  currentGroup = [item];
                  currentTime = item.time;
                } else {
                  currentGroup.push(item);
                }
              });
              if (currentGroup.length > 0) {
                groupedSessions.push(currentGroup);
              }

              // Render grouped sessions
              return groupedSessions.map((group, groupIdx) => {
                const firstItem = group[0];

                // Full-width special event
                if (firstItem.type === 'special' && firstItem.specialEvent?.fullWidth) {
                  const event = firstItem.specialEvent;
                  return (
                    <div key={`group-${groupIdx}`} className="mb-3">
                      <div className="card" style={{ backgroundColor: 'var(--color-tertiary)', color: 'white' }}>
                        <div className="card-body p-4">
                          <div className="flex items-center gap-2 text-sm font-semibold mb-1" style={{ color: 'white' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {event.start} - {event.end}
                          </div>
                          <h4 className="font-bold text-base" style={{ color: 'white' }}>
                            {event.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Regular sessions or single-room special events - render in grid
                return (
                  <div key={`group-${groupIdx}`} className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-3">
                    {scheduleData.rooms.map((room, roomIndex) => {
                      const roomItem = group.find(item => item.room === room);

                      if (!roomItem) {
                        return <div key={room} className="hidden lg:block space-y-3"></div>;
                      }

                      if (roomItem.type === 'special' && roomItem.specialEvent) {
                        const event = roomItem.specialEvent;
                        return (
                          <div key={room} className="space-y-3">
                            <div className="card" style={{ backgroundColor: 'var(--color-tertiary)', color: 'white' }}>
                              <div className="card-body p-4">
                                <div className="flex items-center gap-2 text-sm font-semibold mb-1" style={{ color: 'white' }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  {event.start} - {event.end}
                                </div>
                                <h4 className="font-bold text-base mb-2" style={{ color: 'white' }}>
                                  {event.title}
                                </h4>
                                <div className="badge badge-outline badge-sm border-white text-white">
                                  {room}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }

                      if (roomItem.session) {
                        const session = roomItem.session;
                        const roomColor = roomIndex === 0 ? 'var(--color-sea)' : 'var(--color-land)';
                        return (
                          <div key={room} className="space-y-3">
                            <div
                              className="card bg-base-100 border-2 border-base-300 hover:border-primary transition-all cursor-pointer"
                              onClick={() => setSelectedSession(session)}
                            >
                              <div className="card-body p-4">
                                {/* Time */}
                                <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-1">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  {formatTime(session.slot.start)} - {formatTime(session.slot.end)}
                                </div>

                                {/* Title */}
                                <h4 className="font-bold text-base mb-2 text-black">
                                  {session.title}
                                </h4>

                                {/* Speakers */}
                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                  <div className="flex -space-x-2">
                                    {session.speakers.slice(0, 3).map((speaker) => (
                                      speaker.avatar ? (
                                        <div
                                          key={speaker.code}
                                          className="w-6 h-6 rounded-full overflow-hidden border-2 border-white bg-gray-200 relative"
                                        >
                                          <Image
                                            src={speaker.avatar}
                                            alt={speaker.name}
                                            fill
                                            sizes="24px"
                                            className="object-cover object-top"
                                            style={{ margin: 0, padding: 0, display: 'block' }}
                                          />
                                        </div>
                                      ) : (
                                        <div
                                          key={speaker.code}
                                          className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center"
                                        >
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                          </svg>
                                        </div>
                                      )
                                    ))}
                                    {session.speakers.length > 3 && (
                                      <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-xs text-white font-bold">
                                        +{session.speakers.length - 3}
                                      </div>
                                    )}
                                  </div>
                                  <span className="ml-1">{session.speakers.map(s => s.name).join(', ')}</span>
                                </div>

                                {/* Room badge and Type badge */}
                                <div className="flex gap-2">
                                  <div
                                    className="badge badge-sm text-black font-semibold"
                                    style={{ backgroundColor: roomColor }}
                                  >
                                    {room}
                                  </div>
                                  <div className="badge badge-outline badge-sm">
                                    {session.submission_type.en}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }

                      return <div key={room} className="hidden lg:block space-y-3"></div>;
                    })}
                  </div>
                );
              });
            })()}
          </div>
        </div>
      )}      {/* Session Details Modal */}
      {selectedSession && (
        <div className="modal modal-open">
          <div className="modal-box max-w-3xl">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setSelectedSession(null)}
            >
              ✕
            </button>

            <h3 className="font-bold text-2xl mb-4">{selectedSession.title}</h3>

            {/* Time and Room */}
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">
                  {formatTime(selectedSession.slot.start)} - {formatTime(selectedSession.slot.end)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold">{selectedSession.slot.room.en}</span>
              </div>
              <div className="badge badge-primary">{selectedSession.submission_type.en}</div>
            </div>

            {/* Speakers */}
            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2">Speakers</h4>
              <div className="flex flex-wrap gap-4">
                {selectedSession.speakers.map((speaker) => (
                  <div key={speaker.code} className="flex items-center gap-3">
                    {speaker.avatar && (
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 relative">
                        <Image
                          src={speaker.avatar}
                          alt={speaker.name}
                          fill
                          sizes="48px"
                          className="object-cover object-top"
                          style={{ margin: 0, padding: 0, display: 'block' }}
                        />
                      </div>
                    )}
                    <span className="font-medium">{speaker.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Abstract */}
            {selectedSession.abstract && (
              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-2">Abstract</h4>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{selectedSession.abstract}</p>
              </div>
            )}

            {/* Description */}
            {selectedSession.description && (
              <div>
                <h4 className="font-semibold text-lg mb-2">Description</h4>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{selectedSession.description}</p>
              </div>
            )}
          </div>
          <div className="modal-backdrop" onClick={() => setSelectedSession(null)}>
            <button>close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleTimetable;