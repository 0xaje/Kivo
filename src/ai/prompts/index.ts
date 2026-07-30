/**
 * @file src/ai/prompts/index.ts
 * @description System prompt managers, variable hydration, and context builders.
 */

/**
 * Interface representing a template for system/user prompts.
 */
export interface IPromptTemplate {
  readonly id: string;
  readonly template: string;
  hydrate(variables: Record<string, string | number | boolean>): string;
}

/**
 * Concrete implementation of IPromptTemplate.
 */
export class PromptTemplate implements IPromptTemplate {
  constructor(public readonly id: string, public readonly template: string) {}

  public hydrate(variables: Record<string, string | number | boolean>): string {
    let result = this.template;
    for (const [key, value] of Object.entries(variables)) {
      const placeholder = `{{${key}}}`;
      result = result.split(placeholder).join(String(value));
    }
    return result;
  }
}

/**
 * Interface for Prompt Manager repository.
 */
export interface IPromptManager {
  registerTemplate(template: IPromptTemplate): void;
  getTemplate(id: string): IPromptTemplate | undefined;
  renderPrompt(id: string, variables?: Record<string, string | number | boolean>): string;
}

/**
 * Concrete implementation of IPromptManager.
 */
export class PromptManager implements IPromptManager {
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
}
