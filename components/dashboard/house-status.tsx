'use client';

import { motion } from 'framer-motion';
import { Home, Thermometer, Shield, Lightbulb, Zap } from 'lucide-react';
import { houseStatus } from '@/lib/mock-data';

const statusItems = [
  {
    label: 'Temperature',
    value: `${houseStatus.temperature}°F`,
    icon: Thermometer,
    color: '#5B8CFF',
  },
  {
    label: 'Humidity',
    value: `${houseStatus.humidity}%`,
    icon: Zap,
    color: '#4ADE80',
  },
  {
    label: 'Air Quality',
    value: houseStatus.airQuality,
    icon: Home,
    color: '#FBBF24',
  },
  {
    label: 'Security',
    value: houseStatus.security,
    icon: Shield,
    color: '#4ADE80',
  },
];

export function HouseStatus() {
  return (
    <div className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">House Status</h2>
        <Home className="w-5 h-5 text-white/40" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {statusItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/[0.02] rounded-xl p-4"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
              style={{ backgroundColor: `${item.color}20` }}
            >
              <item.icon className="w-4 h-4" style={{ color: item.color }} />
            </div>
            <p className="text-sm text-white/50">{item.label}</p>
            <p className="font-semibold text-white mt-1">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-[#FBBF24]" />
          <span className="text-sm text-white/60">Lights</span>
        </div>
        <span className="text-sm text-white">
          <span className="text-[#FBBF24]">{houseStatus.lights.on}</span> on
        </span>
      </div>
    </div>
  );
}
