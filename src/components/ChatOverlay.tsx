import React, { useState, useEffect } from 'react';
import { ChatMessage, Transaction } from '../types/kivo';
import { Wallet, Send, ArrowDownLeft, History, TrendingUp, Sparkles, Repeat, Tag } from 'lucide-react';

interface ChatOverlayProps {
  messages: ChatMessage[];
  transactions: Transaction[];
  onTriggerSendModal: () => void;
  onOpenTab: (tab: 'wallet' | 'portfolio' | 'history') => void;
  onCategorizeExpense?: (category: string) => void;
  onSetupRecurring?: () => void;
}

export const ChatOverlay: React.FC<ChatOverlayProps> = ({
  messages,
  transactions,
  onTriggerSendModal,
  onOpenTab,
  onCategorizeExpense,
  onSetupRecurring,
}) => {
  return (
    <div className="space-y-6 max-w-2xl mx-auto w-full pb-36">
      {messages.map((msg) => (
        <div key={msg.id} className="space-y-3">
          {/* Header Tag for System / Intelligence */}
          {msg.sender !== 'user' && (
            <div className="flex items-center gap-2 px-1 text-xs text-slate-400 font-medium">
              <Sparkles className="w-4 h-4 text-[#fcc82c]" />
              <span>Kivo Intelligence</span>
            </div>
          )}

          {/* User or Bot Bubble */}
          <div
            className={`flex flex-col ${
              msg.sender === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`max-w-[90%] rounded-3xl p-5 text-sm leading-relaxed shadow-xl ${
                msg.sender === 'user'
                  ? 'bg-[#fcc82c] text-slate-950 font-semibold rounded-br-none'
                  : 'bg-[#1a1f26]/80 backdrop-blur-2xl border border-white/10 text-slate-100 rounded-bl-none border-l-2 border-l-[#fcc82c]/40'
              }`}
            >
              {msg.sender === 'kivo' ? (
                <TypewriterText text={msg.text} />
              ) : (
                <div>{msg.text}</div>
              )}
            </div>

            {/* Interactive Action Cards */}
            {msg.sender === 'kivo' && msg.actionCard === 'balance_card' && (
              <div className="w-full mt-3 bg-[#1a1f26]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden space-y-5">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#fcc82c] font-semibold block mb-1">
                      Current Vault Balance
                    </span>
                    <h2 className="text-3xl font-bold font-mono text-white flex items-baseline gap-2">
                      245.32 <span className="text-sm font-sans text-slate-400">NIM</span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-[#fcc82c]" />
                      You received 12 NIM yesterday.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fcc82c]">
                    <Wallet className="w-6 h-6" />
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={onTriggerSendModal}
                    className="py-3 rounded-xl bg-[#fcc82c] text-slate-950 font-semibold text-xs flex flex-col items-center gap-1 active:scale-95 transition-all hover:bg-amber-300 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Send
                  </button>
                  <button
                    onClick={() => onOpenTab('wallet')}
                    className="py-3 rounded-xl bg-slate-800 text-white font-semibold text-xs flex flex-col items-center gap-1 active:scale-95 transition-all hover:bg-slate-700 cursor-pointer"
                  >
                    <ArrowDownLeft className="w-4 h-4 text-[#fcc82c]" />
                    Receive
                  </button>
                  <button
                    onClick={() => onOpenTab('history')}
                    className="py-3 rounded-xl bg-slate-800 text-white font-semibold text-xs flex flex-col items-center gap-1 active:scale-95 transition-all hover:bg-slate-700 cursor-pointer"
                  >
                    <History className="w-4 h-4 text-[#fcc82c]" />
                    History
                  </button>
                </div>
              </div>
            )}

            {/* Action Chips */}
            {msg.chips && msg.chips.length > 0 && (
              <div className="flex gap-2 flex-wrap mt-3">
                {msg.chips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (chip.action === 'categorize' && onCategorizeExpense) {
                        onCategorizeExpense('Coffee & Daily Expense');
                      } else if (chip.action === 'recurring' && onSetupRecurring) {
                        onSetupRecurring();
                      }
                    }}
                    className="px-4 py-2 rounded-full bg-[#1a1f26]/80 backdrop-blur-md border border-[#fcc82c]/30 text-xs font-semibold text-white flex items-center gap-2 hover:bg-white/10 active:scale-95 transition-transform cursor-pointer"
                  >
                    {chip.action === 'categorize' && <Tag className="w-3.5 h-3.5 text-[#fcc82c]" />}
                    {chip.action === 'recurring' && <Repeat className="w-3.5 h-3.5 text-[#fcc82c]" />}
                    <span className="uppercase tracking-wider text-[10px]">{chip.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// Typewriter Text Effect Sub-component
const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    let index = 0;
    const speed = 18; // ms per character
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return <div>{displayedText}</div>;
};
