import React, { useState, useEffect } from 'react';
import { ChatMessage, Transaction } from '../types/kivo';
import { Wallet, Send, ArrowDownLeft, History, Sparkles } from 'lucide-react';

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
}) => {
  const totalBalance = transactions.reduce((acc, t) => {
    if (t.type === 'receive') return acc + t.amount;
    if (t.type === 'send') return acc - t.amount;
    return acc;
  }, 0);

  return (
    <div className="space-y-6 max-w-2xl mx-auto w-full pb-36">
      {messages.map((msg) => (
        <div key={msg.id} className="space-y-3">
          {msg.sender !== 'user' && (
            <div className="flex items-center gap-2 px-1 text-xs text-slate-400 font-medium">
              <Sparkles className="w-4 h-4 text-[#fcc82c]" />
              <span>Kivo Intelligence</span>
            </div>
          )}

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
                      {totalBalance >= 0 ? totalBalance.toFixed(4) : '0.0000'} <span className="text-sm font-sans text-slate-400">ETH</span>
                    </h2>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fcc82c]">
                    <Wallet className="w-6 h-6" />
                  </div>
                </div>

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
          </div>
        </div>
      ))}
    </div>
  );
};

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    let index = 0;
    const speed = 18;
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
