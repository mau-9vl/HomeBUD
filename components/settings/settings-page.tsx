'use client';

import { motion } from 'framer-motion';
import { User, Bell, Palette, Globe, Shield, CreditCard, HelpCircle, LogOut, ChevronRight, Moon, Sun } from 'lucide-react';
import { familyMembers } from '@/lib/mock-data';
import { useState } from 'react';

const settingsGroups = [
  {
    title: 'Account',
    items: [
      { icon: User, label: 'Family Members', description: 'Manage your family profile' },
      { icon: Bell, label: 'Notifications', description: 'Configure alert preferences' },
      { icon: Shield, label: 'Privacy', description: 'Control your data' },
    ],
  },
  {
    title: 'Appearance',
    items: [
      { icon: Moon, label: 'Theme', description: 'Dark mode', value: 'Dark' },
      { icon: Palette, label: 'Accent Color', description: 'Blue', value: '#5B8CFF' },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { icon: Globe, label: 'Language', description: 'English (US)' },
      { icon: CreditCard, label: 'Currency', description: 'USD ($)' },
    ],
  },
  {
    title: 'Support',
    items: [
      { icon: HelpCircle, label: 'Help Center', description: 'Get help with HomeOS' },
    ],
  },
];

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        {settingsGroups.map((group, groupIdx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIdx * 0.1 }}
            className="bg-[#151617] rounded-2xl border border-white/[0.08] overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-white/[0.08]">
              <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                {group.title}
              </h2>
            </div>
            <div className="divide-y divide-white/[0.08]">
              {group.items.map((item, itemIdx) => (
                <motion.button
                  key={item.label}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                  onClick={() => setActiveSection(item.label)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white/60" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{item.label}</p>
                      <p className="text-sm text-white/50">{item.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/30" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button className="w-full flex items-center justify-center gap-3 p-4 bg-[#F87171]/10 rounded-2xl border border-[#F87171]/20 text-[#F87171] hover:bg-[#F87171]/20 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </motion.div>
      </div>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6"
        >
          <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
            Family Members
          </h3>
          <div className="space-y-4">
            {familyMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-xl"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-12 h-12 rounded-xl object-cover"
                  style={{ borderColor: member.color }}
                />
                <div className="flex-1">
                  <p className="font-medium text-white">{member.name}</p>
                  <p className="text-xs text-white/50">Admin</p>
                </div>
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: member.color }}
                />
              </motion.div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 py-3 rounded-xl bg-white/[0.04] text-white/60 font-medium hover:bg-white/[0.08] hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <User className="w-4 h-4" />
            Add Family Member
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-[#5B8CFF]/10 to-[#151617] rounded-2xl border border-[#5B8CFF]/20 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#5B8CFF]/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#5B8CFF]" />
            </div>
            <div>
              <h3 className="font-semibold text-white">HomeOS Premium</h3>
              <p className="text-sm text-white/50">All features unlocked</p>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            {['Unlimited family members', 'Advanced reports', 'AI features', 'Priority support'].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                {feature}
              </div>
            ))}
          </div>
          <p className="text-xs text-white/40">Active since January 2024</p>
        </motion.div>
      </div>
    </div>
  );
}
