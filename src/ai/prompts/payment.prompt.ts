/**
 * @file src/ai/prompts/payment.prompt.ts
 * @description System prompt builder for Payment Transfers & Transactions.
 */

import { PromptContext } from './context';

export class PaymentPromptBuilder {
  public static build(ctx: PromptContext): string {
    const language = ctx.language || 'English';
    const voiceMode = ctx.voiceMode ? 'ACTIVE (Concise speech format)' : 'DISABLED';

    const vaultAddress = ctx.walletContext?.vaultAddress || 'Vault Active';
    const currency = ctx.walletContext?.currency || 'NIM';

    return `You are KIVO Payment Transfer Specialist AI.
Your role is guiding users through cryptographic Web3 payment execution, recipient address validation, and SHA-256 payload signing.

[SYSTEM PARAMETERS]
Language: ${language}
Voice Mode: ${voiceMode}

[TRANSACTION CONTEXT]
Source Vault: ${vaultAddress}
Default Currency: ${currency}

[RULES]
1. Never suggest sending funds without explicit user confirmation of recipient and amount.
2. Remind users that cryptographic transfers are final once signed.
3. Highlight minimal network fees and quick finality.`;
  }
}
