'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendarEvents, familyMembers } from '@/lib/mock-data';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dates = [29, 30, 31, 1, 2, 3, 4];
const hours = Array.from({ length: 12 }, (_, i) => i + 8);

const memberColors: Record<string, string> = {
  mau: '#5B8CFF',
  maf: '#7C3AED',
  shared: '#4ADE80',
};

export function WeeklyCalendar() {
  return (
    <div className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-white">This Week</h2>
          <p className="text-sm text-white/50">January 29 - February 4</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-colors">
            <ChevronLeft className="w-4 h-4 text-white/60" />
          </button>
          <button className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-colors">
            <ChevronRight className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full bg-[#5B8CFF]" />
          <span className="text-white/60">Mau</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full bg-[#7C3AED]" />
          <span className="text-white/60">Maf</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full bg-[#4ADE80]" />
          <span className="text-white/60">Shared</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-8 gap-px bg-white/[0.08] rounded-xl overflow-hidden">
            <div className="bg-[#151617] p-3" />
            {days.map((day, i) => (
              <div
                key={day}
                className={`bg-[#151617] p-3 text-center ${
                  i === 3 ? 'bg-[#5B8CFF]/10' : ''
                }`}
              >
                <p className="text-xs text-white/50">{day}</p>
                <p className={`text-lg font-semibold ${
                  i === 3 ? 'text-[#5B8CFF]' : 'text-white'
                }`}>{dates[i]}</p>
              </div>
            ))}

            {hours.map((hour) => (
              <>
                <div key={hour} className="bg-[#151617] p-2 pr-4 text-right border-t border-white/[0.04]">
                  <span className="text-xs text-white/40">
                    {hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
                  </span>
                </div>
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const events = calendarEvents.filter(
                    e => e.day === dayIndex &&
                    parseInt(e.time.split(':')[0]) >= hour &&
                    parseInt(e.time.split(':')[0]) < hour + 1
                  );
                  return (
                    <div
                      key={`${hour}-${dayIndex}`}
                      className={`bg-[#151617] p-2 border-t border-white/[0.04] min-h-[60px] ${
                        dayIndex === 3 ? 'bg-[#5B8CFF]/5' : ''
                      }`}
                    >
                      {events.map(event => (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="p-2 rounded-lg text-sm truncate"
                          style={{ backgroundColor: `${memberColors[event.member]}20` }}
                        >
                          <div
                            className="w-1 h-full absolute left-0 top-0 rounded-l-lg"
                            style={{ backgroundColor: memberColors[event.member] }}
                          />
                          <span className="text-white">{event.title}</span>
                        </motion.div>
                      ))}
                    </div>
                  );
                })}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
