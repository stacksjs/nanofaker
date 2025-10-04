import type { LocaleDefinition } from '../types'
import type { Random } from '../random'

export class PhoneModule {
  constructor(
    private random: Random,
    private locale: LocaleDefinition,
  ) {}

  /**
   * Generate a random phone number
   * @example faker.phone.number() // '555-123-4567'
   */
  number(format?: string): string {
    const selectedFormat = format ?? this.random.arrayElement(this.locale.phone.formats)
    return this.random.replaceSymbols(selectedFormat)
  }

  /**
   * Laravel-compatible: Generate a random phone number
   * @example faker.phone.phoneNumber() // '555-123-4567'
   */
  phoneNumber(format?: string): string {
    return this.number(format)
  }
}
