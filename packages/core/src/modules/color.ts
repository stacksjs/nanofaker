import type { Random } from '../random'
import type { ColorOptions, LocaleDefinition } from '../types'

export class ColorModule {
  constructor(
    private random: Random,
    private locale?: LocaleDefinition | undefined,
  ) {}

  /**
   * Generate a random hex color
   * @example faker.color.hex() // '#A3F5B2'
   */
  hex(options?: { prefix?: string }): string {
    const prefix = options?.prefix ?? '#'
    const color = this.random.int(0, 16777215).toString(16).padStart(6, '0').toUpperCase()
    return prefix + color
  }

  /**
   * Generate a random RGB color
   * @example faker.color.rgb() // 'rgb(163, 245, 178)'
   */
  rgb(options?: { format?: 'array' | 'string', alpha?: boolean }): string | number[] {
    const r = this.random.int(0, 255)
    const g = this.random.int(0, 255)
    const b = this.random.int(0, 255)

    if (options?.alpha) {
      const a = this.random.float(0, 1, 2)
      if (options?.format === 'array') {
        return [r, g, b, a]
      }
      return `rgba(${r}, ${g}, ${b}, ${a})`
    }

    if (options?.format === 'array') {
      return [r, g, b]
    }
    return `rgb(${r}, ${g}, ${b})`
  }

  /**
   * Generate a random HSL color
   * @example faker.color.hsl() // 'hsl(120, 75%, 50%)'
   */
  hsl(options?: { format?: 'array' | 'string', alpha?: boolean }): string | number[] {
    const h = this.random.int(0, 360)
    const s = this.random.int(0, 100)
    const l = this.random.int(0, 100)

    if (options?.alpha) {
      const a = this.random.float(0, 1, 2)
      if (options?.format === 'array') {
        return [h, s, l, a]
      }
      return `hsla(${h}, ${s}%, ${l}%, ${a})`
    }

    if (options?.format === 'array') {
      return [h, s, l]
    }
    return `hsl(${h}, ${s}%, ${l}%)`
  }

  /**
   * Generate a random CSS color
   * @example faker.color.css() // 'rgb(163, 245, 178)'
   */
  css(options?: ColorOptions): string {
    const format = options?.format ?? this.random.arrayElement(['hex', 'rgb', 'hsl'])

    if (format === 'hex') {
      return this.hex()
    }
    if (format === 'rgb') {
      return this.rgb() as string
    }
    return this.hsl() as string
  }

  /**
   * Generate a random color name
   * @example faker.color.name() // 'Red'
   */
  name(): string {
    if (this.locale?.commerce?.color) {
      return this.random.arrayElement(this.locale.commerce.color)
    }

    const colors = [
      'Red',
      'Blue',
      'Green',
      'Yellow',
      'Purple',
      'Orange',
      'Pink',
      'Brown',
      'Black',
      'White',
      'Gray',
      'Cyan',
      'Magenta',
      'Lime',
      'Navy',
      'Teal',
      'Olive',
      'Maroon',
      'Aqua',
      'Silver',
      'Fuchsia',
      'Gold',
      'Indigo',
      'Violet',
    ]
    return this.random.arrayElement(colors)
  }

  /**
   * Laravel-compatible: Generate a random hex color
   * @example faker.color.hexColor() // '#A3F5B2'
   */
  hexColor(): string {
    return this.hex()
  }

  /**
   * Laravel-compatible: Generate a random RGB color as string
   * @example faker.color.rgbColor() // 'rgb(163, 245, 178)'
   */
  rgbColor(): string {
    return this.rgb() as string
  }

  /**
   * Laravel-compatible: Generate a random RGB color as array
   * @example faker.color.rgbColorAsArray() // [163, 245, 178]
   */
  rgbColorAsArray(): number[] {
    return this.rgb({ format: 'array' }) as number[]
  }
}
