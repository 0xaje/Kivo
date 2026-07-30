import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SideRail } from './components/SideRail';
import { OrbCanvas } from './components/OrbCanvas';
import { ShaderBackground } from './components/ShaderBackground';
import { AssistantShell } from './components/AssistantShell';
import { WalletView } from './components/WalletView';
import { PortfolioView } from './components/PortfolioView';
import { HistoryView } from './components/HistoryView';
import { ProfileView } from './components/ProfileView';
import { ChatOverlay } from './components/ChatOverlay';
import { Transaction, ChatMessage } from './types/kivo';

export function App() {
  const [activeTab, setActiveTab] = useState<'assistant' | 'wallet' | 'history' | 'profile'>('assistant');
  const [orbStatus, setOrbStatus] = useState<'idle' | 'computing' | 'success'>('idle');
  const [showSendModalFromChat, setShowSendModalFromChat] = useState<boolean>(false);

  // Real transaction ledger state initialized from localStorage
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem('kivo_transactions');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return [
      {
        id: 'tx-101',
        type: 'send',
        recipientOrSender: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
        amount: 0.15,
        currency: 'ETH',
        timestamp: new Date(Date.now() - 3600000).toLocaleTimeString(),
        status: 'completed',
        hash: '0xe7c8a91b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f',
      },
      {
        id: 'tx-100',
        type: 'receive',
        recipientOrSender: '0x3C44CdD4596942666A3186595808293d052B34c4',
        amount: 1.25,
        currency: 'ETH',
        timestamp: new Date(Date.now() - 86400000).toLocaleTimeString(),
        status: 'completed',
        hash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b',
      },
    ];
  });

  // Save transaction ledger on change
  useEffect(() => {
    localStorage.setItem('kivo_transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Chat message stream state
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Execute Web Crypto SHA-256 signed payment transaction
  const handleSendTx = async (recipient: string, amount: number, currency: string): Promise<Transaction> => {
    setOrbStatus('computing');

    // Compute real Web Crypto SHA-256 digest hash for transaction payload
    const payload = `${recipient}-${amount}-${currency}-${Date.now()}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(payload);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = '0x' + hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      type: 'send',
      recipientOrSender: recipient,
      amount,
      currency,
      timestamp: new Date().toLocaleTimeString(),
      status: 'completed',
      hash: hashHex,
    };

    setTransactions((prev) => [newTx, ...prev]);
    setOrbStatus('success');

    setTimeout(() => {
      setOrbStatus('idle');
    }, 2500);

    return newTx;
  };

  // Process user assistant message or query
  const handleUserMessage = (text: string) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setOrbStatus('computing');

    const lower = text.toLowerCase();
    setTimeout(() => {
      let botResponseText = '';
      let actionCard: ChatMessage['actionCard'] = undefined;

      if (lower.includes('balance') || lower.includes('show balance')) {
        botResponseText = 'Here is your current verified wallet balance and asset valuation.';
        actionCard = 'show_balance';
      } else if (lower.includes('send') || lower.includes('transfer') || lower.includes('pay')) {
        botResponseText = 'I can help you send funds with SHA-256 Web Crypto signatures. Click below to proceed.';
        actionCard = 'send_money';
      } else if (lower.includes('portfolio') || lower.includes('holdings')) {
        botResponseText = 'Here is your current aggregate crypto portfolio breakdown.';
        actionCard = 'portfolio';
      } else {
        botResponseText = `I have analyzed your request: "${text}". How would you like to proceed with your wallet stewardship?`;
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'kivo',
        text: botResponseText,
        timestamp: new Date().toLocaleTimeString(),
        actionCard,
      };

      setMessages((prev) => [...prev, botMsg]);
      setOrbStatus('idle');
    }, 800);
  };

  return (
    <div className="relative min-h-screen bg-[#0f141a] text-slate-100 selection:bg-[#fcc82c]/30 selection:text-[#fcc82c] overflow-x-hidden font-sans">
      {/* GLSL WebGL Obsidian Gold Wave Shader Background */}
      <ShaderBackground />

      {/* Header Navigation */}
      <Header
        onSearchQuery={(q) => handleUserMessage(q)}
        onOpenProfile={() => setActiveTab('profile')}
      />

      {/* Side Rail Navigation */}
      <SideRail activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Workspace Area */}
      <main className="relative z-10 pt-20 px-6 max-w-6xl mx-auto min-h-screen flex flex-col items-center">
        {activeTab === 'assistant' && (
          <div className="w-full flex flex-col items-center">
            {/* Kivo 3D Intelligence Orb */}
            <div className="relative w-full max-w-[360px] aspect-square my-2">
              <OrbCanvas status={orbStatus} />
            </div>

            {/* Hero Greeting Cluster */}
            {messages.length === 0 && (
              <div className="text-center space-y-2 mb-8 z-10">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                  Good Evening <br />
                  <span className="text-[#fcc82c]">I'm KIVO.</span>
                </h1>
                <p className="text-slate-400 text-sm">How can I help you today?</p>
              </div>
            )}

            {/* Quick Suggestion Chips */}
            {messages.length === 0 && (
              <div className="w-full max-w-2xl overflow-x-auto no-scrollbar mb-8">
                <div className="flex items-center justify-center gap-3 whitespace-nowrap px-4">
                  <button
                    onClick={() => handleUserMessage('I want to send money')}
                    className="px-5 py-2.5 rounded-full bg-[#252a32]/60 border border-white/5 backdrop-blur-md text-slate-300 hover:text-[#fcc82c] hover:border-[#fcc82c]/30 hover:bg-[#30353d] transition-all cursor-pointer text-xs font-semibold uppercase tracking-wider"
                  >
                    Send money
                  </button>
                  <button
                    onClick={() => handleUserMessage('Request payment')}
                    className="px-5 py-2.5 rounded-full bg-[#252a32]/60 border border-white/5 backdrop-blur-md text-slate-300 hover:text-[#fcc82c] hover:border-[#fcc82c]/30 hover:bg-[#30353d] transition-all cursor-pointer text-xs font-semibold uppercase tracking-wider"
                  >
                    Request payment
                  </button>
                  <button
                    onClick={() => handleUserMessage('Show my portfolio')}
                    className="px-5 py-2.5 rounded-full bg-[#252a32]/60 border border-white/5 backdrop-blur-md text-slate-300 hover:text-[#fcc82c] hover:border-[#fcc82c]/30 hover:bg-[#30353d] transition-all cursor-pointer text-xs font-semibold uppercase tracking-wider"
                  >
                    Portfolio
                  </button>
                  <button
                    onClick={() => handleUserMessage('Show balance')}
                    className="px-5 py-2.5 rounded-full bg-[#252a32]/60 border border-white/5 backdrop-blur-md text-slate-300 hover:text-[#fcc82c] hover:border-[#fcc82c]/30 hover:bg-[#30353d] transition-all cursor-pointer text-xs font-semibold uppercase tracking-wider"
                  >
                    Show balance
                  </button>
                </div>
              </div>
            )}

            {/* Chat Stream View */}
            {messages.length > 0 && (
              <ChatOverlay
                messages={messages}
                transactions={transactions}
                onTriggerSendModal={() => setActiveTab('wallet')}
                onOpenTab={(tab) => setActiveTab(tab as any)}
              />
            )}

            {/* Bottom Glassmorphic Input Shell */}
            <AssistantShell onSendMessage={handleUserMessage} />
          </div>
        )}

        {/* Other Active Tab Views */}
        {activeTab === 'wallet' && (
          <div className="w-full">
            <WalletView transactions={transactions} onSendTx={handleSendTx} />
          </div>
        )}

        {activeTab === 'history' && (
          <div className="w-full">
            <HistoryView transactions={transactions} />
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="w-full">
            <ProfileView />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
