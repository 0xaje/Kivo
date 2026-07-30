/**
 * @file src/ai/voice/types.ts
 * @description Domain contracts and types for Voice AI Pipeline integration.
 */

import { OrchestrationResult } from '../orchestrator';

export interface VoicePipelineOptions {
  sessionId?: string;
  autoSpeakResponse?: boolean;
  voiceId?: string;
}

export interface VoicePipelineResult {
  transcription: string;
  orchestrationResult: OrchestrationResult;
  spokenAudioText: string;
}

export interface IVoicePipeline {
  processSpeechInput(
    transcript: string,
    options?: VoicePipelineOptions
  ): Promise<VoicePipelineResult>;
}
