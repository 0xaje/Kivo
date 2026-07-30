/**
 * @file src/ai/tools/index.ts
 * @description Tool definitions, JSON schema validators, and ToolRegistry for LLM Function Calling.
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
 * Tool execution result container.
 */
export interface ToolExecutionResult<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Interface that every AI Tool MUST implement.
 * SOLID Single Responsibility Principle for discrete tool capabilities.
 */
export interface IAITool<TParams = Record<string, unknown>, TResult = unknown> {
  /**
   * Unique name of the tool (e.g., 'send_payment', 'fetch_balance', 'query_portfolio').
   */
  readonly name: string;

  /**
   * Clear description explaining tool functionality to the LLM.
   */
  readonly description: string;

  /**
   * JSON Schema defining expected input parameters.
   */
  readonly parametersSchema: JSONSchema;

  /**
   * Executes the tool capability.
   */
  execute(params: TParams, context: AIExecutionContext): Promise<ToolExecutionResult<TResult>>;
}

/**
 * Interface for Tool Registry managing tool discovery and execution.
 */
export interface IToolRegistry {
  registerTool(tool: IAITool): void;
  getTool(name: string): IAITool | undefined;
  listTools(): IAITool[];
  executeTool(name: string, params: Record<string, unknown>, context: AIExecutionContext): Promise<ToolExecutionResult>;
}

/**
 * Concrete implementation of IToolRegistry.
 */
export class ToolRegistry implements IToolRegistry {
  private tools = new Map<string, IAITool>();

  public registerTool(tool: IAITool): void {
    this.tools.set(tool.name, tool);
  }

  public getTool(name: string): IAITool | undefined {
    return this.tools.get(name);
  }

  public listTools(): IAITool[] {
    return Array.from(this.tools.values());
  }

  public async executeTool(
    name: string,
    params: Record<string, unknown>,
    context: AIExecutionContext
  ): Promise<ToolExecutionResult> {
    const tool = this.tools.get(name);
    if (!tool) {
      return {
        success: false,
        error: `Tool "${name}" is not registered in ToolRegistry.`,
      };
    }
    try {
      return await tool.execute(params, context);
    } catch (err: any) {
      return {
        success: false,
        error: err.message || `Failed to execute tool "${name}".`,
      };
    }
  }
}
