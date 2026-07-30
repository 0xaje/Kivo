/**
 * @file src/ai/stream/types.ts
 * @description Types and contracts for Provider-Independent Streaming Response Architecture.
 */

import { LLMStreamChunk } from '../types';

/**
 * Lifecycle status states for AI streams.
 */
export type StreamStatus = 'idle' | 'streaming' | 'interrupted' | 'completed' | 'error';

/**
 * Normalized provider-independent stream delta payload.
 */
export interface StreamChunkPayload {
  chunkId: string;
  deltaText: string;
  accumulatedText: string;
  isFinal: boolean;
  finishReason?: string;
  rawChunk?: LLMStreamChunk;
}

/**
 * Stream listener callback types.
 */
export type StreamChunkListener = (payload: StreamChunkPayload) => void;
export type StreamStatusListener = (status: StreamStatus) => void;
export type StreamErrorListener = (error: Error) => void;

/**
 * Options for stream initiation.
 */
export interface StreamOptions {
  sessionId?: string;
  onChunk?: StreamChunkListener;
  onStatusChange?: StreamStatusListener;
  onError?: StreamErrorListener;
}

/**
 * Interface for Stream Controller managing stream lifecycle, cancellation, and interruption.
 */
export interface IStreamController {
  readonly status: StreamStatus;
  readonly accumulatedText: string;
  readonly abortSignal: AbortSignal;

  start(
    streamExecutor: (signal: AbortSignal, emitChunk: (delta: string) => void) => Promise<void>,
    options?: StreamOptions
  ): Promise<void>;

  cancel(): void;
  interrupt(): void;
  reset(): void;

  onChunk(listener: StreamChunkListener): () => void;
  onStatusChange(listener: StreamStatusListener): () => void;
}
