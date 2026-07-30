/**
 * @file src/ai/stream/useAIStream.ts
 * @description Production React hook for AI Streaming responses, cancellation, and typing indicators.
 */

import { useState, useRef, useEffect, useCallback } from 'react';
import { StreamController } from './controller';
import { StreamStatus, StreamOptions } from './types';

export interface UseAIStreamReturn {
  text: string;
  status: StreamStatus;
  isStreaming: boolean;
  error: Error | null;
  startStream: (
    executor: (signal: AbortSignal, emitChunk: (delta: string) => void) => Promise<void>,
    options?: StreamOptions
  ) => Promise<void>;
  cancelStream: () => void;
  interruptStream: () => void;
  resetStream: () => void;
}

export function useAIStream(): UseAIStreamReturn {
  const controllerRef = useRef<StreamController | null>(null);
  const [text, setText] = useState<string>('');
  const [status, setStatus] = useState<StreamStatus>('idle');
  const [error, setError] = useState<Error | null>(null);

  if (!controllerRef.current) {
    controllerRef.current = new StreamController();
  }

  useEffect(() => {
    const controller = controllerRef.current!;

    const unsubscribeChunk = controller.onChunk((payload) => {
      setText(payload.accumulatedText);
    });

    const unsubscribeStatus = controller.onStatusChange((newStatus) => {
      setStatus(newStatus);
    });

    const unsubscribeError = controller.onError((err) => {
      setError(err);
    });

    return () => {
      unsubscribeChunk();
      unsubscribeStatus();
      unsubscribeError();
      controller.reset();
    };
  }, []);

  const startStream = useCallback(
    async (
      executor: (signal: AbortSignal, emitChunk: (delta: string) => void) => Promise<void>,
      options?: StreamOptions
    ) => {
      setText('');
      setError(null);
      await controllerRef.current!.start(executor, options);
    },
    []
  );

  const cancelStream = useCallback(() => {
    controllerRef.current?.cancel();
  }, []);

  const interruptStream = useCallback(() => {
    controllerRef.current?.interrupt();
  }, []);

  const resetStream = useCallback(() => {
    setText('');
    setError(null);
    controllerRef.current?.reset();
  }, []);

  return {
    text,
    status,
    isStreaming: status === 'streaming',
    error,
    startStream,
    cancelStream,
    interruptStream,
    resetStream,
  };
}
