/**
 * @file src/ai/assistant/index.ts
 * @description High-level Assistant orchestrator facade orchestrating router, memory, tools, and LLM providers.
 */

import { LLMMessage, AIExecutionContext, LLMStreamChunk } from '../types';
import { IProviderRegistry } from '../providers';
import { IToolRegistry } from '../tools';
import { IIntentRouter, IntentType } from '../router';
import { IAgentSupervisor } from '../agents';
import { IMemoryProvider } from '../memory';
import { IPromptManager } from '../prompts';
import { ISecurityGuardService } from '../services';

/**
 * Options when querying the high-level Assistant Facade.
 */
export interface AssistantQueryOptions {
  userMessage: string;
  context: AIExecutionContext;
  stream?: boolean;
  onStreamChunk?: (chunk: LLMStreamChunk) => void;
}

/**
 * Result returned by the Assistant Facade query.
 */
export interface AssistantQueryResult {
  response: LLMMessage;
  intentType?: IntentType;
  agentId?: string;
  executedTools?: string[];
  executionTimeMs: number;
}

/**
 * Core interface for the KIVO AI Assistant Orchestrator Facade.
 */
export interface IAIAssistant {
  processQuery(options: AssistantQueryOptions): Promise<AssistantQueryResult>;
}

/**
 * Dependencies injected into KivoAIAssistant constructor under Dependency Injection pattern.
 */
export interface AIAssistantDependencies {
  providerRegistry: IProviderRegistry;
  toolRegistry: IToolRegistry;
  intentRouter: IIntentRouter;
  agentSupervisor: IAgentSupervisor;
  memoryProvider: IMemoryProvider;
  promptManager: IPromptManager;
  securityGuard?: ISecurityGuardService;
}

/**
 * Concrete Orchestrator Facade implementing IAIAssistant.
 */
export class KivoAIAssistant implements IAIAssistant {
  constructor(private readonly deps: AIAssistantDependencies) {}

  public async processQuery(options: AssistantQueryOptions): Promise<AssistantQueryResult> {
    const startTime = Date.now();

    // 1. Security Input Validation (if Guardrail active)
    if (this.deps.securityGuard) {
      const safety = await this.deps.securityGuard.validateInput(options.userMessage);
      if (!safety.isSafe) {
        return {
          response: {
            role: 'assistant',
            content: safety.reason || 'Input request flagged by safety guardrails.',
          },
          executionTimeMs: Date.now() - startTime,
        };
      }
    }

    // 2. Memory Append User Message
    const userMsg: LLMMessage = { role: 'user', content: options.userMessage };
    await this.deps.memoryProvider.appendMessage(options.context.sessionId, userMsg);

    // 3. Fetch Conversation History
    const history = await this.deps.memoryProvider.getMessages({
      sessionId: options.context.sessionId,
      limit: 20,
    });

    // 4. Intent Classification
    const classified = await this.deps.intentRouter.classifyIntent(options.userMessage, history, options.context);

    // 5. Delegate to Specialized Agent via AgentSupervisor
    const agentResult = await this.deps.agentSupervisor.delegateTask(
      classified.intent,
      history,
      options.context
    );

    // 6. Memory Append Assistant Response
    await this.deps.memoryProvider.appendMessage(options.context.sessionId, agentResult.responseMessage);

    return {
      response: agentResult.responseMessage,
      intentType: classified.intent,
      agentId: agentResult.agentId,
      executedTools: agentResult.toolsExecuted?.map((t) => t.toolName),
      executionTimeMs: Date.now() - startTime,
    };
  }
}
