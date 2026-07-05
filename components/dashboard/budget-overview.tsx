'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, PiggyBank, BarChart3 } from 'lucide-react';
import { budgetOverview } from '@/lib/mock-data';

const metrics = [
  {
    label: 'Income',
    value: budgetOverview.monthlyIncome,
    icon: DollarSign,
    color: '#4ADE80',
    prefix: '$',
  },
  {
    label: 'Budget Used',
    value: budgetOverview.budgetUsed,
    icon: BarChart3,
    color: '#5B8CFF',
    prefix: '$',
  },
  {
    label: 'Savings',
    value: budgetOverview.savings,
    icon: PiggyBank,
    color: '#FBBF24',
    prefix: '$',
  },
  {
    label: 'Investments',
    value: budgetOverview.investments,
    icon: TrendingUp,
    color: '#7C3AED',
    prefix: '$',
  },
];

export function BudgetOverview() {
  return (
    <div className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Budget Overview</h2>
        <span className="text-sm text-white/40">This month</span>
      </div>

      <div className="space-y-4">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${metric.color}20` }}
              >
                <metric.icon className="w-4 h-4" style={{ color: metric.color }} />
              </div>
              <span className="text-white/60 text-sm">{metric.label}</span>
            </div>
            <span className="font-semibold text-white">
              {metric.prefix}{metric.value.toLocaleString()}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.08]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-white/60">Budget Progress</span>
          <span className="text-sm font-medium text-white">
            {Math.round((budgetOverview.budgetUsed / budgetOverview.monthlyIncome) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(budgetOverview.budgetUsed / budgetOverview.monthlyIncome) * 100}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full rounded-full bg-gradient-to-r from-[#5B8CFF] to-[#3D6FFF]"
          />
        </div>
      </div>
    </div>
  );
}
