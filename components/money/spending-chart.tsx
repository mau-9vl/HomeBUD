'use client';

import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const spendingData = [
  { name: 'Jan', spent: 3200, income: 8500 },
  { name: 'Feb', spent: 3800, income: 8500 },
  { name: 'Mar', spent: 3400, income: 8500 },
  { name: 'Apr', spent: 3100, income: 8500 },
  { name: 'May', spent: 3600, income: 8500 },
  { name: 'Jun', spent: 4000, income: 8500 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1b1d] border border-white/[0.08] rounded-xl p-3 shadow-xl">
        <p className="text-sm text-white/60 mb-1">{label}</p>
        <p className="text-sm text-[#5B8CFF]">
          Spent: <span className="font-semibold">${payload[0].value.toLocaleString()}</span>
        </p>
        <p className="text-sm text-[#4ADE80]">
          Income: <span className="font-semibold">${payload[1].value.toLocaleString()}</span>
        </p>
      </div>
    );
  }
  return null;
};

export function SpendingChart() {
  return (
    <div className="bg-[#151617] rounded-2xl border border-white/[0.08] p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-white">Monthly Spending</h2>
          <p className="text-sm text-white/50">Income vs expenses over time</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#5B8CFF]" />
            <span className="text-sm text-white/60">Spent</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#4ADE80]" />
            <span className="text-sm text-white/60">Income</span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={spendingData}>
            <defs>
              <linearGradient id="colorSpent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5B8CFF" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#5B8CFF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#4ADE80" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#4ADE80"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorIncome)"
            />
            <Area
              type="monotone"
              dataKey="spent"
              stroke="#5B8CFF"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorSpent)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
