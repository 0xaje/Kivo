/**
 * @file src/ai/services/index.ts
 * @description Auxiliary service interfaces: Speech-to-Text, Text-to-Speech, and Guardrail Safety Policy Services.
 */

import { LLMMessage } from '../types';

/**
 * Result returned by speech recognition service.
 */
export interface TranscriptionResult {
  text: string;
  confidence: number;
  detectedLanguage?: string;
}

/**
 * Interface for Audio Speech-to-Text Services.
 */
export interface ISpeechService {
  transcribeAudio(audioBlob: Blob): Promise<TranscriptionResult>;
  isSpeechRecognitionSupported(): boolean;
}

/**
 * Interface for Text-to-Speech Audio Generation.
 */
export interface ITextToSpeechService {
  synthesizeSpeech(text: string, voiceId?: string): Promise<ArrayBuffer>;
}

/**
 * Safety assessment returned by Guardrail Security Policy Service.
 */
export interface SafetyAssessment {
  isSafe: boolean;
  flaggedCategories?: string[];
  reason?: string;
}

/**
 * Interface for Security Guardrail & Prompt Injection Protection Service.
 */
export interface ISecurityGuardService {
  validateInput(input: string): Promise<SafetyAssessment>;
  validateOutput(message: LLMMessage): Promise<SafetyAssessment>;
}
