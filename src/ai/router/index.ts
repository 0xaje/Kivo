/**
 * @file src/ai/router/index.ts
 * @description Clean, extensible AI Intent Router using the Strategy Pattern and Entity Extraction.
 */

import { LLMMessage, AIExecutionContext } from '../types';

/**
 * All supported system intent types.
 */
export type IntentType =
  | 'CHECK_BALANCE'
  | 'SEND_PAYMENT'
  | 'REQUEST_PAYMENT'
  | 'SHOW_PORTFOLIO'
  | 'EXPLAIN_TRANSACTION'
  | 'SHOW_HISTORY'
  | 'SCAN_QR'
  | 'LEARN'
  | 'HELP'
  | 'UNKNOWN';

/**
 * Structured analysis result returned by the Intent Router.
 */
export interface IntentAnalysisResult {
  intent: IntentType;
  confidence: number;
  entities: Record<string, unknown>;
  nextAction: string;
}

/**
 * Strategy interface for discrete intent parsers.
 * Enforces SOLID Open/Closed principle allowing unlimited future intent additions.
 */
export interface IIntentParserStrategy {
  readonly intent: IntentType;
  readonly name: string;

  /**
   * Evaluates tokenized input and calculates confidence score (0.0 to 1.0).
   */
  evaluate(tokens: string[], rawInput: string): number;

  /**
   * Parses the input into a structured IntentAnalysisResult.
   */
  parse(tokens: string[], rawInput: string, confidence: number): IntentAnalysisResult;
}

/**
 * Entity Extractor utility for parsing numerical amounts, currencies, and addresses.
 */
export class EntityExtractor {
  public static extractAmount(tokens: string[]): number | undefined {
    for (const token of tokens) {
      const num = parseFloat(token);
      if (!isNaN(num) && isFinite(num) && num > 0) {
        return num;
      }
    }
    return undefined;
  }

  public static extractCurrency(tokens: string[]): string | undefined {
    const knownCurrencies = ['NIM', 'ETH', 'BTC', 'USDC', 'SOL', 'USD'];
    for (const token of tokens) {
      const upper = token.toUpperCase();
      if (knownCurrencies.includes(upper)) {
        return upper;
      }
    }
    return undefined;
  }

  public static extractRecipient(tokens: string[], rawInput: string): string | undefined {
    const toIndex = tokens.indexOf('to');
    if (toIndex !== -1 && toIndex < tokens.length - 1) {
      return tokens[toIndex + 1];
    }
    return undefined;
  }
}

/**
 * Parser Strategy: CHECK_BALANCE
 */
export class CheckBalanceParser implements IIntentParserStrategy {
  public readonly intent: IntentType = 'CHECK_BALANCE';
  public readonly name = 'CheckBalanceParser';

  private keywords = ['balance', 'vault', 'funds', 'available', 'how', 'much'];

  public evaluate(tokens: string[]): number {
    const matches = tokens.filter((t) => this.keywords.includes(t.toLowerCase()));
    if (tokens.includes('balance')) return 0.95;
    if (matches.length >= 2) return 0.85;
    return matches.length > 0 ? 0.6 : 0;
  }

  public parse(tokens: string[], _rawInput: string, confidence: number): IntentAnalysisResult {
    const currency = EntityExtractor.extractCurrency(tokens) || 'NIM';
    return {
      intent: this.intent,
      confidence,
      entities: { currency },
      nextAction: 'QUERY_VAULT_BALANCE',
    };
  }
}

/**
 * Parser Strategy: SEND_PAYMENT
 */
export class SendPaymentParser implements IIntentParserStrategy {
  public readonly intent: IntentType = 'SEND_PAYMENT';
  public readonly name = 'SendPaymentParser';

  private keywords = ['send', 'pay', 'transfer', 'wire'];

  public evaluate(tokens: string[]): number {
    const matches = tokens.filter((t) => this.keywords.includes(t.toLowerCase()));
    if (matches.length > 0) return 0.9;
    return 0;
  }

