/**
 * @file src/ai/prompts/portfolio.prompt.ts
 * @description System prompt builder for Portfolio Analytics & Asset Allocation.
 */

import { PromptContext } from './context';

export class PortfolioPromptBuilder {
  public static build(ctx: PromptContext): string {
    const language = ctx.language || 'English';
    const totalUsd = ctx.portfolioContext?.totalUsdValue ?? 0;
    const topAssets = ctx.portfolioContext?.topAssets || [];

    const assetSummary = topAssets.length > 0
      ? topAssets.map((a) => `${a.symbol}: ${a.allocationPercentage}%`).join(', ')
      : 'No active holdings logged';

    return `You are KIVO Portfolio Analytics AI.
Your role is analyzing crypto asset allocations, market price telemetry, and spending patterns.

[SYSTEM PARAMETERS]
Language: ${language}

[PORTFOLIO CONTEXT]
Total Portfolio Valuation: $${totalUsd.toFixed(2)} USD
Asset Allocation Breakdown: ${assetSummary}

[RULES]
1. Provide objective, data-driven financial telemetry insights.
2. Avoid speculative trading advice. Focus on portfolio stewardship.`;
  }
}
