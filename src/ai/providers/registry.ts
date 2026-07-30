/**
 * @file src/ai/providers/registry.ts
 * @description Dependency Injection Registry container managing AI Provider instances.
 */

import { IAIProvider, ProviderVendor } from './types';
import { IProviderConfigManager } from './config';

export interface IProviderRegistry {
  registerProvider(provider: IAIProvider): void;
  getProvider(vendor: ProviderVendor): IAIProvider | undefined;
  getActiveProvider(): IAIProvider;
  listProviders(): ProviderVendor[];
}

export class ProviderRegistry implements IProviderRegistry {
  private providers = new Map<ProviderVendor, IAIProvider>();

  constructor(private readonly configManager: IProviderConfigManager) {}

  public registerProvider(provider: IAIProvider): void {
    this.providers.set(provider.vendor, provider);
  }

  public getProvider(vendor: ProviderVendor): IAIProvider | undefined {
    return this.providers.get(vendor);
  }

  public getActiveProvider(): IAIProvider {
    const activeVendor = this.configManager.getActiveVendor();
    const provider = this.providers.get(activeVendor);
    if (!provider) {
      throw new Error(`Active provider for vendor "${activeVendor}" is not registered.`);
    }
    return provider;
  }

  public listProviders(): ProviderVendor[] {
    return Array.from(this.providers.keys());
  }
}