  public parse(tokens: string[], rawInput: string, confidence: number): IntentAnalysisResult {
    const amount = EntityExtractor.extractAmount(tokens);
    const currency = EntityExtractor.extractCurrency(tokens) || 'NIM';
    const recipient = EntityExtractor.extractRecipient(tokens, rawInput);

    return {
      intent: this.intent,
      confidence,
      entities: { amount, currency, recipient },
      nextAction: 'OPEN_CHECKOUT_SCREEN',
    };
  }
}

/**
 * Parser Strategy: REQUEST_PAYMENT
 */
export class RequestPaymentParser implements IIntentParserStrategy {
  public readonly intent: IntentType = 'REQUEST_PAYMENT';
  public readonly name = 'RequestPaymentParser';

  public evaluate(tokens: string[]): number {
    const lower = tokens.map((t) => t.toLowerCase());
    if (lower.includes('request') || lower.includes('invoice') || lower.includes('receive')) {
      return 0.9;
    }
    return 0;
  }

  public parse(tokens: string[], _rawInput: string, confidence: number): IntentAnalysisResult {
    const amount = EntityExtractor.extractAmount(tokens);
    const currency = EntityExtractor.extractCurrency(tokens) || 'NIM';
    return {
      intent: this.intent,
      confidence,
      entities: { amount, currency },
      nextAction: 'GENERATE_PAYMENT_REQUEST',
    };
  }
}

/**
 * Parser Strategy: SHOW_PORTFOLIO
 */
export class ShowPortfolioParser implements IIntentParserStrategy {
  public readonly intent: IntentType = 'SHOW_PORTFOLIO';
  public readonly name = 'ShowPortfolioParser';

  public evaluate(tokens: string[]): number {
    const lower = tokens.map((t) => t.toLowerCase());
    if (lower.includes('portfolio') || lower.includes('holdings') || lower.includes('allocation')) {
      return 0.95;
    }
    return 0;
  }

  public parse(_tokens: string[], _rawInput: string, confidence: number): IntentAnalysisResult {
    return {
      intent: this.intent,
      confidence,
      entities: {},
      nextAction: 'OPEN_PORTFOLIO_DASHBOARD',
    };
  }
}

/**
 * Parser Strategy: EXPLAIN_TRANSACTION
 */
export class ExplainTransactionParser implements IIntentParserStrategy {
  public readonly intent: IntentType = 'EXPLAIN_TRANSACTION';
  public readonly name = 'ExplainTransactionParser';

  public evaluate(tokens: string[]): number {
    const lower = tokens.map((t) => t.toLowerCase());
    if (lower.includes('explain') || lower.includes('details') || lower.includes('fee') || lower.includes('why')) {
      return 0.85;
    }
    return 0;
  }

  public parse(tokens: string[], rawInput: string, confidence: number): IntentAnalysisResult {
    return {
      intent: this.intent,
      confidence,
      entities: { rawQuery: rawInput },
      nextAction: 'EXPLAIN_LAST_TRANSACTION',
    };
  }
}

/**
 * Parser Strategy: SHOW_HISTORY
 */
export class ShowHistoryParser implements IIntentParserStrategy {
  public readonly intent: IntentType = 'SHOW_HISTORY';
  public readonly name = 'ShowHistoryParser';

  public evaluate(tokens: string[]): number {
    const lower = tokens.map((t) => t.toLowerCase());
    if (lower.includes('history') || lower.includes('transactions') || lower.includes('ledger') || lower.includes('recent')) {
      return 0.9;
    }
    return 0;
  }

  public parse(_tokens: string[], _rawInput: string, confidence: number): IntentAnalysisResult {
    return {
      intent: this.intent,
      confidence,
      entities: {},
      nextAction: 'OPEN_TRANSACTION_HISTORY',
    };
  }
}

/**
 * Parser Strategy: SCAN_QR
 */
export class ScanQRParser implements IIntentParserStrategy {
  public readonly intent: IntentType = 'SCAN_QR';
  public readonly name = 'ScanQRParser';

  public evaluate(tokens: string[]): number {
    const lower = tokens.map((t) => t.toLowerCase());
    if (lower.includes('scan') || lower.includes('qr') || lower.includes('camera')) {
      return 0.95;
    }
    return 0;
  }

