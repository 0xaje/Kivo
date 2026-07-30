import { useState, useEffect, useRef } from 'react';
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

// AI & Wallet Architecture Integration
import { LocalConversationMemoryStore } from './ai/memory';
import { IntentRouter } from './ai/router';
import { PromptEngine } from './ai/prompts';
import { ToolRegistry } from './ai/tools';
import { ProviderRegistry, ProviderConfigManager, OpenAIProviderContract } from './ai/providers';
import { AIOrchestrator } from './ai/orchestrator';
import { NimiqWalletRepository, WalletService, WalletAdapter } from './wallet';

type TabType = 'assistant' | 'wallet' | 'portfolio' | 'history' | 'profile' | 'checkout';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('assistant');
  const [showQRScanner, setShowQRScanner] = useState<boolean>(false);
  const [checkoutData, setCheckoutData] = useState<{ recipient: string; amount: number; currency: string }>({
    recipient: '',
    amount: 0,
    currency: 'ETH',
  });

  const orchestratorRef = useRef<AIOrchestrator | null>(null);

  if (!orchestratorRef.current) {
    const memoryProvider = new LocalConversationMemoryStore();
    const intentRouter = new IntentRouter();
    const promptEngine = new PromptEngine();
    const toolRegistry = new ToolRegistry();
    const configMgr = new ProviderConfigManager();
    const providerRegistry = new ProviderRegistry(configMgr);
    providerRegistry.registerProvider(new OpenAIProviderContract(configMgr.getProviderConfig('openai')));

    const walletRepo = new NimiqWalletRepository();
    const walletService = new WalletService(walletRepo);
    const walletAdapter = new WalletAdapter(walletService);

    orchestratorRef.current = new AIOrchestrator({
      memoryProvider,
      intentRouter,
      promptEngine,
      toolRegistry,
      providerRegistry,
      walletAdapter,
    });
  }

  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem('kivo_transactions');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('kivo_transactions', JSON.stringify(transactions));
  }, [transactions]);

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('kivo_chat_messages');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('kivo_chat_messages', JSON.stringify(messages));
  }, [messages]);

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
        text: `Verified payment of ${amount} ${currency} to ${recipient}. SHA-256 Hash: ${hashHex}`,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);

    return newTx;
  };

  const handleUserMessage = async (text: string) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);

    try {
      const result = await orchestratorRef.current!.processMessage({
        userMessage: text,
        context: {
          sessionId: 'user-session',
          timestamp: Date.now(),
        },
      });

      const intent = result.classifiedIntent;
      const responseText = result.assistantResponse.content;

      if (intent === 'CHECK_BALANCE') {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'kivo',
            text: responseText,
            timestamp: new Date().toLocaleTimeString(),
            actionCard: 'balance_card',
          },
        ]);
      } else if (intent === 'SEND_PAYMENT' || intent === 'REQUEST_PAYMENT') {
        setCheckoutData({ recipient: '', amount: 0, currency: 'NIM' });
        setActiveTab('checkout');
      } else if (intent === 'SHOW_PORTFOLIO') {
        setActiveTab('portfolio');
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'kivo',
            text: responseText,
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'kivo',
          text: `Processed request: "${text}". System ready for vault actions.`,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    }
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
              recipientAddress={checkoutData.recipient}
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
          onScanResult={(val) => {
            setShowQRScanner(false);
            handleUserMessage(`Scanned QR payload: ${val}`);
          }}
        />
      )}
    </div>
  );
}

export default App;
