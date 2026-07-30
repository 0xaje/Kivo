/**
 * @file src/ai/providers/openai.provider.ts
 * @description OpenAI Provider Contract implementing IAIProvider.
 */

import { AbstractAIProvider } from './base';
import { ProviderVendor, ChatOptions, ChatWithToolsOptions, StreamChunkCallback } from './types';
import { LLMResponse } from '../types';

export class OpenAIProviderContract extends AbstractAIProvider {
  public readonly vendor: ProviderVendor = 'openai';

  public async chat(_options: ChatOptions): Promise<LLMResponse> {
    return {
      id: `chatcmpl-openai-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: '' },
      finishReason: 'stop',
    };
  }

  public async stream(_options: ChatOptions, _onChunk: StreamChunkCallback): Promise<LLMResponse> {
    return {
      id: `chatcmpl-openai-stream-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: '' },
      finishReason: 'stop',
    };
  }

  public async embeddings(input: string | string[]): Promise<number[][]> {
    const items = Array.isArray(input) ? input : [input];
    return items.map(() => new Array(1536).fill(0));
  }

  public async chatWithTools(_options: ChatWithToolsOptions): Promise<LLMResponse> {
    return {
      id: `chatcmpl-openai-tools-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: '' },
      finishReason: 'tool_calls',
    };
  }
}
