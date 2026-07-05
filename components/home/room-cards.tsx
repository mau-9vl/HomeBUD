'use client';

import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Wrench, Package, Lightbulb, FolderOpen, ChevronRight } from 'lucide-react';
import { rooms } from '@/lib/mock-data';

const statusColors: Record<string, string> = {
  clean: '#4ADE80',
  'needs-attention': '#FBBF24',
  dirty: '#F87171',
};

const statusLabels: Record<string, string> = {
  clean: 'Clean',
  'needs-attention': 'Needs Attention',
  dirty: 'Needs Cleaning',
};

export function RoomCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rooms.map((room, i) => (
        <motion.div
          key={room.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="bg-[#151617] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/[0.15] transition-all hover:shadow-card group cursor-pointer"
        >
          <div className="relative h-40 overflow-hidden">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151617] via-transparent to-transparent" />
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
              {room.status === 'clean' ? (
                <CheckCircle className="w-4 h-4 text-[#4ADE80]" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-[#FBBF24]" />
              )}
              <span
                className="text-xs font-medium"
                style={{ color: statusColors[room.status] }}
              >
                {statusLabels[room.status]}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-4">{room.name}</h3>

            {room.maintenance.length > 0 && (
              <div className="mb-4 p-3 bg-[#FBBF24]/10 rounded-xl border border-[#FBBF24]/20">
                <div className="flex items-center gap-2 text-sm text-[#FBBF24]">
                  <Wrench className="w-4 h-4" />
                  <span>{room.maintenance[0].task}</span>
                </div>
                <p className="text-xs text-white/40 mt-1">Due: {room.maintenance[0].due}</p>
              </div>
            )}

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/[0.02] rounded-xl p-3 text-center">
                <Package className="w-4 h-4 mx-auto text-white/40 mb-1" />
                <p className="text-lg font-semibold text-white">{room.inventory}</p>
                <p className="text-xs text-white/50">Items</p>
              </div>
              <div className="bg-white/[0.02] rounded-xl p-3 text-center">
                <Lightbulb className="w-4 h-4 mx-auto text-white/40 mb-1" />
                <p className="text-lg font-semibold text-white">{room.devices}</p>
                <p className="text-xs text-white/50">Devices</p>
              </div>
              <div className="bg-white/[0.02] rounded-xl p-3 text-center">
                <FolderOpen className="w-4 h-4 mx-auto text-white/40 mb-1" />
                <p className="text-lg font-semibold text-white">{room.projects}</p>
                <p className="text-xs text-white/50">Projects</p>
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
      ))}
    </div>
  );
}
