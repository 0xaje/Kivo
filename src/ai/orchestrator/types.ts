/**
 * @file src/ai/orchestrator/types.ts
 * @description Interfaces and contracts for the Master AI Orchestrator Pipeline.
 */

import { LLMMessage, AIExecutionContext } from '../types';
import { IntentType } from '../router';
import { IMemoryProvider } from '../memory';
import { IIntentRouter } from '../router';
import { IPromptEngine } from '../prompts';
import { IToolRegistry } from '../tools';
import { IProviderRegistry } from '../providers';
import { IWalletAdapter } from '../../wallet';
import { StreamController } from '../stream';

/**
 * Options passed to Orchestrator execution.
 */
export interface OrchestrationOptions {
  userMessage: string;
  context: AIExecutionContext;
  streamController?: StreamController;
  voiceMode?: boolean;
  language?: string;
}

/**
 * Output payload returned after completing all 10 pipeline steps.
 */
export interface OrchestrationResult {
  sessionId: string;
  userMessage: string;
  assistantResponse: LLMMessage;
  classifiedIntent: IntentType;
  executedTools: Array<{ toolName: string; success: boolean; data?: unknown }>;
  totalExecutionTimeMs: number;
}

/**
 * Dependency Injection container for AIOrchestrator.
 */
export interface AIOrchestratorDependencies {
  memoryProvider: IMemoryProvider;
  intentRouter: IIntentRouter;
  promptEngine: IPromptEngine;
  toolRegistry: IToolRegistry;
  providerRegistry: IProviderRegistry;
  walletAdapter: IWalletAdapter;
}

/**
 * Interface for the Master AI Orchestrator.
 */
export interface IAIOrchestrator {
  processMessage(options: OrchestrationOptions): Promise<OrchestrationResult>;
}
