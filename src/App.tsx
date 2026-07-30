import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SideRail } from './components/SideRail';
import { ShaderBackground } from './components/ShaderBackground';
import { AssistantShell } from './components/AssistantShell';
import { WalletView } from './components/WalletView';
import { PortfolioView } from './components/PortfolioView';
import { HistoryView } from './components/HistoryView';
import { ProfileView } from './components/ProfileView';
import { ChatOverlay } from './components/ChatOverlay';
import { QRScannerModal } from './components/QRScannerModal';
import { SendPaymentCheckout } from './components/SendPaymentCheckout';
import { Transaction, ChatMessage } from './types/kivo';

type TabType = 'assistant' | 'wallet' | 'portfolio' | 'history' | 'profile' | 'checkout';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('assistant');
  const [showQRScanner, setShowQRScanner] = useState<boolean>(false);
  const [checkoutData, setCheckoutData] = useState<{ recipient: string; amount: number; currency: string }>({
    recipient: 'David',
    amount: 25,
    currency: 'NIM',
  });

  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem('kivo_transactions');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return [
      {
        id: 'tx-201',
        type: 'send',
        recipientOrSender: 'Digital Nomad Coffee',
        amount: 50.0,
        currency: 'NIM',
        timestamp: '12 seconds ago',
        status: 'completed',
        hash: '0xf8e7d6c5b4a3928170192837465f4e3d2c1b0a',
        category: 'Coffee & Daily Expense',
      },
      {
        id: 'tx-200',
        type: 'receive',
        recipientOrSender: 'Vault Deposit',
        amount: 12.0,
        currency: 'NIM',
        timestamp: 'Yesterday',
        status: 'completed',
        hash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a',
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem('kivo_transactions', JSON.stringify(transactions));
  }, [transactions]);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'kivo',
      text: 'Good morning. Your digital assets are secure. You have 245.32 NIM available in your primary vault.',
      timestamp: 'Just Now',
    },
    {
      id: 'msg-2',
      sender: 'kivo',
      text: 'Vault Balance Summary:',
      timestamp: 'Just Now',
      actionCard: 'balance_card',
    },
    {
      id: 'msg-3',
      sender: 'kivo',
      text: 'I noticed your last transaction of 50 NIM to the "Digital Nomad Coffee" address. This was a direct peer-to-peer transfer that confirmed in approximately 12 seconds. No additional fees were incurred on this network path. Would you like me to categorize this as a daily expense or set up a recurring trust for this wallet?',
      timestamp: 'Just Now',
      chips: [
        { label: 'Categorize Expense', action: 'categorize' },
        { label: 'Setup Recurring', action: 'recurring' },
      ],
    },
  ]);

  const handleSendTx = async (recipient: string, amount: number, currency: string): Promise<Transaction> => {
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

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: 'kivo',
        text: `Confirmed payment of ${amount} ${currency} to ${recipient}. SHA-256 Hash: ${hashHex.substring(0, 14)}...`,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);

    return newTx;
  };

  const handleUserMessage = (text: string) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);

    const lower = text.toLowerCase();
    setTimeout(() => {
      let responseText = '';
      let actionCard: ChatMessage['actionCard'] = undefined;
      let chips: ChatMessage['chips'] = undefined;

      if (lower.includes('balance') || lower.includes('show balance')) {
        responseText = 'Here is your active vault balance overview:';
        actionCard = 'balance_card';
      } else if (lower.includes('send') || lower.includes('pay') || lower.includes('transfer')) {
        responseText = 'Opening the KIVO Payment Checkout screen for your transaction.';
        setActiveTab('checkout');
      } else if (lower.includes('portfolio') || lower.includes('holdings')) {
        responseText = 'Displaying your aggregate crypto holdings and live price telemetry.';
        setActiveTab('portfolio');
      } else {
        responseText = `I have logged your request: "${text}". Your primary vault assets remain fully secured.`;
        chips = [
          { label: 'Categorize Expense', action: 'categorize' },
          { label: 'Setup Recurring', action: 'recurring' },
        ];
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'kivo',
          text: responseText,
          timestamp: new Date().toLocaleTimeString(),
          actionCard,
          chips,
        },
      ]);
    }, 600);
  };

  return (
    <div className="relative min-h-screen bg-[#0f141a] text-[#dee2ec] selection:bg-[#fcc82c]/30 selection:text-[#fcc82c] overflow-x-hidden font-sans">
      <ShaderBackground />

      <Header
        onSearchQuery={(q) => handleUserMessage(q)}
        onOpenProfile={() => setActiveTab('profile')}
      />

      {activeTab !== 'checkout' && (
        <SideRail activeTab={activeTab as any} setActiveTab={(t) => setActiveTab(t as any)} />
      )}

      <main className="relative z-10 pt-20 px-4 md:px-6 max-w-5xl mx-auto min-h-screen flex flex-col items-center">
        {activeTab === 'assistant' && (
          <div className="w-full">
            <ChatOverlay
              messages={messages}
              transactions={transactions}
              onTriggerSendModal={() => setActiveTab('checkout')}
              onOpenTab={(tab) => setActiveTab(tab as any)}
              onCategorizeExpense={() => {
                setMessages((prev) => [
                  ...prev,
                  {
                    id: Date.now().toString(),
                    sender: 'kivo',
                    text: 'Expense categorized as Coffee & Daily Expense.',
                    timestamp: new Date().toLocaleTimeString(),
                  },
                ]);
              }}
              onSetupRecurring={() => {
                setMessages((prev) => [
                  ...prev,
                  {
                    id: Date.now().toString(),
                    sender: 'kivo',
                    text: 'Recurring trust rule set for 50 NIM weekly.',
                    timestamp: new Date().toLocaleTimeString(),
                  },
                ]);
              }}
            />

            <AssistantShell
              onSendMessage={handleUserMessage}
              onOpenQRScanner={() => setShowQRScanner(true)}
            />
          </div>
        )}

        {activeTab === 'checkout' && (
          <div className="w-full">
            <SendPaymentCheckout
              recipientName={checkoutData.recipient}
              amount={checkoutData.amount}
              currency={checkoutData.currency}
              onBack={() => setActiveTab('assistant')}
              onConfirmSend={handleSendTx}
            />
          </div>
        )}

        {activeTab === 'wallet' && (
          <div className="w-full">
            <WalletView transactions={transactions} onSendTx={handleSendTx} />
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="w-full">
            <PortfolioView transactions={transactions} />
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

      {showQRScanner && (
        <QRScannerModal
          onClose={() => setShowQRScanner(false)}
          onScanResult={(addr) => {
            setCheckoutData({ recipient: 'Scanned Address', amount: 25, currency: 'NIM' });
            setActiveTab('checkout');
          }}
        />
      )}
    </div>
  );
}

export default App;
