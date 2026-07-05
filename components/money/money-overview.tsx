'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, PiggyBank, BarChart3, LineChart } from 'lucide-react';
import { budgetOverview } from '@/lib/mock-data';

const metrics = [
  {
    label: 'Monthly Income',
    value: budgetOverview.monthlyIncome,
    change: '+5%',
    icon: DollarSign,
    color: '#4ADE80',
    trend: 'up',
  },
  {
    label: 'Budget Used',
    value: budgetOverview.budgetUsed,
    change: '47%',
    icon: BarChart3,
    color: '#5B8CFF',
    trend: 'neutral',
  },
  {
    label: 'Savings',
    value: budgetOverview.savings,
    change: '+$120',
    icon: PiggyBank,
    color: '#FBBF24',
    trend: 'up',
  },
  {
    label: 'Investments',
    value: budgetOverview.investments,
    change: '+8%',
    icon: TrendingUp,
    color: '#7C3AED',
    trend: 'up',
  },
];

export function MoneyOverview() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-white mb-2">Money</h1>
        <p className="text-white/50">Track your finances and achieve your goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6 hover:border-white/[0.15] transition-all hover:shadow-card"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${metric.color}20` }}
              >
                <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
              </div>
              <div
                className={`px-2 py-1 rounded-lg text-xs font-medium ${
                  metric.trend === 'up'
                    ? 'bg-[#4ADE80]/10 text-[#4ADE80]'
                    : metric.trend === 'down'
                    ? 'bg-[#F87171]/10 text-[#F87171]'
                    : 'bg-white/[0.06] text-white/60'
                }`}
              >
                {metric.change}
              </div>
            </div>
            <div>
              <p className="text-sm text-white/50 mb-1">{metric.label}</p>
              <p className="text-2xl font-semibold text-white">
                ${metric.value.toLocaleString()}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
