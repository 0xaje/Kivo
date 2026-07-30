/**
 * @file src/ai/providers/gemini.provider.ts
 * @description Google Gemini Provider Contract implementing IAIProvider.
 */

import { AbstractAIProvider } from './base';
import { ProviderVendor, ChatOptions, ChatWithToolsOptions, StreamChunkCallback } from './types';
import { LLMResponse } from '../types';

export class GeminiProviderContract extends AbstractAIProvider {
  public readonly vendor: ProviderVendor = 'gemini';

  public async chat(_options: ChatOptions): Promise<LLMResponse> {
    return {
      id: `gemini-resp-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: '' },
      finishReason: 'stop',
    };
  }

  public async stream(_options: ChatOptions, _onChunk: StreamChunkCallback): Promise<LLMResponse> {
    return {
      id: `gemini-stream-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: '' },
      finishReason: 'stop',
    };
  }

  public async embeddings(input: string | string[]): Promise<number[][]> {
    const items = Array.isArray(input) ? input : [input];
    return items.map(() => new Array(768).fill(0));
  }

  public async chatWithTools(_options: ChatWithToolsOptions): Promise<LLMResponse> {
    return {
      id: `gemini-tools-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: '' },
      finishReason: 'tool_calls',
    };
  }
}
