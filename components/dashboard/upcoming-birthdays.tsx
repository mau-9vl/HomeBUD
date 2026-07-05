'use client';

import { motion } from 'framer-motion';
import { Gift, Cake } from 'lucide-react';
import { upcomingEvents, giftRecipients } from '@/lib/mock-data';
import Image from 'next/image';

export function UpcomingBirthdays() {
  const birthdays = upcomingEvents.filter(e => e.type === 'birthday');
  const nextBirthday = giftRecipients.find(r => r.birthdayCountdown <= 7);

  return (
    <div className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Upcoming Birthdays</h2>
        <Cake className="w-5 h-5 text-white/40" />
      </div>

      {nextBirthday && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-[#FBBF24]/10 to-transparent rounded-xl p-4 border border-[#FBBF24]/20 mb-4"
        >
          <div className="flex items-center gap-4">
            <img
              src={nextBirthday.avatar}
              alt={nextBirthday.name}
              className="w-14 h-14 rounded-full border-2 border-[#FBBF24] object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-white">{nextBirthday.name}</h3>
              <p className="text-sm text-white/60">in {nextBirthday.birthdayCountdown} days</p>
            </div>
            <Gift className="w-6 h-6 text-[#FBBF24]" />
          </div>
        </motion.div>
      )}

      <div className="space-y-3">
        {birthdays.slice(0, 3).map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl"
          >
            <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center">
              <Gift className="w-4 h-4 text-[#7C3AED]" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-white">{event.title}</p>
              <p className="text-xs text-white/50">{event.date}</p>
            </div>
            <span className="text-xs font-medium text-white/40 px-2 py-1 bg-white/[0.04] rounded-lg">
              {event.days}d
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
