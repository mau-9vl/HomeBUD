'use client';

import { motion } from 'framer-motion';
import { Search, FileText, Home, Shield, Book, Heart, PawPrint, Car, Receipt, Folder, Clock, Upload } from 'lucide-react';
import { documentCategories, recentDocuments } from '@/lib/mock-data';
import { useState } from 'react';

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  shield: Shield,
  book: Book,
  heart: Heart,
  paw: PawPrint,
  'file-text': FileText,
  car: Car,
  receipt: Receipt,
};

const colorMap: Record<string, string> = {
  House: '#5B8CFF',
  Insurance: '#4ADE80',
  Passports: '#7C3AED',
  Medical: '#F87171',
  Pets: '#FBBF24',
  Receipts: '#60A5FA',
  Car: '#34D399',
};

export function DocumentsVault() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
        <input
          type="text"
          placeholder="Search documents..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-12 pl-12 pr-4 bg-[#151617] border border-white/[0.08] rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#5B8CFF]/50 transition-colors"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
        {documentCategories.map((category, i) => {
          const Icon = iconMap[category.icon] || Folder;
          const color = colorMap[category.name] || '#5B8CFF';

          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#151617] rounded-2xl border border-white/[0.08] p-4 text-center cursor-pointer hover:border-white/[0.15] transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ backgroundColor: `${color}20` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <h3 className="text-sm font-medium text-white mb-1">{category.name}</h3>
              <p className="text-xs text-white/40">{category.count} files</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Recent Documents</h2>
          <button className="text-sm text-[#5B8CFF] hover:text-[#4A7BEE] transition-colors">
            View All
          </button>
        </div>

        <div className="space-y-3">
          {recentDocuments.map((doc, i) => {
            const color = colorMap[doc.category] || '#5B8CFF';

            return (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-4 bg-[#151617] rounded-xl border border-white/[0.08] hover:border-white/[0.15] transition-all cursor-pointer group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <FileText className="w-6 h-6" style={{ color }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white group-hover:text-[#5B8CFF] transition-colors">
                    {doc.name}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${color}20`, color }}
                    >
                      {doc.category}
                    </span>
                    <span className="text-xs text-white/40">{doc.size}</span>
                    <span className="text-xs text-white/40 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {doc.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-8 right-8 px-6 py-4 bg-[#5B8CFF] text-white rounded-xl font-medium hover:bg-[#4A7BEE] transition-colors shadow-glow flex items-center gap-2"
      >
        <Upload className="w-5 h-5" />
        Upload Document
      </motion.button>
    </div>
  );
}
