/**
 * @file src/ai/memory/types.ts
 * @description Types and contracts for Production Conversation Memory and Backend Sync Adapters.
 */

import { LLMMessage } from '../types';
import { IntentType } from '../router';
import { WalletPromptContext, PortfolioPromptContext } from '../prompts';

/**
 * Recent recipient metadata entry.
 */
export interface RecentRecipient {
  address: string;
  name?: string;
  lastUsedTimestamp: number;
}

/**
 * AI Action execution log item.
 */
export interface AIActionLog {
  id: string;
  actionName: string;
  timestamp: number;
  success: boolean;
  metadata?: Record<string, unknown>;
}

/**
 * Complete Conversation Memory State object.
 */
export interface ConversationMemoryState {
  sessionId: string;
  conversationHistory: LLMMessage[];
  lastIntent?: IntentType;
  walletContext?: WalletPromptContext;
  recentRecipients: RecentRecipient[];
  lastPortfolioSnapshot?: PortfolioPromptContext;
  lastAIActions: AIActionLog[];
  summary?: string;
  updatedAt: number;
}

/**
 * Query options for retrieving memory context.
 */
export interface MemoryQueryOptions {
  sessionId: string;
  limit?: number;
  includeSummary?: boolean;
}

/**
 * Interface for remote backend memory sync providers (REST, GraphQL, Vector DB, Cloud).
 */
export interface IMemorySyncBackend {
  readonly backendId: string;
  syncState(state: ConversationMemoryState): Promise<boolean>;
  fetchState(sessionId: string): Promise<ConversationMemoryState | null>;
}

/**
 * Core interface for Production Conversation Memory.
 */
export interface IMemoryProvider {
  getState(sessionId: string): Promise<ConversationMemoryState>;
  appendMessage(sessionId: string, message: LLMMessage): Promise<void>;
  getMessages(options: MemoryQueryOptions): Promise<LLMMessage[]>;
  updateLastIntent(sessionId: string, intent: IntentType): Promise<void>;
  updateWalletContext(sessionId: string, walletCtx: WalletPromptContext): Promise<void>;
  addRecentRecipient(sessionId: string, recipient: Omit<RecentRecipient, 'lastUsedTimestamp'>): Promise<void>;
  updatePortfolioSnapshot(sessionId: string, portfolioCtx: PortfolioPromptContext): Promise<void>;
  logAIAction(sessionId: string, actionName: string, success: boolean, metadata?: Record<string, unknown>): Promise<void>;
  generateSummary(sessionId: string): Promise<string>;
  syncToBackend(sessionId: string, backend: IMemorySyncBackend): Promise<boolean>;
  clearSession(sessionId: string): Promise<void>;
}
