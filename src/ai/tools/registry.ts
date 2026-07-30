/**
 * @file src/ai/tools/registry.ts
 * @description Dependency injection container for registering and discovering OpenAI tools.
 */

import { IAITool, OpenAIToolDefinition, ToolExecutionResult } from './types';
import { AIExecutionContext } from '../types';

/**
 * Interface for Tool Registry managing tool discovery, dependency injection, and execution.
 */
export interface IToolRegistry {
  registerTool(tool: IAITool<any, any>): void;
  registerTools(tools: IAITool<any, any>[]): void;
  getTool(name: string): IAITool<any, any> | undefined;
  listTools(): IAITool<any, any>[];
  exportOpenAISchemas(): OpenAIToolDefinition[];
  executeTool(name: string, params: Record<string, unknown>, context: AIExecutionContext): Promise<ToolExecutionResult>;
}

/**
 * Concrete ToolRegistry implementing IToolRegistry (Dependency Injection Container).
 */
export class ToolRegistry implements IToolRegistry {
  private tools = new Map<string, IAITool<any, any>>();

  public registerTool(tool: IAITool<any, any>): void {
    this.tools.set(tool.name, tool);
  }

  public registerTools(tools: IAITool<any, any>[]): void {
    for (const tool of tools) {
      this.registerTool(tool);
    }
  }

  public getTool(name: string): IAITool<any, any> | undefined {
    return this.tools.get(name);
  }

  public listTools(): IAITool<any, any>[] {
    return Array.from(this.tools.values());
  }

  public exportOpenAISchemas(): OpenAIToolDefinition[] {
    return this.listTools().map((t) => t.toOpenAISchema());
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
