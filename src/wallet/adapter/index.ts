/**
 * @file src/wallet/adapter/index.ts
 * @description Wallet Adapter Layer translating AI Tool calls into domain DTOs.
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
import { IWalletService } from '../service';

/**
 * Interface for Wallet Adapter translation boundary between AI Tools and Business Service.
 */
export interface IWalletAdapter {
  getBalance(vaultAddress: string, assetSymbol?: string): Promise<BalanceDTO>;
  send(request: SendPaymentRequestDTO): Promise<SendPaymentResponseDTO>;
  history(vaultAddress: string, limit?: number): Promise<TransactionHistoryDTO>;
  portfolio(vaultAddress: string): Promise<PortfolioDTO>;
  requestPayment(vaultAddress: string, input: CreatePaymentRequestInputDTO): Promise<PaymentRequestDTO>;
}

/**
 * Production WalletAdapter implementing IWalletAdapter under Dependency Injection.
 */
export class WalletAdapter implements IWalletAdapter {
  constructor(private readonly walletService: IWalletService) {}

  public async getBalance(vaultAddress: string, assetSymbol?: string): Promise<BalanceDTO> {
    return await this.walletService.getBalance(vaultAddress, assetSymbol);
  }

  public async send(request: SendPaymentRequestDTO): Promise<SendPaymentResponseDTO> {
    return await this.walletService.send(request);
  }

  public async history(vaultAddress: string, limit?: number): Promise<TransactionHistoryDTO> {
    return await this.walletService.history(vaultAddress, limit);
  }

  public async portfolio(vaultAddress: string): Promise<PortfolioDTO> {
    return await this.walletService.portfolio(vaultAddress);
  }

  public async requestPayment(vaultAddress: string, input: CreatePaymentRequestInputDTO): Promise<PaymentRequestDTO> {
    return await this.walletService.requestPayment(vaultAddress, input);
  }
}
