import type { Random } from '../random'
import type { LocaleDefinition, PersonFullNameOptions, PersonNameOptions } from '../types'

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
}
