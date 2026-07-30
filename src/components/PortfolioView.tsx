import React, { useEffect, useState } from 'react';
import { Sparkles, PieChart, BarChart2, ArrowUpRight, ArrowDownLeft, RefreshCw, ShoppingBag, ExternalLink } from 'lucide-react';
import { CryptoAsset, Transaction } from '../types/kivo';

interface PortfolioViewProps {
  transactions?: Transaction[];
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ transactions = [] }) => {
  const [assets, setAssets] = useState<CryptoAsset[]>([
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', balance: 18.45, priceUsd: 64200, change24h: 1.8 },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', balance: 90.5, priceUsd: 3450, change24h: 2.4 },
    { id: 'usd-coin', name: 'USD Coin', symbol: 'USDC', balance: 124830, priceUsd: 1.0, change24h: 0.01 },
  ]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const fetchLivePrices = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,usd-coin&vs_currencies=usd&include_24hr_change=true'
      );
      if (res.ok) {
        const data = await res.json();
        setAssets((prev) =>
          prev.map((asset) => {
            if (data[asset.id]) {
              return {
                ...asset,
                priceUsd: data[asset.id].usd || asset.priceUsd,
                change24h: data[asset.id].usd_24h_change || asset.change24h,
              };
            }
            return asset;
          })
        );
      }
    } catch (err) {
      console.warn('Live price fetch fallback active');
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchLivePrices();
  }, []);

  const totalPortfolioValue = assets.reduce(
    (acc, asset) => acc + asset.balance * asset.priceUsd,
    0
  );

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto pb-36 px-2 md:px-0">
      {/* Hero Section: Portfolio Value */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-2">
        <div>
          <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block mb-1">
            Portfolio Value
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-mono text-white tracking-tight">
            ${totalPortfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h2>
          <div className="flex items-center gap-2 text-emerald-400 mt-2 font-mono text-sm font-semibold">
            <span className="flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
              +$12,490.12 (0.92%)
            </span>
            <span className="text-slate-400 font-sans text-xs">today</span>
          </div>
        </div>

        <button
          onClick={fetchLivePrices}
          disabled={isRefreshing}
          className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
          Refresh Prices
        </button>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* AI Insight Card (Full Width Span) */}
        <div className="md:col-span-12 bg-[#1a1f26]/80 backdrop-blur-xl rounded-2xl p-6 flex items-start gap-4 border border-[#fcc82c]/30 bg-[#fcc82c]/5 shadow-xl">
          <div className="p-2.5 bg-[#fcc82c]/10 rounded-full text-[#fcc82c] shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#fcc82c] mb-1">
              AI INSIGHT
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Excellent progress. You spent <strong className="text-[#fcc82c]">18% less</strong> than last week. Your automated savings have been adjusted to capture the surplus.
            </p>
          </div>
        </div>

        {/* Asset Allocation (Donut Chart) */}
        <div className="md:col-span-5 bg-[#1a1f26]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex flex-col justify-between shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              ASSET ALLOCATION
            </h3>
            <PieChart className="w-4 h-4 text-slate-500" />
          </div>

          <div className="relative w-44 h-44 mx-auto flex items-center justify-center my-4">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
              <path className="text-[#fcc82c]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="65, 100" strokeLinecap="round" strokeWidth="3.5" />
              <path className="text-cyan-400" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="25, 100" strokeDashoffset="-65" strokeLinecap="round" strokeWidth="3.5" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono font-bold text-lg text-white">BTC</span>
              <span className="text-xs font-semibold text-slate-400">65%</span>
            </div>
          </div>

          <div className="mt-6 space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-200">
                <div className="w-2.5 h-2.5 rounded-full bg-[#fcc82c]" /> Bitcoin (BTC)
              </div>
              <span className="font-bold text-white">65%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-200">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Ethereum (ETH)
              </div>
              <span className="font-bold text-white">25%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-200">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500" /> USDC & Other
              </div>
              <span className="font-bold text-white">10%</span>
            </div>
          </div>
        </div>

        {/* Monthly Spending (Bar Chart Simulation) */}
        <div className="md:col-span-7 bg-[#1a1f26]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex flex-col h-full shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              MONTHLY SPENDING
            </h3>
            <BarChart2 className="w-4 h-4 text-slate-500" />
          </div>

          <div className="flex-grow flex items-end justify-between gap-3 h-44 px-2">
            {[
              { month: 'OCT', pct: 'h-1/2', active: false },
              { month: 'NOV', pct: 'h-3/4', active: false },
              { month: 'DEC', pct: 'h-2/3', active: false },
              { month: 'JAN', pct: 'h-4/5', active: false },
              { month: 'FEB', pct: 'h-1/3', active: true },
            ].map((bar, i) => (
              <div key={i} className="w-full flex flex-col items-center gap-2">
                <div
                  className={`w-full rounded-t-lg transition-colors ${
                    bar.active
                      ? 'bg-[#fcc82c] shadow-[0_-8px_20px_-4px_rgba(252,200,44,0.4)]'
                      : 'bg-slate-800 hover:bg-[#fcc82c]/40'
                  } ${bar.pct}`}
                />
                <span className={`text-[10px] font-mono font-bold ${bar.active ? 'text-[#fcc82c]' : 'text-slate-500'}`}>
                  {bar.month}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 flex justify-between font-mono text-xs">
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider font-sans font-semibold">AVG MONTHLY</p>
              <p className="text-sm font-bold text-white">$4,120.00</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 uppercase tracking-wider font-sans font-semibold">REMAINING BUDGET</p>
              <p className="text-sm font-bold text-emerald-400">$1,294.50</p>
            </div>
          </div>
        </div>

        {/* Recent Activity Timeline */}
        <div className="md:col-span-12 bg-[#1a1f26]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              RECENT ACTIVITY
            </h3>
            <span className="text-xs text-[#fcc82c] font-semibold font-mono">
              VERIFIED LEDGER
            </span>
          </div>

          <div className="space-y-4 divide-y divide-white/5">
            {/* Item 1 */}
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#fcc82c]">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Sent to Ledger</h4>
                  <p className="text-xs text-slate-400 font-mono">External Wallet • 2h ago</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono font-bold text-rose-400 text-sm">-0.45 BTC</p>
                <p className="text-xs text-slate-500 font-mono">$21,840.12</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Swap ETH to USDC</h4>
                  <p className="text-xs text-slate-400 font-mono">Kivo Exchange • 1d ago</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono font-bold text-white text-sm">2.4 ETH</p>
                <p className="text-xs text-slate-500 font-mono">$5,820.00</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-amber-400">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Apple Store</h4>
                  <p className="text-xs text-slate-400 font-mono">Merchant Payment • 3d ago</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono font-bold text-rose-400 text-sm">-$1,299.00</p>
                <p className="text-xs text-slate-500 font-mono">Paid in USDC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
