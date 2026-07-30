/**
 * @file src/ai/renderers/cards.ts
 * @description Discrete Card Renderer strategies for generating structured card payloads.
 */

import {
  StructuredCardType,
  StructuredCardPayload,
  BalanceCardData,
  PortfolioCardData,
  TransactionCardData,
  PaymentCardData,
  QRCardData,
  EducationCardData,
  InsightCardData,
  ErrorCardData,
} from './types';

export interface ICardRenderer<T = any> {
  readonly cardType: StructuredCardType;
  validateData(data: unknown): data is T;
  createPayload(data: T): StructuredCardPayload<T>;
}

/**
 * 1. BalanceCard Renderer
 */
export class BalanceCardRenderer implements ICardRenderer<BalanceCardData> {
  public readonly cardType: StructuredCardType = 'BalanceCard';

  public validateData(data: unknown): data is BalanceCardData {
    const d = data as BalanceCardData;
    return !!d && typeof d.vaultAddress === 'string' && typeof d.balance === 'number';
  }

  public createPayload(data: BalanceCardData): StructuredCardPayload<BalanceCardData> {
    return {
      cardType: this.cardType,
      title: 'Current Vault Balance',
      subtitle: `${data.balance} ${data.currency}`,
      data,
      actions: [
        { label: 'Send Funds', actionId: 'OPEN_SEND_MODAL' },
        { label: 'View Ledger', actionId: 'OPEN_HISTORY_TAB' },
      ],
    };
  }
}

/**
 * 2. PortfolioCard Renderer
 */
export class PortfolioCardRenderer implements ICardRenderer<PortfolioCardData> {
  public readonly cardType: StructuredCardType = 'PortfolioCard';

  public validateData(data: unknown): data is PortfolioCardData {
    const d = data as PortfolioCardData;
    return !!d && typeof d.totalUsdValue === 'number' && Array.isArray(d.topAssets);
  }

  public createPayload(data: PortfolioCardData): StructuredCardPayload<PortfolioCardData> {
    return {
      cardType: this.cardType,
      title: 'Portfolio Valuation',
      subtitle: `$${data.totalUsdValue.toFixed(2)} USD`,
      data,
      actions: [{ label: 'View Full Dashboard', actionId: 'OPEN_PORTFOLIO_TAB' }],
    };
  }
}

/**
 * 3. TransactionCard Renderer
 */
export class TransactionCardRenderer implements ICardRenderer<TransactionCardData> {
  public readonly cardType: StructuredCardType = 'TransactionCard';

  public validateData(data: unknown): data is TransactionCardData {
    const d = data as TransactionCardData;
    return !!d && typeof d.transactionId === 'string' && typeof d.amount === 'number';
  }

  public createPayload(data: TransactionCardData): StructuredCardPayload<TransactionCardData> {
    return {
      cardType: this.cardType,
      title: data.type === 'send' ? 'Payment Transfer Sent' : 'Payment Received',
      subtitle: `${data.amount} ${data.currency}`,
      data,
      actions: [{ label: 'Inspect SHA-256 Hash', actionId: 'INSPECT_HASH', params: { hash: data.hash } }],
    };
  }
}

/**
 * 4. PaymentCard Renderer
 */
export class PaymentCardRenderer implements ICardRenderer<PaymentCardData> {
  public readonly cardType: StructuredCardType = 'PaymentCard';

  public validateData(data: unknown): data is PaymentCardData {
    const d = data as PaymentCardData;
    return !!d && typeof d.recipientAddress === 'string' && typeof d.amount === 'number';
  }

  public createPayload(data: PaymentCardData): StructuredCardPayload<PaymentCardData> {
    return {
      cardType: this.cardType,
      title: 'Payment Checkout Confirmation',
      subtitle: `Send ${data.amount} ${data.currency} to ${data.recipientAddress}`,
      data,
      actions: [
        { label: 'Confirm and Send', actionId: 'CONFIRM_SEND_PAYMENT' },
        { label: 'Cancel Transaction', actionId: 'CANCEL_CHECKOUT' },
      ],
    };
  }
}

/**
 * 5. QRCard Renderer
 */
export class QRCardRenderer implements ICardRenderer<QRCardData> {
  public readonly cardType: StructuredCardType = 'QRCard';

  public validateData(data: unknown): data is QRCardData {
    const d = data as QRCardData;
    return !!d && typeof d.payload === 'string';
  }

  public createPayload(data: QRCardData): StructuredCardPayload<QRCardData> {
    return {
      cardType: this.cardType,
      title: data.title || 'Web3 QR Payment Payload',
      data,
      actions: [{ label: 'Copy Address', actionId: 'COPY_PAYLOAD' }],
    };
  }
}

/**
 * 6. EducationCard Renderer
 */
export class EducationCardRenderer implements ICardRenderer<EducationCardData> {
  public readonly cardType: StructuredCardType = 'EducationCard';

  public validateData(data: unknown): data is EducationCardData {
    const d = data as EducationCardData;
    return !!d && typeof d.topic === 'string' && typeof d.summary === 'string';
  }

  public createPayload(data: EducationCardData): StructuredCardPayload<EducationCardData> {
    return {
      cardType: this.cardType,
      title: `Web3 Guide: ${data.topic}`,
      data,
    };
  }
}

/**
 * 7. InsightCard Renderer
 */
export class InsightCardRenderer implements ICardRenderer<InsightCardData> {
  public readonly cardType: StructuredCardType = 'InsightCard';

  public validateData(data: unknown): data is InsightCardData {
    const d = data as InsightCardData;
    return !!d && typeof d.title === 'string' && typeof d.insightText === 'string';
  }

  public createPayload(data: InsightCardData): StructuredCardPayload<InsightCardData> {
    return {
      cardType: this.cardType,
      title: data.title,
      data,
    };
  }
}

/**
 * 8. ErrorCard Renderer
 */
export class ErrorCardRenderer implements ICardRenderer<ErrorCardData> {
  public readonly cardType: StructuredCardType = 'ErrorCard';

  public validateData(data: unknown): data is ErrorCardData {
    const d = data as ErrorCardData;
    return !!d && typeof d.errorCode === 'string' && typeof d.errorMessage === 'string';
  }

  public createPayload(data: ErrorCardData): StructuredCardPayload<ErrorCardData> {
    return {
      cardType: this.cardType,
      title: `Error: ${data.errorCode}`,
      subtitle: data.errorMessage,
      data,
      actions: [{ label: 'Retry Action', actionId: 'RETRY_LAST_ACTION' }],
    };
  }
}
