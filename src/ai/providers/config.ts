/**
 * @file src/ai/providers/config.ts
 * @description Provider Configuration Manager allowing dynamic runtime provider vendor switching.
 */

import { ProviderVendor, ProviderConfig } from './types';

export interface IProviderConfigManager {
  getActiveVendor(): ProviderVendor;
  setActiveVendor(vendor: ProviderVendor): void;
  getProviderConfig(vendor: ProviderVendor): ProviderConfig;
  setProviderConfig(config: ProviderConfig): void;
  listConfiguredVendors(): ProviderVendor[];
}

export class ProviderConfigManager implements IProviderConfigManager {
  private activeVendor: ProviderVendor = 'openai';
  private configs = new Map<ProviderVendor, ProviderConfig>();

  constructor() {
    // Default initial configurations
    this.configs.set('openai', { vendor: 'openai', modelName: 'gpt-4o' });
    this.configs.set('gemini', { vendor: 'gemini', modelName: 'gemini-1.5-pro' });
    this.configs.set('anthropic', { vendor: 'anthropic', modelName: 'claude-3-5-sonnet' });
    this.configs.set('local_llm', { vendor: 'local_llm', modelName: 'llama-3-8b-wasm' });
  }

  public getActiveVendor(): ProviderVendor {
    return this.activeVendor;
  }

  public setActiveVendor(vendor: ProviderVendor): void {
    if (!this.configs.has(vendor)) {
      throw new Error(`Vendor "${vendor}" is not configured in ProviderConfigManager.`);
    }
    this.activeVendor = vendor;
  }

  public getProviderConfig(vendor: ProviderVendor): ProviderConfig {
    const config = this.configs.get(vendor);
    if (!config) {
      throw new Error(`Provider config for vendor "${vendor}" is missing.`);
    }
    return config;
  }

  public setProviderConfig(config: ProviderConfig): void {
    this.configs.set(config.vendor, config);
  }

  public listConfiguredVendors(): ProviderVendor[] {
    return Array.from(this.configs.keys());
  }
}
