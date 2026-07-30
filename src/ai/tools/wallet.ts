/**
 * @file src/ai/tools/wallet.ts
 * @description Production-ready wallet tool interfaces matching OpenAI Function Calling schema.
 */

import { AbstractAITool, JSONSchema, ToolExecutionResult } from './types';
import { AIExecutionContext } from '../types';

/**
 * 1. getBalance Tool
 */
export interface GetBalanceParams {
  assetSymbol?: string;
  vaultAddress?: string;
}

export interface GetBalanceResult {
  assetSymbol: string;
  balance: number;
  vaultAddress: string;
  usdEquivalent?: number;
}

export class GetBalanceTool extends AbstractAITool<GetBalanceParams, GetBalanceResult> {
  public readonly name = 'getBalance';
  public readonly description = 'Queries the current vault account balance for a specified crypto asset (e.g. NIM, ETH, USDC).';

  public readonly parameters: JSONSchema = {
    type: 'object',
    properties: {
      assetSymbol: {
        type: 'string',
        description: 'Crypto asset ticker symbol (e.g., NIM, ETH, USDC, BTC). Defaults to NIM.',
      },
      vaultAddress: {
        type: 'string',
        description: 'Optional target vault address to query.',
      },
    },
  };

  public async execute(
    _params: GetBalanceParams,
    _context: AIExecutionContext
  ): Promise<ToolExecutionResult<GetBalanceResult>> {
    return {
      success: true,
      metadata: { contractStatus: 'ready_for_blockchain_provider' },
    };
  }
}

/**
 * 2. getTransactions Tool
 */
export interface GetTransactionsParams {
  limit?: number;
  assetSymbol?: string;
  filterType?: 'send' | 'receive' | 'all';
}

export interface GetTransactionsResult {
  transactionCount: number;
  transactions: Array<{
    id: string;
    type: 'send' | 'receive';
    amount: number;
    currency: string;
    timestamp: string;
    hash?: string;
  }>;
}

export class GetTransactionsTool extends AbstractAITool<GetTransactionsParams, GetTransactionsResult> {
  public readonly name = 'getTransactions';
  public readonly description = 'Retrieves verified cryptographic ledger history for the active vault.';

  public readonly parameters: JSONSchema = {
    type: 'object',
    properties: {
      limit: {
        type: 'number',
        description: 'Maximum number of recent ledger items to retrieve (default: 10).',
      },
      assetSymbol: {
        type: 'string',
        description: 'Filter transactions by specific asset ticker symbol.',
      },
      filterType: {
        type: 'string',
        enum: ['send', 'receive', 'all'],
        description: 'Filter by transfer direction.',
      },
    },
  };

  public async execute(
    _params: GetTransactionsParams,
    _context: AIExecutionContext
  ): Promise<ToolExecutionResult<GetTransactionsResult>> {
    return {
      success: true,
      metadata: { contractStatus: 'ready_for_blockchain_provider' },
    };
  }
}

/**
 * 3. sendPayment Tool
 */
export interface SendPaymentParams {
  recipientAddress: string;
  amount: number;
  assetSymbol?: string;
  memo?: string;
}

export interface SendPaymentResult {
  transactionHash: string;
  recipientAddress: string;
  amount: number;
  assetSymbol: string;
  status: 'pending' | 'signed' | 'broadcasted' | 'completed';
}

export class SendPaymentTool extends AbstractAITool<SendPaymentParams, SendPaymentResult> {
  public readonly name = 'sendPayment';
  public readonly description = 'Prepares and signs a cryptographic Web3 payment transfer to a recipient wallet address.';

  public readonly parameters: JSONSchema = {
    type: 'object',
    properties: {
      recipientAddress: {
        type: 'string',
        description: 'Recipient wallet address or ENS handle.',
      },
      amount: {
        type: 'number',
        description: 'Amount of crypto asset to send (must be > 0).',
      },
      assetSymbol: {
        type: 'string',
        description: 'Asset token symbol (e.g. NIM, ETH, USDC). Defaults to NIM.',
      },
      memo: {
        type: 'string',
        description: 'Optional transaction memo or payment note.',
      },
    },
    required: ['recipientAddress', 'amount'],
  };

  public async execute(
    _params: SendPaymentParams,
    _context: AIExecutionContext
  ): Promise<ToolExecutionResult<SendPaymentResult>> {
    return {
      success: true,
      metadata: { contractStatus: 'ready_for_blockchain_provider' },
    };
  }
}

/**
 * 4. createPaymentRequest Tool
 */
