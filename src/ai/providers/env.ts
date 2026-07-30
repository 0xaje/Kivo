/**
 * @file src/ai/providers/env.ts
 * @description Safe Environment Variable loader for Vite AI Provider keys and network settings.
 */

import { ProviderVendor } from './types';

export interface AIEnvConfig {
  openAiApiKey?: string;
  openAiModel: string;
  geminiApiKey?: string;
  geminiModel: string;
  anthropicApiKey?: string;
  anthropicModel: string;
  activeVendor: ProviderVendor;
  nimiqNetwork: 'mainnet' | 'testnet';
}

export function getAIEnvConfig(): AIEnvConfig {
  const meta = import.meta as any;
  const env = meta && meta.env ? meta.env : {};

  return {
    openAiApiKey: env.VITE_OPENAI_API_KEY || '',
    openAiModel: env.VITE_OPENAI_MODEL || 'gpt-4o',
    geminiApiKey: env.VITE_GEMINI_API_KEY || '',
    geminiModel: env.VITE_GEMINI_MODEL || 'gemini-1.5-pro',
    anthropicApiKey: env.VITE_ANTHROPIC_API_KEY || '',
    anthropicModel: env.VITE_ANTHROPIC_MODEL || 'claude-3-5-sonnet',
    activeVendor: (env.VITE_ACTIVE_AI_VENDOR as ProviderVendor) || 'openai',
    nimiqNetwork: (env.VITE_NIMIQ_NETWORK as 'mainnet' | 'testnet') || 'mainnet',
  };
}
