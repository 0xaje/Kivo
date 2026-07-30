/**
 * @file src/ai/providers/local.provider.ts
 * @description Local LLM Provider Contract (WASM / WebLLM / Ollama) implementing IAIProvider.
 */

import { AbstractAIProvider } from './base';
import { ProviderVendor, ChatOptions, ChatWithToolsOptions, StreamChunkCallback } from './types';
import { LLMResponse } from '../types';

export class LocalLLMProviderContract extends AbstractAIProvider {
  public readonly vendor: ProviderVendor = 'local_llm';

  public async chat(_options: ChatOptions): Promise<LLMResponse> {
    return {
      id: `local-wasm-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: '' },
      finishReason: 'stop',
    };
  }

  public async stream(_options: ChatOptions, _onChunk: StreamChunkCallback): Promise<LLMResponse> {
    return {
      id: `local-wasm-stream-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: '' },
      finishReason: 'stop',
    };
  }

  public async embeddings(input: string | string[]): Promise<number[][]> {
    const items = Array.isArray(input) ? input : [input];
    return items.map(() => new Array(384).fill(0));
  }

  public async chatWithTools(_options: ChatWithToolsOptions): Promise<LLMResponse> {
    return {
      id: `local-wasm-tools-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: '' },
      finishReason: 'tool_calls',
    };
  }
}
