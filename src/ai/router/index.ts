/**
 * @file src/ai/router/index.ts
 * @description Intent classification and agent routing interfaces.
 */

import { LLMMessage, AIExecutionContext } from '../types';

/**
 * Standardized Intent Domains supported by KIVO.
 */
export type IntentDomain =
  | 'stewardship'
  | 'payment_transfer'
  | 'portfolio_analytics'
  | 'security_identity'
  | 'general_help';

/**
 * Intent classification result.
 */
export interface ClassifiedIntent {
  domain: IntentDomain;
  confidence: number;
  extractedParameters?: Record<string, unknown>;
  suggestedAgentId?: string;
}

/**
 * Interface for Intent Router responsible for classifying user requests and routing to appropriate agents.
 */
export interface IIntentRouter {
  /**
   * Classifies user input text or history into a specific domain intent.
   */
  classifyIntent(input: string, history?: LLMMessage[], context?: AIExecutionContext): Promise<ClassifiedIntent>;
}
