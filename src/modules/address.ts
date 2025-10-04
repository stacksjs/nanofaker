import type { LocaleDefinition } from '../types'
import type { Random } from '../random'

export class AddressModule {
  constructor(
    private random: Random,
    private locale: LocaleDefinition,
  ) {}

  /**
   * Generate a random street name
   * @example faker.address.street() // 'Main Street'
   */
  street(): string {
    const name = this.random.arrayElement(this.locale.address.street)
    const suffix = this.streetSuffix()
    return `${name} ${suffix}`
  }

  /**
   * Generate a random street suffix
   * @example faker.address.streetSuffix() // 'Street'
   */
  streetSuffix(): string {
    return this.random.arrayElement(this.locale.address.streetSuffix)
  }

  /**
   * Generate a random street address
   * @example faker.address.streetAddress() // '123 Main Street'
   */
  streetAddress(options?: { useFullAddress?: boolean }): string {
    const buildingNumber = this.buildingNumber()
    const street = this.street()

    if (options?.useFullAddress) {
      return `${buildingNumber} ${street}, ${this.city()}, ${this.stateAbbr()} ${this.zipCode()}`
    }

    return `${buildingNumber} ${street}`
  }

  /**
   * Generate a random building number
   * @example faker.address.buildingNumber() // '123'
   */
  buildingNumber(): string {
    const format = this.random.arrayElement(this.locale.address.buildingNumber)
    return this.random.replaceSymbols(format)
  }

  /**
   * Generate a random city name
   * @example faker.address.city() // 'New York'
   */
  city(): string {
    return this.random.arrayElement(this.locale.address.city)
  }

  /**
   * Generate a random state name
   * @example faker.address.state() // 'California'
   */
  state(): string {
    return this.random.arrayElement(this.locale.address.state)
  }

  /**
   * Generate a random state abbreviation
   * @example faker.address.stateAbbr() // 'CA'
   */
  stateAbbr(): string {
    return this.random.arrayElement(this.locale.address.stateAbbr)
  }

  /**
   * Generate a random country name
   * @example faker.address.country() // 'United States'
   */
  country(): string {
    return this.random.arrayElement(this.locale.address.country)
  }

  /**
   * Generate a random country code
   * @example faker.address.countryCode() // 'US'
   */
  countryCode(): string {
    return this.random.arrayElement(this.locale.address.countryCode)
  }

  /**
   * Generate a random zip code
   * @example faker.address.zipCode() // '12345'
   */
  zipCode(): string {
    const format = this.random.arrayElement(this.locale.address.zipCode)
    return this.random.replaceSymbols(format)
  }

  /**
   * Generate a random direction
   * @example faker.address.direction() // 'North'
   */
  direction(): string {
    return this.random.arrayElement(this.locale.address.direction)
  }

  /**
   * Generate random latitude coordinates
   * @example faker.address.latitude() // 34.0522
   */
  latitude(options?: { min?: number, max?: number, precision?: number }): number {
    const min = options?.min ?? -90
    const max = options?.max ?? 90
    const precision = options?.precision ?? 4
    return this.random.float(min, max, precision)
  }

  /**
   * Generate random longitude coordinates
   * @example faker.address.longitude() // -118.2437
   */
  longitude(options?: { min?: number, max?: number, precision?: number }): number {
    const min = options?.min ?? -180
    const max = options?.max ?? 180
    const precision = options?.precision ?? 4
    return this.random.float(min, max, precision)
  }

  /**
   * Laravel-compatible: Generate a full address
   * @example faker.address.address() // '123 Main Street, New York, NY 12345'
   */
  address(): string {
    return this.streetAddress({ useFullAddress: true })
  }
}
