/**
 * @file src/ai/renderers/registry.ts
 * @description Card Renderer Registry container managing structured response card generation.
 */

import { StructuredCardType, StructuredCardPayload } from './types';
import {
  ICardRenderer,
  BalanceCardRenderer,
  PortfolioCardRenderer,
  TransactionCardRenderer,
  PaymentCardRenderer,
  QRCardRenderer,
  EducationCardRenderer,
  InsightCardRenderer,
  ErrorCardRenderer,
} from './cards';

export interface ICardRendererRegistry {
  registerRenderer(renderer: ICardRenderer): void;
  getRenderer(cardType: StructuredCardType): ICardRenderer | undefined;
  renderCard(cardType: StructuredCardType, data: unknown): StructuredCardPayload | null;
  listSupportedCardTypes(): StructuredCardType[];
}

export class CardRendererRegistry implements ICardRendererRegistry {
  private renderers = new Map<StructuredCardType, ICardRenderer>();

  constructor() {
    // Register all 8 standard card renderers
    this.registerRenderer(new BalanceCardRenderer());
    this.registerRenderer(new PortfolioCardRenderer());
    this.registerRenderer(new TransactionCardRenderer());
    this.registerRenderer(new PaymentCardRenderer());
    this.registerRenderer(new QRCardRenderer());
    this.registerRenderer(new EducationCardRenderer());
    this.registerRenderer(new InsightCardRenderer());
    this.registerRenderer(new ErrorCardRenderer());
  }

  public registerRenderer(renderer: ICardRenderer): void {
    this.renderers.set(renderer.cardType, renderer);
  }

  public getRenderer(cardType: StructuredCardType): ICardRenderer | undefined {
    return this.renderers.get(cardType);
  }

  public renderCard(cardType: StructuredCardType, data: unknown): StructuredCardPayload | null {
    const renderer = this.renderers.get(cardType);
    if (!renderer) {
      console.warn(`Card renderer for cardType "${cardType}" is not registered.`);
      return null;
    }

    if (!renderer.validateData(data)) {
      console.warn(`Data validation failed for cardType "${cardType}".`);
      return null;
    }

    return renderer.createPayload(data);
  }

  public listSupportedCardTypes(): StructuredCardType[] {
    return Array.from(this.renderers.keys());
  }
}
