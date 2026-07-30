/**
 * @file src/ai/memory/memory.test.ts
 * @description Unit test suite for Production Conversation Memory and Backend Sync.
 */

import {
  LocalConversationMemoryStore,
  IMemorySyncBackend,
  ConversationMemoryState,
  MemorySummarizer,
} from './index';

export async function runMemoryUnitTests() {
  const store = new LocalConversationMemoryStore();
  const sessionId = 'test-session-mem-1';

  // Clear previous test run state
  await store.clearSession(sessionId);

  // Test 1: Append Messages & History Truncation
  await store.appendMessage(sessionId, { role: 'user', content: 'Hello Kivo' });
  await store.appendMessage(sessionId, { role: 'assistant', content: 'Greetings! How can I assist with your vault?' });

  const messages = await store.getMessages({ sessionId, limit: 10 });
  if (messages.length !== 2 || messages[0].content !== 'Hello Kivo') {
    throw new Error('Test 1 Failed: Message history storage mismatch');
  }

  // Test 2: Intent & Wallet Context Updates
  await store.updateLastIntent(sessionId, 'CHECK_BALANCE');
  await store.updateWalletContext(sessionId, { vaultAddress: '0xabc123', availableBalance: 100, currency: 'NIM' });

  const state1 = await store.getState(sessionId);
  if (state1.lastIntent !== 'CHECK_BALANCE' || state1.walletContext?.availableBalance !== 100) {
    throw new Error('Test 2 Failed: Wallet context or lastIntent mismatch');
  }

  // Test 3: Recent Recipients & Portfolio Snapshot
  await store.addRecentRecipient(sessionId, { address: '0xrecipient1', name: 'Alice' });
  await store.updatePortfolioSnapshot(sessionId, { totalUsdValue: 50000 });

  const state2 = await store.getState(sessionId);
  if (state2.recentRecipients.length !== 1 || state2.lastPortfolioSnapshot?.totalUsdValue !== 50000) {
    throw new Error('Test 3 Failed: Recent recipient or portfolio snapshot mismatch');
  }

  // Test 4: AI Action Logging & Summary Generation
  await store.logAIAction(sessionId, 'EXECUTE_PAYMENT', true);
  const summary = await store.generateSummary(sessionId);
  if (!summary.includes('CHECK_BALANCE') || !summary.includes('100 NIM')) {
    throw new Error('Test 4 Failed: Summary generation failed');
  }

  // Test 5: Backend Sync Provider Interface Adapter Verification
  class MockCloudBackendSync implements IMemorySyncBackend {
    public readonly backendId = 'mock_cloud_backend';
    public syncedState?: ConversationMemoryState;

    public async syncState(s: ConversationMemoryState): Promise<boolean> {
      this.syncedState = s;
      return true;
    }

    public async fetchState(): Promise<ConversationMemoryState | null> {
      return this.syncedState || null;
    }
  }

  const cloudSync = new MockCloudBackendSync();
  const syncResult = await store.syncToBackend(sessionId, cloudSync);
  if (!syncResult || cloudSync.syncedState?.sessionId !== sessionId) {
    throw new Error('Test 5 Failed: Backend sync adapter failed');
  }

  console.log('✅ ALL CONVERSATION MEMORY UNIT TESTS PASSED (5/5)');
}

runMemoryUnitTests().catch((err) => {
  console.error(err);
  throw err;
});
