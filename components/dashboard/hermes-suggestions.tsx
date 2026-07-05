'use client';

import { motion } from 'framer-motion';
import { Bot, MessageCircle, Sparkles } from 'lucide-react';
import { hermesSuggestions } from '@/lib/mock-data';

export function HermesSuggestions() {
  return (
    <div className="bg-gradient-to-br from-[#5B8CFF]/10 to-[#151617] rounded-2xl border border-[#5B8CFF]/20 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#5B8CFF]/20 flex items-center justify-center">
            <Bot className="w-5 h-5 text-[#5B8CFF]" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Hermes</h2>
            <p className="text-xs text-[#5B8CFF]">AI Assistant</p>
          </div>
        </div>
        <Sparkles className="w-5 h-5 text-[#5B8CFF]/60" />
      </div>

      <div className="flex flex-wrap gap-2">
        {hermesSuggestions.map((suggestion, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-white/[0.06] rounded-xl text-sm text-white/70 hover:bg-white/[0.1] hover:text-white transition-colors"
          >
            {suggestion}
          </motion.button>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-6 py-3 rounded-xl bg-[#5B8CFF] text-white font-medium hover:bg-[#4A7BEE] transition-colors flex items-center justify-center gap-2"
      >
        <MessageCircle className="w-4 h-4" />
        Chat with Hermes
      </motion.button>
    </div>
  );
}
