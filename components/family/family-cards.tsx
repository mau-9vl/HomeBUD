'use client';

import { motion } from 'framer-motion';
import { Calendar, CheckCircle, TrendingUp, Smile, Clock } from 'lucide-react';
import { familyMembers, calendarEvents, todayTasks } from '@/lib/mock-data';

const moodEmojis: Record<string, string> = {
  productive: '💪',
  relaxed: '😌',
  happy: '😊',
  tired: '😴',
  stressed: '😤',
};

export function FamilyCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {familyMembers.map((member, i) => {
        const memberEvents = calendarEvents.filter(e => e.member === member.id || e.member === 'shared').slice(0, 3);
        const memberTasks = todayTasks.filter(t => t.assignee === member.id || t.assignee === 'shared');

        return (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="bg-[#151617] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/[0.15] transition-all"
          >
            <div className="relative h-32 overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${member.color}20, transparent)`,
                }}
              />
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full blur-3xl" style={{ backgroundColor: `${member.color}10` }} />
            </div>

            <div className="px-6 -mt-12 relative z-10">
              <div className="flex items-end gap-4 mb-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-2xl border-4 object-cover"
                  style={{ borderColor: member.color }}
                />
                <div className="mb-2">
                  <h2 className="text-2xl font-semibold text-white">{member.name}</h2>
                  <p className="text-sm text-white/50 flex items-center gap-2">
                    <Smile className="w-4 h-4" />
                    Feeling {member.mood} {moodEmojis[member.mood]}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/[0.02] rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">{member.completedTasks}/{member.todayTasks}</p>
                  <p className="text-xs text-white/50">Tasks Done</p>
                </div>
                <div className="bg-white/[0.02] rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">{member.upcomingEvents}</p>
                  <p className="text-xs text-white/50">Events Today</p>
                </div>
                <div className="bg-white/[0.02] rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold" style={{ color: member.color }}>78%</p>
                  <p className="text-xs text-white/50">Focus Score</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white/40" />
                    Upcoming Events
                  </h3>
                  <div className="space-y-2">
                    {memberEvents.map((event, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-white/[0.02] rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: event.color }}
                          />
                          <span className="text-sm text-white">{event.title}</span>
                        </div>
                        <span className="text-xs text-white/50">{event.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-white/40" />
                    Tasks
                  </h3>
                  <div className="space-y-2">
                    {memberTasks.slice(0, 3).map((task, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-white/[0.02] rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              task.completed
                                ? 'bg-[#4ADE80] border-[#4ADE80]'
                                : 'border-white/20'
                            }`}
                          >
                            {task.completed && <CheckCircle className="w-3 h-3 text-white" />}
                          </div>
                          <span className={`text-sm ${
                            task.completed ? 'text-white/40 line-through' : 'text-white'
                          }`}>
                            {task.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
