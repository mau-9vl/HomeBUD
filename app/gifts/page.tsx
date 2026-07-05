'use client';

import { motion } from 'framer-motion';
import { AppLayout } from '@/components/layout/app-layout';
import { GiftPlanner } from '@/components/gifts/gift-planner';

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

export default function GiftsPage() {
  return (
    <AppLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        <motion.div variants={itemVariants}>
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-white mb-2">Gift Planner</h1>
            <p className="text-white/50">Never miss a celebration</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GiftPlanner />
        </motion.div>
      </motion.div>
    </AppLayout>
  );
}
