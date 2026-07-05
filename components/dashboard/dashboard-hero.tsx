'use client';

import { motion } from 'framer-motion';
import { Sun, Cloud, Calendar, DollarSign, Target, Gift, Bell } from 'lucide-react';
import { familyMembers } from '@/lib/mock-data';

const weather = {
  temp: 72,
  condition: 'Partly Cloudy',
  icon: Cloud,
};

const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
});

const aiSummary = {
  greeting: 'Good morning.',
  messages: [
    'Today you both have dinner at 8 PM.',
    'Groceries budget is 62% used.',
    'Japan Fund reached 41%.',
    'Electricity bill is due tomorrow.',
    "Mom's birthday is in 6 days.",
  ],
  recommendation: 'Buy birthday gift this week.',
};

export function DashboardHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1b1d] to-[#0B0B0C] border border-white/[0.08] p-8"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5B8CFF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-semibold text-white mb-2"
            >
              Good Morning, Mau & Maf
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 text-white/60"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-2">
                {weather.icon && <weather.icon className="w-4 h-4" />}
                {weather.temp}°F - {weather.condition}
              </span>
            </motion.div>
          </div>

          <div className="flex items-center gap-2">
            {familyMembers.map((member, i) => (
              <motion.img
                key={member.id}
                src={member.avatar}
                alt={member.name}
                className="w-12 h-12 rounded-full border-2 object-cover"
                style={{ borderColor: member.color }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.06]"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#5B8CFF]/20 flex items-center justify-center flex-shrink-0">
              <Sun className="w-5 h-5 text-[#5B8CFF]" />
            </div>
            <div className="flex-1">
              <p className="text-white/80 font-medium mb-3">{aiSummary.greeting}</p>
              <ul className="space-y-2">
                {aiSummary.messages.map((msg, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="text-white/60 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    {msg}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-3"
          >
            <Bell className="w-4 h-4 text-[#FBBF24]" />
            <span className="text-sm text-white/80">
              <span className="text-[#FBBF24] font-medium">Recommended action:</span> {aiSummary.recommendation}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
