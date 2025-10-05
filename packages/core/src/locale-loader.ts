import type { LocaleDefinition } from './types'
import { config } from './config'
import { en } from './en'
import { getLocaleFallbackChain, getLocalePackageName, mergeLocales, parseLocale } from './utils/locale-utils'
import { installPackage } from './utils/package-manager'

/**
 * Locale loader with dynamic import support and caching
 */
export class LocaleLoader {
  private static cache: Map<string, LocaleDefinition> = new Map()
  private static loading: Map<string, Promise<LocaleDefinition>> = new Map()

  /**
   * Available base locales that can be dynamically loaded
   */
  static readonly AVAILABLE_BASE_LOCALES = [
    'af',
    'ar',
    'az',
    'cs',
    'da',
    'de',
    'en',
    'eo',
    'es',
    'fa',
    'fi',
    'fr',
    'he',
    'hi',
    'it',
    'ja',
    'ko',
    'nl',
    'no',
    'pl',
    'pt',
    'sv',
    'tl',
    'tr',
    'uk',
    'zh',
    'zu',
  ] as const

  /**
   * Available locale variants (region-specific)
   */
  static readonly AVAILABLE_LOCALE_VARIANTS = [
    'af_ZA',
    'de_AT',
    'de_CH',
    'de_DE',
    'en_AU',
    'en_CA',
    'en_GB',
    'en_GH',
    'en_HK',
    'en_IE',
    'en_IN',
    'en_NG',
    'en_US',
    'en_ZA',
    'es_ES',
    'es_MX',
    'fr_BE',
    'fr_CA',
    'fr_CH',
    'fr_FR',
    'fr_LU',
    'fr_SN',
    'pt_BR',
    'pt_MZ',
    'pt_PT',
    'zh_CN',
    'zh_TW',
    'zu_ZA',
  ] as const

  /**
   * Get list of available locales (base + variants)
   */
  static getAvailableLocales(): readonly string[] {
    return [...this.AVAILABLE_BASE_LOCALES, ...this.AVAILABLE_LOCALE_VARIANTS]
  }

  /**
   * Get list of available base locales only
   */
  static getAvailableBaseLocales(): readonly string[] {
    return this.AVAILABLE_BASE_LOCALES
  }

  /**
   * Get list of available locale variants only
   */
  static getAvailableLocaleVariants(): readonly string[] {
    return this.AVAILABLE_LOCALE_VARIANTS
  }

  /**
   * Load a locale (with caching and fallback support)
   * Supports both base locales (e.g., "en") and variants (e.g., "en_US", "en-GB")
   *
   * @param locale - Locale code to load (e.g., "en", "en_US", "es-MX")
   * @returns Promise resolving to the locale definition
   */
  static async load(locale: string): Promise<LocaleDefinition> {
    const localeInfo = parseLocale(locale)
    const normalizedLocale = localeInfo.normalized

    // Return English immediately (it's always bundled)
    if (normalizedLocale === 'en') {
      if (!this.cache.has('en')) {
        this.cache.set('en', en)
      }
      return en
    }

    // Check if already cached
    if (this.cache.has(normalizedLocale)) {
      return this.cache.get(normalizedLocale)!
    }

    // Check if currently loading
    if (this.loading.has(normalizedLocale)) {
      return this.loading.get(normalizedLocale)!
    }

    // Start loading with fallback support
    const loadPromise = this.loadLocaleWithFallback(normalizedLocale)
    this.loading.set(normalizedLocale, loadPromise)

    try {
      const localeDefinition = await loadPromise
      this.cache.set(normalizedLocale, localeDefinition)
      return localeDefinition
    }
    finally {
      this.loading.delete(normalizedLocale)
    }
  }

