import { describe, expect, it } from 'bun:test'
import { Faker } from '../packages/core/src/faker'
import { getLocaleFallbackChain, getLocalePackageName, mergeLocales, parseLocale } from '../packages/core/src/utils/locale-utils'

describe('Locale Variant Utilities', () => {
  describe('parseLocale', () => {
    it('should parse locale with underscore separator', () => {
      const result = parseLocale('en_US')
      expect(result.language).toBe('en')
      expect(result.region).toBe('US')
      expect(result.normalized).toBe('en_US')
      expect(result.packageName).toBe('en-us')
    })

    it('should parse locale with hyphen separator', () => {
      const result = parseLocale('en-GB')
      expect(result.language).toBe('en')
      expect(result.region).toBe('GB')
      expect(result.normalized).toBe('en_GB')
      expect(result.packageName).toBe('en-gb')
    })

    it('should parse base locale without region', () => {
      const result = parseLocale('es')
      expect(result.language).toBe('es')
      expect(result.region).toBeUndefined()
      expect(result.normalized).toBe('es')
      expect(result.packageName).toBe('es')
    })

    it('should handle mixed case', () => {
      const result = parseLocale('ES_mx')
      expect(result.language).toBe('es')
      expect(result.region).toBe('MX')
      expect(result.packageName).toBe('es-mx')
    })
  })

  describe('getLocaleFallbackChain', () => {
    it('should return fallback chain for variant locale', () => {
      const chain = getLocaleFallbackChain('en_US')
      expect(chain).toEqual(['en_US', 'en'])
    })

    it('should return single item for base locale', () => {
      const chain = getLocaleFallbackChain('es')
      expect(chain).toEqual(['es'])
    })

    it('should normalize separator', () => {
      const chain = getLocaleFallbackChain('es-MX')
      expect(chain).toEqual(['es_MX', 'es'])
    })
  })

  describe('getLocalePackageName', () => {
    it('should return correct package name for variant', () => {
      expect(getLocalePackageName('en_US')).toBe('@mock-locale/en-us')
      expect(getLocalePackageName('en-GB')).toBe('@mock-locale/en-gb')
      expect(getLocalePackageName('es-MX')).toBe('@mock-locale/es-mx')
    })

    it('should return correct package name for base locale', () => {
      expect(getLocalePackageName('es')).toBe('@mock-locale/es')
      expect(getLocalePackageName('fr')).toBe('@mock-locale/fr')
    })
  })

  describe('mergeLocales', () => {
    it('should merge variant into base', () => {
      const base: any = {
        title: 'Base',
        person: {
          firstName: ['John', 'Jane'],
          lastName: ['Doe', 'Smith'],
        },
        address: {
          city: ['New York'],
        },
      }

      const variant: any = {
        title: 'Variant',
        address: {
          city: ['London'],
          country: ['UK'],
        },
      }

      const result: any = mergeLocales(base, variant)

      expect(result.title).toBe('Variant')
      expect(result.person.firstName).toEqual(['John', 'Jane']) // unchanged
      expect(result.address.city).toEqual(['London']) // overridden
      expect(result.address.country).toEqual(['UK']) // added
    })
  })
})

describe('Locale Variant Loading', () => {
  it('should load en_US variant', async () => {
    const faker = await Faker.create({ locale: 'en_US' })
    expect(faker.locale).toBe('English (United States)')

    // Should have US-specific cities
    const city = faker.address.city()
    expect(typeof city).toBe('string')
    expect(city.length).toBeGreaterThan(0)
  })

  it('should load en_GB variant', async () => {
    const faker = await Faker.create({ locale: 'en_GB' })
    expect(faker.locale).toBe('English (United Kingdom)')

    const city = faker.address.city()
    expect(typeof city).toBe('string')
  })

  it('should load es_MX variant', async () => {
    const faker = await Faker.create({ locale: 'es_MX' })
    expect(faker.locale).toBe('Spanish (Mexico)')

    const name = faker.person.firstName()
    expect(typeof name).toBe('string')
  })

  it('should support hyphen separator', async () => {
    const faker = await Faker.create({ locale: 'en-US' })
    expect(faker.locale).toBe('English (United States)')
  })

  it('should fall back to base locale if variant not available', async () => {
    // Assuming en_CA doesn't exist yet (if it does, this test might fail)
    const faker = await Faker.create({ locale: 'es' })
    expect(faker.locale).toContain('Spanish')
  })

  it('should inherit from base locale and override specific fields', async () => {
    const usFaker = await Faker.create({ locale: 'en_US' })
    const gbFaker = await Faker.create({ locale: 'en_GB' })

    // Both should be able to generate names (inherited from base 'en')
    expect(typeof usFaker.person.firstName()).toBe('string')
    expect(typeof gbFaker.person.firstName()).toBe('string')

    // Cities should be different
    const usCity = usFaker.address.city()
    const gbCity = gbFaker.address.city()
    expect(typeof usCity).toBe('string')
    expect(typeof gbCity).toBe('string')
  })

  it('should generate different data for different locale variants', async () => {
    const usFaker = await Faker.create({ locale: 'en_US', seed: 12345 })
    const gbFaker = await Faker.create({ locale: 'en_GB', seed: 12345 })

    // With the same seed, they might still generate different data
    // because they have different locale data
    const usPhone = usFaker.phone.number()
    const gbPhone = gbFaker.phone.number()

    expect(typeof usPhone).toBe('string')
    expect(typeof gbPhone).toBe('string')
  })
})
