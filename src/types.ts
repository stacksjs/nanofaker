export interface FakerConfig {
  verbose: boolean
  locale: string
  seed?: number
}

export type FakerOptions = Partial<FakerConfig>

// Locale types
export interface LocaleDefinition {
  title: string
  person: PersonLocale
  address: AddressLocale
  company: CompanyLocale
  internet: InternetLocale
  phone: PhoneLocale
}

export interface PersonLocale {
  firstName: string[]
  lastName: string[]
  prefix: string[]
  suffix: string[]
  gender: string[]
  jobTitle: string[]
}

export interface AddressLocale {
  street: string[]
  city: string[]
  state: string[]
  stateAbbr: string[]
  country: string[]
  countryCode: string[]
  zipCode: string[]
  buildingNumber: string[]
  direction: string[]
  streetSuffix: string[]
}

export interface CompanyLocale {
  name: string[]
  suffix: string[]
  industry: string[]
  buzzwords: string[]
  adjective: string[]
  descriptor: string[]
  noun: string[]
}

export interface InternetLocale {
  domainSuffix: string[]
  freeEmail: string[]
}

export interface PhoneLocale {
  formats: string[]
}

// Module option types
export interface NumberOptions {
  min?: number
  max?: number
  precision?: number
}

export interface DateOptions {
  from?: Date
  to?: Date
}

export interface StringOptions {
  length?: number
  casing?: 'upper' | 'lower' | 'mixed'
}

export interface PasswordOptions {
  length?: number
  memorable?: boolean
  prefix?: string
  pattern?: RegExp
}

export interface ColorOptions {
  format?: 'hex' | 'rgb' | 'hsl'
}

export interface FinanceOptions {
  min?: number
  max?: number
  dec?: number
  symbol?: string
}
