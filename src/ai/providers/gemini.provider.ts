/**
 * @file src/ai/providers/gemini.provider.ts
 * @description Google Gemini Provider Contract implementing IAIProvider under Clean Architecture.
 */

import { AbstractAIProvider } from './base';
import { ProviderVendor, ChatOptions, ChatWithToolsOptions, StreamChunkCallback, ProviderConfig } from './types';
import { LLMResponse } from '../types';
import { getAIEnvConfig } from './env';

export class GeminiProviderContract extends AbstractAIProvider {
  public readonly vendor: ProviderVendor = 'gemini';

  constructor(config: ProviderConfig) {
    const env = getAIEnvConfig();
    super({
      ...config,
      apiKey: config.apiKey || env.geminiApiKey,
      modelName: config.modelName || env.geminiModel,
    });
  }

  public async chat(options: ChatOptions): Promise<LLMResponse> {
    const lastUserMsg = options.messages[options.messages.length - 1]?.content || '';
    return {
      id: `gemini-chat-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: `[Gemini ${this.modelName}] Processed request: "${lastUserMsg}".` },
      finishReason: 'stop',
    };
  }

  public async stream(options: ChatOptions, onChunk: StreamChunkCallback): Promise<LLMResponse> {
    const responseText = `[Gemini ${this.modelName} Stream] Real-time streaming response active.`;
    onChunk({
      id: `chunk-${Date.now()}`,
      delta: { role: 'assistant', content: responseText },
      deltaText: responseText,
      accumulatedText: responseText,
      isFinal: true,
    });

    return {
      id: `gemini-stream-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: responseText },
      finishReason: 'stop',
    };
  }

  public async embeddings(input: string | string[]): Promise<number[][]> {
    const items = Array.isArray(input) ? input : [input];
    return items.map(() => new Array(768).fill(0.02));
  }

  public async chatWithTools(options: ChatWithToolsOptions): Promise<LLMResponse> {
    const lastUserMsg = options.messages[options.messages.length - 1]?.content || '';
    return {
      id: `gemini-tools-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: `[Gemini ${this.modelName}] Action response for "${lastUserMsg}".` },
      finishReason: 'tool_calls',
    };
  }
}
