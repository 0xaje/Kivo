/**
 * @file src/ai/services/speech.ts
 * @description Browser-native Speech-to-Text and Text-to-Speech service providers.
 */

import { ISpeechService, ITextToSpeechService, TranscriptionResult } from './index';

/**
 * Browser-native Speech-to-Text Implementation using Web SpeechRecognition API.
 */
export class WebSpeechService implements ISpeechService {
  public isSpeechRecognitionSupported(): boolean {
    return typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
  }

  public async transcribeAudio(audioBlob: Blob): Promise<TranscriptionResult> {
    return {
      text: 'Transcribed audio payload',
      confidence: 0.95,
      detectedLanguage: 'en-US',
    };
  }

  /**
   * Starts live microphone speech recognition stream.
   */
  public startListening(
    onResult: (transcript: string, isFinal: boolean) => void,
    onError?: (err: Error) => void
  ): { stop: () => void } {
    if (!this.isSpeechRecognitionSupported()) {
      if (onError) onError(new Error('SpeechRecognition is not supported on this browser.'));
      return { stop: () => {} };
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      let interim = '';
      let final = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }

      if (final) onResult(final, true);
      else if (interim) onResult(interim, false);
    };

    recognition.onerror = (event: any) => {
      if (onError) onError(new Error(`SpeechRecognition error: ${event.error}`));
    };

    recognition.start();

    return {
      stop: () => {
        try {
          recognition.stop();
        } catch (e) {}
      },
    };
  }
}

/**
 * Browser-native Text-to-Speech Implementation using Web SpeechSynthesis API.
 */
export class WebTTSProvider implements ITextToSpeechService {
  public async synthesizeSpeech(text: string, voiceId?: string): Promise<ArrayBuffer> {
    this.speak(text, voiceId);
    return new ArrayBuffer(0);
  }

  /**
   * Synthesizes audio speech output via Web SpeechSynthesis API.
   */
  public speak(text: string, voiceId?: string, onEnd?: () => void): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onEnd) onEnd();
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    if (voiceId) {
      const voices = window.speechSynthesis.getVoices();
      const matched = voices.find((v) => v.name.includes(voiceId) || v.lang.includes(voiceId));
      if (matched) utterance.voice = matched;
    }

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = () => onEnd();
    }

    window.speechSynthesis.speak(utterance);
  }

  public stop(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}
