'use client';

import { motion } from 'framer-motion';
import { Check, Plus, ShoppingCart, Store, Tag, Heart, ChevronDown } from 'lucide-react';
import { shoppingLists } from '@/lib/mock-data';
import { useState } from 'react';

export function ShoppingLists() {
  const [expandedList, setExpandedList] = useState<string | null>('groceries');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {shoppingLists.map((list, i) => {
        const completedItems = list.items.filter(item => item.completed).length;
        const totalItems = list.items.length;
        const progress = Math.round((completedItems / totalItems) * 100);
        const isExpanded = expandedList === list.id;

        return (
          <motion.div
            key={list.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#151617] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/[0.15] transition-all"
          >
            <div
              className="p-6 cursor-pointer"
              onClick={() => setExpandedList(isExpanded ? null : list.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${list.color}20` }}
                  >
                    <ShoppingCart className="w-6 h-6" style={{ color: list.color }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">{list.name}</h3>
                    <p className="text-sm text-white/50">{list.store}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-white/40 transition-transform ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: list.color }}
                  />
                </div>
                <span className="text-sm font-medium text-white/60">
                  {completedItems}/{totalItems}
                </span>
              </div>
            </div>

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-white/[0.08] p-4 space-y-2"
              >
                {list.items.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${
                      item.completed ? 'bg-white/[0.01]' : 'bg-white/[0.04]'
                    } hover:bg-white/[0.06] transition-colors`}
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
                    <span
                      className={`text-sm ${
                        item.completed ? 'text-white/40 line-through' : 'text-white'
                      }`}
                    >
                      {item.name}
                    </span>
                  </motion.div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full mt-2 py-2 rounded-xl border border-dashed border-white/[0.15] text-white/40 hover:text-white/60 hover:border-white/[0.25] transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Item
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: shoppingLists.length * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="bg-[#151617] rounded-2xl border border-dashed border-white/[0.15] p-6 flex flex-col items-center justify-center gap-4 min-h-[200px] cursor-pointer hover:border-white/[0.25] transition-colors"
      >
        <div className="w-12 h-12 rounded-full bg-white/[0.04] flex items-center justify-center">
          <Plus className="w-6 h-6 text-white/40" />
        </div>
        <span className="text-white/60 font-medium">Create New List</span>
      </motion.div>
    </div>
  );
}
