import React, { useEffect, useState } from 'react';
import { Sparkles, PieChart, BarChart2, ArrowUpRight, ArrowDownLeft, RefreshCw } from 'lucide-react';
import { CryptoAsset, Transaction } from '../types/kivo';

interface PortfolioViewProps {
  transactions?: Transaction[];
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ transactions = [] }) => {
  const [assets, setAssets] = useState<CryptoAsset[]>([
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', balance: 0, priceUsd: 0, change24h: 0 },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', balance: 0, priceUsd: 0, change24h: 0 },
    { id: 'usd-coin', name: 'USD Coin', symbol: 'USDC', balance: 0, priceUsd: 1.0, change24h: 0 },
  ]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // Compute live balances from real transaction ledger
  useEffect(() => {
    const ethBalance = transactions
      .filter((t) => t.currency === 'ETH')
      .reduce((acc, t) => (t.type === 'receive' ? acc + t.amount : acc - t.amount), 0);

    const btcBalance = transactions
      .filter((t) => t.currency === 'BTC' || t.currency === 'WBTC')
      .reduce((acc, t) => (t.type === 'receive' ? acc + t.amount : acc - t.amount), 0);

    const usdcBalance = transactions
      .filter((t) => t.currency === 'USDC' || t.currency === 'NIM')
      .reduce((acc, t) => (t.type === 'receive' ? acc + t.amount : acc - t.amount), 0);

    setAssets([
      { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', balance: btcBalance > 0 ? btcBalance : 0, priceUsd: 0, change24h: 0 },
      { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', balance: ethBalance > 0 ? ethBalance : 0, priceUsd: 0, change24h: 0 },
      { id: 'usd-coin', name: 'USD Coin', symbol: 'USDC', balance: usdcBalance > 0 ? usdcBalance : 0, priceUsd: 1.0, change24h: 0 },
    ]);
  }, [transactions]);

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
      console.warn('Live price fetch query active');
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
        {/* AI Insight Card */}
        <div className="md:col-span-12 bg-[#1a1f26]/80 backdrop-blur-xl rounded-2xl p-6 flex items-start gap-4 border border-[#fcc82c]/30 bg-[#fcc82c]/5 shadow-xl">
          <div className="p-2.5 bg-[#fcc82c]/10 rounded-full text-[#fcc82c] shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#fcc82c] mb-1">
              VAULT TELEMETRY
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              {transactions.length > 0
                ? `Active ledger tracking ${transactions.length} verified Web Crypto signature transactions.`
                : 'Vault initialized with zero active transactions. Ready for Web3 operations.'}
            </p>
          </div>
        </div>

        {/* Asset Allocation */}
        <div className="md:col-span-5 bg-[#1a1f26]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex flex-col justify-between shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              ASSET ALLOCATION
            </h3>
            <PieChart className="w-4 h-4 text-slate-500" />
          </div>

          <div className="mt-2 space-y-3 font-mono text-xs">
            {assets.map((asset) => {
              const val = asset.balance * asset.priceUsd;
              const pct = totalPortfolioValue > 0 ? ((val / totalPortfolioValue) * 100).toFixed(1) : '0.0';
              return (
                <div key={asset.id} className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-300 font-semibold">{asset.name} ({asset.symbol})</span>
                  <span className="font-bold text-white">{pct}% ({asset.balance} {asset.symbol})</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Monthly Spending */}
        <div className="md:col-span-7 bg-[#1a1f26]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex flex-col justify-between h-full shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              LEDGER ACTIVITY
            </h3>
            <BarChart2 className="w-4 h-4 text-slate-500" />
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span>Total Transactions:</span>
              <span className="text-white font-bold">{transactions.length}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Outbound Transfers:</span>
              <span className="text-rose-400 font-bold">
                {transactions.filter((t) => t.type === 'send').length}
              </span>
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

          {transactions.length === 0 ? (
            <p className="text-xs font-mono text-slate-500 py-4">No recent activity recorded.</p>
          ) : (
            <div className="space-y-3 divide-y divide-white/5">
              {transactions.slice(0, 5).map((tx) => (
                <div key={tx.id} className="flex items-center justify-between pt-3 text-xs">
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
                      <h4 className="font-semibold text-white">
                        {tx.type === 'send' ? `Sent to ${tx.recipientOrSender}` : `Received from ${tx.recipientOrSender}`}
                      </h4>
                      <p className="text-[10px] text-slate-500 font-mono">{tx.timestamp}</p>
                    </div>
                  </div>
                  <div className="text-right font-mono">
                    <p className={`font-bold ${tx.type === 'send' ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {tx.type === 'send' ? '-' : '+'}{tx.amount} {tx.currency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
