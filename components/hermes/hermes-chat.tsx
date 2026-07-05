'use client';

import { motion } from 'framer-motion';
import { Bot, Send, Sparkles, User, Calendar, DollarSign, Target, ShoppingCart, Plus } from 'lucide-react';
import { hermesSuggestions } from '@/lib/mock-data';
import { useState } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: "Good morning! I'm Hermes, your AI assistant for managing your household. How can I help you today?",
    timestamp: new Date(),
  },
];

const contextCards = [
  {
    title: 'Today\'s Focus',
    description: "Mom's birthday is in 6 days. Consider buying a gift this week.",
    icon: Calendar,
    color: '#FBBF24',
  },
  {
    title: 'Budget Status',
    description: 'Groceries budget is 62% used. You have $380 remaining.',
    icon: DollarSign,
    color: '#4ADE80',
  },
  {
    title: 'Goal Progress',
    description: 'Japan Trip is 41% funded. Great progress this month!',
    icon: Target,
    color: '#5B8CFF',
  },
];

export function HermesChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I've noted that and will help you with it. Is there anything else you'd like me to assist with?",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-180px)]">
      <div className="lg:col-span-3 bg-[#151617] rounded-2xl border border-white/[0.08] flex flex-col">
        <div className="p-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#5B8CFF]/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-[#5B8CFF]" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">Hermes</h1>
              <p className="text-xs text-[#4ADE80]">Active</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message, i) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex gap-4 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  message.role === 'assistant'
                    ? 'bg-[#5B8CFF]/20'
                    : 'bg-white/[0.06]'
                }`}
              >
                {message.role === 'assistant' ? (
                  <Bot className="w-4 h-4 text-[#5B8CFF]" />
                ) : (
                  <User className="w-4 h-4 text-white/60" />
                )}
              </div>
              <div
                className={`max-w-[70%] p-4 rounded-2xl ${
                  message.role === 'assistant'
                    ? 'bg-white/[0.04] rounded-tl-none'
                    : 'bg-[#5B8CFF]/10 rounded-tr-none'
                }`}
              >
                <p className="text-white text-sm leading-relaxed">{message.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-6 border-t border-white/[0.08]">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Ask Hermes anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
              className="flex-1 h-12 px-4 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#5B8CFF]/50 transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSendMessage(inputValue)}
              className="w-12 h-12 bg-[#5B8CFF] rounded-xl flex items-center justify-center hover:bg-[#4A7BEE] transition-colors"
            >
              <Send className="w-5 h-5 text-white" />
            </motion.button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {hermesSuggestions.slice(0, 5).map((suggestion, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setInputValue(suggestion)}
                className="px-3 py-1.5 bg-white/[0.04] rounded-lg text-xs text-white/60 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                {suggestion}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6">
          <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
            Context
          </h3>
          <div className="space-y-4">
            {contextCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-white/[0.02] rounded-xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${card.color}20` }}
                  >
                    <card.icon className="w-4 h-4" style={{ color: card.color }} />
                  </div>
                  <h4 className="font-medium text-white">{card.title}</h4>
                </div>
                <p className="text-sm text-white/50">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6">
          <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
            Quick Actions
          </h3>
          <div className="space-y-2">
            {[
              { label: 'Add Expense', icon: DollarSign },
              { label: 'Create Event', icon: Calendar },
              { label: 'Add Task', icon: Plus },
              { label: 'Shopping Item', icon: ShoppingCart },
            ].map((action, i) => (
              <motion.button
                key={i}
                whileHover={{ x: 4 }}
                className="w-full flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl hover:bg-white/[0.06] transition-colors text-left"
              >
                <action.icon className="w-4 h-4 text-white/40" />
                <span className="text-sm text-white/80">{action.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
