import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { Transaction } from '../types/kivo';

interface SendPaymentCheckoutProps {
  recipientName?: string;
  recipientAddress?: string;
  amount?: number;
  currency?: string;
  onBack: () => void;
  onConfirmSend: (recipient: string, amount: number, currency: string) => Promise<Transaction>;
}

export const SendPaymentCheckout: React.FC<SendPaymentCheckoutProps> = ({
  recipientName = 'David',
  recipientAddress = 'NQ54 1A2B 3C4D 5E6F 7G8H 9I0J 1K2L',
  amount = 25,
  currency = 'NIM',
  onBack,
  onConfirmSend,
}) => {
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const handleConfirm = async () => {
    setStatus('processing');
    try {
      await onConfirmSend(recipientName, amount, currency);
      setStatus('success');
      setTimeout(() => {
        onBack();
      }, 2000);
    } catch (err) {
      setStatus('idle');
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 max-w-[600px] mx-auto pt-6 pb-24 w-full">
      {/* Top Back Header */}
      <div className="w-full flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer text-sm font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <span className="text-xs uppercase tracking-widest text-[#fcc82c] font-semibold font-mono">
          Secure Payment Checkout
        </span>
      </div>

      {/* Recipient Card */}
      <div className="w-full bg-[#1a1f26]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex items-center gap-4 mb-6 shadow-2xl">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#fcc82c]/40 shrink-0 bg-slate-900 flex items-center justify-center text-[#fcc82c] font-bold text-lg font-mono">
          {recipientName.charAt(0)}
        </div>
        <div className="flex flex-col overflow-hidden">
          <h2 className="text-xl font-bold text-white">{recipientName}</h2>
          <p className="text-xs font-mono text-slate-400 truncate max-w-[240px] sm:max-w-none">
            {recipientAddress}
          </p>
        </div>
        <div className="ml-auto text-[#fcc82c]">
          <ShieldCheck className="w-6 h-6" />
        </div>
      </div>

      {/* Amount Display */}
      <div className="flex flex-col items-center justify-center my-6 gap-1">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-extrabold font-mono text-white tracking-tight">
            {amount}
          </span>
          <span className="text-2xl font-bold text-[#fcc82c]">{currency}</span>
        </div>
        <span className="text-xs font-mono text-slate-400">
          ≈ ${(amount * 0.0568).toFixed(2)} USD
        </span>
      </div>

      {/* AI Explanation Block */}
      <div className="w-full flex flex-col gap-3 mb-8">
        <div className="flex items-start gap-3 bg-[#1a1f26]/60 p-4 rounded-2xl border-l-2 border-[#fcc82c] border border-white/5">
          <div className="w-8 h-8 rounded-full bg-[#fcc82c]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#fcc82c]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <p className="text-slate-200">
              You are sending <strong className="text-[#fcc82c]">{amount} {currency}</strong> to {recipientName}.
            </p>
            <p className="text-slate-400 italic">
              The network fee is minimal (~0.01 NIM). SHA-256 Web Crypto signature will finalize in ~1 second.
            </p>
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="w-full flex flex-col items-center gap-3">
        <button
          onClick={handleConfirm}
          disabled={status !== 'idle'}
          className={`w-full h-16 rounded-full font-bold text-slate-950 text-base flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl cursor-pointer ${
            status === 'success'
              ? 'bg-emerald-500 text-white'
              : status === 'processing'
              ? 'bg-amber-500 text-slate-950'
              : 'bg-[#fcc82c] hover:bg-amber-300 shadow-[#fcc82c]/20'
          }`}
        >
          {status === 'processing' && (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Signing SHA-256 Payload...</span>
            </>
          )}

          {status === 'success' && (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span>Sent Successfully</span>
            </>
          )}

          {status === 'idle' && (
            <>
              <span>Confirm and Send</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <button
          onClick={onBack}
          className="text-xs text-slate-400 font-semibold uppercase tracking-wider hover:text-white transition-colors py-2 cursor-pointer"
        >
          CANCEL TRANSACTION
        </button>
      </div>
    </div>
  );
};
