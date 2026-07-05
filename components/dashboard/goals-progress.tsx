'use client';

import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { goals } from '@/lib/mock-data';

export function GoalsProgress() {
  return (
    <div className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Goals Progress</h2>
        <Target className="w-5 h-5 text-white/40" />
      </div>

      <div className="space-y-4">
        {goals.slice(0, 4).map((goal, i) => {
          const progress = Math.round((goal.current / goal.target) * 100);
          return (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/80">{goal.title}</span>
                <span className="text-sm font-medium text-[#5B8CFF]">{progress}%</span>
              </div>
              <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-[#5B8CFF] to-[#4ADE80]"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.08]">
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/60">Total Saved</span>
          <span className="font-semibold text-white">
            ${goals.reduce((acc, g) => acc + g.current, 0).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
