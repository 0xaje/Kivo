/**
 * @file src/wallet/nimiq.test.ts
 * @description Unit test suite for Nimiq Protocol API integration and NimiqWalletRepository.
 */

import { NimiqUtils, NimiqWalletRepository, WalletService, WalletAdapter } from './index';

export async function runNimiqProtocolUnitTests() {
  const nimiqAddress = 'NQ54 1A2B 3C4D 5E6F 7G8H 9I0J 1K2L';

  // Test 1: Nimiq Address Validation & Formatting
  if (!NimiqUtils.isValidAddress(nimiqAddress)) {
    throw new Error('Test 1 Failed: Valid Nimiq address check failed');
  }

  // Test 2: Luna / NIM Conversions
  const luna = NimiqUtils.nimToLuna(25);
  const nim = NimiqUtils.lunaToNim(luna);
  if (luna !== 2500000 || nim !== 25) {
    throw new Error('Test 2 Failed: Luna conversion calculation mismatch');
  }

  // Test 3: Nimiq Payment URI Builder
  const paymentUri = NimiqUtils.buildPaymentUri(nimiqAddress, 25, 'Coffee');
  if (!paymentUri.startsWith('nimiq:NQ541A2B3C4D5E6F7G8H9I0J1K2L') || !paymentUri.includes('value=2500000')) {
    throw new Error('Test 3 Failed: Nimiq Payment URI construction failed');
  }

  // Test 4: NimiqWalletRepository 3-Tier Assembly
  const repository = new NimiqWalletRepository();
  const service = new WalletService(repository);
  const adapter = new WalletAdapter(service);

  // Test 5: Live getBalance & Request Payment Execution
  const balance = await adapter.getBalance(nimiqAddress, 'NIM');
  if (!balance.vaultAddress.includes('NQ54')) {
    throw new Error('Test 5 Failed: Nimiq vault balance address mismatch');
  }

  const reqPayment = await adapter.requestPayment(nimiqAddress, { amount: 25, memo: 'Coffee' });
  if (!reqPayment.qrPayload.includes('nimiq:NQ54')) {
    throw new Error('Test 5 Failed: Nimiq payment request payload mismatch');
  }

  console.log('✅ ALL NIMIQ PROTOCOL & WALLET ADAPTER UNIT TESTS PASSED (5/5)');
}

runNimiqProtocolUnitTests().catch((err) => {
  console.error(err);
  throw err;
});
