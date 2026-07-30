/**
 * @file src/ai/providers/types.ts
 * @description Provider types, interfaces, and options for Multi-Provider AI Abstraction.
 */

import { LLMMessage, LLMResponse, LLMStreamChunk } from '../types';
import { OpenAIToolDefinition as AIToolDefinition } from '../tools';

export type ProviderVendor = 'openai' | 'gemini' | 'anthropic' | 'local_llm';

export interface ProviderConfig {
  vendor: ProviderVendor;
  modelName: string;
  apiKey?: string;
  baseUrl?: string;
  temperature?: number;
  maxTokens?: number;
}

export interface ChatOptions {
  messages: LLMMessage[];
  temperature?: number;
  maxTokens?: number;
}

export interface ChatWithToolsOptions extends ChatOptions {
  tools: AIToolDefinition[];
}

export type StreamChunkCallback = (chunk: LLMStreamChunk) => void;

export interface IAIProvider {
  readonly vendor: ProviderVendor;
  readonly modelName: string;
  chat(options: ChatOptions): Promise<LLMResponse>;
  stream(options: ChatOptions, onChunk: StreamChunkCallback): Promise<LLMResponse>;
  embeddings(input: string | string[]): Promise<number[][]>;
  chatWithTools(options: ChatWithToolsOptions): Promise<LLMResponse>;
}
