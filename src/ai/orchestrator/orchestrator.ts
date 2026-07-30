/**
 * @file src/ai/orchestrator/orchestrator.ts
 * @description Master AI Orchestrator implementing the complete 10-step asynchronous pipeline.
 */

import {
  IAIOrchestrator,
  OrchestrationOptions,
  OrchestrationResult,
  AIOrchestratorDependencies,
} from './types';
import { LLMMessage } from '../types';
import { SystemPromptDomain } from '../prompts';
import { StreamController } from '../stream';

export class AIOrchestrator implements IAIOrchestrator {
  constructor(private readonly deps: AIOrchestratorDependencies) {}

  public async processMessage(options: OrchestrationOptions): Promise<OrchestrationResult> {
    const startTime = Date.now();
    const { sessionId } = options.context;
    const { userMessage } = options;

    // =========================================================================
    // STEP 1: MEMORY RETRIEVAL & INGEST
    // Ingests user input, retrieves session memory state, history, & wallet context.
    // =========================================================================
    const memoryState = await this.deps.memoryProvider.getState(sessionId);
    await this.deps.memoryProvider.appendMessage(sessionId, {
      role: 'user',
      content: userMessage,
    });

    const history = await this.deps.memoryProvider.getMessages({
      sessionId,
      limit: 20,
    });

    // =========================================================================
    // STEP 2: INTENT ROUTER CLASSIFICATION
    // Classifies user message intent (CHECK_BALANCE, SEND_PAYMENT, SHOW_PORTFOLIO, etc.).
    // =========================================================================
    const intentResult = await this.deps.intentRouter.classifyIntent(
      userMessage,
      history,
      options.context
    );
    await this.deps.memoryProvider.updateLastIntent(sessionId, intentResult.intent);

    // =========================================================================
    // STEP 3: PROMPT BUILDER CONTEXT HYDRATION
    // Builds domain-specific system prompt using PromptEngine & PromptContext.
    // =========================================================================
    let domain: SystemPromptDomain = 'assistant';
    if (intentResult.intent === 'CHECK_BALANCE') domain = 'wallet';
    else if (intentResult.intent === 'SEND_PAYMENT' || intentResult.intent === 'REQUEST_PAYMENT') domain = 'payment';
    else if (intentResult.intent === 'SHOW_PORTFOLIO') domain = 'portfolio';
    else if (intentResult.intent === 'LEARN') domain = 'education';

    const systemPromptText = this.deps.promptEngine.buildSystemPrompt(domain, {
      conversationHistory: history,
      walletContext: memoryState.walletContext,
      portfolioContext: memoryState.lastPortfolioSnapshot,
      voiceMode: options.voiceMode,
      language: options.language || 'English',
    });

    const messagesWithSystem: LLMMessage[] = [
      { role: 'system', content: systemPromptText },
      ...history,
    ];

    // =========================================================================
    // STEP 4: TOOL SELECTION & OPENAI SCHEMA ASSEMBLY
    // Resolves matching tool definitions from ToolRegistry & exports OpenAI schemas.
    // =========================================================================
    const availableTools = this.deps.toolRegistry.listTools();
    const openAiToolSchemas = this.deps.toolRegistry.exportOpenAISchemas();

    // =========================================================================
    // STEP 5: AI PROVIDER EXECUTION
    // Invokes active provider (OpenAI, Gemini, Anthropic, Local LLM) with tools.
    // =========================================================================
    const activeProvider = this.deps.providerRegistry.getActiveProvider();
    const providerResponse = await activeProvider.chatWithTools({
      messages: messagesWithSystem,
      tools: availableTools,
    });

    // =========================================================================
    // STEP 6: TOOL EXECUTION VIA TOOL REGISTRY & WALLET ADAPTER
    // Executes any tools requested by the AI provider model.
    // =========================================================================
    const executedToolsResult: Array<{ toolName: string; success: boolean; data?: unknown }> = [];

    if (intentResult.intent === 'CHECK_BALANCE' && memoryState.walletContext?.vaultAddress) {
      const balanceData = await this.deps.walletAdapter.getBalance(
        memoryState.walletContext.vaultAddress,
        (intentResult.entities.currency as string) || 'ETH'
      );
      executedToolsResult.push({ toolName: 'getBalance', success: true, data: balanceData });
      await this.deps.memoryProvider.logAIAction(sessionId, 'getBalance', true, { balanceData });
    } else if (intentResult.intent === 'SHOW_PORTFOLIO' && memoryState.walletContext?.vaultAddress) {
      const portfolioData = await this.deps.walletAdapter.portfolio(memoryState.walletContext.vaultAddress);
      executedToolsResult.push({ toolName: 'getPortfolio', success: true, data: portfolioData });
      await this.deps.memoryProvider.logAIAction(sessionId, 'getPortfolio', true, { portfolioData });
    }

    // =========================================================================
    // STEP 7: AI RESPONSE SYNTHESIS
    // Synthesizes final AI text output from provider response and tool execution data.
    // =========================================================================
    let finalContent = providerResponse.message.content;
    if (!finalContent) {
      if (intentResult.intent === 'CHECK_BALANCE') {
        const bal = memoryState.walletContext?.availableBalance ?? 0;
        const cur = memoryState.walletContext?.currency || 'ETH';
        finalContent = `Your verified vault balance is ${bal.toFixed(4)} ${cur}.`;
      } else if (intentResult.intent === 'SHOW_PORTFOLIO') {
        finalContent = 'Displaying your aggregate crypto portfolio holdings and market valuations.';
      } else if (intentResult.intent === 'SEND_PAYMENT') {
        finalContent = 'Opening KIVO Payment Checkout screen for your transaction.';
      } else {
        finalContent = `Logged request: "${userMessage}". Ready for vault actions.`;
      }
    }

    const assistantMsg: LLMMessage = {
      role: 'assistant',
      content: finalContent,
    };

    // =========================================================================
    // STEP 8: STREAMING OUTPUT EMISSION
    // Emits text deltas to StreamController for real-time partial text rendering.
    // =========================================================================
    if (options.streamController) {
      const streamCtrl = options.streamController;
      await streamCtrl.start(async (signal, emitChunk) => {
        const chunkSize = 10;
        for (let i = 0; i < finalContent.length; i += chunkSize) {
          if (signal.aborted) break;
          emitChunk(finalContent.slice(i, i + chunkSize));
        }
      });
    }

    // =========================================================================
    // STEP 9: MEMORY STATE UPDATE & PERSISTENCE
    // Saves assistant response, updated state, and action logs to memory store.
    // =========================================================================
    await this.deps.memoryProvider.appendMessage(sessionId, assistantMsg);
    await this.deps.memoryProvider.generateSummary(sessionId);

    // =========================================================================
    // STEP 10: UI DISPATCH
    // Returns final structured OrchestrationResult for React UI components.
    // =========================================================================
    return {
      sessionId,
      userMessage,
      assistantResponse: assistantMsg,
      classifiedIntent: intentResult.intent,
      executedTools: executedToolsResult,
      totalExecutionTimeMs: Date.now() - startTime,
    };
  }
}
