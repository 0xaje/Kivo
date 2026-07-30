/**
 * @file src/ai/agents/index.ts
 * @description Autonomous Agent interfaces, execution state machines, and supervisor delegation contracts.
 */

import { LLMMessage, LLMResponse, AIExecutionContext } from '../types';
import { IntentDomain } from '../router';
import { IAITool } from '../tools';

/**
 * Agent Status Lifecycle States.
 */
export type AgentStatus = 'idle' | 'analyzing' | 'executing_tools' | 'completed' | 'error';

/**
 * Agent Execution Result Payload.
 */
export interface AgentExecutionResult {
  agentId: string;
  status: AgentStatus;
  responseMessage: LLMMessage;
  toolsExecuted?: Array<{ toolName: string; success: boolean }>;
  error?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Interface for discrete Autonomous Specialized Agents.
 * Enforces SOLID Single Responsibility Principle for dedicated agent capabilities.
 */
export interface IAgent {
  /**
   * Unique agent identifier (e.g., 'payment_agent', 'analytics_agent', 'security_agent').
   */
  readonly agentId: string;

  /**
   * Human-readable agent role description.
   */
  readonly role: string;

  /**
   * Primary domain this agent specializes in.
   */
  readonly primaryDomain: IntentDomain;

  /**
   * List of tool capabilities bound to this agent.
   */
  readonly tools: IAITool[];

  /**
   * Executes a task delegated to this specialized agent.
   */
  executeTask(
    messages: LLMMessage[],
    context: AIExecutionContext
  ): Promise<AgentExecutionResult>;
}

/**
 * Interface for Agent Supervisor orchestrating multi-agent delegation.
 */
export interface IAgentSupervisor {
  registerAgent(agent: IAgent): void;
  getAgent(agentId: string): IAgent | undefined;
  listAgents(): IAgent[];
  delegateTask(
    domain: IntentDomain,
    messages: LLMMessage[],
    context: AIExecutionContext
  ): Promise<AgentExecutionResult>;
}

/**
 * Concrete implementation of IAgentSupervisor.
 */
export class AgentSupervisor implements IAgentSupervisor {
  private agents = new Map<string, IAgent>();
  private domainMap = new Map<IntentDomain, IAgent>();

  public registerAgent(agent: IAgent): void {
    this.agents.set(agent.agentId, agent);
    this.domainMap.set(agent.primaryDomain, agent);
  }

  public getAgent(agentId: string): IAgent | undefined {
    return this.agents.get(agentId);
  }

  public listAgents(): IAgent[] {
    return Array.from(this.agents.values());
  }

  public async delegateTask(
    domain: IntentDomain,
    messages: LLMMessage[],
    context: AIExecutionContext
  ): Promise<AgentExecutionResult> {
    const targetAgent = this.domainMap.get(domain);
    if (!targetAgent) {
      throw new Error(`No specialized agent registered for domain "${domain}".`);
    }
    return await targetAgent.executeTask(messages, context);
  }
}
