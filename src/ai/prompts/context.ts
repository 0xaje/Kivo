/**
 * @file src/ai/prompts/context.ts
 * @description Contextual hydration contract for system prompt generation.
 */

import { LLMMessage } from '../types';

/**
 * Wallet Context payload.
 */
export interface WalletPromptContext {
  vaultAddress?: string;
  availableBalance?: number;
  currency?: string;
  networkName?: string;
}

/**
 * Portfolio Context payload.
 */
export interface PortfolioPromptContext {
  totalUsdValue?: number;
  topAssets?: Array<{
    symbol: string;
    name: string;
    balance: number;
    allocationPercentage: number;
  }>;
  monthlySpendingAvg?: number;
}

/**
 * User Settings payload.
 */
export interface UserSettingsPromptContext {
  theme?: string;
  preferredCurrency?: string;
  notificationsEnabled?: boolean;
}

/**
 * Universal Prompt Context passed to system prompt builders.
 * Supports history, wallet, portfolio, user settings, voice mode, language, and future memory.
 */
export interface PromptContext {
  conversationHistory?: LLMMessage[];
  walletContext?: WalletPromptContext;
  portfolioContext?: PortfolioPromptContext;
  userSettings?: UserSettingsPromptContext;
  voiceMode?: boolean;
  language?: string;
  futureMemory?: Record<string, unknown>;
}
