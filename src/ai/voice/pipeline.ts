/**
 * @file src/ai/voice/pipeline.ts
 * @description Voice Pipeline Controller integrating STT/TTS with the core AI Orchestrator.
 */

import { IVoicePipeline, VoicePipelineOptions, VoicePipelineResult } from './types';
import { IAIOrchestrator } from '../orchestrator';
import { WebTTSProvider } from '../services/speech';

export class VoicePipeline implements IVoicePipeline {
  private ttsProvider = new WebTTSProvider();

  constructor(private readonly orchestrator: IAIOrchestrator) {}

  /**
   * Passes transcribed speech text through the SAME AI Orchestrator pipeline.
   * Voice is simply another input. Zero business logic duplication.
   */
  public async processSpeechInput(
    transcript: string,
    options?: VoicePipelineOptions
  ): Promise<VoicePipelineResult> {
    const sessionId = options?.sessionId || 'default-voice-session';

    // 1. Pass transcribed speech text through existing 10-step AI Orchestrator Pipeline
    const orchestrationResult = await this.orchestrator.processMessage({
      userMessage: transcript,
      context: {
        sessionId,
        timestamp: Date.now(),
      },
      voiceMode: true,
    });

    const responseText = orchestrationResult.assistantResponse.content;

    // 2. Synthesize audio speech output via WebTTSProvider (if autoSpeakResponse enabled)
    if (options?.autoSpeakResponse !== false) {
      this.ttsProvider.speak(responseText, options?.voiceId);
    }

    return {
      transcription: transcript,
      orchestrationResult,
      spokenAudioText: responseText,
    };
  }

  public stopSpeechSynthesis(): void {
    this.ttsProvider.stop();
  }
}
