/**
 * @file src/ai/renderers/renderers.test.ts
 * @description Unit test suite for Structured AI Response Card Renderers and Schemas.
 */

import { CardRendererRegistry } from './index';

export async function runRendererUnitTests() {
  const registry = new CardRendererRegistry();

  // Test 1: Verify all 8 card renderers registered
  const supported = registry.listSupportedCardTypes();
  if (supported.length !== 8) {
    throw new Error(`Test 1 Failed: Expected 8 card renderers, found ${supported.length}`);
  }

  // Test 2: BalanceCard Rendering
  const balanceCard = registry.renderCard('BalanceCard', {
    vaultAddress: '0x123',
    balance: 100,
    currency: 'NIM',
  });
  if (!balanceCard || balanceCard.cardType !== 'BalanceCard' || balanceCard.actions?.length !== 2) {
    throw new Error('Test 2 Failed: BalanceCard rendering failed');
  }

  // Test 3: PortfolioCard Rendering
  const portfolioCard = registry.renderCard('PortfolioCard', {
    totalUsdValue: 50000,
    topAssets: [{ symbol: 'BTC', name: 'Bitcoin', balance: 1, allocationPercentage: 100 }],
  });
  if (!portfolioCard || portfolioCard.cardType !== 'PortfolioCard') {
    throw new Error('Test 3 Failed: PortfolioCard rendering failed');
  }

  // Test 4: TransactionCard & PaymentCard Rendering
  const txCard = registry.renderCard('TransactionCard', {
    transactionId: 'tx-1',
    type: 'send',
    amount: 10,
    currency: 'ETH',
    recipientOrSender: '0xabc',
    status: 'completed',
  });
  const payCard = registry.renderCard('PaymentCard', {
    recipientAddress: '0xabc',
    amount: 50,
    currency: 'NIM',
    estimatedFee: 0.01,
  });
  if (!txCard || !payCard) {
    throw new Error('Test 4 Failed: Transaction/Payment card rendering failed');
  }

  // Test 5: QR, Education, Insight, & Error Card Renderers
  const qr = registry.renderCard('QRCard', { payload: 'nimiq:0x123' });
  const edu = registry.renderCard('EducationCard', { topic: 'Key Safety', summary: 'Keep private keys safe', keyTakeaways: [] });
  const ins = registry.renderCard('InsightCard', { title: 'Spending Alert', insightText: 'Spent 10% less' });
  const err = registry.renderCard('ErrorCard', { errorCode: 'ERR_INSUFFICIENT_FUNDS', errorMessage: 'Not enough balance' });

  if (!qr || !edu || !ins || !err) {
    throw new Error('Test 5 Failed: QR/Education/Insight/Error card rendering failed');
  }

  console.log('✅ ALL STRUCTURED RESPONSE CARD RENDERER UNIT TESTS PASSED (8/8 CARDS VERIFIED)');
}

runRendererUnitTests().catch((err) => {
  console.error(err);
  throw err;
});
