/**
 * @file src/ai/providers/index.ts
 * @description Provider abstractions for multi-LLM vendor support (OpenAI, Gemini, Anthropic, WASM).
 */

import { LLMMessage, LLMResponse, LLMStreamChunk } from '../types';
import { IAITool } from '../tools';

/**
 * Configuration parameters for initializing an LLM Provider.
 */
export interface LLMProviderConfig {
  apiKey?: string;
  baseUrl?: string;
  model: string;
  temperature?: number;
  maxTokens?: number;
  timeoutMs?: number;
}

/**
 * Options for generating completions from an LLM Provider.
 */
export interface LLMCompletionOptions {
  messages: LLMMessage[];
  tools?: IAITool[];
  temperature?: number;
  maxTokens?: number;
  stopSequences?: string[];
  signal?: AbortSignal;
}

/**
 * Abstract interface that every LLM Provider MUST implement.
 * Enforces SOLID Open/Closed principle allowing addition of new model vendors.
 */
export interface ILLMProvider {
  /**
   * Unique vendor identifier (e.g., 'openai', 'gemini', 'anthropic', 'wasm').
   */
  readonly providerId: string;

  /**
   * Active model identifier.
   */
  readonly modelName: string;

  /**
   * Generates a non-streaming text/tool completion.
   */
  generateCompletion(options: LLMCompletionOptions): Promise<LLMResponse>;

  /**
   * Streams completion chunks asynchronously.
   */
  streamCompletion(
    options: LLMCompletionOptions,
    onChunk: (chunk: LLMStreamChunk) => void
  ): Promise<LLMResponse>;

  /**
   * Computes vector embeddings for text inputs.
   */
  embed(text: string | string[]): Promise<number[][]>;
}

/**
 * Registry for managing and resolving active LLM Provider instances (Dependency Injection Container).
 */
export interface IProviderRegistry {
  registerProvider(provider: ILLMProvider): void;
  getProvider(providerId: string): ILLMProvider | undefined;
  setDefaultProvider(providerId: string): void;
  getDefaultProvider(): ILLMProvider;
  listProviders(): string[];
}

/**
 * Concrete ProviderRegistry implementing IProviderRegistry.
 */
export class ProviderRegistry implements IProviderRegistry {
  private providers = new Map<string, ILLMProvider>();
  private defaultProviderId?: string;

  public registerProvider(provider: ILLMProvider): void {
    this.providers.set(provider.providerId, provider);
    if (!this.defaultProviderId) {
      this.defaultProviderId = provider.providerId;
    }
  }

  public getProvider(providerId: string): ILLMProvider | undefined {
    return this.providers.get(providerId);
  }

  public setDefaultProvider(providerId: string): void {
    if (!this.providers.has(providerId)) {
      throw new Error(`Provider with id "${providerId}" is not registered.`);
    }
    this.defaultProviderId = providerId;
  }

  public getDefaultProvider(): ILLMProvider {
    if (!this.defaultProviderId || !this.providers.has(this.defaultProviderId)) {
      throw new Error('No default LLM provider registered.');
    }
    return this.providers.get(this.defaultProviderId)!;
  }

  public listProviders(): string[] {
    return Array.from(this.providers.keys());
  }
}
