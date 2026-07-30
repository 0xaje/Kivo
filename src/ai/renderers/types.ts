/**
 * @file src/ai/renderers/types.ts
 * @description Card Schemas and Typed Response contracts for Structured AI Responses.
 */

/**
 * All supported typed UI card identifiers.
 */
export type StructuredCardType =
  | 'BalanceCard'
  | 'PortfolioCard'
  | 'TransactionCard'
  | 'PaymentCard'
  | 'QRCard'
  | 'EducationCard'
  | 'InsightCard'
  | 'ErrorCard';

/**
 * Interactive card action descriptor.
 */
export interface CardAction {
  label: string;
  actionId: string;
  params?: Record<string, unknown>;
}

/**
 * Generic Card Payload container.
 */
export interface StructuredCardPayload<T = Record<string, unknown>> {
  cardType: StructuredCardType;
  title?: string;
  subtitle?: string;
  data: T;
  actions?: CardAction[];
}

/**
 * Structured AI Response Envelope.
 */
export interface StructuredAIResponse {
  messageText: string;
  card?: StructuredCardPayload;
  intentType: string;
  timestamp: number;
}

/**
 * Card Specific Data Schemas
 */
export interface BalanceCardData {
  vaultAddress: string;
  balance: number;
  currency: string;
  usdEquivalent?: number;
}

export interface PortfolioCardData {
  totalUsdValue: number;
  topAssets: Array<{ symbol: string; name: string; balance: number; allocationPercentage: number }>;
}

export interface TransactionCardData {
  transactionId: string;
  type: 'send' | 'receive';
  amount: number;
  currency: string;
  recipientOrSender: string;
  status: string;
  hash?: string;
}

export interface PaymentCardData {
  recipientAddress: string;
  amount: number;
  currency: string;
  estimatedFee: number;
  checkoutUrl?: string;
}

export interface QRCardData {
  payload: string;
  qrDataUrl?: string;
  title?: string;
}

export interface EducationCardData {
  topic: string;
  summary: string;
  keyTakeaways: string[];
}

export interface InsightCardData {
  title: string;
  insightText: string;
  recommendation?: string;
}

export interface ErrorCardData {
  errorCode: string;
  errorMessage: string;
  suggestedFix?: string;
}
