/**
 * @file src/ai/stream/stream.test.ts
 * @description Unit test suite for Streaming Response Controller and cancellation pipeline.
 */

import { StreamController } from './index';

export async function runStreamUnitTests() {
  const controller = new StreamController();

  // Test 1: Successful Stream Chunk Accumulation
  const executor = async (signal: AbortSignal, emitChunk: (delta: string) => void) => {
    emitChunk('Hello ');
    emitChunk('World');
  };

  await controller.start(executor);
  if (controller.accumulatedText !== 'Hello World' || controller.status !== 'completed') {
    throw new Error('Test 1 Failed: Chunk accumulation or completion status mismatch');
  }

  // Test 2: Stream Cancellation via AbortSignal
  const controller2 = new StreamController();
  const cancelExecutor = async (signal: AbortSignal, emitChunk: (delta: string) => void) => {
    emitChunk('Chunk 1');
    controller2.cancel();
    if (signal.aborted) {
      const err = new Error('Aborted');
      err.name = 'AbortError';
      throw err;
    }
    emitChunk('Chunk 2');
  };

  await controller2.start(cancelExecutor);
  if (controller2.status !== 'interrupted' || controller2.accumulatedText !== 'Chunk 1') {
    throw new Error('Test 2 Failed: Stream cancellation or partial text mismatch');
  }

  // Test 3: Stream Interruption preserves partial text
  const controller3 = new StreamController();
  const interruptExecutor = async (signal: AbortSignal, emitChunk: (delta: string) => void) => {
    emitChunk('Partial text ');
    controller3.interrupt();
  };

  await controller3.start(interruptExecutor);
  if (controller3.accumulatedText !== 'Partial text ' || controller3.status !== 'interrupted') {
    throw new Error('Test 3 Failed: Stream interruption failed');
  }

  console.log('✅ ALL STREAMING RESPONSE ARCHITECTURE UNIT TESTS PASSED (3/3)');
}

runStreamUnitTests().catch((err) => {
  console.error(err);
  throw err;
});
