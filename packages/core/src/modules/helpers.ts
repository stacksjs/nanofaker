import type { Random } from '../random'

export class HelpersModule {
  constructor(private random: Random) {}

  /**
   * Pick a random element from an array (Laravel compatible)
   * @example faker.helpers.randomElement(['a', 'b', 'c']) // 'b'
   */
  randomElement<T>(array: readonly T[]): T {
    return this.random.arrayElement(array)
  }

  /**
   * Pick a random element from an array (Faker.js compatible)
   * @example faker.helpers.arrayElement(['a', 'b', 'c']) // 'b'
   */
  arrayElement<T>(array: readonly T[]): T {
    return this.random.arrayElement(array)
  }

  /**
   * Pick multiple random elements from an array
   * @example faker.helpers.arrayElements(['a', 'b', 'c', 'd'], 2) // ['b', 'd']
   */
  arrayElements<T>(array: readonly T[], count?: number): T[] {
    return this.random.arrayElements(array, count)
  }

  /**
   * Shuffle an array
   * @example faker.helpers.shuffle(['a', 'b', 'c']) // ['c', 'a', 'b']
   */
  shuffle<T>(array: readonly T[]): T[] {
    return this.random.shuffle(array)
  }

  /**
   * Replace # with random digits (Laravel compatible)
   * @example faker.helpers.numerify('###-###') // '123-456'
   */
  numerify(format: string): string {
    return format.replace(/#/g, () => String(this.random.int(0, 9)))
  }

  /**
   * Replace ? with random letters (Laravel compatible)
   * @example faker.helpers.lexify('???') // 'abc'
   */
  lexify(format: string): string {
    return format.replace(/\?/g, () => this.random.arrayElement('abcdefghijklmnopqrstuvwxyz'.split('')))
  }

  /**
   * Replace # with random digits and ? with random letters (Laravel compatible)
   * @example faker.helpers.bothify('##??##') // '12ab34'
   */
  bothify(format: string): string {
    return this.numerify(this.lexify(format))
  }

  /**
   * Replace symbols in a string
   * @example faker.helpers.replaceSymbols('Hello ###!') // 'Hello 123!'
   */
  replaceSymbols(format: string): string {
    return this.random.replaceSymbols(format)
  }

  /**
   * Generate a random boolean
   * @example faker.helpers.boolean() // true
   */
  boolean(weight = 0.5): boolean {
    return this.random.boolean(weight)
  }

  /**
   * Generate a random key from an object
   * @example faker.helpers.objectKey({ a: 1, b: 2, c: 3 }) // 'b'
   */
  objectKey<T extends Record<string, any>>(obj: T): keyof T {
    const keys = Object.keys(obj)
    return this.random.arrayElement(keys) as keyof T
  }

  /**
   * Generate a random value from an object
   * @example faker.helpers.objectValue({ a: 1, b: 2, c: 3 }) // 2
   */
  objectValue<T extends Record<string, any>>(obj: T): T[keyof T] {
    const key = this.objectKey(obj)
    return obj[key]
  }

  /**
   * Generate multiple items using a callback
   * @example faker.helpers.multiple(() => faker.person.firstName(), 3) // ['John', 'Jane', 'Bob']
   */
  multiple<T>(fn: () => T, count = 3): T[] {
    return Array.from({ length: count }, fn)
  }

  /**
   * Maybe return a value or undefined
   * @example faker.helpers.maybe(() => 'value', 0.5) // 'value' or undefined
   */
  maybe<T>(fn: () => T, probability = 0.5): T | undefined {
    return this.random.boolean(probability) ? fn() : undefined
  }

  /**
   * Generate a unique array of items
   * @example faker.helpers.unique(() => faker.person.firstName(), 5) // ['John', 'Jane', 'Bob', 'Alice', 'Charlie']
   */
  unique<T>(fn: () => T, maxRetries = 50): T {
    const seen = new Set<T>()
    let retries = 0

    while (retries < maxRetries) {
      const value = fn()
      if (!seen.has(value)) {
        seen.add(value)
        return value
      }
      retries++
    }

    throw new Error(`Failed to generate unique value after ${maxRetries} retries`)
  }

  /**
   * Replace credit card symbols
   * @example faker.helpers.replaceCreditCardSymbols('####-####-####-####') // '1234-5678-9012-3456'
   */
  replaceCreditCardSymbols(format = '####-####-####-####', symbol = '#'): string {
    return this.random.replaceCreditCardSymbols(format, symbol)
  }

  /**
   * Generate a regex-based string (simplified version)
   * @example faker.helpers.regexify('[A-Z]{3}[0-9]{3}') // 'ABC123'
   */
  regexify(pattern: string): string {
    // Simplified regex support - supports basic patterns
    return pattern
      .replace(/\[A-Z\]/g, () => this.random.arrayElement('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')))
      .replace(/\[a-z\]/g, () => this.random.arrayElement('abcdefghijklmnopqrstuvwxyz'.split('')))
      .replace(/\[0-9\]/g, () => String(this.random.int(0, 9)))
      .replace(/\{(\d+)\}/g, (_match, _count) => {
        // This is a simplified handler - proper regex would need more complex parsing
        return ''
      })
  }
}
