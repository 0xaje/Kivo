/**
 * @file src/wallet/wallet.test.ts
 * @description Unit test suite for 3-tier Wallet Adapter Architecture.
 */

import {
  WalletAdapter,
  WalletService,
  AbstractWalletRepository,
  BalanceDTO,
  SendPaymentRequestDTO,
  SendPaymentResponseDTO,
  TransactionHistoryDTO,
  PortfolioDTO,
  CreatePaymentRequestInputDTO,
  PaymentRequestDTO,
} from './index';

// Concrete Test Repository implementation (Mock Boundary for Protocol APIs)
class MockWalletRepository extends AbstractWalletRepository {
  public async getBalance(vaultAddress: string, assetSymbol: string = 'ETH'): Promise<BalanceDTO> {
    return {
      vaultAddress,
      assetSymbol,
      balance: 10.5,
      usdValue: 35000,
    };
  }

  public async send(request: SendPaymentRequestDTO): Promise<SendPaymentResponseDTO> {
    return {
      transactionHash: '0xtest-hash-12345',
      recipientAddress: request.recipientAddress,
      amount: request.amount,
      assetSymbol: request.assetSymbol,
      status: 'signed',
      timestamp: Date.now(),
    };
  }

  public async history(vaultAddress: string, _limit?: number): Promise<TransactionHistoryDTO> {
    return {
      vaultAddress,
      totalCount: 1,
      transactions: [
        {
          id: 'tx-1',
          type: 'send',
          amount: 5,
          currency: 'ETH',
          recipientOrSender: '0xrecipient',
          timestamp: 'Just now',
          status: 'completed',
        },
      ],
    };
  }

  public async portfolio(vaultAddress: string): Promise<PortfolioDTO> {
    return {
      totalUsdValue: 50000,
      assets: [
        {
          symbol: 'ETH',
          name: 'Ethereum',
          balance: 10,
          priceUsd: 3500,
          allocationPercentage: 100,
        },
      ],
      updatedAt: Date.now(),
    };
  }

  public async requestPayment(
    vaultAddress: string,
    input: CreatePaymentRequestInputDTO
  ): Promise<PaymentRequestDTO> {
    return {
      requestId: 'req-1',
      paymentUri: 'nimiq:0x123',
      qrPayload: 'nimiq:0x123',
      recipientAddress: vaultAddress,
      amount: input.amount,
      assetSymbol: input.assetSymbol || 'NIM',
    };
  }
}

export async function runWalletArchitectureUnitTests() {
  // Dependency Injection assembly
  const repository = new MockWalletRepository();
  const service = new WalletService(repository);
  const adapter = new WalletAdapter(service);

  const testVault = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';

  // Test 1: getBalance()
  const balanceRes = await adapter.getBalance(testVault, 'ETH');
  if (balanceRes.balance !== 10.5 || balanceRes.assetSymbol !== 'ETH') {
    throw new Error('Test 1 Failed: getBalance adapter execution mismatch');
  }

  // Test 2: send()
  const sendRes = await adapter.send({
    recipientAddress: '0xrecipient123',
    amount: 2.5,
    assetSymbol: 'ETH',
  });
  if (sendRes.status !== 'signed' || sendRes.amount !== 2.5) {
    throw new Error('Test 2 Failed: send payment adapter execution mismatch');
  }

  // Test 3: history()
  const historyRes = await adapter.history(testVault);
  if (historyRes.totalCount !== 1 || historyRes.transactions.length !== 1) {
    throw new Error('Test 3 Failed: history adapter execution mismatch');
  }

  // Test 4: portfolio()
  const portfolioRes = await adapter.portfolio(testVault);
  if (portfolioRes.totalUsdValue !== 50000 || portfolioRes.assets.length !== 1) {
    throw new Error('Test 4 Failed: portfolio adapter execution mismatch');
  }

  // Test 5: requestPayment()
  const requestRes = await adapter.requestPayment(testVault, { amount: 50, assetSymbol: 'NIM' });
  if (requestRes.requestId !== 'req-1' || requestRes.recipientAddress !== testVault) {
    throw new Error('Test 5 Failed: requestPayment adapter execution mismatch');
  }

  console.log('✅ ALL WALLET ADAPTER ARCHITECTURE UNIT TESTS PASSED (5/5)');
}

runWalletArchitectureUnitTests().catch((err) => {
  console.error(err);
  throw err;
});
