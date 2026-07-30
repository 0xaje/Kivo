import React, { useState } from 'react';
import { Wallet, Send, Download, ArrowUpRight, ArrowDownLeft, ShieldCheck, Copy, CheckCircle2 } from 'lucide-react';
import { Transaction } from '../types/kivo';

interface WalletViewProps {
  transactions: Transaction[];
  onSendTx: (recipient: string, amount: number, currency: string) => Promise<Transaction>;
}

export const WalletView: React.FC<WalletViewProps> = ({ transactions, onSendTx }) => {
  const walletAddress = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';
  const [copied, setCopied] = useState<boolean>(false);
  const [showSendModal, setShowSendModal] = useState<boolean>(false);
  const [recipient, setRecipient] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<string>('ETH');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient || !amount || isNaN(Number(amount)) || Number(amount) <= 0) return;

    setIsProcessing(true);
    try {
      await onSendTx(recipient, Number(amount), currency);
      setShowSendModal(false);
      setRecipient('');
      setAmount('');
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  // Calculate live total balance from transaction ledger base
  const totalEth = 4.85 - transactions.filter(t => t.type === 'send').reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-24">
      {/* Balance Card */}
      <div className="bg-gradient-to-br from-[#1a1f26] to-[#0f141a] border border-[#fcc82c]/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#fcc82c]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Verified Wallet Vault
            </span>
            <h2 className="text-4xl font-bold text-white tracking-tight mt-1 font-mono">
              {totalEth.toFixed(4)} <span className="text-amber-400 text-2xl font-sans">ETH</span>
            </h2>
            <p className="text-slate-400 text-xs mt-1">
              Estimated Value: ${(totalEth * 3450).toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSendModal(true)}
              className="px-5 py-2.5 rounded-xl bg-[#fcc82c] text-slate-950 font-semibold text-xs flex items-center gap-2 hover:bg-amber-300 transition-all cursor-pointer shadow-lg shadow-[#fcc82c]/20"
            >
              <Send className="w-3.5 h-3.5" />
              Send Funds
            </button>
          </div>
        </div>

        {/* Address Identifier */}
        <div className="flex items-center justify-between bg-slate-950/60 border border-white/5 rounded-xl p-3 text-xs font-mono">
          <span className="text-slate-400 truncate max-w-[280px] sm:max-w-none">{walletAddress}</span>
          <button
            onClick={handleCopy}
            className="text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer transition-colors"
          >
            {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Transaction History Sub-Section */}
      <div className="bg-[#1a1f26]/80 border border-white/10 rounded-2xl p-6 space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Wallet className="w-5 h-5 text-amber-400" />
          Recent Cryptographic Ledger
        </h3>

        <div className="divide-y divide-white/5">
          {transactions.map((tx) => (
            <div key={tx.id} className="py-3.5 flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    tx.type === 'send'
                      ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  }`}
                >
                  {tx.type === 'send' ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownLeft className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {tx.type === 'send' ? 'Sent Payment' : 'Received Payment'}
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
                <div className="text-[10px] text-slate-500 font-mono truncate max-w-[120px]">
                  {tx.hash.substring(0, 10)}...
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Send Payment Modal */}
      {showSendModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1b2027] border border-white/10 w-full max-w-md rounded-2xl p-6 space-y-5 shadow-2xl">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Send className="w-5 h-5 text-amber-400" />
              Cryptographic Send Transfer
            </h3>

            <form onSubmit={handleSend} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Recipient Address or ENS
                </label>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="0x... or name.eth"
                  className="w-full bg-[#0f141a] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono text-xs"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Amount
                  </label>
                  <input
                    type="number"
                    step="0.001"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.05"
                    className="w-full bg-[#0f141a] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Asset
                  </label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full bg-[#0f141a] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-amber-400 font-mono text-xs"
                  >
                    <option value="ETH">ETH</option>
                    <option value="USDC">USDC</option>
                    <option value="WBTC">WBTC</option>
                  </select>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-white/5 text-xs text-slate-400 space-y-1 font-mono">
                <div className="flex justify-between">
                  <span>Network Fee (Est.):</span>
                  <span className="text-amber-400">0.0012 ETH</span>
                </div>
                <div className="flex justify-between">
                  <span>Web Crypto Hash Signature:</span>
                  <span className="text-slate-500">SHA-256 Enabled</span>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowSendModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="px-5 py-2.5 rounded-xl bg-[#fcc82c] text-slate-950 font-semibold text-xs flex items-center gap-1.5 cursor-pointer hover:bg-amber-300"
                >
                  {isProcessing ? 'Signing Hash...' : 'Sign & Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
