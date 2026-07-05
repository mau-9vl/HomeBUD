'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Check } from 'lucide-react';
import { shoppingLists } from '@/lib/mock-data';

export function ShoppingListWidget() {
  const groceriesList = shoppingLists.find(l => l.id === 'groceries');
  const completedItems = groceriesList?.items.filter(i => i.completed).length || 0;
  const totalItems = groceriesList?.items.length || 0;

  return (
    <div className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Shopping List</h2>
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5 text-white/40" />
          <span className="text-sm text-white/40">{completedItems}/{totalItems}</span>
        </div>
      </div>

      {groceriesList && (
        <div className="space-y-3">
          {groceriesList.items.slice(0, 6).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center gap-3 p-3 rounded-xl ${
                item.completed ? 'bg-[#4ADE80]/10' : 'bg-white/[0.02]'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                  item.completed
                    ? 'bg-[#4ADE80] border-[#4ADE80]'
                    : 'border-white/20'
                }`}
              >
                {item.completed && <Check className="w-3 h-3 text-white" />}
              </div>
              <span className={`text-sm ${item.completed ? 'text-white/40 line-through' : 'text-white'}`}>
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 py-3 rounded-xl bg-white/[0.04] text-white/60 font-medium hover:bg-white/[0.08] transition-colors"
      >
        View All Lists
      </motion.button>
    </div>
  );
}
