'use client';

import { motion } from 'framer-motion';
import { Gift, Calendar, Sparkles, Package, CheckCircle, Plus, Tag } from 'lucide-react';
import { giftRecipients } from '@/lib/mock-data';

const statusColors: Record<string, string> = {
  idea: '#5B8CFF',
  purchased: '#FBBF24',
  wrapped: '#7C3AED',
  delivered: '#4ADE80',
};

const statusIcons: Record<string, React.ElementType> = {
  idea: Sparkles,
  purchased: Package,
  wrapped: Gift,
  delivered: CheckCircle,
};

export function GiftPlanner() {
  const totalSpent = giftRecipients.reduce(
    (acc, r) => acc + r.gifts.reduce((sum, g) => sum + (g.price || 0), 0),
    0
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#FBBF24]/10 to-[#151617] rounded-2xl border border-[#FBBF24]/20 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FBBF24]/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#FBBF24]" />
            </div>
            <div>
              <p className="text-sm text-white/50">Next Birthday</p>
              <p className="text-2xl font-semibold text-white">Mom - 6 days</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#5B8CFF]/10 to-[#151617] rounded-2xl border border-[#5B8CFF]/20 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#5B8CFF]/20 flex items-center justify-center">
              <Gift className="w-6 h-6 text-[#5B8CFF]" />
            </div>
            <div>
              <p className="text-sm text-white/50">Gifts Planned</p>
              <p className="text-2xl font-semibold text-white">
                {giftRecipients.reduce((acc, r) => acc + r.gifts.length, 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#4ADE80]/10 to-[#151617] rounded-2xl border border-[#4ADE80]/20 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#4ADE80]/20 flex items-center justify-center">
              <Tag className="w-6 h-6 text-[#4ADE80]" />
            </div>
            <div>
              <p className="text-sm text-white/50">Total Spent</p>
              <p className="text-2xl font-semibold text-white">${totalSpent}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {giftRecipients.map((recipient, i) => (
          <motion.div
            key={recipient.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6 hover:border-white/[0.15] transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <img
                src={recipient.avatar}
                alt={recipient.name}
                className="w-16 h-16 rounded-xl object-cover border-2 border-white/[0.1]"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{recipient.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4 text-white/40" />
                  <span className="text-sm text-white/60">{recipient.birthday}</span>
                  {recipient.birthdayCountdown <= 7 && (
                    <span className="px-2 py-0.5 rounded-full bg-[#FBBF24]/20 text-[#FBBF24] text-xs font-medium">
                      Soon!
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">{recipient.birthdayCountdown}</p>
                <p className="text-xs text-white/40">days</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {recipient.preferences.map((pref, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/[0.04] text-sm text-white/60"
                >
                  {pref}
                </span>
              ))}
            </div>

            {recipient.gifts.length > 0 ? (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-white/60">Gift Ideas</h4>
                {recipient.gifts.map((gift) => (
                  <div
                    key={gift.id}
                    className="flex items-center justify-between p-3 bg-white/[0.02] rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${statusColors[gift.status]}20` }}
                      >
                        {statusIcons[gift.status] && (
                          <IconWrapper
                            icon={statusIcons[gift.status]}
                            color={statusColors[gift.status]}
                          />
                        )}
                      </div>
                      <span className="text-sm text-white">{gift.name}</span>
                    </div>
                    <span className="text-sm font-medium text-white/60">${gift.price}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Gift className="w-8 h-8 text-white/20 mb-2" />
                <p className="text-sm text-white/40">No gifts planned yet</p>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 py-3 rounded-xl bg-[#5B8CFF]/10 text-[#5B8CFF] font-medium hover:bg-[#5B8CFF]/20 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Gift Idea
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IconWrapper({ icon: Icon, color }: { icon: React.ElementType; color: string }) {
  return <Icon className="w-4 h-4" style={{ color }} />;
}
