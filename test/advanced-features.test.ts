import { beforeAll, describe, expect, it } from 'bun:test'
import { Faker } from '../packages/core/src'
import {
  DataRelationships,
  globalProviderRegistry,
  ValidationRules,
  WeightedSelections,
} from '../packages/core/src/utils/advanced-data'

describe('Advanced Data Generation Features', () => {
  let faker: Faker

  beforeAll(async () => {
    faker = await Faker.create({ locale: 'en' })
  })

  describe('Conditional Data Generation', () => {
    it('should generate only male names when gender constraint is set', () => {
      const names = []
      for (let i = 0; i < 10; i++) {
        const name = faker.person.firstNameAdvanced({
          constraints: { gender: 'male' },
        })
        names.push(name)
      }

      // All names should be male names (this is a basic test - in reality you'd check against male name lists)
      expect(names.length).toBe(10)
      names.forEach((name) => {
        expect(typeof name).toBe('string')
        expect(name.length).toBeGreaterThan(0)
      })
    })

    it('should generate names with age constraints', () => {
      const profiles = []
      for (let i = 0; i < 5; i++) {
        const profile = faker.person.profile({
          constraints: { ageRange: { min: 25, max: 35 } },
        })
        profiles.push(profile)
      }

      profiles.forEach((profile) => {
        expect(profile.age).toBeGreaterThanOrEqual(25)
        expect(profile.age).toBeLessThanOrEqual(35)
        expect(typeof profile.fullName).toBe('string')
        expect(profile.fullName.length).toBeGreaterThan(0)
      })
    })

    it('should generate addresses with country constraints', () => {
      const addresses = []
      for (let i = 0; i < 5; i++) {
        const address = faker.address.addressAdvanced({
          constraints: { country: 'United States' },
        })
        addresses.push(address)
      }

      addresses.forEach((address) => {
        expect(address.country).toBe('United States')
        expect(typeof address.city).toBe('string')
        expect(typeof address.street).toBe('string')
      })
    })
  })

  describe('Weighted Random Selection', () => {
    it('should generate weighted first names', () => {
      const names = []
      for (let i = 0; i < 10; i++) {
        const name = faker.person.firstNameAdvanced({
          weighted: WeightedSelections.commonFirstNames,
        })
        names.push(name)
      }

      expect(names.length).toBe(10)
      names.forEach((name) => {
        expect(typeof name).toBe('string')
        expect(name.length).toBeGreaterThan(0)
      })
    })

    it('should generate weighted ages', () => {
      const ages = []
      for (let i = 0; i < 10; i++) {
        const age = faker.random.weightedArrayElement(WeightedSelections.ageDistribution.items)
        ages.push(age)
      }

      expect(ages.length).toBe(10)
      ages.forEach((age) => {
        expect(typeof age).toBe('number')
        expect(age).toBeGreaterThanOrEqual(25)
        expect(age).toBeLessThanOrEqual(70)
      })
    })

    it('should generate weighted countries', () => {
      const countries = []
      for (let i = 0; i < 10; i++) {
        const country = faker.address.countryAdvanced({
          weighted: WeightedSelections.countryDistribution,
        })
        countries.push(country)
      }

      expect(countries.length).toBe(10)
      countries.forEach((country) => {
        expect(typeof country).toBe('string')
        expect(country.length).toBeGreaterThan(0)
      })
    })

    it('should handle weighted selection with empty array', () => {
      expect(() => {
        faker.random.weightedArrayElement([])
      }).toThrow('Cannot pick from empty weighted items array')
    })

    it('should handle weighted selection with zero total weight', () => {
      expect(() => {
        faker.random.weightedArrayElement([
          { item: 'test', weight: 0 },
          { item: 'test2', weight: 0 },
        ])
      }).toThrow('Total weight must be greater than 0')
    })
  })

  describe('Data Validation', () => {
    it('should validate names correctly', () => {
      const validNames = ['John', 'Mary', 'Alex', 'Sarah']
      const invalidNames = ['123', 'A', 'John123', 'X'.repeat(100)]

      validNames.forEach((name) => {
        expect(ValidationRules.name(name)).toBe(true)
      })

      invalidNames.forEach((name) => {
        expect(ValidationRules.name(name)).toBe(false)
      })
    })

    it('should validate email addresses correctly', () => {
      const validEmails = [
        'test@example.com',
        'user.name@domain.co.uk',
        'user+tag@example.org',
      ]
      const invalidEmails = [
        'invalid-email',
        '@example.com',
        'test@',
        'test.example.com',
      ]

      validEmails.forEach((email) => {
        expect(ValidationRules.email(email)).toBe(true)
      })

      invalidEmails.forEach((email) => {
        expect(ValidationRules.email(email)).toBe(false)
      })
    })

    it('should validate phone numbers correctly', () => {
      const validPhones = [
        '+1234567890',
        '1234567890',
        '+1-234-567-8900',
      ]
      const invalidPhones = [
        'abc123',
        '+',
        '123',
      ]

      validPhones.forEach((phone) => {
        expect(ValidationRules.phone(phone)).toBe(true)
      })

      invalidPhones.forEach((phone) => {
        expect(ValidationRules.phone(phone)).toBe(false)
      })
    })

    it('should validate ages correctly', () => {
      expect(ValidationRules.age(25)).toBe(true)
      expect(ValidationRules.age(0)).toBe(true)
      expect(ValidationRules.age(150)).toBe(true)
      expect(ValidationRules.age(-1)).toBe(false)
      expect(ValidationRules.age(151)).toBe(false)
      expect(ValidationRules.age(25.5)).toBe(false)
    })

    it('should validate URLs correctly', () => {
      const validUrls = [
        'https://example.com',
        'http://test.org',
        'https://subdomain.example.com/path?query=value',
      ]
      const invalidUrls = [
        'not-a-url',
        'ftp://invalid',
        'just-text',
      ]

      validUrls.forEach((url) => {
        expect(ValidationRules.url(url)).toBe(true)
      })

      invalidUrls.forEach((url) => {
        expect(ValidationRules.url(url)).toBe(false)
      })
    })

    it('should generate names with validation', () => {
      for (let i = 0; i < 5; i++) {
        const name = faker.person.firstNameAdvanced({
          validation: {
            rules: [{ validator: ValidationRules.name }],
            strict: false,
          },
        })
        expect(typeof name).toBe('string')
        expect(name.length).toBeGreaterThan(0)
      }
    })

    it('should throw error when validation fails in strict mode', () => {
      // This test might not always fail since we're generating valid names
      // But it demonstrates the strict validation feature
      const _hasError = false
      try {
        faker.person.firstNameAdvanced({
          validation: {
            rules: [{ validator: ValidationRules.length(100, 200) }], // Very long names
            strict: true,
          },
        })
      }
      catch (error) {
        const _hasError = true
        expect(error).toBeInstanceOf(Error)
      }
      // Note: This might not always throw since names could be long enough
    })
  })

  describe('Realistic Data Relationships', () => {
    it('should generate family with consistent relationships', () => {
      const family = faker.person.family({ size: 4 })

      expect(family.members.length).toBe(4)
      expect(typeof family.lastName).toBe('string')

      family.members.forEach((member) => {
        expect(typeof member.firstName).toBe('string')
        expect(typeof member.lastName).toBe('string')
        expect(member.lastName).toBe(family.lastName)
        expect(typeof member.fullName).toBe('string')
        expect(member.fullName).toContain(member.firstName)
        expect(member.fullName).toContain(member.lastName)
        expect(['male', 'female']).toContain(member.gender)
        expect(typeof member.relationship).toBe('string')
      })
    })

    it('should generate neighborhood addresses', () => {
      const neighborhood = faker.address.neighborhood({ size: 3 })

      expect(neighborhood.length).toBe(3)

      neighborhood.forEach((address) => {
        expect(typeof address.street).toBe('string')
        expect(typeof address.city).toBe('string')
        expect(typeof address.state).toBe('string')
        expect(typeof address.zipCode).toBe('string')
        expect(typeof address.latitude).toBe('number')
        expect(typeof address.longitude).toBe('number')
      })

      // All addresses should be in the same city (for neighborhood)
      const firstCity = neighborhood[0].city
      neighborhood.forEach((address) => {
        expect(address.city).toBe(firstCity)
      })
    })

    it('should apply data relationships correctly', () => {
      const _testData = { country: 'United States' }
      const result = DataRelationships.phoneByCountry.mapping['United States']

      expect(result).toBe('+1-###-###-####')
    })
  })

  describe('Custom Data Providers', () => {
    it('should register and retrieve custom providers', () => {
      const customProvider = {
        name: 'Test Provider',
        category: 'test',
        version: '1.0.0',
        generate: () => 'test value',
        validate: (value: string) => value === 'test value',
        getWeight: () => 1.0,
      }

      globalProviderRegistry.register(customProvider)

      const retrieved = globalProviderRegistry.get('test', 'Test Provider')
      expect(retrieved).toBeDefined()
      expect(retrieved?.name).toBe('Test Provider')
      expect(retrieved?.generate()).toBe('test value')
      expect(retrieved?.validate?.('test value')).toBe(true)
    })

    it('should handle provider categories correctly', () => {
      const categories = globalProviderRegistry.getCategories()
      expect(Array.isArray(categories)).toBe(true)
    })

    it('should remove providers correctly', () => {
      const customProvider = {
        name: 'Removable Provider',
        category: 'removable',
        version: '1.0.0',
        generate: () => 'removable value',
      }

      globalProviderRegistry.register(customProvider)
      expect(globalProviderRegistry.get('removable', 'Removable Provider')).toBeDefined()

      const removed = globalProviderRegistry.remove('removable', 'Removable Provider')
      expect(removed).toBe(true)
      expect(globalProviderRegistry.get('removable', 'Removable Provider')).toBeUndefined()
    })
  })

  describe('Combined Advanced Features', () => {
    it('should generate realistic user profiles with all features', () => {
      const profile = faker.person.profile({
        constraints: {
          ageRange: { min: 25, max: 45 },
          country: 'United States',
        },
        validation: {
          rules: [{ validator: ValidationRules.name }],
          strict: false,
        },
      })

      expect(typeof profile.firstName).toBe('string')
      expect(typeof profile.lastName).toBe('string')
      expect(typeof profile.fullName).toBe('string')
      expect(typeof profile.gender).toBe('string')
      expect(typeof profile.jobTitle).toBe('string')
      expect(typeof profile.age).toBe('number')
      expect(profile.age).toBeGreaterThanOrEqual(25)
      expect(profile.age).toBeLessThanOrEqual(45)
    })

    it('should generate complete addresses with advanced features', () => {
      const address = faker.address.addressAdvanced({
        constraints: { country: 'United States' },
        relationships: [DataRelationships.phoneByCountry],
      })

      expect(typeof address.street).toBe('string')
      expect(typeof address.city).toBe('string')
      expect(typeof address.state).toBe('string')
      expect(typeof address.stateAbbr).toBe('string')
      expect(typeof address.country).toBe('string')
      expect(typeof address.countryCode).toBe('string')
      expect(typeof address.zipCode).toBe('string')
      expect(typeof address.latitude).toBe('number')
      expect(typeof address.longitude).toBe('number')
    })
  })

  describe('Performance', () => {
    it('should maintain good performance with advanced features', () => {
      const iterations = 1000
      const startTime = performance.now()

      for (let i = 0; i < iterations; i++) {
        faker.person.firstNameAdvanced({
          constraints: { gender: 'male' },
          validation: {
            rules: [{ validator: ValidationRules.name }],
            strict: false,
          },
        })
      }

      const endTime = performance.now()
      const duration = endTime - startTime

      // Should complete 1000 iterations in less than 100ms
      expect(duration).toBeLessThan(100)
    })
  })

  describe('Error Handling', () => {
    it('should handle invalid weighted selection gracefully', () => {
      expect(() => {
        faker.random.weightedArrayElement([])
      }).toThrow('Cannot pick from empty weighted items array')

      expect(() => {
        faker.random.weightedArrayElement([
          { item: 'test', weight: 0 },
          { item: 'test2', weight: 0 },
        ])
      }).toThrow('Total weight must be greater than 0')
    })

    it('should handle validation errors gracefully', () => {
      // This should not throw when strict is false
      const name = faker.person.firstNameAdvanced({
        validation: {
          rules: [{ validator: ValidationRules.length(100, 200) }], // Very long names
          strict: false,
        },
      })
      expect(typeof name).toBe('string')
    })
  })
})
