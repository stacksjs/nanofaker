import type { LocaleDefinition } from './types'
import { en } from './en'

/**
 * Locale loader with dynamic import support and caching
 */
export class LocaleLoader {
  private static cache: Map<string, LocaleDefinition> = new Map()
  private static loading: Map<string, Promise<LocaleDefinition>> = new Map()

  /**
   * Available locales that can be dynamically loaded
   */
  static readonly AVAILABLE_LOCALES = [
    'en',
    'es',
    'fr',
    'de',
    'it',
    'pt',
    'ja',
    'tl',
    'zh',
    'nl',
    'ko',
    'no',
    'sv',
    'da',
    'uk',
    'hi',
    'fi',
    'tr',
    'pl',
    'cs',
  ] as const

  /**
   * Get list of available locales
   */
  static getAvailableLocales(): readonly string[] {
    return this.AVAILABLE_LOCALES
  }

  /**
   * Load a locale (with caching)
   * @param locale - Locale code to load
   * @returns Promise resolving to the locale definition
   */
  static async load(locale: string): Promise<LocaleDefinition> {
    // Return English immediately (it's always bundled)
    if (locale === 'en') {
      if (!this.cache.has('en')) {
        this.cache.set('en', en)
      }
      return en
    }

    // Check if already cached
    if (this.cache.has(locale)) {
      return this.cache.get(locale)!
    }

    // Check if currently loading
    if (this.loading.has(locale)) {
      return this.loading.get(locale)!
    }

    // Validate locale
    if (!this.AVAILABLE_LOCALES.includes(locale as any)) {
      throw new Error(
        `Locale '${locale}' is not supported. Available locales: ${this.AVAILABLE_LOCALES.join(', ')}`,
      )
    }

    // Start loading
    const loadPromise = this.loadLocaleModule(locale)
    this.loading.set(locale, loadPromise)

    try {
      const localeDefinition = await loadPromise
      this.cache.set(locale, localeDefinition)
      return localeDefinition
    }
    finally {
      this.loading.delete(locale)
    }
  }

  /**
   * Load a locale synchronously (throws if not cached)
   * @param locale - Locale code to load
   * @returns Locale definition
   */
  static loadSync(locale: string): LocaleDefinition {
    if (locale === 'en') {
      if (!this.cache.has('en')) {
        this.cache.set('en', en)
      }
      return en
    }

    if (this.cache.has(locale)) {
      return this.cache.get(locale)!
    }

    throw new Error(
      `Locale '${locale}' is not loaded. Please use async loading with faker.setLocale('${locale}') or preload it.`,
    )
  }

  /**
   * Check if a locale is cached
   */
  static isCached(locale: string): boolean {
    return this.cache.has(locale)
  }

  /**
   * Preload multiple locales
   * @param locales - Array of locale codes to preload
   */
  static async preload(locales: string[]): Promise<void> {
    await Promise.all(locales.map(locale => this.load(locale)))
  }

  /**
   * Clear the locale cache
   */
  static clearCache(): void {
    this.cache.clear()
    this.loading.clear()
  }

  /**
   * Dynamically import a locale module
   */
  private static async loadLocaleModule(locale: string): Promise<LocaleDefinition> {
    try {
      // Dynamic import from separate locale packages
      const module = await import(`@nanofaker/locale-${locale}`)
      return module[locale]
    }
    catch (error) {
      throw new Error(
        `Failed to load locale '${locale}': ${error instanceof Error ? error.message : String(error)}`,
      )
    }
  }
}
