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
  food?: FoodLocale
  animal?: AnimalLocale
  sport?: SportLocale
  music?: MusicLocale
  commerce?: CommerceLocale
  book?: BookLocale
  vehicle?: VehicleLocale
  word?: WordLocale
  hacker?: HackerLocale
  system?: SystemLocale
  science?: ScienceLocale
}

export interface PersonLocale {
  firstNameMale: string[]
  firstNameFemale: string[]
  firstNameNeutral?: string[]
  lastName: string[]
  prefix: string[]
  suffix: string[]
  gender: string[]
  jobTitle: string[]
}

export interface PersonNameOptions {
  gender?: 'male' | 'female' | 'neutral'
}

export interface PersonFullNameOptions extends PersonNameOptions {
  prefix?: boolean
  suffix?: boolean
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

export interface FoodLocale {
  dish: string[]
  ingredient: string[]
  cuisine: string[]
  dessert: string[]
  fruit: string[]
  vegetable: string[]
  meat: string[]
  spice: string[]
}

export interface AnimalLocale {
  dog: string[]
  cat: string[]
  bird: string[]
  fish: string[]
  horse: string[]
  rabbit: string[]
  insect: string[]
  type: string[]
}

export interface SportLocale {
  sport: string[]
  team: string[]
  athlete: string[]
}

export interface MusicLocale {
  genre: string[]
  artist: string[]
  song: string[]
  instrument: string[]
}

export interface CommerceLocale {
  product: string[]
  productAdjective: string[]
  productMaterial: string[]
  department: string[]
  color: string[]
}

export interface BookLocale {
  title: string[]
  author: string[]
  publisher: string[]
  genre: string[]
  series: string[]
  review: string[]
}

export interface VehicleLocale {
  manufacturer: string[]
  model: string[]
  type: string[]
  fuel: string[]
  bicycle: string[]
}

export interface WordLocale {
  adjective: string[]
  adverb: string[]
  conjunction: string[]
  interjection: string[]
  noun: string[]
  preposition: string[]
  verb: string[]
}

export interface HackerLocale {
  abbreviation: string[]
  adjective: string[]
  noun: string[]
  verb: string[]
  ingverb: string[]
  phrase: string[]
}

export interface SystemLocale {
  fileName: string[]
  fileType: string[]
}

export interface ScienceLocale {
  chemicalElement: string[]
  unit: string[]
  constant: string[]
  field: string[]
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
