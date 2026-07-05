'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Home,
  Users,
  Calendar,
  PiggyBank,
  Target,
  Building2,
  ShoppingCart,
  Gift,
  FolderOpen,
  FileText,
  Bot,
  Settings,
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: Users, label: 'Family', href: '/family' },
  { icon: Calendar, label: 'Calendar', href: '/calendar' },
  { icon: PiggyBank, label: 'Money', href: '/money' },
  { icon: Target, label: 'Goals', href: '/goals' },
  { icon: Building2, label: 'Home', href: '/home' },
  { icon: ShoppingCart, label: 'Shopping', href: '/shopping' },
  { icon: Gift, label: 'Gifts', href: '/gifts' },
  { icon: FolderOpen, label: 'Projects', href: '/projects' },
  { icon: FileText, label: 'Documents', href: '/documents' },
  { icon: Bot, label: 'Hermes', href: '/hermes' },
];

const bottomItems = [
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0B0B0C] border-r border-white/[0.08] flex flex-col z-50">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B8CFF] to-[#3D6FFF] flex items-center justify-center shadow-glow-sm">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight">HomeOS</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-[#5B8CFF]/10 text-[#5B8CFF]'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                }`}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-[#5B8CFF]' : ''}`} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 w-1 h-8 bg-[#5B8CFF] rounded-r-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 py-4 border-t border-white/[0.08]">
        {bottomItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-[#5B8CFF]/10 text-[#5B8CFF]'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                }`}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