  /**
   * Load a locale synchronously (throws if not cached)
   * @param locale - Locale code to load
   * @returns Locale definition
   */
  static loadSync(locale: string): LocaleDefinition {
    const localeInfo = parseLocale(locale)
    const normalizedLocale = localeInfo.normalized

    if (normalizedLocale === 'en') {
      if (!this.cache.has('en')) {
        this.cache.set('en', en)
      }
      return en
    }

    if (this.cache.has(normalizedLocale)) {
      return this.cache.get(normalizedLocale)!
    }

    throw new Error(
      `Locale '${locale}' is not loaded. Please use async loading with faker.setLocale('${locale}') or preload it.`,
    )
  }

  /**
   * Check if a locale is cached
   */
  static isCached(locale: string): boolean {
    const normalizedLocale = parseLocale(locale).normalized
    return this.cache.has(normalizedLocale)
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
   * Load locale with fallback support
   * Tries to load variant first, then falls back to base locale
   */
  private static async loadLocaleWithFallback(locale: string): Promise<LocaleDefinition> {
    const fallbackChain = getLocaleFallbackChain(locale)

    // Try each locale in the fallback chain
    for (let i = 0; i < fallbackChain.length; i++) {
      const currentLocale = fallbackChain[i]
      const isVariant = i === 0 && fallbackChain.length > 1
      const _isBaseLocale = !isVariant

      try {
        if (isVariant) {
          // Try to load the variant
          const variantData = await this.loadLocaleModule(currentLocale)

          // If this is a variant, also load the base and merge
          const baseLocale = fallbackChain[1]
          try {
            const baseData = await this.loadLocaleModule(baseLocale)
            return mergeLocales(baseData, variantData)
          }
          catch {
            // Base locale not available, use variant as-is
            return variantData
          }
        }
        else {
          // Load base locale
          return await this.loadLocaleModule(currentLocale)
        }
      }
      catch (error) {
        // If this is the last in the chain, throw the error
        if (i === fallbackChain.length - 1) {
          throw error
        }
        // Otherwise, continue to next fallback
        continue
      }
    }

    // Should never reach here, but just in case
    throw new Error(`Failed to load locale '${locale}' with fallback chain: ${fallbackChain.join(' → ')}`)
  }

  /**
   * Dynamically import a locale module
   */
  private static async loadLocaleModule(locale: string): Promise<LocaleDefinition> {
    const packageName = getLocalePackageName(locale)
    const localeInfo = parseLocale(locale)

    try {
      // Dynamic import from separate locale packages
      const module = await import(packageName)
      // Try to get the locale data using the normalized name (e.g., en_US)
      // or the language code (e.g., en)
      return module[localeInfo.normalized] || module[localeInfo.language] || module.default
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error)

      // Check if it's a module not found error
      if (errorMessage.includes('Cannot find') || errorMessage.includes('not found') || errorMessage.includes('ModuleNotFound')) {
        // Try to auto-install if enabled
        if (config.autoInstallLocales) {
          // eslint-disable-next-line no-console
          console.log(`\n🔍 Locale '${locale}' not found. Auto-installing ${packageName}...`)

          const installed = installPackage(packageName)

          if (installed) {
            // Try importing again after installation
            try {
              const module = await import(`@ts-mocker/locale-${locale}`)
              return module[locale]
            }
            catch (retryError) {
              throw new Error(
                `Failed to load locale '${locale}' after installation: ${retryError instanceof Error ? retryError.message : String(retryError)}`,
              )
            }
          }
          else {
            throw new Error(
              `Failed to auto-install locale '${locale}'. Please install manually with: bun add ${packageName}`,
            )
          }
        }

        throw new Error(
          `Locale '${locale}' is not installed. Install it with: bun add ${packageName}\n`
          + `Or install all locales with: bun add @ts-mocker/locale-{af,ar,az,cs,da,de,en,eo,es,fa,fi,fr,he,hi,it,ja,ko,nl,no,pl,pt,sv,tl,tr,uk,zh,zu}\n`
          + `Or enable auto-install in your faker.config.ts: { autoInstallLocales: true }`,
        )
      }

      throw new Error(
        `Failed to load locale '${locale}': ${errorMessage}`,
      )
    }
  }
}
