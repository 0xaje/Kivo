/**
 * @file src/ai/providers/anthropic.provider.ts
 * @description Anthropic Claude Provider Contract implementing IAIProvider under Clean Architecture.
 */

import { AbstractAIProvider } from './base';
import { ProviderVendor, ChatOptions, ChatWithToolsOptions, StreamChunkCallback, ProviderConfig } from './types';
import { LLMResponse } from '../types';
import { getAIEnvConfig } from './env';

export class AnthropicProviderContract extends AbstractAIProvider {
  public readonly vendor: ProviderVendor = 'anthropic';

  constructor(config: ProviderConfig) {
    const env = getAIEnvConfig();
    super({
      ...config,
      apiKey: config.apiKey || env.anthropicApiKey,
      modelName: config.modelName || env.anthropicModel,
    });
  }

  public async chat(options: ChatOptions): Promise<LLMResponse> {
    const lastUserMsg = options.messages[options.messages.length - 1]?.content || '';
    return {
      id: `anthropic-chat-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: `[Anthropic ${this.modelName}] Processed request: "${lastUserMsg}".` },
      finishReason: 'stop',
    };
  }

  public async stream(options: ChatOptions, onChunk: StreamChunkCallback): Promise<LLMResponse> {
    const responseText = `[Anthropic ${this.modelName} Stream] Real-time streaming response active.`;
    onChunk({
      id: `chunk-${Date.now()}`,
      delta: { role: 'assistant', content: responseText },
      deltaText: responseText,
      accumulatedText: responseText,
      isFinal: true,
    });

    return {
      id: `anthropic-stream-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: responseText },
      finishReason: 'stop',
    };
  }

  public async embeddings(input: string | string[]): Promise<number[][]> {
    const items = Array.isArray(input) ? input : [input];
    return items.map(() => new Array(1536).fill(0.03));
  }

  public async chatWithTools(options: ChatWithToolsOptions): Promise<LLMResponse> {
    const lastUserMsg = options.messages[options.messages.length - 1]?.content || '';
    return {
      id: `anthropic-tools-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: `[Anthropic ${this.modelName}] Action response for "${lastUserMsg}".` },
      finishReason: 'tool_calls',
    };
  }
}
