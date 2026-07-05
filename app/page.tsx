'use client';

import { motion } from 'framer-motion';
import { AppLayout } from '@/components/layout/app-layout';
import { DashboardHero } from '@/components/dashboard/dashboard-hero';
import { TodaySchedule } from '@/components/dashboard/today-schedule';
import { TodayTasks } from '@/components/dashboard/today-tasks';
import { BudgetOverview } from '@/components/dashboard/budget-overview';
import { GoalsProgress } from '@/components/dashboard/goals-progress';
import { UpcomingBirthdays } from '@/components/dashboard/upcoming-birthdays';
import { HouseStatus } from '@/components/dashboard/house-status';
import { ShoppingListWidget } from '@/components/dashboard/shopping-list-widget';
import { HermesSuggestions } from '@/components/dashboard/hermes-suggestions';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Dashboard() {
  return (
    <AppLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        <motion.div variants={itemVariants}>
          <DashboardHero />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <motion.div variants={itemVariants} className="xl:col-span-2">
            <TodaySchedule />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TodayTasks />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <motion.div variants={itemVariants}>
            <BudgetOverview />
          </motion.div>
          <motion.div variants={itemVariants}>
            <GoalsProgress />
          </motion.div>
          <motion.div variants={itemVariants}>
            <UpcomingBirthdays />
          </motion.div>
          <motion.div variants={itemVariants}>
            <HouseStatus />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <ShoppingListWidget />
          </motion.div>
          <motion.div variants={itemVariants}>
            <HermesSuggestions />
          </motion.div>
        </div>
      </motion.div>
    </AppLayout>
  );
}
