import React from 'react';
import { MessageSquare, Wallet, History, User } from 'lucide-react';

interface SideRailProps {
  activeTab: 'assistant' | 'wallet' | 'portfolio' | 'history' | 'profile';
  setActiveTab: (tab: 'assistant' | 'wallet' | 'portfolio' | 'history' | 'profile') => void;
}

export const SideRail: React.FC<SideRailProps> = ({ activeTab, setActiveTab }) => {
  const items = [
    { id: 'assistant' as const, label: 'Assistant', icon: MessageSquare },
    { id: 'wallet' as const, label: 'Wallet', icon: Wallet },
    { id: 'portfolio' as const, label: 'Portfolio', icon: Wallet },
    { id: 'history' as const, label: 'History', icon: History },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <aside className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-40">
      <div className="flex flex-col items-center justify-center gap-6 py-6 px-3 bg-[#1a1f26]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative group p-3 rounded-full transition-all cursor-pointer ${
                isActive
                  ? 'text-[#fcc82c] bg-white/10 shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
              {isActive && (
                <span className="absolute left-full ml-3 w-1.5 h-1.5 bg-[#fcc82c] rounded-full top-1/2 -translate-y-1/2" />
              )}
              <span className="absolute left-14 bg-[#1f2630] text-slate-200 border border-white/10 px-3 py-1 rounded-lg text-xs uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
