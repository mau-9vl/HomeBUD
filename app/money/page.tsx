'use client';

import { motion } from 'framer-motion';
import { AppLayout } from '@/components/layout/app-layout';
import { MoneyOverview } from '@/components/money/money-overview';
import { BudgetBuckets } from '@/components/money/budget-buckets';
import { SpendingChart } from '@/components/money/spending-chart';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function MoneyPage() {
  return (
    <AppLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        <motion.div variants={itemVariants}>
          <MoneyOverview />
        </motion.div>

        <motion.div variants={itemVariants}>
          <SpendingChart />
        </motion.div>

        <motion.div variants={itemVariants}>
          <BudgetBuckets />
        </motion.div>
      </motion.div>
    </AppLayout>
  );
}
