/**
 * @file src/ai/memory/store.ts
 * @description Production Local Conversation Memory Store with persistence and backend sync support.
 */

import { LLMMessage } from '../types';
import { IntentType } from '../router';
import { WalletPromptContext, PortfolioPromptContext } from '../prompts';
import {
  IMemoryProvider,
  IMemorySyncBackend,
  ConversationMemoryState,
  MemoryQueryOptions,
  RecentRecipient,
} from './types';
import { MemorySummarizer } from './summarizer';

export class LocalConversationMemoryStore implements IMemoryProvider {
  private inMemoryMap = new Map<string, ConversationMemoryState>();

  private getStorageKey(sessionId: string): string {
    return `kivo_memory_${sessionId}`;
  }

  public async getState(sessionId: string): Promise<ConversationMemoryState> {
    if (this.inMemoryMap.has(sessionId)) {
      return this.inMemoryMap.get(sessionId)!;
    }

    const key = this.getStorageKey(sessionId);
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(key);
      if (saved) {
        try {
          const parsed: ConversationMemoryState = JSON.parse(saved);
          this.inMemoryMap.set(sessionId, parsed);
          return parsed;
        } catch (e) {}
      }
    }

    const newState: ConversationMemoryState = {
      sessionId,
      conversationHistory: [],
      recentRecipients: [],
      lastAIActions: [],
      updatedAt: Date.now(),
    };

    this.inMemoryMap.set(sessionId, newState);
    this.saveToStorage(newState);
    return newState;
  }

  private saveToStorage(state: ConversationMemoryState): void {
    state.updatedAt = Date.now();
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(this.getStorageKey(state.sessionId), JSON.stringify(state));
      } catch (e) {}
    }
  }

  public async appendMessage(sessionId: string, message: LLMMessage): Promise<void> {
    const state = await this.getState(sessionId);
    state.conversationHistory.push(message);
    state.conversationHistory = MemorySummarizer.truncateWindow(state.conversationHistory, 30);
    this.saveToStorage(state);
  }

  public async getMessages(options: MemoryQueryOptions): Promise<LLMMessage[]> {
    const state = await this.getState(options.sessionId);
    const limit = options.limit || 20;
    return MemorySummarizer.truncateWindow(state.conversationHistory, limit);
  }

  public async updateLastIntent(sessionId: string, intent: IntentType): Promise<void> {
    const state = await this.getState(sessionId);
    state.lastIntent = intent;
    this.saveToStorage(state);
  }

  public async updateWalletContext(sessionId: string, walletCtx: WalletPromptContext): Promise<void> {
    const state = await this.getState(sessionId);
    state.walletContext = { ...state.walletContext, ...walletCtx };
    this.saveToStorage(state);
  }

  public async addRecentRecipient(
    sessionId: string,
    recipient: Omit<RecentRecipient, 'lastUsedTimestamp'>
  ): Promise<void> {
    const state = await this.getState(sessionId);
    const filtered = state.recentRecipients.filter((r) => r.address !== recipient.address);
    filtered.unshift({
      ...recipient,
      lastUsedTimestamp: Date.now(),
    });

    state.recentRecipients = filtered.slice(0, 10);
    this.saveToStorage(state);
  }

  public async updatePortfolioSnapshot(sessionId: string, portfolioCtx: PortfolioPromptContext): Promise<void> {
    const state = await this.getState(sessionId);
    state.lastPortfolioSnapshot = portfolioCtx;
    this.saveToStorage(state);
  }

  public async logAIAction(
    sessionId: string,
    actionName: string,
    success: boolean,
    metadata?: Record<string, unknown>
  ): Promise<void> {
    const state = await this.getState(sessionId);
    state.lastAIActions.push({
      id: `act-${Date.now()}`,
      actionName,
      timestamp: Date.now(),
      success,
      metadata,
    });
    state.lastAIActions = state.lastAIActions.slice(-20);
    this.saveToStorage(state);
  }

  public async generateSummary(sessionId: string): Promise<string> {
    const state = await this.getState(sessionId);
    const summary = MemorySummarizer.summarizeState(state);
    state.summary = summary;
    this.saveToStorage(state);
    return summary;
  }

  public async syncToBackend(sessionId: string, backend: IMemorySyncBackend): Promise<boolean> {
    const state = await this.getState(sessionId);
    return await backend.syncState(state);
  }

  public async clearSession(sessionId: string): Promise<void> {
    this.inMemoryMap.delete(sessionId);
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.getStorageKey(sessionId));
    }
  }
}
