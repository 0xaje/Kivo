/**
 * @file src/ai/utils/index.ts
 * @description Helper utilities for token estimation, message truncation, and schema validation.
 */

import { LLMMessage } from '../types';

/**
 * Interface for token counting utility implementations.
 */
export interface ITokenCounter {
  countTokens(text: string): number;
  countMessageTokens(messages: LLMMessage[]): number;
}

/**
 * Simple word/character heuristic implementation of ITokenCounter.
 */
export class TokenCounter implements ITokenCounter {
  public countTokens(text: string): number {
    if (!text) return 0;
    // Heuristic: ~4 characters per token
    return Math.ceil(text.length / 4);
  }

  public countMessageTokens(messages: LLMMessage[]): number {
    return messages.reduce((acc, msg) => acc + this.countTokens(msg.content) + 4, 0);
  }
}

/**
 * Helper to truncate message history to fit within max token budget.
 */
export function truncateMessagesToTokenLimit(
  messages: LLMMessage[],
  maxTokens: number,
  tokenCounter: ITokenCounter = new TokenCounter()
): LLMMessage[] {
  let currentTotal = tokenCounter.countMessageTokens(messages);
  const result = [...messages];

  while (result.length > 1 && currentTotal > maxTokens) {
    // Preserve system prompt if present at index 0
    if (result[0].role === 'system' && result.length > 2) {
      result.splice(1, 1);
    } else {
      result.shift();
    }
    currentTotal = tokenCounter.countMessageTokens(result);
  }

  return result;
}
