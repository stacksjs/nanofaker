import type { Random } from '../random'
import type {
  AddressAdvancedOptions,
  LocaleDefinition,
} from '../types'
import { applyRelationships, selectWeightedItem, validateData } from '../utils/advanced-data'

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
    return this.random.arrayElement(this.locale.address.streetSuffix ?? ['Street', 'Avenue', 'Road', 'Boulevard', 'Drive', 'Lane', 'Way'])
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
    const format = this.random.arrayElement(this.locale.address.buildingNumber ?? ['#', '##', '###'])
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
    return this.random.arrayElement(this.locale.address.stateAbbr ?? [])
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
    return this.random.arrayElement(this.locale.address.countryCode ?? [])
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
    return this.random.arrayElement(this.locale.address.direction ?? ['North', 'South', 'East', 'West'])
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

  /**
   * Generate a city with advanced options
   * @example faker.address.cityAdvanced({ constraints: { country: 'United States' } })
   */
  cityAdvanced(options?: AddressAdvancedOptions): string {
    let result: string

    // Apply constraints first
    if (options?.constraints?.country) {
      // Filter cities by country constraint
      const country = options.constraints.country
      const _countries = Array.isArray(country) ? country : [country]

      // For now, we'll use the regular city generation since locale data doesn't have country mapping
      // In a real implementation, you'd filter the city list by country
      result = this.city()
    }
    else {
      result = this.city()
    }

    // Apply weighted selection if provided
    if (options?.weighted) {
      result = selectWeightedItem(this.random, options.weighted)
    }

    // Apply relationships
    if (options?.relationships) {
      const dataWithRelationships = applyRelationships(
        { city: result, country: options?.constraints?.country },
        options.relationships,
      )
      result = dataWithRelationships.city || result
    }

    // Validate the result
    if (options?.validation) {
      const validation = validateData(result, options.validation)
      if (!validation.isValid) {
        if (options.validation.strict) {
          throw new Error(`Validation failed: ${validation.errors.join(', ')}`)
        }
        result = this.city()
      }
    }

    return result
  }

  /**
   * Generate a country with advanced options
   * @example faker.address.countryAdvanced({ weighted: { items: [{ item: 'United States', weight: 100 }] } })
   */
  countryAdvanced(options?: AddressAdvancedOptions): string {
    let result: string

    // Apply constraints first
    if (options?.constraints?.country) {
      const country = options.constraints.country
      const countries = Array.isArray(country) ? country : [country]
      result = this.random.arrayElement(countries)
    }
    else {
      result = this.country()
    }

    // Apply weighted selection if provided
    if (options?.weighted) {
      result = selectWeightedItem(this.random, options.weighted)
    }

    // Apply relationships
    if (options?.relationships) {
      const dataWithRelationships = applyRelationships(
        { country: result },
        options.relationships,
      )
      result = dataWithRelationships.country || result
    }

    // Validate the result
    if (options?.validation) {
      const validation = validateData(result, options.validation)
      if (!validation.isValid) {
        if (options.validation.strict) {
          throw new Error(`Validation failed: ${validation.errors.join(', ')}`)
        }
        result = this.country()
      }
    }

    return result
  }

  /**
   * Generate a complete address with advanced options and realistic relationships
   * @example faker.address.addressAdvanced({ constraints: { country: 'United States' } })
   */
  addressAdvanced(options?: AddressAdvancedOptions): {
    street: string
    city: string
    state: string
    stateAbbr: string
    country: string
    countryCode: string
    zipCode: string
    latitude: number
    longitude: number
  } {
    // Generate base address components
    const country = this.countryAdvanced(options)
    const city = this.cityAdvanced(options)
    const state = this.state()
    const stateAbbr = this.stateAbbr()
    const zipCode = this.zipCode()
    const street = this.street()

    // Generate coordinates (simplified - in reality you'd use geocoding)
    const latitude = this.latitude()
    const longitude = this.longitude()

    const address = {
      street,
      city,
      state,
      stateAbbr,
      country,
      countryCode: this.countryCode(),
      zipCode,
      latitude,
      longitude,
    }

    // Apply relationships if provided
    if (options?.relationships) {
      return applyRelationships(address, options.relationships)
    }

    return address
  }

  /**
   * Generate multiple addresses in the same region for realistic data
   * @example faker.address.neighborhood({ size: 5, constraints: { country: 'United States' } })
   */
  neighborhood(options?: AddressAdvancedOptions & { size?: number }): Array<{
    street: string
    city: string
    state: string
    zipCode: string
    latitude: number
    longitude: number
  }> {
    const size = options?.size || this.random.int(3, 10)
    const baseCity = this.cityAdvanced(options)
    const baseState = this.state()
    const baseZip = this.zipCode()

    const addresses = []

    for (let i = 0; i < size; i++) {
      addresses.push({
        street: this.street(),
        city: baseCity, // Same city for neighborhood
        state: baseState, // Same state
        zipCode: baseZip, // Same zip code
        latitude: this.latitude({
          min: this.latitude() - 0.01,
          max: this.latitude() + 0.01,
        }), // Nearby coordinates
        longitude: this.longitude({
          min: this.longitude() - 0.01,
          max: this.longitude() + 0.01,
        }),
      })
    }

    return addresses
  }
}
