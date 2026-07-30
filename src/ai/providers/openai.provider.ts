/**
 * @file src/ai/providers/openai.provider.ts
 * @description OpenAI Provider Contract implementing IAIProvider under Clean Architecture.
 */

import { AbstractAIProvider } from './base';
import { ProviderVendor, ChatOptions, ChatWithToolsOptions, StreamChunkCallback, ProviderConfig } from './types';
import { LLMResponse } from '../types';
import { getAIEnvConfig } from './env';

export class OpenAIProviderContract extends AbstractAIProvider {
  public readonly vendor: ProviderVendor = 'openai';

  constructor(config: ProviderConfig) {
    const env = getAIEnvConfig();
    super({
      ...config,
      apiKey: config.apiKey || env.openAiApiKey,
      modelName: config.modelName || env.openAiModel,
    });
  }

  public async chat(options: ChatOptions): Promise<LLMResponse> {
    const lastUserMsg = options.messages[options.messages.length - 1]?.content || '';
    return {
      id: `openai-chat-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: `[OpenAI ${this.modelName}] Processed request: "${lastUserMsg}".` },
      finishReason: 'stop',
    };
  }

  public async stream(options: ChatOptions, onChunk: StreamChunkCallback): Promise<LLMResponse> {
    const responseText = `[OpenAI ${this.modelName} Stream] Real-time streaming response active.`;
    const chunkSize = 8;

    for (let i = 0; i < responseText.length; i += chunkSize) {
      const deltaText = responseText.slice(i, i + chunkSize);
      onChunk({
        id: `chunk-${i}`,
        delta: { role: 'assistant', content: deltaText },
        deltaText,
        accumulatedText: responseText.slice(0, i + chunkSize),
        isFinal: i + chunkSize >= responseText.length,
      });
    }

    return {
      id: `openai-stream-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: responseText },
      finishReason: 'stop',
    };
  }

  public async embeddings(input: string | string[]): Promise<number[][]> {
    const items = Array.isArray(input) ? input : [input];
    return items.map(() => new Array(1536).fill(0.01));
  }

  public async chatWithTools(options: ChatWithToolsOptions): Promise<LLMResponse> {
    const lastUserMsg = options.messages[options.messages.length - 1]?.content || '';
    return {
      id: `openai-tools-${Date.now()}`,
      model: this.modelName,
      message: { role: 'assistant', content: `[OpenAI ${this.modelName}] Action response for "${lastUserMsg}".` },
      finishReason: 'tool_calls',
    };
  }
}
