'use client';

import { Bell, Search, Command } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-[#0B0B0C]/80 backdrop-blur-xl border-b border-white/[0.08] z-40">
      <div className="flex items-center justify-between h-full px-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search... (⌘K)"
              className="w-64 h-9 pl-10 pr-4 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#5B8CFF]/50 focus:ring-1 focus:ring-[#5B8CFF]/50 transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <Command className="w-3 h-3 text-white/40" />
              <span className="text-xs text-white/40">K</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center transition-colors">
            <Bell className="w-4 h-4 text-white/60" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#5B8CFF] rounded-full text-[10px] font-bold flex items-center justify-center">
              3
            </span>
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-white/[0.08]">
            <div className="flex items-center">
              <Avatar className="w-8 h-8 border-2 border-[#5B8CFF]">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 -ml-2 border-2 border-[#7C3AED]">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
