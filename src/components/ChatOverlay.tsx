import React from 'react';
import { ChatMessage, Transaction } from '../types/kivo';
import { Wallet, Send, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ChatOverlayProps {
  messages: ChatMessage[];
  transactions: Transaction[];
  onTriggerSendModal?: () => void;
  onOpenTab?: (tab: 'wallet' | 'portfolio' | 'history') => void;
}

export const ChatOverlay: React.FC<ChatOverlayProps> = ({
  messages,
  transactions,
  onTriggerSendModal,
  onOpenTab,
}) => {
  const totalEth = 4.85 - transactions.filter((t) => t.type === 'send').reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="space-y-4 max-w-2xl mx-auto w-full pb-32">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex flex-col ${
            msg.sender === 'user' ? 'items-end' : 'items-start'
          }`}
        >
          <div
            className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm shadow-xl ${
              msg.sender === 'user'
                ? 'bg-amber-400 text-slate-950 font-medium rounded-br-none'
                : 'bg-[#1a1f26]/90 backdrop-blur-xl border border-white/10 text-white rounded-bl-none'
            }`}
          >
            <div>{msg.text}</div>
            <div
              className={`text-[10px] mt-1 font-mono ${
                msg.sender === 'user' ? 'text-slate-900/60' : 'text-slate-500'
              }`}
            >
              {msg.timestamp}
            </div>

            {/* Render Action Cards */}
            {msg.sender === 'kivo' && msg.actionCard === 'show_balance' && (
              <div className="mt-3 p-4 rounded-xl bg-slate-950/80 border border-amber-400/30 text-white space-y-2">
                <div className="flex items-center justify-between text-xs text-amber-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Wallet Vault
                  </span>
                  <span>Active</span>
                </div>
                <div className="text-2xl font-bold font-mono text-white">
                  {totalEth.toFixed(4)} ETH
                </div>
                <div className="text-xs text-slate-400">
                  Total USD Value: ${(totalEth * 3450).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
                <button
                  onClick={() => onOpenTab && onOpenTab('wallet')}
                  className="w-full mt-2 py-2 rounded-lg bg-amber-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1 cursor-pointer hover:bg-amber-300"
                >
                  <Wallet className="w-3.5 h-3.5" />
                  View Full Wallet
                </button>
              </div>
            )}

            {msg.sender === 'kivo' && msg.actionCard === 'send_money' && (
              <div className="mt-3 p-4 rounded-xl bg-slate-950/80 border border-amber-400/30 text-white space-y-2">
                <div className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                  <Send className="w-3.5 h-3.5" /> Ready to Execute Transfer
                </div>
                <p className="text-xs text-slate-300">
                  Click below to open the secure cryptographic payment interface with SHA-256 signatures.
                </p>
                <button
                  onClick={onTriggerSendModal}
                  className="w-full mt-2 py-2 rounded-lg bg-[#fcc82c] text-slate-950 font-semibold text-xs flex items-center justify-center gap-1 cursor-pointer hover:bg-amber-300"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  Open Payment Transfer Modal
                </button>
              </div>
            )}

            {msg.sender === 'kivo' && msg.actionCard === 'portfolio' && (
              <div className="mt-3 p-4 rounded-xl bg-slate-950/80 border border-amber-400/30 text-white space-y-2">
                <div className="text-xs font-semibold text-amber-400">Portfolio Breakdown Summary</div>
                <div className="space-y-1 text-xs font-mono text-slate-300">
                  <div className="flex justify-between"><span>ETH Holding:</span><span>4.85 ETH</span></div>
                  <div className="flex justify-between"><span>WBTC Holding:</span><span>0.12 WBTC</span></div>
                  <div className="flex justify-between"><span>SOL Holding:</span><span>45.0 SOL</span></div>
                </div>
                <button
                  onClick={() => onOpenTab && onOpenTab('portfolio')}
                  className="w-full mt-2 py-2 rounded-lg bg-amber-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1 cursor-pointer hover:bg-amber-300"
                >
                  Inspect Live Portfolio
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
