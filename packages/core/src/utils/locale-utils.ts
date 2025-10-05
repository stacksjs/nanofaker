/**
 * Utilities for parsing and working with locale codes
 */

export interface LocaleInfo {
  /** Full locale code (e.g., "en_US", "es-MX") */
  full: string
  /** Language code (e.g., "en", "es") */
  language: string
  /** Region code (e.g., "US", "MX") - undefined if no region */
  region?: string
  /** Normalized package name (e.g., "en-us", "es-mx") */
  packageName: string
  /** Normalized locale code with underscore (e.g., "en_US", "es_MX") */
  normalized: string
}

/**
 * Parse a locale code into its components
 * Supports both underscore (en_US) and hyphen (en-US) formats
 *
 * @example
 * parseLocale("en_US") // { full: "en_US", language: "en", region: "US", packageName: "en-us", normalized: "en_US" }
 * parseLocale("en-GB") // { full: "en-GB", language: "en", region: "GB", packageName: "en-gb", normalized: "en_GB" }
 * parseLocale("es")    // { full: "es", language: "es", region: undefined, packageName: "es", normalized: "es" }
 */
export function parseLocale(locale: string): LocaleInfo {
  // Normalize separators to underscore for internal use
  const normalized = locale.replace(/-/g, '_')
  const parts = normalized.split('_')

  const language = parts[0].toLowerCase()
  const region = parts[1]?.toUpperCase()

  // Package name uses hyphens and lowercase (following npm conventions)
  const packageName = region
    ? `${language}-${region.toLowerCase()}`
    : language

  return {
    full: locale,
    language,
    region,
    packageName,
    normalized: region ? `${language}_${region}` : language,
  }
}

/**
 * Get the fallback chain for a locale
 *
 * @example
 * getLocaleFallbackChain("en_US") // ["en_US", "en"]
 * getLocaleFallbackChain("es_MX") // ["es_MX", "es"]
 * getLocaleFallbackChain("en")    // ["en"]
 */
export function getLocaleFallbackChain(locale: string): string[] {
  const info = parseLocale(locale)

  if (info.region) {
    return [info.normalized, info.language]
  }

  return [info.language]
}

/**
 * Get the package name for a locale
 *
 * @example
 * getLocalePackageName("en_US") // "@mock-locale/en-us"
 * getLocalePackageName("es-MX") // "@mock-locale/es-mx"
 * getLocalePackageName("fr")    // "@mock-locale/fr"
 */
export function getLocalePackageName(locale: string): string {
  const info = parseLocale(locale)
  return `@ts-mocker/locale-${info.packageName}`
}

/**
 * Merge locale definitions (for variant locales extending base locales)
 * Deeply merges variant into base, with variant taking precedence
 */
export function mergeLocales<T extends Record<string, any>>(base: T, variant: Partial<T>): T {
  const result = { ...base }

  for (const key in variant) {
    const variantValue = variant[key]
    const baseValue = base[key]

    if (variantValue === undefined) {
      continue
    }

    // If both are objects (and not arrays), merge recursively
    if (
      typeof variantValue === 'object'
      && variantValue !== null
      && !Array.isArray(variantValue)
      && typeof baseValue === 'object'
      && baseValue !== null
      && !Array.isArray(baseValue)
    ) {
      result[key] = mergeLocales(baseValue, variantValue) as any
    }
    else {
      // Otherwise, variant value takes precedence
      result[key] = variantValue as any
    }
  }

  return result
}
