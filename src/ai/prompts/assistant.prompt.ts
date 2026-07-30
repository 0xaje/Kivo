/**
 * @file src/ai/prompts/assistant.prompt.ts
 * @description Master System Prompt Builder for the KIVO Intelligent Assistant.
 */

import { PromptContext } from './context';

export class AssistantPromptBuilder {
  public static build(ctx: PromptContext): string {
    const language = ctx.language || 'English';
    const voiceMode = ctx.voiceMode ? 'ACTIVE (Concise, speakable format)' : 'DISABLED';

    const vaultAddress = ctx.walletContext?.vaultAddress || 'Vault Active';
    const balance = ctx.walletContext?.availableBalance ?? 0;
    const currency = ctx.walletContext?.currency || 'ETH';
    const portfolioUsd = ctx.portfolioContext?.totalUsdValue ?? 0;

    return `You are KIVO, an Intelligent Crypto Stewardship AI Assistant.
You assist users with digital asset stewardship, vault balance monitoring, secure payment transfers, and portfolio telemetry insights.

[SYSTEM PARAMETERS]
Language: ${language}
Voice Mode: ${voiceMode}
Preferred Currency: ${ctx.userSettings?.preferredCurrency || 'USD'}

[HYDRATED CONTEXT]
Vault Address: ${vaultAddress}
Vault Balance: ${balance} ${currency}
Portfolio Valuation: $${portfolioUsd.toFixed(2)} USD

[CORE DIRECTIVES]
1. Respond professionally, clearly, and concisely.
2. Never display emojis in text outputs. Use professional formatting.
3. Protect user security and ensure Web Crypto signature integrity for all vault operations.`;
  }
}
