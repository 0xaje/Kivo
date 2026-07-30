/**
 * @file src/wallet/service/index.ts
 * @description Business Logic & Security Validation Service Layer.
 */

import {
  BalanceDTO,
  SendPaymentRequestDTO,
  SendPaymentResponseDTO,
  TransactionHistoryDTO,
  PortfolioDTO,
  CreatePaymentRequestInputDTO,
  PaymentRequestDTO,
} from '../types';
import { IWalletRepository } from '../repository';

/**
 * Interface for Business Service Layer.
 */
export interface IWalletService {
  getBalance(vaultAddress: string, assetSymbol?: string): Promise<BalanceDTO>;
  send(request: SendPaymentRequestDTO): Promise<SendPaymentResponseDTO>;
  history(vaultAddress: string, limit?: number): Promise<TransactionHistoryDTO>;
  portfolio(vaultAddress: string): Promise<PortfolioDTO>;
  requestPayment(vaultAddress: string, input: CreatePaymentRequestInputDTO): Promise<PaymentRequestDTO>;
}

/**
 * Production WalletService implementing business logic and dependency injection.
 */
export class WalletService implements IWalletService {
  constructor(private readonly repository: IWalletRepository) {}

  public async getBalance(vaultAddress: string, assetSymbol: string = 'ETH'): Promise<BalanceDTO> {
    if (!vaultAddress) {
      throw new Error('Vault address is required for balance queries.');
    }
    return await this.repository.getBalance(vaultAddress, assetSymbol);
  }

  public async send(request: SendPaymentRequestDTO): Promise<SendPaymentResponseDTO> {
    if (!request.recipientAddress) {
      throw new Error('Recipient address is required for payment transfers.');
    }
    if (!request.amount || request.amount <= 0) {
      throw new Error('Transfer amount must be greater than 0.');
    }
    return await this.repository.send(request);
  }

  public async history(vaultAddress: string, limit: number = 20): Promise<TransactionHistoryDTO> {
    if (!vaultAddress) {
      throw new Error('Vault address is required for ledger history queries.');
    }
    return await this.repository.history(vaultAddress, limit);
  }

  public async portfolio(vaultAddress: string): Promise<PortfolioDTO> {
    if (!vaultAddress) {
      throw new Error('Vault address is required for portfolio queries.');
    }
    return await this.repository.portfolio(vaultAddress);
  }

  public async requestPayment(vaultAddress: string, input: CreatePaymentRequestInputDTO): Promise<PaymentRequestDTO> {
    if (!vaultAddress) {
      throw new Error('Vault address is required to create payment requests.');
    }
    return await this.repository.requestPayment(vaultAddress, input);
  }
}
