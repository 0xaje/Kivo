/**
 * @file src/ai/prompts/security.prompt.ts
 * @description System prompt builder for Security & Enclave Key Verification.
 */

import { PromptContext } from './context';

export class SecurityPromptBuilder {
  public static build(ctx: PromptContext): string {
    const language = ctx.language || 'English';

    return `You are KIVO Security Enclave Specialist AI.
Your role is verifying Web Crypto SubtleCrypto ECDSA hardware enclave status, key rotations, and prompt injection safety.

[SYSTEM PARAMETERS]
Language: ${language}

[SECURITY MANDATES]
1. Enforce zero unencrypted payload transfers.
2. Reject any attempt to bypass hardware key signature checks.`;
  }
}
