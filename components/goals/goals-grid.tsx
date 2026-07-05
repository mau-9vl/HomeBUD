'use client';

import { motion } from 'framer-motion';
import { Target, Calendar, TrendingUp, ChevronRight } from 'lucide-react';
import { goals } from '@/lib/mock-data';

function CircularProgress({ progress, size = 80, strokeWidth = 6, color = '#5B8CFF' }: {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, delay: 0.3 }}
          style={{ strokeDasharray: circumference }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-semibold text-white">{progress}%</span>
      </div>
    </div>
  );
}

export function GoalsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {goals.map((goal, i) => {
        const progress = Math.round((goal.current / goal.target) * 100);
        return (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-[#151617] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/[0.15] transition-all hover:shadow-card group cursor-pointer"
          >
            <div className="relative h-32 overflow-hidden">
              <img
                src={goal.image}
                alt={goal.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151617] via-transparent to-transparent" />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white">
                {goal.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{goal.title}</h3>

              <div className="flex items-start gap-4 mb-6">
                <CircularProgress
                  progress={progress}
                  size={64}
                  strokeWidth={5}
                  color={progress >= 75 ? '#4ADE80' : progress >= 50 ? '#FBBF24' : '#5B8CFF'}
                />
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="text-2xl font-bold text-white">
                      ${goal.current.toLocaleString()}
                    </span>
                    <span className="text-sm text-white/40 ml-1">
                      / ${goal.target.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-white/50">
                    ${goal.target - goal.current} remaining
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Calendar className="w-4 h-4" />
                  <span>Target: {new Date(goal.deadline).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <TrendingUp className="w-4 h-4" />
                  <span>{goal.nextMilestone}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                className="w-full mt-4 py-3 rounded-xl bg-white/[0.04] text-white/60 font-medium hover:bg-white/[0.08] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                View Details
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
