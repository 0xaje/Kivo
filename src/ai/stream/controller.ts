/**
 * @file src/ai/stream/controller.ts
 * @description Production StreamController supporting stream cancellation, interruption, and partial rendering.
 */

import {
  IStreamController,
  StreamStatus,
  StreamOptions,
  StreamChunkPayload,
  StreamChunkListener,
  StreamStatusListener,
  StreamErrorListener,
} from './types';

export class StreamController implements IStreamController {
  private _status: StreamStatus = 'idle';
  private _accumulatedText: string = '';
  private abortController: AbortController | null = null;

  private chunkListeners = new Set<StreamChunkListener>();
  private statusListeners = new Set<StreamStatusListener>();
  private errorListeners = new Set<StreamErrorListener>();

  public get status(): StreamStatus {
    return this._status;
  }

  public get accumulatedText(): string {
    return this._accumulatedText;
  }

  public get abortSignal(): AbortSignal {
    if (!this.abortController) {
      this.abortController = new AbortController();
    }
    return this.abortController.signal;
  }

  private setStatus(status: StreamStatus): void {
    if (this._status !== status) {
      this._status = status;
      this.statusListeners.forEach((l) => l(status));
    }
  }

  public onChunk(listener: StreamChunkListener): () => void {
    this.chunkListeners.add(listener);
    return () => this.chunkListeners.delete(listener);
  }

  public onStatusChange(listener: StreamStatusListener): () => void {
    this.statusListeners.add(listener);
    return () => this.statusListeners.delete(listener);
  }

  public onError(listener: StreamErrorListener): () => void {
    this.errorListeners.add(listener);
    return () => this.errorListeners.delete(listener);
  }

  public async start(
    streamExecutor: (signal: AbortSignal, emitChunk: (delta: string) => void) => Promise<void>,
    options?: StreamOptions
  ): Promise<void> {
    if (this._status === 'streaming') {
      this.cancel();
    }

    this.reset();
    this.abortController = new AbortController();
    this.setStatus('streaming');

    if (options?.onChunk) this.onChunk(options.onChunk);
    if (options?.onStatusChange) this.onStatusChange(options.onStatusChange);
    if (options?.onError) this.onError(options.onError);

    const emitChunk = (delta: string) => {
      if (this._status !== 'streaming') return;
      this._accumulatedText += delta;

      const payload: StreamChunkPayload = {
        chunkId: `chunk-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        deltaText: delta,
        accumulatedText: this._accumulatedText,
        isFinal: false,
      };

      this.chunkListeners.forEach((l) => l(payload));
    };

    try {
      await streamExecutor(this.abortController.signal, emitChunk);

      if (this._status === 'streaming') {
        this.setStatus('completed');
        const finalPayload: StreamChunkPayload = {
          chunkId: `final-${Date.now()}`,
          deltaText: '',
          accumulatedText: this._accumulatedText,
          isFinal: true,
          finishReason: 'completed',
        };
        this.chunkListeners.forEach((l) => l(finalPayload));
      }
    } catch (err: any) {
      if (err.name === 'AbortError' || this.abortController.signal.aborted) {
        if (this._status !== 'interrupted') {
          this.setStatus('interrupted');
        }
      } else {
        this.setStatus('error');
        this.errorListeners.forEach((l) => l(err));
      }
    }
  }

  /**
   * Cancels active stream completely via AbortController.
   */
  public cancel(): void {
    if (this.abortController && !this.abortController.signal.aborted) {
      this.abortController.abort();
    }
    this.setStatus('interrupted');
  }

  /**
   * Interrupts active stream while preserving partial text received so far.
   */
  public interrupt(): void {
    this.cancel();
  }

  /**
   * Resets stream state and clears accumulated text.
   */
  public reset(): void {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
    this._accumulatedText = '';
    this.setStatus('idle');
  }
}
