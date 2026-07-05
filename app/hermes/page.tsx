'use client';

import { motion } from 'framer-motion';
import { AppLayout } from '@/components/layout/app-layout';
import { HermesChat } from '@/components/hermes/hermes-chat';

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

export default function HermesPage() {
  return (
    <AppLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        <motion.div variants={itemVariants}>
          <HermesChat />
        </motion.div>
      </motion.div>
    </AppLayout>
  );
}
