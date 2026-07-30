/**
 * @file src/ai/prompts/prompts.test.ts
 * @description Unit test suite for Prompt Engine and system prompt builders.
 */

import {
  PromptEngine,
  PromptContext,
  WalletPromptBuilder,
  PaymentPromptBuilder,
  PortfolioPromptBuilder,
  EducationPromptBuilder,
  SecurityPromptBuilder,
  AssistantPromptBuilder,
} from './index';

export async function runPromptEngineUnitTests() {
  const engine = new PromptEngine();

  const mockContext: PromptContext = {
    conversationHistory: [],
    walletContext: {
      vaultAddress: '0x1234567890abcdef',
      availableBalance: 245.32,
      currency: 'NIM',
    },
    portfolioContext: {
      totalUsdValue: 125000.5,
      topAssets: [
        { symbol: 'BTC', name: 'Bitcoin', balance: 1.5, allocationPercentage: 65 },
        { symbol: 'ETH', name: 'Ethereum', balance: 12.0, allocationPercentage: 25 },
      ],
    },
    userSettings: {
      theme: 'dark',
      preferredCurrency: 'USD',
    },
    voiceMode: true,
    language: 'English',
    futureMemory: { key: 'test-value' },
  };

  // Test 1: Wallet Prompt Builder
  const walletPrompt = WalletPromptBuilder.build(mockContext);
  if (!walletPrompt.includes('0x1234567890abcdef') || !walletPrompt.includes('245.32 NIM')) {
    throw new Error('Test 1 Failed: Wallet prompt hydration failed');
  }

  // Test 2: Payment Prompt Builder
  const paymentPrompt = PaymentPromptBuilder.build(mockContext);
  if (!paymentPrompt.includes('Voice Mode: ACTIVE') || !paymentPrompt.includes('Source Vault: 0x1234567890abcdef')) {
    throw new Error('Test 2 Failed: Payment prompt hydration failed');
  }

  // Test 3: Portfolio Prompt Builder
  const portfolioPrompt = PortfolioPromptBuilder.build(mockContext);
  if (!portfolioPrompt.includes('$125000.50 USD') || !portfolioPrompt.includes('BTC: 65%')) {
    throw new Error('Test 3 Failed: Portfolio prompt hydration failed');
  }

  // Test 4: Education & Security Builders
  const eduPrompt = EducationPromptBuilder.build(mockContext);
  const secPrompt = SecurityPromptBuilder.build(mockContext);
  if (!eduPrompt.includes('Educational Stewardship') || !secPrompt.includes('Security Enclave')) {
    throw new Error('Test 4 Failed: Education/Security builders failed');
  }

  // Test 5: Assistant Prompt Builder & Engine Dispatch
  const assistantPrompt = AssistantPromptBuilder.build(mockContext);
  const enginePrompt = engine.buildSystemPrompt('assistant', mockContext);
  if (assistantPrompt !== enginePrompt || !enginePrompt.includes('Intelligent Crypto Stewardship AI Assistant')) {
    throw new Error('Test 5 Failed: PromptEngine dispatch mismatch');
  }

  console.log('✅ ALL PROMPT ENGINE UNIT TESTS PASSED (5/5)');
}

runPromptEngineUnitTests().catch((err) => {
  console.error(err);
  throw err;
});
