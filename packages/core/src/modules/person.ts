import type { Random } from '../random'
import type {
  LocaleDefinition,
  PersonAdvancedOptions,
  PersonFullNameOptions,
  PersonNameOptions,
} from '../types'
import { applyRelationships, selectWeightedItem, validateData } from '../utils/advanced-data'

export class PersonModule {
  constructor(
    private random: Random,
    private locale: LocaleDefinition,
  ) {}

  /**
   * Generate a random first name
   * @example faker.person.firstName() // 'John'
   * @example faker.person.firstName({ gender: 'male' }) // 'Michael'
   * @example faker.person.firstName({ gender: 'female' }) // 'Sarah'
   */
  firstName(options?: PersonNameOptions): string {
    if (options?.gender === 'male') {
      return this.firstNameMale()
    }
    if (options?.gender === 'female') {
      return this.firstNameFemale()
    }
    if (options?.gender === 'neutral') {
      return this.firstNameNeutral()
    }

    // Optimized: avoid array spreading by selecting from combined length
    const maleLen = this.locale.person.firstNameMale.length
    const femaleLen = this.locale.person.firstNameFemale.length
    const neutralLen = this.locale.person.firstNameNeutral?.length || 0
    const totalLen = maleLen + femaleLen + neutralLen

    const index = this.random.int(0, totalLen - 1)

    if (index < maleLen) {
      return this.locale.person.firstNameMale[index]
    }
    if (index < maleLen + femaleLen) {
      return this.locale.person.firstNameFemale[index - maleLen]
    }
    return this.locale.person.firstNameNeutral![index - maleLen - femaleLen]
  }

  /**
   * Generate a random male first name
   * @example faker.person.firstNameMale() // 'Michael'
   */
  firstNameMale(): string {
    return this.random.arrayElement(this.locale.person.firstNameMale)
  }

  /**
   * Generate a random female first name
   * @example faker.person.firstNameFemale() // 'Sarah'
   */
  firstNameFemale(): string {
    return this.random.arrayElement(this.locale.person.firstNameFemale)
  }

  /**
   * Generate a random neutral first name
   * @example faker.person.firstNameNeutral() // 'Alex'
   */
  firstNameNeutral(): string {
    if (!this.locale.person.firstNameNeutral || this.locale.person.firstNameNeutral.length === 0) {
      // Fallback to combined array if neutral names not available
      const allNames = [
        ...this.locale.person.firstNameMale,
        ...this.locale.person.firstNameFemale,
      ]
      return this.random.arrayElement(allNames)
    }
    return this.random.arrayElement(this.locale.person.firstNameNeutral)
  }

  /**
   * Generate a random last name
   * @example faker.person.lastName() // 'Doe'
   */
  lastName(): string {
    return this.random.arrayElement(this.locale.person.lastName)
  }

  /**
   * Generate a full name
   * @example faker.person.fullName() // 'John Doe'
   * @example faker.person.fullName({ prefix: true }) // 'Mr. John Doe'
   * @example faker.person.fullName({ suffix: true }) // 'John Doe Jr.'
   * @example faker.person.fullName({ gender: 'male' }) // 'Michael Smith'
   * @example faker.person.fullName({ gender: 'female', prefix: true }) // 'Ms. Sarah Johnson'
   */
  fullName(options?: PersonFullNameOptions): string {
    // Optimized: avoid array creation for common case (no options)
    if (!options) {
      return `${this.firstName()} ${this.lastName()}`
    }

    // Handle options with direct string concatenation
    const first = this.firstName({ gender: options.gender })
    const last = this.lastName()

    if (options.prefix && options.suffix) {
      return `${this.prefix()} ${first} ${last} ${this.suffix()}`
    }
    if (options.prefix) {
      return `${this.prefix()} ${first} ${last}`
    }
    if (options.suffix) {
      return `${first} ${last} ${this.suffix()}`
    }

    return `${first} ${last}`
  }

  /**
   * Generate a random name prefix
   * @example faker.person.prefix() // 'Mr.'
   */
  prefix(): string {
    return this.random.arrayElement(this.locale.person.prefix)
  }

  /**
   * Generate a random name suffix
   * @example faker.person.suffix() // 'Jr.'
   */
  suffix(): string {
    return this.random.arrayElement(this.locale.person.suffix)
  }

  /**
   * Generate a random gender
   * @example faker.person.gender() // 'Male'
   */
  gender(): string {
    return this.random.arrayElement(this.locale.person.gender)
  }

  /**
   * Generate a random job title
   * @example faker.person.jobTitle() // 'Software Engineer'
   */
  jobTitle(): string {
    return this.random.arrayElement(this.locale.person.jobTitle)
  }

  /**
   * Laravel-compatible: Generate a random name (alias for fullName)
   * @example faker.person.name() // 'John Doe'
   */
  name(): string {
    return this.fullName()
  }

