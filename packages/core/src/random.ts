/**
 * Random number generator with optional seeding support
 */
export class Random {
  private seed: number | undefined
  private static readonly ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')
  private static readonly DIGITS = '0123456789'

  constructor(seed?: number) {
    this.seed = seed
  }

  /**
   * Generate a random number between 0 and 1
   */
  number(): number {
    if (this.seed !== undefined) {
      // Simple seeded random using a linear congruential generator
      this.seed = (this.seed * 9301 + 49297) % 233280
      return this.seed / 233280
    }
    return Math.random()
  }

  /**
   * Generate a random integer between min and max (inclusive)
   */
  int(min = 0, max = 100): number {
    return Math.floor(this.number() * (max - min + 1)) + min
  }

  /**
   * Generate a random float between min and max
   */
  float(min = 0, max = 1, precision = 2): number {
    const num = this.number() * (max - min) + min
    return Number.parseFloat(num.toFixed(precision))
  }

  /**
   * Pick a random element from an array
   */
  arrayElement<T>(array: readonly T[]): T {
    if (array.length === 0) {
      throw new Error('Cannot pick from empty array')
    }
    // Optimize for unseeded random - avoid int() overhead
    if (this.seed === undefined) {
      return array[Math.floor(Math.random() * array.length)]
    }
    return array[this.int(0, array.length - 1)]
  }

  /**
   * Pick multiple random elements from an array
   */
  arrayElements<T>(array: readonly T[], count?: number): T[] {
    if (array.length === 0) {
      return []
    }

    const actualCount = count ?? this.int(1, array.length)
    const shuffled = [...array].sort(() => this.number() - 0.5)
    return shuffled.slice(0, Math.min(actualCount, array.length))
  }

  /**
   * Shuffle an array
   */
  shuffle<T>(array: readonly T[]): T[] {
    const result = [...array]
    for (let i = result.length - 1; i > 0; i--) {
      const j = this.int(0, i)
      ;[result[i], result[j]] = [result[j], result[i]]
    }
    return result
  }

  /**
   * Generate a boolean with optional weight
   */
  boolean(weight = 0.5): boolean {
    return this.number() < weight
  }

  /**
   * Replace # with random digits and ? with random letters
   */
  replaceSymbols(format: string): string {
    // Optimized: avoid regex callback overhead for unseeded random
    if (this.seed === undefined) {
      let result = ''
      for (let i = 0; i < format.length; i++) {
        const char = format[i]
        if (char === '#') {
          result += Random.DIGITS[Math.floor(Math.random() * 10)]
        }
        else if (char === '?') {
          result += Random.ALPHABET[Math.floor(Math.random() * 26)]
        }
        else {
          result += char
        }
      }
      return result
    }

    // Seeded version
    return format.replace(/[#?]/g, (match) => {
      if (match === '#') {
        return String(this.int(0, 9))
      }
      return this.arrayElement(Random.ALPHABET)
    })
  }

  /**
   * Replace symbols with locale-aware formatting
   */
  replaceCreditCardSymbols(format = '####-####-####-####', symbol = '#'): string {
    return format.replace(new RegExp(symbol, 'g'), () => String(this.int(0, 9)))
  }
}
