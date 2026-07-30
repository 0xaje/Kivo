/**
 * @file src/ai/providers/types.ts
 * @description Interfaces and domain types for Multi-Provider AI Abstraction Layer.
 */

import { LLMMessage, LLMResponse, LLMStreamChunk } from '../types';
import { IAITool, OpenAIToolDefinition } from '../tools';

/**
 * Supported AI LLM Provider Vendors.
 */
export type ProviderVendor = 'openai' | 'gemini' | 'anthropic' | 'local_llm';

/**
 * Callback function emitted during streaming.
 */
export type StreamChunkCallback = (chunk: LLMStreamChunk) => void;

/**
 * Options for standard text completion chat.
 */
export interface ChatOptions {
  messages: LLMMessage[];
  temperature?: number;
  maxTokens?: number;
  stopSequences?: string[];
  signal?: AbortSignal;
}

/**
 * Options for tool-calling chat completions.
 */
export interface ChatWithToolsOptions extends ChatOptions {
  tools: IAITool[];
  toolChoice?: 'auto' | 'required' | { type: 'function'; function: { name: string } };
}

/**
 * Configuration options for initializing an AI Provider instance.
 */
export interface ProviderConfig {
  vendor: ProviderVendor;
  modelName: string;
  baseUrl?: string;
  temperature?: number;
  maxTokens?: number;
  timeoutMs?: number;
  extraOptions?: Record<string, unknown>;
}

/**
 * Production-ready interface that every AI Provider MUST implement.
 * Enforces SOLID Open/Closed Principle allowing addition of new model vendors.
 */
export interface IAIProvider {
  /**
   * Vendor identifier ('openai', 'gemini', 'anthropic', 'local_llm').
   */
  readonly vendor: ProviderVendor;

  /**
   * Active model name.
   */
  readonly modelName: string;

  /**
   * Non-streaming chat completion.
   */
  chat(options: ChatOptions): Promise<LLMResponse>;

  /**
   * Asynchronous streaming chat completion.
   */
  stream(options: ChatOptions, onChunk: StreamChunkCallback): Promise<LLMResponse>;

  /**
   * Vector embedding generation for text inputs.
   */
  embeddings(input: string | string[]): Promise<number[][]>;

  /**
   * Function calling / tool-aware chat completion.
   */
  chatWithTools(options: ChatWithToolsOptions): Promise<LLMResponse>;
}
