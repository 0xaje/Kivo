/**
 * @file src/ai/types/index.ts
 * @description Domain types and data models for KIVO AI Architecture.
 */

/**
 * Message roles supported across LLM providers.
 */
export type LLMMessageRole = 'system' | 'user' | 'assistant' | 'tool';

/**
 * Standard message payload for LLM interactions.
 */
export interface LLMMessage {
  role: LLMMessageRole;
  content: string;
  name?: string;
  toolCallId?: string;
  toolCalls?: LLMToolCall[];
}

/**
 * Tool call request requested by an LLM provider.
 */
export interface LLMToolCall {
  id: string;
  type: 'function';
  function: {
    name: string;
    arguments: string;
  };
}

/**
 * Token consumption statistics returned by LLM providers.
 */
export interface TokenUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

/**
 * Standardized completion response envelope returned by LLM providers.
 */
export interface LLMResponse {
  id: string;
  model: string;
  message: LLMMessage;
  finishReason: 'stop' | 'length' | 'tool_calls' | 'content_filter' | 'error';
  usage?: TokenUsage;
}

/**
 * Streaming chunk emitted during LLM response generation.
 */
export interface LLMStreamChunk {
  id: string;
  delta: Partial<LLMMessage>;
  finishReason?: string;
}

/**
 * Execution context for AI processing runs.
 */
export interface AIExecutionContext {
  sessionId: string;
  userId?: string;
  timestamp: number;
  activeChainId?: string;
  metadata?: Record<string, unknown>;
}
