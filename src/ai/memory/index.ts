/**
 * @file src/ai/memory/index.ts
 * @description Conversation memory stores, short-term history buffers, and long-term vector/state memory contracts.
 */

import { LLMMessage } from '../types';

/**
 * Filter options for querying memory stores.
 */
export interface MemoryQueryOptions {
  sessionId: string;
  limit?: number;
  beforeTimestamp?: number;
}

/**
 * Vector search query payload for semantic memory retrieval.
 */
export interface VectorSearchQuery {
  vector: number[];
  topK: number;
  threshold?: number;
}

/**
 * Vector search match entry.
 */
export interface VectorSearchResult<T = unknown> {
  id: string;
  score: number;
  data: T;
}

/**
 * Core interface for Short-Term & Long-Term Conversation Memory Stores.
 */
export interface IMemoryProvider {
  /**
   * Appends a message to conversation memory.
   */
  appendMessage(sessionId: string, message: LLMMessage): Promise<void>;

  /**
   * Retrieves conversation messages for a session.
   */
  getMessages(options: MemoryQueryOptions): Promise<LLMMessage[]>;

  /**
   * Clears memory buffer for a session.
   */
  clearSession(sessionId: string): Promise<void>;
}

/**
 * Interface for Vector Memory Stores supporting semantic retrieval.
 */
export interface IVectorMemoryProvider<T = unknown> {
  upsertVector(id: string, vector: number[], data: T): Promise<void>;
  searchVectors(query: VectorSearchQuery): Promise<VectorSearchResult<T>[]>;
  deleteVector(id: string): Promise<void>;
}

/**
 * In-Memory concrete implementation of IMemoryProvider.
 */
export class InMemoryConversationStore implements IMemoryProvider {
  private sessions = new Map<string, LLMMessage[]>();

  public async appendMessage(sessionId: string, message: LLMMessage): Promise<void> {
    if (!this.sessions.has(sessionId)) {
      this.sessions.set(sessionId, []);
    }
    this.sessions.get(sessionId)!.push(message);
  }

  public async getMessages(options: MemoryQueryOptions): Promise<LLMMessage[]> {
    const list = this.sessions.get(options.sessionId) || [];
    if (options.limit && options.limit > 0) {
      return list.slice(-options.limit);
    }
    return list;
  }

  public async clearSession(sessionId: string): Promise<void> {
    this.sessions.delete(sessionId);
  }
}