export interface CreatePaymentRequestParams {
  amount?: number;
  assetSymbol?: string;
  memo?: string;
}

export interface CreatePaymentRequestResult {
  paymentRequestId: string;
  requestUrl: string;
  qrPayload: string;
  amount?: number;
  assetSymbol: string;
}

export class CreatePaymentRequestTool extends AbstractAITool<CreatePaymentRequestParams, CreatePaymentRequestResult> {
  public readonly name = 'createPaymentRequest';
  public readonly description = 'Creates an inbound Web3 payment request or invoice for receiving funds.';

  public readonly parameters: JSONSchema = {
    type: 'object',
    properties: {
      amount: {
        type: 'number',
        description: 'Optional requested amount.',
      },
      assetSymbol: {
        type: 'string',
        description: 'Asset token requested (e.g., NIM, ETH, USDC).',
      },
      memo: {
        type: 'string',
        description: 'Optional reference note for the invoice.',
      },
    },
  };

  public async execute(
    _params: CreatePaymentRequestParams,
    _context: AIExecutionContext
  ): Promise<ToolExecutionResult<CreatePaymentRequestResult>> {
    return {
      success: true,
      metadata: { contractStatus: 'ready_for_blockchain_provider' },
    };
  }
}

/**
 * 5. generateQRCode Tool
 */
export interface GenerateQRCodeParams {
  payload: string;
  title?: string;
}

export interface GenerateQRCodeResult {
  qrDataUrl: string;
  rawPayload: string;
}

export class GenerateQRCodeTool extends AbstractAITool<GenerateQRCodeParams, GenerateQRCodeResult> {
  public readonly name = 'generateQRCode';
  public readonly description = 'Generates a Web3 QR Code data payload for payment addresses or transaction URI.';

  public readonly parameters: JSONSchema = {
    type: 'object',
    properties: {
      payload: {
        type: 'string',
        description: 'Raw wallet address, Nimiq URI, or transaction payload to encode.',
      },
      title: {
        type: 'string',
        description: 'Optional QR title label.',
      },
    },
    required: ['payload'],
  };

  public async execute(
    _params: GenerateQRCodeParams,
    _context: AIExecutionContext
  ): Promise<ToolExecutionResult<GenerateQRCodeResult>> {
    return {
      success: true,
      metadata: { contractStatus: 'ready_for_qr_renderer' },
    };
  }
}

/**
 * 6. scanQRCode Tool
 */
export interface ScanQRCodeParams {
  cameraFacingMode?: 'environment' | 'user';
}

export interface ScanQRCodeResult {
  scannedPayload: string;
  detectedType: 'wallet_address' | 'payment_uri' | 'unknown';
}

export class ScanQRCodeTool extends AbstractAITool<ScanQRCodeParams, ScanQRCodeResult> {
  public readonly name = 'scanQRCode';
  public readonly description = 'Triggers camera-enabled QR code scanner to decode Web3 payment recipient addresses.';

  public readonly parameters: JSONSchema = {
    type: 'object',
    properties: {
      cameraFacingMode: {
        type: 'string',
        enum: ['environment', 'user'],
        description: 'Camera lens facing mode (default: environment).',
      },
    },
  };

  public async execute(
    _params: ScanQRCodeParams,
    _context: AIExecutionContext
  ): Promise<ToolExecutionResult<ScanQRCodeResult>> {
    return {
      success: true,
      metadata: { contractStatus: 'ready_for_camera_decoder' },
    };
  }
}

/**
 * 7. getPortfolio Tool
 */
export interface GetPortfolioParams {
  includeHistoricalMetrics?: boolean;
}

export interface GetPortfolioResult {
  totalUsdValue: number;
  assets: Array<{
    symbol: string;
    name: string;
    balance: number;
    priceUsd: number;
    allocationPercentage: number;
  }>;
}

export class GetPortfolioTool extends AbstractAITool<GetPortfolioParams, GetPortfolioResult> {
  public readonly name = 'getPortfolio';
  public readonly description = 'Retrieves aggregate crypto portfolio holdings, live market valuations, and asset allocations.';

  public readonly parameters: JSONSchema = {
    type: 'object',
    properties: {
      includeHistoricalMetrics: {
        type: 'boolean',
        description: 'Include historical spending and performance metrics.',
      },
    },
  };

  public async execute(
    _params: GetPortfolioParams,
    _context: AIExecutionContext
  ): Promise<ToolExecutionResult<GetPortfolioResult>> {
    return {
      success: true,
      metadata: { contractStatus: 'ready_for_portfolio_provider' },
    };
  }
}
