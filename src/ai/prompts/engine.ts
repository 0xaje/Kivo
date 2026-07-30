/**
 * @file src/ai/prompts/engine.ts
 * @description Central Prompt Engine managing system prompt generation and template hydration.
 */

import { PromptContext } from './context';
import { WalletPromptBuilder } from './wallet.prompt';
import { PaymentPromptBuilder } from './payment.prompt';
import { PortfolioPromptBuilder } from './portfolio.prompt';
import { EducationPromptBuilder } from './education.prompt';
import { SecurityPromptBuilder } from './security.prompt';
import { AssistantPromptBuilder } from './assistant.prompt';

export type SystemPromptDomain =
  | 'wallet'
  | 'payment'
  | 'portfolio'
  | 'education'
  | 'security'
  | 'assistant';

export interface IPromptTemplate {
  readonly id: string;
  readonly template: string;
  hydrate(variables: Record<string, string | number | boolean>): string;
}

export interface IPromptManager {
  registerTemplate(template: IPromptTemplate): void;
  getTemplate(id: string): IPromptTemplate | undefined;
  renderPrompt(id: string, variables?: Record<string, string | number | boolean>): string;
  buildSystemPrompt(domain: SystemPromptDomain, context: PromptContext): string;
}

export interface IPromptEngine {
  buildSystemPrompt(domain: SystemPromptDomain, context: PromptContext): string;
}

export class PromptEngine implements IPromptEngine, IPromptManager {
  private templates = new Map<string, IPromptTemplate>();

  public registerTemplate(template: IPromptTemplate): void {
    this.templates.set(template.id, template);
  }

  public getTemplate(id: string): IPromptTemplate | undefined {
    return this.templates.get(id);
  }

  public renderPrompt(id: string, variables?: Record<string, string | number | boolean>): string {
    const template = this.templates.get(id);
    if (!template) {
      throw new Error(`Prompt template "${id}" is not registered.`);
    }
    return variables ? template.hydrate(variables) : template.template;
  }

  public buildSystemPrompt(domain: SystemPromptDomain, context: PromptContext): string {
    switch (domain) {
      case 'wallet':
        return WalletPromptBuilder.build(context);
      case 'payment':
        return PaymentPromptBuilder.build(context);
      case 'portfolio':
        return PortfolioPromptBuilder.build(context);
      case 'education':
        return EducationPromptBuilder.build(context);
      case 'security':
        return SecurityPromptBuilder.build(context);
      case 'assistant':
      default:
        return AssistantPromptBuilder.build(context);
    }
  }
}
