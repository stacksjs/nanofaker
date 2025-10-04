import type { LocaleDefinition } from '../types'
import type { Random } from '../random'

export class PersonModule {
  constructor(
    private random: Random,
    private locale: LocaleDefinition,
  ) {}

  /**
   * Generate a random first name
   * @example faker.person.firstName() // 'John'
   */
  firstName(): string {
    return this.random.arrayElement(this.locale.person.firstName)
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
   */
  fullName(options?: { prefix?: boolean, suffix?: boolean }): string {
    const parts: string[] = []

    if (options?.prefix) {
      parts.push(this.prefix())
    }

    parts.push(this.firstName())
    parts.push(this.lastName())

    if (options?.suffix) {
      parts.push(this.suffix())
    }

    return parts.join(' ')
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