  /**
   * Generate a first name with advanced options
   * @example faker.person.firstNameAdvanced({ constraints: { gender: 'male' } })
   * @example faker.person.firstNameAdvanced({ weighted: { items: [{ item: 'John', weight: 100 }] } })
   */
  firstNameAdvanced(options?: PersonAdvancedOptions): string {
    let result: string

    // Apply constraints first
    if (options?.constraints) {
      result = this.firstName({ gender: options.constraints.gender })
    }
    else {
      result = this.firstName({ gender: options?.gender })
    }

    // Apply weighted selection if provided
    if (options?.weighted) {
      result = selectWeightedItem(this.random, options.weighted)
    }

    // Apply relationships
    if (options?.relationships) {
      const dataWithRelationships = applyRelationships(
        { firstName: result, gender: options?.gender || options?.constraints?.gender },
        options.relationships,
      )
      result = dataWithRelationships.firstName || result
    }

    // Validate the result
    if (options?.validation) {
      const validation = validateData(result, options.validation)
      if (!validation.isValid) {
        // If validation fails and strict mode is enabled, throw error
        // Otherwise, fall back to regular generation
        if (options.validation.strict) {
          throw new Error(`Validation failed: ${validation.errors.join(', ')}`)
        }
        result = this.firstName({ gender: options?.gender || options?.constraints?.gender })
      }
    }

    return result
  }

  /**
   * Generate a full name with advanced options
   * @example faker.person.fullNameAdvanced({ constraints: { gender: 'female' }, validation: { rules: [{ validator: (name) => name.length > 5 }] } })
   */
  fullNameAdvanced(options?: PersonAdvancedOptions): string {
    let result: string

    // Generate base name with constraints
    if (options?.constraints) {
      result = this.fullName({
        gender: options.constraints.gender,
        prefix: options.prefix,
        suffix: options.suffix,
      })
    }
    else {
      result = this.fullName(options)
    }

    // Apply weighted selection if provided
    if (options?.weighted) {
      result = selectWeightedItem(this.random, options.weighted)
    }

    // Apply relationships
    if (options?.relationships) {
      const dataWithRelationships = applyRelationships(
        { fullName: result, gender: options?.gender || options?.constraints?.gender },
        options.relationships,
      )
      result = dataWithRelationships.fullName || result
    }

    // Validate the result
    if (options?.validation) {
      const validation = validateData(result, options.validation)
      if (!validation.isValid) {
        if (options.validation.strict) {
          throw new Error(`Validation failed: ${validation.errors.join(', ')}`)
        }
        // Fall back to regular generation
        result = this.fullName({
          gender: options?.gender || options?.constraints?.gender,
          prefix: options?.prefix,
          suffix: options?.suffix,
        })
      }
    }

    return result
  }

  /**
   * Generate a realistic person profile with related data
   * @example faker.person.profile({ constraints: { country: 'United States' } })
   */
  profile(options?: PersonAdvancedOptions): {
    firstName: string
    lastName: string
    fullName: string
    gender: string
    jobTitle: string
    age?: number
    email?: string
  } {
    const gender = options?.constraints?.gender || options?.gender || (this.gender() as 'male' | 'female' | 'neutral')
    const firstName = this.firstNameAdvanced({ ...options, gender })
    const lastName = this.lastName()
    const fullName = `${firstName} ${lastName}`

    // Generate related data
    const profile = {
      firstName,
      lastName,
      fullName,
      gender,
      jobTitle: this.jobTitle(),
      age: options?.constraints?.ageRange
        ? this.random.int(options.constraints.ageRange.min, options.constraints.ageRange.max)
        : this.random.int(18, 80),
    }

    // Apply relationships if provided
    if (options?.relationships) {
      return applyRelationships(profile, options.relationships)
    }

    return profile
  }

  /**
   * Generate multiple people with consistent relationships
   * @example faker.person.family({ constraints: { country: 'United States' } })
   */
  family(options?: PersonAdvancedOptions & { size?: number }): {
    members: Array<{
      firstName: string
      lastName: string
      fullName: string
      gender: string
      relationship: string
    }>
    lastName: string
  } {
    const size = options?.size || this.random.int(2, 6)
    const lastName = this.lastName()
    const relationships = ['parent', 'parent', 'child', 'child', 'child', 'grandparent']

    const members = []

    for (let i = 0; i < size; i++) {
      const relationship = relationships[i] || 'relative'
      const gender = relationship === 'parent' || relationship === 'grandparent'
        ? this.random.weightedBoolean(0.6) ? 'male' : 'female' // Slight bias toward male for older generations
        : this.random.boolean() ? 'male' : 'female'

      const firstName = this.firstNameAdvanced({
        ...options,
        gender,
        constraints: { ...options?.constraints, gender },
      })

      members.push({
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        gender,
        relationship,
      })
    }

    return { members, lastName }
  }
}
