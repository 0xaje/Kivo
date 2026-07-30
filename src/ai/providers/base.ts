/**
 * @file src/ai/providers/base.ts
 * @description Abstract Base Class for AI Providers reducing boilerplate while enforcing contracts.
 */

import {
  IAIProvider,
  ProviderVendor,
  ChatOptions,
  ChatWithToolsOptions,
  StreamChunkCallback,
  ProviderConfig,
} from './types';
import { LLMResponse } from '../types';

export abstract class AbstractAIProvider implements IAIProvider {
  public abstract readonly vendor: ProviderVendor;
  public readonly modelName: string;

  constructor(protected readonly config: ProviderConfig) {
    this.modelName = config.modelName;
  }

  public abstract chat(options: ChatOptions): Promise<LLMResponse>;
  public abstract stream(options: ChatOptions, onChunk: StreamChunkCallback): Promise<LLMResponse>;
  public abstract embeddings(input: string | string[]): Promise<number[][]>;
  public abstract chatWithTools(options: ChatWithToolsOptions): Promise<LLMResponse>;
}