  public parse(_tokens: string[], _rawInput: string, confidence: number): IntentAnalysisResult {
    return {
      intent: this.intent,
      confidence,
      entities: {},
      nextAction: 'OPEN_QR_SCANNER_CAMERA',
    };
  }
}

/**
 * Parser Strategy: LEARN
 */
export class LearnParser implements IIntentParserStrategy {
  public readonly intent: IntentType = 'LEARN';
  public readonly name = 'LearnParser';

  public evaluate(tokens: string[]): number {
    const lower = tokens.map((t) => t.toLowerCase());
    if (lower.includes('learn') || lower.includes('teach') || lower.includes('guide') || lower.includes('understand')) {
      return 0.85;
    }
    return 0;
  }

  public parse(tokens: string[], rawInput: string, confidence: number): IntentAnalysisResult {
    return {
      intent: this.intent,
      confidence,
      entities: { topic: rawInput },
      nextAction: 'PROVIDE_EDUCATIONAL_GUIDE',
    };
  }
}

/**
 * Parser Strategy: HELP
 */
export class HelpParser implements IIntentParserStrategy {
  public readonly intent: IntentType = 'HELP';
  public readonly name = 'HelpParser';

  public evaluate(tokens: string[]): number {
    const lower = tokens.map((t) => t.toLowerCase());
    if (lower.includes('help') || lower.includes('commands') || lower.includes('support') || lower.includes('options')) {
      return 0.9;
    }
    return 0;
  }

  public parse(_tokens: string[], _rawInput: string, confidence: number): IntentAnalysisResult {
    return {
      intent: this.intent,
      confidence,
      entities: {},
      nextAction: 'SHOW_ASSISTANT_HELP_MENU',
    };
  }
}

/**
 * Core Interface for Intent Router Coordinator.
 */
export interface IIntentRouter {
  registerStrategy(strategy: IIntentParserStrategy): void;
  classifyIntent(input: string, _history?: LLMMessage[], _context?: AIExecutionContext): Promise<IntentAnalysisResult>;
}

/**
 * Production implementation of IIntentRouter.
 * Unit-testable, extensible parser architecture.
 */
export class IntentRouter implements IIntentRouter {
  private strategies: IIntentParserStrategy[] = [];

  constructor() {
    // Register default built-in parser strategies
    this.registerStrategy(new CheckBalanceParser());
    this.registerStrategy(new SendPaymentParser());
    this.registerStrategy(new RequestPaymentParser());
    this.registerStrategy(new ShowPortfolioParser());
    this.registerStrategy(new ExplainTransactionParser());
    this.registerStrategy(new ShowHistoryParser());
    this.registerStrategy(new ScanQRParser());
    this.registerStrategy(new LearnParser());
    this.registerStrategy(new HelpParser());
  }

  public registerStrategy(strategy: IIntentParserStrategy): void {
    this.strategies.push(strategy);
  }

  public async classifyIntent(
    input: string,
    _history?: LLMMessage[],
    _context?: AIExecutionContext
  ): Promise<IntentAnalysisResult> {
    const cleanInput = input.trim();
    if (!cleanInput) {
      return {
        intent: 'UNKNOWN',
        confidence: 1.0,
        entities: {},
        nextAction: 'PROMPT_FOR_INPUT',
      };
    }

    // Tokenize string input
    const tokens = cleanInput.split(/\s+/).map((t) => t.replace(/[^\w.]/g, ''));

    let bestStrategy: IIntentParserStrategy | null = null;
    let maxConfidence = 0;

    for (const strategy of this.strategies) {
      const score = strategy.evaluate(tokens, cleanInput);
      if (score > maxConfidence) {
        maxConfidence = score;
        bestStrategy = strategy;
      }
    }

    if (bestStrategy && maxConfidence >= 0.5) {
      return bestStrategy.parse(tokens, cleanInput, maxConfidence);
    }

    return {
      intent: 'UNKNOWN',
      confidence: 0.2,
      entities: { rawInput: cleanInput },
      nextAction: 'FALLBACK_TO_GENERAL_ASSISTANT',
    };
  }
}
