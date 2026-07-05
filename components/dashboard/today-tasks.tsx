'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';
import { todayTasks, familyMembers } from '@/lib/mock-data';

export function TodayTasks() {
  const completedCount = todayTasks.filter(t => t.completed).length;

  return (
    <div className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Today&apos;s Tasks</h2>
        <span className="text-sm text-white/40">{completedCount}/{todayTasks.length} done</span>
      </div>

      <div className="space-y-3">
        {todayTasks.map((task, i) => {
          const assignee = familyMembers.find(m => m.id === task.assignee);
          return (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                task.completed ? 'bg-white/[0.02]' : 'bg-white/[0.04]'
              }`}
            >
              {task.completed ? (
                <CheckCircle2 className="w-5 h-5 text-[#4ADE80]" />
              ) : task.priority === 'high' ? (
                <AlertCircle className="w-5 h-5 text-[#F87171]" />
              ) : (
                <Circle className="w-5 h-5 text-white/30" />
              )}
              <span className={`flex-1 ${task.completed ? 'text-white/40 line-through' : 'text-white'}`}>
                {task.title}
              </span>
              {assignee && (
                <img
                  src={assignee.avatar}
                  alt={assignee.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 py-3 rounded-xl bg-[#5B8CFF]/10 text-[#5B8CFF] font-medium hover:bg-[#5B8CFF]/20 transition-colors"
      >
        Add Task
      </motion.button>
    </div>
  );
}
