/**
 * @file src/ai/memory/summarizer.ts
 * @description Helper engine for message sliding window truncation and memory context summaries.
 */

import { LLMMessage } from '../types';
import { ConversationMemoryState } from './types';

export class MemorySummarizer {
  /**
   * Generates a structured text summary of the current memory state.
   */
  public static summarizeState(state: ConversationMemoryState): string {
    const parts: string[] = [];

    parts.push(`Session: ${state.sessionId}`);
    if (state.lastIntent) {
      parts.push(`Last Intent: ${state.lastIntent}`);
    }

    if (state.walletContext?.availableBalance !== undefined) {
      parts.push(
        `Wallet: ${state.walletContext.availableBalance} ${state.walletContext.currency || 'ETH'}`
      );
    }

    if (state.recentRecipients.length > 0) {
      const recipientList = state.recentRecipients.map((r) => r.name || r.address).join(', ');
      parts.push(`Recent Recipients: ${recipientList}`);
    }

    if (state.lastAIActions.length > 0) {
      const lastAction = state.lastAIActions[state.lastAIActions.length - 1];
      parts.push(`Last Action: ${lastAction.actionName} (${lastAction.success ? 'Success' : 'Failed'})`);
    }

    return parts.join(' | ');
  }

  /**
   * Truncates message history to keep a short-term sliding window.
   */
  public static truncateWindow(messages: LLMMessage[], maxMessages: number = 20): LLMMessage[] {
    if (messages.length <= maxMessages) {
      return messages;
    }
    const systemPrompt = messages.find((m) => m.role === 'system');
    const recent = messages.slice(-maxMessages);

    if (systemPrompt && !recent.includes(systemPrompt)) {
      return [systemPrompt, ...recent];
    }
    return recent;
  }
}
