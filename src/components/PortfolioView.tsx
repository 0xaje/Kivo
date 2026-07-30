import React, { useEffect, useState } from 'react';
import { PieChart, TrendingUp, RefreshCw, Layers } from 'lucide-react';
import { CryptoAsset } from '../types/kivo';

export const PortfolioView: React.FC = () => {
  const [assets, setAssets] = useState<CryptoAsset[]>([
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', balance: 4.85, priceUsd: 3450, change24h: 2.4 },
    { id: 'bitcoin', name: 'Wrapped Bitcoin', symbol: 'WBTC', balance: 0.12, priceUsd: 64200, change24h: 1.8 },
    { id: 'solana', name: 'Solana', symbol: 'SOL', balance: 45.0, priceUsd: 182, change24h: 5.1 },
    { id: 'usd-coin', name: 'USD Coin', symbol: 'USDC', balance: 2500.0, priceUsd: 1.0, change24h: 0.01 },
  ]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const fetchLivePrices = async () => {
    setIsRefreshing(true);
    try {
      // Fetch public crypto market prices
      const res = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,solana,usd-coin&vs_currencies=usd&include_24hr_change=true'
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
      console.warn('Network price fetch fallback active');
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
    <div className="space-y-6 max-w-4xl mx-auto pb-24">
      {/* Total Portfolio Header */}
      <div className="bg-[#1a1f26]/80 border border-white/10 rounded-3xl p-8 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
              <PieChart className="w-4 h-4 text-amber-400" />
              Aggregate Portfolio Value
            </span>
            <h2 className="text-4xl font-bold text-white tracking-tight mt-1 font-mono">
              ${totalPortfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-slate-400 text-sm font-sans">USD</span>
            </h2>
          </div>

          <button
            onClick={fetchLivePrices}
            disabled={isRefreshing}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh Prices
          </button>
        </div>
      </div>

      {/* Asset Table */}
      <div className="bg-[#1a1f26]/80 border border-white/10 rounded-2xl p-6 space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-400" />
          Asset Holdings & Real-time Prices
        </h3>

        <div className="divide-y divide-white/5">
          {assets.map((asset) => {
            const assetTotalValue = asset.balance * asset.priceUsd;
            const allocationPct = (assetTotalValue / totalPortfolioValue) * 100;
            return (
              <div key={asset.id} className="py-4 flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center font-bold font-mono text-amber-400 text-xs">
                    {asset.symbol}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{asset.name}</div>
                    <div className="text-xs text-slate-400 font-mono">
                      {asset.balance} {asset.symbol}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-mono font-bold text-white">
                    ${assetTotalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </div>
                  <div className="flex items-center justify-end gap-2 text-xs">
                    <span className="text-slate-400 font-mono">${asset.priceUsd.toLocaleString()}</span>
                    <span
                      className={`font-semibold ${
                        asset.change24h >= 0 ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {asset.change24h >= 0 ? '+' : ''}{asset.change24h.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
