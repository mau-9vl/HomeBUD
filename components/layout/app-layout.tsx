'use client';

import { ReactNode } from 'react';
import { SidebarNav } from './sidebar-nav';
import { Header } from './header';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0B0B0C]">
      <SidebarNav />
      <Header />
      <main className="ml-64 pt-16 min-h-screen">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
