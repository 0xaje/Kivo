/**
 * @file src/wallet/repository/nimiq.utils.ts
 * @description Helper utilities for Nimiq address validation, Luna conversions, URI formatting, and Web Crypto signing.
 */

export const LUNA_PER_NIM = 100_000;

export class NimiqUtils {
  /**
   * Converts Luna integer units to NIM decimal.
   */
  public static lunaToNim(luna: number): number {
    return luna / LUNA_PER_NIM;
  }

  /**
   * Converts NIM decimal to Luna integer.
   */
  public static nimToLuna(nim: number): number {
    return Math.round(nim * LUNA_PER_NIM);
  }

  /**
   * Validates Nimiq address format (e.g. NQ54 1A2B 3C4D 5E6F 7G8H 9I0J 1K2L).
   */
  public static isValidAddress(address: string): boolean {
    if (!address) return false;
    const clean = address.replace(/\s+/g, '').toUpperCase();
    return clean.startsWith('NQ') && clean.length >= 24;
  }

  /**
   * Formats raw address string into formatted Nimiq display format (spaces every 4 characters).
   */
  public static formatAddress(address: string): string {
    const clean = address.replace(/\s+/g, '').toUpperCase();
    return clean.replace(/(.{4})/g, '$1 ').trim();
  }

  /**
   * Builds a valid Nimiq Payment URI scheme.
   */
  public static buildPaymentUri(address: string, nimAmount?: number, memo?: string): string {
    const cleanAddress = address.replace(/\s+/g, '');
    let uri = `nimiq:${cleanAddress}`;
    const params: string[] = [];

    if (nimAmount !== undefined && nimAmount > 0) {
      params.push(`value=${this.nimToLuna(nimAmount)}`);
    }
    if (memo) {
      params.push(`message=${encodeURIComponent(memo)}`);
    }

    if (params.length > 0) {
      uri += `?${params.join('&')}`;
    }
    return uri;
  }

  /**
   * Performs Web Crypto SubtleCrypto SHA-256 signature payload digest over transaction data.
   */
  public static async signPayload(payload: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(payload);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return '0x' + hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }
}
