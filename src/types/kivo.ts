export interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'swap';
  recipientOrSender: string;
  amount: number;
  currency: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
  hash: string;
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
  sender: 'user' | 'kivo';
  text: string;
  timestamp: string;
  actionCard?: 'send_money' | 'request_payment' | 'portfolio' | 'show_balance' | 'wallet_details';
  actionData?: any;
}
