import type { Random } from '../random'
import type { StringOptions } from '../types'

export class StringModule {
  constructor(private random: Random) {}

  /**
   * Generate a random UUID v4
   * @example faker.string.uuid() // '550e8400-e29b-41d4-a716-446655440000'
   */
  uuid(): string {
    const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    return template.replace(/[xy]/g, (c) => {
      const r = this.random.int(0, 15)
      const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }

  /**
   * Generate a random nanoid
   * @example faker.string.nanoid() // 'V1StGXR8_Z5jdHi6B-myT'
   */
  nanoid(size = 21): string {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'
    let result = ''
    for (let i = 0; i < size; i++) {
      result += alphabet[this.random.int(0, alphabet.length - 1)]
    }
    return result
  }

  /**
   * Generate a random alphabetic string
   * @example faker.string.alpha() // 'aBcDeFgHiJ'
   */
  alpha(options?: StringOptions): string {
    const length = options?.length ?? 10
    const casing = options?.casing ?? 'mixed'

    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let chars = ''
    if (casing === 'lower') {
      chars = lower
    }
    else if (casing === 'upper') {
      chars = upper
    }
    else {
      chars = lower + upper
    }

    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars[this.random.int(0, chars.length - 1)]
    }
    return result
  }

  /**
   * Generate a random alphanumeric string
   * @example faker.string.alphanumeric() // 'aBc123XyZ'
   */
  alphanumeric(options?: StringOptions): string {
    const length = options?.length ?? 10
    const casing = options?.casing ?? 'mixed'

    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'

    let chars = numbers
    if (casing === 'lower') {
      chars += lower
    }
    else if (casing === 'upper') {
      chars += upper
    }
    else {
      chars += lower + upper
    }

    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars[this.random.int(0, chars.length - 1)]
    }
    return result
  }

  /**
   * Generate a random numeric string
   * @example faker.string.numeric() // '1234567890'
   */
  numeric(length = 10): string {
    let result = ''
    for (let i = 0; i < length; i++) {
      result += this.random.int(0, 9)
    }
    return result
  }

  /**
   * Generate a sample text string
   * @example faker.string.sample() // 'Hello World'
   */
  sample(length = 10): string {
    return this.alphanumeric({ length })
  }

  /**
   * Generate a symbol string
   * @example faker.string.symbol() // '!@#$%'
   */
  symbol(length = 5): string {
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += symbols[this.random.int(0, symbols.length - 1)]
    }
    return result
  }

  /**
   * Generate a hexadecimal string
   * @example faker.string.hexadecimal() // 'a3f5b2'
   */
  hexadecimal(options?: StringOptions & { prefix?: string }): string {
    const length = options?.length ?? 6
    const prefix = options?.prefix ?? ''
    const chars = '0123456789abcdef'
    let result = prefix
    for (let i = 0; i < length; i++) {
      result += chars[this.random.int(0, chars.length - 1)]
    }
    return result
  }
}
