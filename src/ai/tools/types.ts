/**
 * @file src/ai/tools/types.ts
 * @description Core types and abstract base tool class for OpenAI Function Calling tools.
 */

import { AIExecutionContext } from '../types';

/**
 * JSON Schema property descriptor for tool parameters.
 */
export interface JSONSchemaProperty {
  type: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object';
  description?: string;
  enum?: string[];
  items?: JSONSchemaProperty;
  properties?: Record<string, JSONSchemaProperty>;
  required?: string[];
}

/**
 * Open API JSON Schema for tool parameters.
 */
export interface JSONSchema {
  type: 'object';
  properties: Record<string, JSONSchemaProperty>;
  required?: string[];
}

/**
 * Open API / OpenAI Function Calling specification.
 */
export interface OpenAIToolDefinition {
  type: 'function';
  function: {
    name: string;
    description: string;
    parameters: JSONSchema;
  };
}

/**
 * Tool execution result container.
 */
export interface ToolExecutionResult<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Production-ready interface that every AI Tool MUST implement.
 * Exposes: name, description, parameters, execute()
 */
export interface IAITool<TParams = any, TResult = any> {
  readonly name: string;
  readonly description: string;
  readonly parameters: JSONSchema;

  execute(params: TParams, context: AIExecutionContext): Promise<ToolExecutionResult<TResult>>;
  toOpenAISchema(): OpenAIToolDefinition;
}

/**
 * Abstract Base Class for AI Tools reducing boilerplate while enforcing OpenAI tool compliance.
 */
export abstract class AbstractAITool<TParams = any, TResult = any>
  implements IAITool<TParams, TResult>
{
  public abstract readonly name: string;
  public abstract readonly description: string;
  public abstract readonly parameters: JSONSchema;

  public abstract execute(params: TParams, context: AIExecutionContext): Promise<ToolExecutionResult<TResult>>;

  public toOpenAISchema(): OpenAIToolDefinition {
    return {
      type: 'function',
      function: {
        name: this.name,
        description: this.description,
        parameters: this.parameters,
      },
    };
  }
}
