'use client';

import { motion } from 'framer-motion';
import { Calendar, DollarSign, FileText, CheckCircle, Circle, User } from 'lucide-react';
import { projects } from '@/lib/mock-data';

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="bg-[#151617] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/[0.15] transition-all hover:shadow-card group cursor-pointer"
        >
          <div className="relative h-40 overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151617] via-transparent to-transparent" />
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white">
              <User className="w-3 h-3" />
              Shared Project
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{project.name}</h3>
                <p className="text-sm text-white/50">{project.description}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-[#5B8CFF]">{project.progress}%</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-[#5B8CFF] to-[#4ADE80]"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/[0.02] rounded-xl p-3 text-center">
                <DollarSign className="w-4 h-4 mx-auto text-white/40 mb-1" />
                <p className="text-lg font-semibold text-white">
                  ${(project.spent / 1000).toFixed(1)}k
                </p>
                <p className="text-xs text-white/50">Spent</p>
              </div>
              <div className="bg-white/[0.02] rounded-xl p-3 text-center">
                <FileText className="w-4 h-4 mx-auto text-white/40 mb-1" />
                <p className="text-lg font-semibold text-white">{project.documents}</p>
                <p className="text-xs text-white/50">Documents</p>
              </div>
              <div className="bg-white/[0.02] rounded-xl p-3 text-center">
                <CheckCircle className="w-4 h-4 mx-auto text-white/40 mb-1" />
                <p className="text-lg font-semibold text-white">
                  {project.tasks.filter(t => t.completed).length}/{project.tasks.length}
                </p>
                <p className="text-xs text-white/50">Tasks</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider">
                Milestones
              </h4>
              {project.tasks.slice(0, 3).map((task, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 p-2 bg-white/[0.02] rounded-lg"
                >
                  {task.completed ? (
                    <CheckCircle className="w-4 h-4 text-[#4ADE80]" />
                  ) : (
                    <Circle className="w-4 h-4 text-white/20" />
                  )}
                  <span
                    className={`text-sm ${
                      task.completed ? 'text-white/40 line-through' : 'text-white'
                    }`}
                  >
                    {task.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(project.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
              </div>
              <span className="text-sm text-white/40">
                ${((project.budget - project.spent) / 1000).toFixed(1)}k left
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
