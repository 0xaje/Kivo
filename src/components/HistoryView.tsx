import React from 'react';
import { History, ShieldCheck, ExternalLink, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { Transaction } from '../types/kivo';

interface HistoryViewProps {
  transactions: Transaction[];
}

export const HistoryView: React.FC<HistoryViewProps> = ({ transactions }) => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-24">
      <div className="bg-[#1a1f26]/80 border border-white/10 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <History className="w-5 h-5 text-amber-400" />
            Cryptographic Transaction History Ledger
          </h2>
          <span className="text-xs text-slate-400 font-mono">
            {transactions.length} Verified Entries
          </span>
        </div>

        <div className="divide-y divide-white/5">
          {transactions.map((tx) => (
            <div key={tx.id} className="py-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      tx.type === 'send'
                        ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    }`}
                  >
                    {tx.type === 'send' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownLeft className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {tx.type === 'send' ? `To: ${tx.recipientOrSender}` : `From: ${tx.recipientOrSender}`}
                    </div>
                    <div className="text-xs text-slate-500 font-mono">{tx.timestamp}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div
                    className={`font-mono font-bold ${
                      tx.type === 'send' ? 'text-rose-400' : 'text-emerald-400'
                    }`}
                  >
                    {tx.type === 'send' ? '-' : '+'}{tx.amount} {tx.currency}
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 uppercase font-semibold">
                    {tx.status}
                  </span>
                </div>
              </div>

              {/* Cryptographic Proof Hash */}
              <div className="bg-slate-950/60 p-2.5 rounded-xl border border-white/5 text-[11px] font-mono flex items-center justify-between text-slate-400">
                <span className="truncate max-w-[320px] sm:max-w-none">
                  Hash: <strong className="text-amber-200/90">{tx.hash}</strong>
                </span>
                <span className="flex items-center gap-1 text-slate-500 text-[10px]">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
