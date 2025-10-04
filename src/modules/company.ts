import type { LocaleDefinition } from '../types'
import type { Random } from '../random'

export class CompanyModule {
  constructor(
    private random: Random,
    private locale: LocaleDefinition,
  ) {}

  /**
   * Generate a random company name
   * @example faker.company.name() // 'TechCorp Inc'
   */
  name(): string {
    const name = this.random.arrayElement(this.locale.company.name)
    const suffix = this.random.arrayElement(this.locale.company.suffix)
    return `${name} ${suffix}`
  }

  /**
   * Generate a random company suffix
   * @example faker.company.suffix() // 'Inc'
   */
  suffix(): string {
    return this.random.arrayElement(this.locale.company.suffix)
  }

  /**
   * Generate a random industry
   * @example faker.company.industry() // 'Technology'
   */
  industry(): string {
    return this.random.arrayElement(this.locale.company.industry)
  }

  /**
   * Generate a random company catchphrase
   * @example faker.company.catchphrase() // 'Innovative cloud-based solutions'
   */
  catchphrase(): string {
    const adjective = this.random.arrayElement(this.locale.company.adjective)
    const descriptor = this.random.arrayElement(this.locale.company.descriptor)
    const noun = this.random.arrayElement(this.locale.company.noun)
    return `${adjective} ${descriptor} ${noun}`
  }

  /**
   * Generate a random company buzzword
   * @example faker.company.buzzword() // 'synergize'
   */
  buzzword(): string {
    return this.random.arrayElement(this.locale.company.buzzwords)
  }

  /**
   * Generate a random company BS (business speak)
   * @example faker.company.bs() // 'revolutionize digital platforms'
   */
  bs(): string {
    const buzzword = this.buzzword()
    const descriptor = this.random.arrayElement(this.locale.company.descriptor)
    const noun = this.random.arrayElement(this.locale.company.noun)
    return `${buzzword} ${descriptor} ${noun}`
  }
}
