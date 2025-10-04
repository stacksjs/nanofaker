import type { Random } from '../random'
import type { NumberOptions } from '../types'

export class NumberModule {
  constructor(private random: Random) {}

  /**
   * Generate a random integer
   * @example faker.number.int({ min: 1, max: 100 }) // 42
   */
  int(options?: NumberOptions): number {
    const min = options?.min ?? 0
    const max = options?.max ?? 100
    return this.random.int(min, max)
  }

  /**
   * Generate a random float
   * @example faker.number.float({ min: 0, max: 1, precision: 2 }) // 0.42
   */
  float(options?: NumberOptions): number {
    const min = options?.min ?? 0
    const max = options?.max ?? 1
    const precision = options?.precision ?? 2
    return this.random.float(min, max, precision)
  }

  /**
   * Generate a random bigint
   * @example faker.number.bigInt({ min: 1000n, max: 9999n }) // 5432n
   */
  bigInt(options?: { min?: bigint, max?: bigint }): bigint {
    const min = options?.min ?? 0n
    const max = options?.max ?? 1000000n

    const range = max - min + 1n
    const randomBigInt = BigInt(Math.floor(this.random.number() * Number(range)))

    return min + randomBigInt
  }

  /**
   * Generate a random binary number
   * @example faker.number.binary() // '10101010'
   */
  binary(options?: { length?: number }): string {
    const length = options?.length ?? 8
    let result = ''
    for (let i = 0; i < length; i++) {
      result += this.random.int(0, 1)
    }
    return result
  }

  /**
   * Generate a random octal number
   * @example faker.number.octal() // '755'
   */
  octal(options?: { length?: number }): string {
    const length = options?.length ?? 3
    let result = ''
    for (let i = 0; i < length; i++) {
      result += this.random.int(0, 7)
    }
    return result
  }

  /**
   * Generate a random hex number
   * @example faker.number.hex() // 'A3F'
   */
  hex(options?: { length?: number }): string {
    const length = options?.length ?? 6
    const chars = '0123456789ABCDEF'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars[this.random.int(0, chars.length - 1)]
    }
    return result
  }

  /**
   * Laravel-compatible: Generate a random number (alias for int)
   * @example faker.number.randomNumber() // 42
   */
  randomNumber(options?: NumberOptions): number {
    return this.int(options)
  }

  /**
   * Laravel-compatible: Generate a random digit (0-9)
   * @example faker.number.randomDigit() // 5
   */
  randomDigit(): number {
    return this.int({ min: 0, max: 9 })
  }

  /**
   * Laravel-compatible: Generate a random digit not zero (1-9)
   * @example faker.number.randomDigitNotZero() // 7
   */
  randomDigitNotZero(): number {
    return this.int({ min: 1, max: 9 })
  }
}
