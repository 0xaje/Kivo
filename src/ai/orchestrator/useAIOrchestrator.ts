/**
 * @file src/ai/orchestrator/useAIOrchestrator.ts
 * @description React hook for orchestrating AI pipeline execution, streaming, and state management.
 */

import { useState, useCallback, useRef } from 'react';
import { AIOrchestrator } from './orchestrator';
import { OrchestrationOptions, OrchestrationResult, AIOrchestratorDependencies } from './types';
import { StreamController } from '../stream';

export interface UseAIOrchestratorReturn {
  isProcessing: boolean;
  result: OrchestrationResult | null;
  error: Error | null;
  processUserMessage: (
    userMessage: string,
    sessionId?: string,
    streamController?: StreamController
  ) => Promise<OrchestrationResult | null>;
}

export function useAIOrchestrator(deps: AIOrchestratorDependencies): UseAIOrchestratorReturn {
  const orchestratorRef = useRef<AIOrchestrator | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [result, setResult] = useState<OrchestrationResult | null>(null);
  const [error, setError] = useState<Error | null>(null);

  if (!orchestratorRef.current) {
    orchestratorRef.current = new AIOrchestrator(deps);
  }

  const processUserMessage = useCallback(
    async (
      userMessage: string,
      sessionId: string = 'default-session',
      streamController?: StreamController
    ): Promise<OrchestrationResult | null> => {
      setIsProcessing(true);
      setError(null);

      try {
        const options: OrchestrationOptions = {
          userMessage,
          context: {
            sessionId,
            timestamp: Date.now(),
          },
          streamController,
        };

        const res = await orchestratorRef.current!.processMessage(options);
        setResult(res);
        return res;
      } catch (err: any) {
        setError(err);
        return null;
      } finally {
        setIsProcessing(false);
      }
    },
    []
  );

  return {
    isProcessing,
    result,
    error,
    processUserMessage,
  };
}
