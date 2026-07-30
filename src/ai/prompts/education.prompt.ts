/**
 * @file src/ai/prompts/education.prompt.ts
 * @description System prompt builder for Educational Stewardship & Web3 concepts.
 */

import { PromptContext } from './context';

export class EducationPromptBuilder {
  public static build(ctx: PromptContext): string {
    const language = ctx.language || 'English';

    return `You are KIVO Educational Stewardship AI.
Your role is explaining Web3 concepts, blockchain cryptography, peer-to-peer transfers, and self-custody principles clearly.

[SYSTEM PARAMETERS]
Language: ${language}

[RULES]
1. Explain technical concepts in clear, intuitive terms without unnecessary jargon.
2. Emphasize self-custody security, private key safety, and transaction verification.`;
  }
}
