'use client';

import { motion } from 'framer-motion';
import { Home, Sparkles, TrendingUp, PiggyBank, ChevronRight, ShoppingBag, Zap, Car, Shield, Wrench, UtensilsCrossed, Film, Coffee, BarChart3, LineChart, Bitcoin, BookOpen, Plane, Heart } from 'lucide-react';
import { budgetBuckets } from '@/lib/mock-data';

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  sparkles: Sparkles,
  'trending-up': TrendingUp,
  'piggy-bank': PiggyBank,
  'shopping-cart': ShoppingBag,
  zap: Zap,
  car: Car,
  shield: Shield,
  wrench: Wrench,
  utensils: UtensilsCrossed,
  film: Film,
  coffee: Coffee,
  'bar-chart-2': BarChart3,
  'line-chart': LineChart,
  bitcoin: Bitcoin,
  'book-open': BookOpen,
  plane: Plane,
  heart: Heart,
  'shopping-bag': ShoppingBag,
};

export function BudgetBuckets() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-6">Life Buckets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {budgetBuckets.map((bucket, i) => (
          <motion.div
            key={bucket.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6 hover:border-white/[0.15] transition-all hover:shadow-card group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${bucket.color}20` }}
                >
                  {iconMap[bucket.icon] && (
                    <IconWrapper icon={iconMap[bucket.icon]} color={bucket.color} />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">{bucket.name}</h3>
                  <p className="text-sm text-white/50">{bucket.percentage}% of income</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/60">Spent</span>
                <span className="text-sm font-medium text-white">
                  ${bucket.spent.toLocaleString()} / ${bucket.budget.toLocaleString()}
                </span>
              </div>
              <div className="h-3 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(bucket.spent / bucket.budget) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: bucket.color }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {bucket.items.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-white/[0.02] rounded-lg">
                  {iconMap[item.icon] && (
                    <IconWrapperSmall icon={iconMap[item.icon]} />
                  )}
                  <div className="flex-1">
                    <p className="text-xs text-white/60">{item.name}</p>
                    <p className="text-sm font-medium text-white">${item.amount}</p>
                  </div>
                </div>
              ))}
            </div>

            {bucket.items.length > 4 && (
              <p className="text-center text-sm text-white/40 mt-4">
                +{bucket.items.length - 4} more categories
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IconWrapper({ icon: Icon, color }: { icon: React.ElementType; color: string }) {
  return <Icon className="w-6 h-6" style={{ color }} />;
}

function IconWrapperSmall({ icon: Icon }: { icon: React.ElementType }) {
  return <Icon className="w-3 h-3 text-white/50" />;
}
