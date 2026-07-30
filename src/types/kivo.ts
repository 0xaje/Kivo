export interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'swap';
  recipientOrSender: string;
  amount: number;
  currency: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
  hash: string;
  category?: string;
  isRecurring?: boolean;
}

export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  balance: number;
  priceUsd: number;
  change24h: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'kivo' | 'system';
  text: string;
  timestamp: string;
  actionCard?: 'balance_card' | 'streaming_response' | 'send_money' | 'portfolio';
  actionData?: any;
  chips?: { label: string; action: string; icon?: string }[];
}
