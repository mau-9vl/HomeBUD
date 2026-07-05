'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { calendarEvents, familyMembers } from '@/lib/mock-data';

const todayEvents = calendarEvents.filter(e => e.day === 0);

export function TodaySchedule() {
  return (
    <div className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Today&apos;s Schedule</h2>
        <span className="text-sm text-white/40">{todayEvents.length} events</span>
      </div>

      <div className="space-y-4">
        {todayEvents.map((event, i) => {
          const member = familyMembers.find(m => m.id === event.member);
          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors"
            >
              <div
                className="w-1 h-12 rounded-full"
                style={{ backgroundColor: event.color }}
              />
              <div className="flex-1">
                <h3 className="font-medium text-white">{event.title}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-sm text-white/50 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {event.time}
                  </span>
                  <span className="text-sm text-white/50">{event.duration} min</span>
                </div>
              </div>
              {member && (
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-8 h-8 rounded-full border-2 object-cover"
                  style={{ borderColor: member.color }}
                />
              )}
              {event.member === 'shared' && (
                <div className="flex -space-x-2">
                  {familyMembers.map(m => (
                    <img
                      key={m.id}
                      src={m.avatar}
                      alt={m.name}
                      className="w-6 h-6 rounded-full border-2 object-cover"
                      style={{ borderColor: m.color }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
