/**
 * @file src/ai/voice/useAIVoicePipeline.ts
 * @description React hook for Voice AI Pipeline integration.
 */

import { useState, useCallback, useRef } from 'react';
import { VoicePipeline } from './pipeline';
import { VoicePipelineResult, VoicePipelineOptions } from './types';
import { AIOrchestratorDependencies, AIOrchestrator } from '../orchestrator';
import { WebSpeechService, WebTTSProvider } from '../services/speech';

export interface UseAIVoicePipelineReturn {
  isListening: boolean;
  isSpeaking: boolean;
  transcript: string;
  result: VoicePipelineResult | null;
  error: Error | null;
  startListening: (options?: VoicePipelineOptions) => void;
  stopListening: () => void;
  speakText: (text: string) => void;
}

export function useAIVoicePipeline(deps: AIOrchestratorDependencies): UseAIVoicePipelineReturn {
  const orchestratorRef = useRef<AIOrchestrator | null>(null);
  const voicePipelineRef = useRef<VoicePipeline | null>(null);
  const speechServiceRef = useRef<WebSpeechService | null>(null);
  const ttsProviderRef = useRef<WebTTSProvider | null>(null);

  const [isListening, setIsListening] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [result, setResult] = useState<VoicePipelineResult | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const activeRecognitionRef = useRef<{ stop: () => void } | null>(null);

  if (!orchestratorRef.current) {
    orchestratorRef.current = new AIOrchestrator(deps);
    voicePipelineRef.current = new VoicePipeline(orchestratorRef.current);
    speechServiceRef.current = new WebSpeechService();
    ttsProviderRef.current = new WebTTSProvider();
  }

  const startListening = useCallback((options?: VoicePipelineOptions) => {
    setError(null);
    setTranscript('');
    setIsListening(true);

    activeRecognitionRef.current = speechServiceRef.current!.startListening(
      async (finalText, isFinal) => {
        setTranscript(finalText);
        if (isFinal) {
          setIsListening(false);
          try {
            setIsSpeaking(true);
            const res = await voicePipelineRef.current!.processSpeechInput(finalText, {
              ...options,
              autoSpeakResponse: false,
            });
            setResult(res);

            // Speak response text via TTS
            ttsProviderRef.current!.speak(res.spokenAudioText, options?.voiceId, () => {
              setIsSpeaking(false);
            });
          } catch (err: any) {
            setError(err);
            setIsSpeaking(false);
          }
        }
      },
      (err) => {
        setError(err);
        setIsListening(false);
      }
    );
  }, []);

  const stopListening = useCallback(() => {
    if (activeRecognitionRef.current) {
      activeRecognitionRef.current.stop();
      activeRecognitionRef.current = null;
    }
    setIsListening(false);
  }, []);

  const speakText = useCallback((text: string) => {
    setIsSpeaking(true);
    ttsProviderRef.current!.speak(text, undefined, () => {
      setIsSpeaking(false);
    });
  }, []);

  return {
    isListening,
    isSpeaking,
    transcript,
    result,
    error,
    startListening,
    stopListening,
    speakText,
  };
}
