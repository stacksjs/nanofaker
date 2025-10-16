import type {
  ConditionalConstraints,
  DataProviderPlugin,
  DataRelationship,
  RealisticDataOptions,
  ValidationOptions,
  WeightedSelectionOptions,
} from '../types'

/**
 * Advanced data generation utilities for conditional, validated, and weighted data
 */

/**
 * Validate data against validation rules
 */
export function validateData<T>(
  value: T,
  options: ValidationOptions<T>,
): { isValid: boolean, errors: string[] } {
  const errors: string[] = []

  for (const rule of options.rules) {
    if (!rule.validator(value)) {
      const errorMessage = rule.errorMessage || `Validation failed for value: ${value}`
      errors.push(errorMessage)

      if (options.strict) {
        throw new Error(errorMessage)
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * Select a weighted random item from a list
 */
export function selectWeightedItem<T>(
  random: { number: () => number },
  options: WeightedSelectionOptions<T>,
): T {
  const { items } = options

  if (items.length === 0) {
    throw new Error('Cannot select from empty weighted items array')
  }

  // Calculate total weight
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0)

  if (totalWeight <= 0) {
    throw new Error('Total weight must be greater than 0')
  }

  // Generate random number between 0 and total weight
  const randomValue = random.number() * totalWeight

  // Find the selected item
  let currentWeight = 0
  for (const item of items) {
    currentWeight += item.weight
    if (randomValue <= currentWeight) {
      return item.item
    }
  }

  // Fallback to last item (should never reach here)
  return items[items.length - 1].item
}

/**
 * Apply conditional constraints to filter data
 */
export function applyConstraints<T extends Record<string, any>>(
  data: T[],
  constraints: ConditionalConstraints,
): T[] {
  return data.filter((item) => {
    // Check gender constraint
    if (constraints.gender && item.gender && item.gender !== constraints.gender) {
      return false
    }

    // Check country constraint
    if (constraints.country) {
      const countries = Array.isArray(constraints.country) ? constraints.country : [constraints.country]
      if (item.country && !countries.includes(item.country)) {
        return false
      }
    }

    // Check region constraint
    if (constraints.region) {
      const regions = Array.isArray(constraints.region) ? constraints.region : [constraints.region]
      if (item.region && !regions.includes(item.region)) {
        return false
      }
    }

    // Check locale constraint
    if (constraints.locale && item.locale && item.locale !== constraints.locale) {
      return false
    }

    // Check age range constraint
    if (constraints.ageRange && item.age) {
      const { min, max } = constraints.ageRange
      if (item.age < min || item.age > max) {
        return false
      }
    }

    // Check custom constraints
    for (const [key, value] of Object.entries(constraints)) {
      if (key !== 'gender' && key !== 'country' && key !== 'region'
        && key !== 'locale' && key !== 'ageRange' && item[key] !== undefined) {
        const values = Array.isArray(value) ? value : [value]
        if (!values.includes(item[key])) {
          return false
        }
      }
    }

    return true
  })
}

/**
 * Apply data relationships to generate realistic connected data
 */
export function applyRelationships<T extends Record<string, any>>(
  data: T,
  relationships: DataRelationship[],
): T {
  const result = { ...data }

  for (const relationship of relationships) {
    const { field, dependsOn, mapping } = relationship

    if (result[dependsOn] && mapping[result[dependsOn]]) {
      (result as any)[field] = mapping[result[dependsOn]]
    }
  }

  return result
}

/**
 * Generate data with realistic relationships
 */
export function generateRealisticData<T extends Record<string, any>>(
  generator: (options?: any) => T,
  options: RealisticDataOptions = {},
): T {
  const baseData = generator()

  if (options.relationships) {
    return applyRelationships(baseData, options.relationships)
  }

  return baseData
}

/**
 * Custom data provider registry
 */
export class DataProviderRegistry {
  private providers = new Map<string, Map<string, DataProviderPlugin<any>>>()

  /**
   * Register a custom data provider
   */
  register<T>(plugin: DataProviderPlugin<T>): void {
    const { category, name } = plugin

    if (!this.providers.has(category)) {
      this.providers.set(category, new Map())
    }

    const categoryProviders = this.providers.get(category)!
    categoryProviders.set(name, plugin)
  }

  /**
   * Get a data provider by category and name
   */
  get<T>(category: string, name: string): DataProviderPlugin<T> | undefined {
    return this.providers.get(category)?.get(name)
  }

  /**
   * Get all providers in a category
   */
  getProvidersInCategory(category: string): DataProviderPlugin<any>[] {
    const categoryProviders = this.providers.get(category)
    return categoryProviders ? Array.from(categoryProviders.values()) : []
  }

  /**
   * Get all available categories
   */
  getCategories(): string[] {
    return Array.from(this.providers.keys())
  }

  /**
   * Remove a provider
   */
  remove(category: string, name: string): boolean {
    const categoryProviders = this.providers.get(category)
    if (categoryProviders) {
      return categoryProviders.delete(name)
    }
    return false
  }

  /**
   * Clear all providers
   */
  clear(): void {
    this.providers.clear()
  }
}

/**
 * Global data provider registry instance
 */
export const globalProviderRegistry: DataProviderRegistry = new DataProviderRegistry()

/**
 * Built-in validation rules
 */
export const ValidationRules = {
  /**
   * Email validation
   */
  email: (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/
    return emailRegex.test(value)
  },

  /**
   * Phone number validation (basic)
   */
  phone: (value: string): boolean => {
    const phoneRegex = /^\+?[1-9]\d{0,15}$/
    const cleanValue = value.replace(/[\s\-()]/g, '')
    return cleanValue.length >= 7 && phoneRegex.test(cleanValue)
  },

  /**
   * Name validation (no numbers, reasonable length)
   */
  name: (value: string): boolean => {
    const nameRegex = /^[a-z\s\-']+$/i
    return nameRegex.test(value) && value.length >= 2 && value.length <= 50
  },

  /**
   * Age validation
   */
  age: (value: number): boolean => {
    return Number.isInteger(value) && value >= 0 && value <= 150
  },

  /**
   * URL validation
   */
  url: (value: string): boolean => {
    try {
      const _url = new URL(value)
      return value.startsWith('http://') || value.startsWith('https://')
    }
    catch {
      return false
    }
  },

  /**
   * Custom regex validation
   */
  regex: (pattern: RegExp) => (value: string): boolean => {
    return pattern.test(value)
  },

  /**
   * Length validation
   */
  length: (min: number, max: number) => (value: string): boolean => {
    return value.length >= min && value.length <= max
  },

  /**
   * Range validation
   */
  range: (min: number, max: number) => (value: number): boolean => {
    return value >= min && value <= max
  },
}

/**
 * Built-in data relationships for realistic data generation
 */
export const DataRelationships = {
  /**
   * Phone number formats by country
   */
  phoneByCountry: {
    field: 'phone',
    dependsOn: 'country',
    mapping: {
      'United States': '+1-###-###-####',
      'United Kingdom': '+44 #### ### ###',
      'Germany': '+49 ### ########',
      'France': '+33 # ## ## ## ##',
      'Spain': '+34 ### ## ## ##',
      'Italy': '+39 ### ### ###',
      'Japan': '+81 ##-####-####',
      'China': '+86 ### #### ####',
      'Australia': '+61 ### ### ###',
      'Canada': '+1-###-###-####',
    },
  },

  /**
   * Postal code formats by country
   */
  postalCodeByCountry: {
    field: 'postalCode',
    dependsOn: 'country',
    mapping: {
      'United States': '#####',
      'United Kingdom': 'AA## #AA',
      'Germany': '#####',
      'France': '#####',
      'Spain': '#####',
      'Italy': '#####',
      'Japan': '###-####',
      'China': '######',
      'Australia': '####',
      'Canada': 'A#A #A#',
    },
  },

  /**
   * Common first names by gender
   */
  firstNameByGender: {
    field: 'firstName',
    dependsOn: 'gender',
    mapping: {
      male: ['John', 'Michael', 'David', 'James', 'Robert', 'William', 'Richard', 'Thomas', 'Christopher', 'Daniel'] as string[],
      female: ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen'] as string[],
    },
  },
}

/**
 * Common weighted selections for realistic data distribution
 */
export const WeightedSelections = {
  /**
   * Common first names with realistic distribution
   */
  commonFirstNames: {
    items: [
      { item: 'John', weight: 100 },
      { item: 'Michael', weight: 85 },
      { item: 'David', weight: 80 },
      { item: 'James', weight: 75 },
      { item: 'Robert', weight: 70 },
      { item: 'William', weight: 65 },
      { item: 'Richard', weight: 60 },
      { item: 'Thomas', weight: 55 },
      { item: 'Christopher', weight: 50 },
      { item: 'Daniel', weight: 45 },
    ] as Array<{ item: string, weight: number }>,
  },

  /**
   * Age distribution (more people in middle age ranges)
   */
  ageDistribution: {
    items: [
      { item: 25, weight: 80 },
      { item: 30, weight: 90 },
      { item: 35, weight: 95 },
      { item: 40, weight: 100 },
      { item: 45, weight: 85 },
      { item: 50, weight: 70 },
      { item: 55, weight: 55 },
      { item: 60, weight: 40 },
      { item: 65, weight: 25 },
      { item: 70, weight: 15 },
    ] as { item: number, weight: number }[],
  },

  /**
   * Country population distribution
   */
  countryDistribution: {
    items: [
      { item: 'United States', weight: 100 },
      { item: 'China', weight: 95 },
      { item: 'India', weight: 90 },
      { item: 'Brazil', weight: 60 },
      { item: 'Russia', weight: 55 },
      { item: 'Japan', weight: 50 },
      { item: 'Germany', weight: 45 },
      { item: 'United Kingdom', weight: 40 },
      { item: 'France', weight: 35 },
      { item: 'Italy', weight: 30 },
    ] as { item: string, weight: number }[],
  },
}
