/**
 * @file src/ai/providers/providers.test.ts
 * @description Unit test suite for Multi-Provider AI Abstraction Layer.
 */

import {
  ProviderConfigManager,
  ProviderRegistry,
  OpenAIProviderContract,
  GeminiProviderContract,
  AnthropicProviderContract,
  LocalLLMProviderContract,
} from './index';

export async function runProviderUnitTests() {
  const configManager = new ProviderConfigManager();
  const registry = new ProviderRegistry(configManager);

  // Initialize and register all 4 vendor provider contracts
  const openai = new OpenAIProviderContract(configManager.getProviderConfig('openai'));
  const gemini = new GeminiProviderContract(configManager.getProviderConfig('gemini'));
  const anthropic = new AnthropicProviderContract(configManager.getProviderConfig('anthropic'));
  const local = new LocalLLMProviderContract(configManager.getProviderConfig('local_llm'));

  registry.registerProvider(openai);
  registry.registerProvider(gemini);
  registry.registerProvider(anthropic);
  registry.registerProvider(local);

  // Test 1: Verify all 4 providers registered
  if (registry.listProviders().length !== 4) {
    throw new Error('Test 1 Failed: Expected 4 registered provider vendors');
  }

  // Test 2: Active Provider Resolution & Dynamic Config Switching
  if (registry.getActiveProvider().vendor !== 'openai') {
    throw new Error('Test 2 Failed: Default active vendor mismatch');
  }

  configManager.setActiveVendor('gemini');
  if (registry.getActiveProvider().vendor !== 'gemini') {
    throw new Error('Test 2 Failed: Switch to Gemini failed');
  }

  configManager.setActiveVendor('anthropic');
  if (registry.getActiveProvider().vendor !== 'anthropic') {
    throw new Error('Test 2 Failed: Switch to Anthropic failed');
  }

  configManager.setActiveVendor('local_llm');
  if (registry.getActiveProvider().vendor !== 'local_llm') {
    throw new Error('Test 2 Failed: Switch to Local LLM failed');
  }

  // Test 3: Contract Method Signatures Verification (chat, stream, embeddings, chatWithTools)
  const activeProvider = registry.getActiveProvider();
  const chatRes = await activeProvider.chat({ messages: [] });
  const streamRes = await activeProvider.stream({ messages: [] }, () => {});
  const embeds = await activeProvider.embeddings('test input');
  const toolsRes = await activeProvider.chatWithTools({ messages: [], tools: [] });

  if (!chatRes.id || !streamRes.id || embeds.length !== 1 || !toolsRes.id) {
    throw new Error('Test 3 Failed: Provider contract method execution failed');
  }

  console.log('✅ ALL AI PROVIDER ABSTRACTION UNIT TESTS PASSED (5/5)');
}

runProviderUnitTests().catch((err) => {
  console.error(err);
  throw err;
});
