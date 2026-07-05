'use client';

import { motion } from 'framer-motion';
import { Calendar, Gift, Bell, Plane, Heart } from 'lucide-react';
import { upcomingEvents } from '@/lib/mock-data';

const iconMap: Record<string, React.ElementType> = {
  birthday: Gift,
  event: Calendar,
  holiday: Heart,
  appointment: Bell,
  trip: Plane,
};

const colorMap: Record<string, string> = {
  birthday: '#FBBF24',
  event: '#5B8CFF',
  holiday: '#F87171',
  appointment: '#4ADE80',
  trip: '#7C3AED',
};

export function UpcomingEvents() {
  return (
    <div className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6">
      <h2 className="text-lg font-semibold text-white mb-6">Upcoming</h2>

      <div className="space-y-4">
        {upcomingEvents.map((event, i) => {
          const Icon = iconMap[event.type] || Calendar;
          const color = colorMap[event.type] || '#5B8CFF';

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${color}20` }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-white">{event.title}</p>
                <p className="text-sm text-white/50">{event.date}</p>
              </div>
              <div
                className="px-3 py-1 rounded-lg text-xs font-medium"
                style={{ backgroundColor: `${color}20`, color }}
              >
                {event.days}d
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 py-3 rounded-xl bg-[#5B8CFF]/10 text-[#5B8CFF] font-medium hover:bg-[#5B8CFF]/20 transition-colors"
      >
        Add Event
      </motion.button>
    </div>
  );
}
