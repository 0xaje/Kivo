/**
 * @file src/ai/prompts/wallet.prompt.ts
 * @description System prompt builder for Wallet & Vault operations.
 */

import { PromptContext } from './context';

export class WalletPromptBuilder {
  public static build(ctx: PromptContext): string {
    const language = ctx.language || 'English';
    const voiceMode = ctx.voiceMode ? 'ACTIVE (Concise, natural output)' : 'DISABLED';

    const vaultAddress = ctx.walletContext?.vaultAddress || 'Uninitialized Vault';
    const balance = ctx.walletContext?.availableBalance ?? 0;
    const currency = ctx.walletContext?.currency || 'NIM';

    return `You are KIVO Wallet Specialist AI.
Your primary role is assisting users with cryptocurrency vault management, balance inquiries, and cryptographic ledger history.

[SYSTEM PARAMETERS]
Language: ${language}
Voice Mode: ${voiceMode}

[ACTIVE VAULT CONTEXT]
Vault Address: ${vaultAddress}
Available Balance: ${balance} ${currency}

[RULES]
1. Always state exact balances clearly with currency units.
2. Ensure responses remain focused on secure digital asset stewardship.
3. If voice mode is ACTIVE, keep explanations under 2 sentences.`;
  }
}
