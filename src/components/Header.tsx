import React, { useState } from 'react';
import { Search, User, X, Check, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onSearchQuery?: (query: string) => void;
  onOpenProfile?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearchQuery, onOpenProfile }) => {
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [searchVal, setSearchVal] = useState<string>('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim() && onSearchQuery) {
      onSearchQuery(searchVal.trim());
      setShowSearchModal(false);
      setSearchVal('');
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f141a]/60 backdrop-blur-xl border-b border-white/5">
        <nav className="flex justify-between items-center px-6 h-16 w-full max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#fcc82c] to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-[#fcc82c]/20">
              <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="font-bold text-xl tracking-tighter text-[#dee2ec]">KIVO</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSearchModal(true)}
              className="p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5 cursor-pointer"
              title="Search Kivo"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenProfile}
              className="w-8 h-8 rounded-full border border-white/10 overflow-hidden active:scale-95 transition-transform cursor-pointer flex items-center justify-center bg-slate-800 text-amber-400 hover:border-amber-400/50"
              title="User Profile"
            >
              <User className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-24 px-4">
          <div className="bg-[#1b2027] border border-white/10 w-full max-w-lg rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-amber-400" />
                Search Kivo Engine
              </h3>
              <button
                onClick={() => setShowSearchModal(false)}
                className="text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="space-y-3">
              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Search transactions, assets, or ask a question..."
                className="w-full bg-[#0f141a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowSearchModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-semibold text-xs flex items-center gap-1 cursor-pointer hover:bg-amber-300"
                >
                  <Check className="w-3.5 h-3.5" />
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
