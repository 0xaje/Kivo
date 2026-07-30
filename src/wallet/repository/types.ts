/**
 * @file src/wallet/repository/types.ts
 * @description Wallet Repository interfaces and abstract base class.
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

/**
 * Interface for Data Access & Blockchain Protocol Boundary Repository.
 */
export interface IWalletRepository {
  getBalance(vaultAddress: string, assetSymbol?: string): Promise<BalanceDTO>;
  send(request: SendPaymentRequestDTO): Promise<SendPaymentResponseDTO>;
  history(vaultAddress: string, limit?: number): Promise<TransactionHistoryDTO>;
  portfolio(vaultAddress: string): Promise<PortfolioDTO>;
  requestPayment(vaultAddress: string, input: CreatePaymentRequestInputDTO): Promise<PaymentRequestDTO>;
}

/**
 * Abstract Base Class for Wallet Repositories (SOLID Dependency Inversion).
 */
export abstract class AbstractWalletRepository implements IWalletRepository {
  public abstract getBalance(vaultAddress: string, assetSymbol?: string): Promise<BalanceDTO>;
  public abstract send(request: SendPaymentRequestDTO): Promise<SendPaymentResponseDTO>;
  public abstract history(vaultAddress: string, limit?: number): Promise<TransactionHistoryDTO>;
  public abstract portfolio(vaultAddress: string): Promise<PortfolioDTO>;
  public abstract requestPayment(vaultAddress: string, input: CreatePaymentRequestInputDTO): Promise<PaymentRequestDTO>;
}
