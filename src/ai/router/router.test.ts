/**
 * @file src/ai/router/router.test.ts
 * @description Unit test suite for the AI Intent Router parser architecture.
 */

import { IntentRouter, IIntentParserStrategy, IntentAnalysisResult } from './index';

export async function runIntentRouterUnitTests() {
  const router = new IntentRouter();

  // Test 1: CHECK_BALANCE
  const balanceResult = await router.classifyIntent('Check my NIM balance');
  if (balanceResult.intent !== 'CHECK_BALANCE' || balanceResult.entities.currency !== 'NIM') {
    throw new Error(`Test 1 Failed: Expected CHECK_BALANCE, got ${balanceResult.intent}`);
  }

  // Test 2: SEND_PAYMENT
  const sendResult = await router.classifyIntent('Send 50 NIM to 0x123');
  if (sendResult.intent !== 'SEND_PAYMENT' || sendResult.entities.amount !== 50 || sendResult.entities.currency !== 'NIM') {
    throw new Error(`Test 2 Failed: Expected SEND_PAYMENT with amount 50 NIM`);
  }

  // Test 3: SHOW_PORTFOLIO
  const portfolioResult = await router.classifyIntent('Show my portfolio allocation');
  if (portfolioResult.intent !== 'SHOW_PORTFOLIO') {
    throw new Error(`Test 3 Failed: Expected SHOW_PORTFOLIO`);
  }

  // Test 4: SCAN_QR
  const qrResult = await router.classifyIntent('Scan QR code with camera');
  if (qrResult.intent !== 'SCAN_QR') {
    throw new Error(`Test 4 Failed: Expected SCAN_QR`);
  }

  // Test 5: UNKNOWN
  const unknownResult = await router.classifyIntent('Random gibberish text 123');
  if (unknownResult.intent !== 'UNKNOWN') {
    throw new Error(`Test 5 Failed: Expected UNKNOWN`);
  }

  // Test 6: Custom Strategy Extension (Open/Closed Principle Verification)
  class CustomSwapStrategy implements IIntentParserStrategy {
    public readonly intent = 'UNKNOWN';
    public readonly name = 'CustomSwapStrategy';

    public evaluate(tokens: string[]): number {
      const lower = tokens.map((t) => t.toLowerCase());
      return lower.includes('swap') ? 0.99 : 0;
    }

    public parse(): IntentAnalysisResult {
      return {
        intent: 'UNKNOWN',
        confidence: 0.99,
        entities: { custom: true },
        nextAction: 'EXECUTE_SWAP',
      };
    }
  }

  router.registerStrategy(new CustomSwapStrategy());
  const swapResult = await router.classifyIntent('Swap ETH to USDC');
  if (swapResult.nextAction !== 'EXECUTE_SWAP') {
    throw new Error(`Test 6 Failed: Custom Strategy extension failed`);
  }

  console.log('✅ ALL INTENT ROUTER UNIT TESTS PASSED (6/6)');
}

runIntentRouterUnitTests().catch((err) => {
  console.error(err);
  throw err;
});
