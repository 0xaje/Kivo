/**
 * @file src/wallet/types/index.ts
 * @description Domain DTOs and Data Models for Wallet Architecture.
 */

export interface BalanceDTO {
  vaultAddress: string;
  assetSymbol: string;
  balance: number;
  usdValue?: number;
}

export interface SendPaymentRequestDTO {
  recipientAddress: string;
  amount: number;
  assetSymbol: string;
  memo?: string;
}

export interface SendPaymentResponseDTO {
  transactionHash: string;
  recipientAddress: string;
  amount: number;
  assetSymbol: string;
  status: 'pending' | 'signed' | 'broadcasted' | 'completed';
  timestamp: number;
}

export interface TransactionItemDTO {
  id: string;
  type: 'send' | 'receive';
  amount: number;
  currency: string;
  recipientOrSender: string;
  timestamp: string;
  hash?: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface TransactionHistoryDTO {
  vaultAddress: string;
  totalCount: number;
  transactions: TransactionItemDTO[];
}

export interface AssetHoldingDTO {
  symbol: string;
  name: string;
  balance: number;
  priceUsd: number;
  allocationPercentage: number;
}

export interface PortfolioDTO {
  totalUsdValue: number;
  assets: AssetHoldingDTO[];
  updatedAt: number;
}

export interface CreatePaymentRequestInputDTO {
  amount?: number;
  assetSymbol?: string;
  memo?: string;
}

export interface PaymentRequestDTO {
  requestId: string;
  paymentUri: string;
  qrPayload: string;
  recipientAddress: string;
  amount?: number;
  assetSymbol: string;
}
