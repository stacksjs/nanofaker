export * from './config'
export * from './types'
export * from './faker'
export * from './random'
export { locales, en } from './locales'

// Re-export modules
export { PersonModule } from './modules/person'
export { AddressModule } from './modules/address'
export { InternetModule } from './modules/internet'
export { PhoneModule } from './modules/phone'
export { CompanyModule } from './modules/company'
export { LoremModule } from './modules/lorem'
export { DateModule } from './modules/date'
export { NumberModule } from './modules/number'
export { StringModule } from './modules/string'
export { ColorModule } from './modules/color'
export { FinanceModule } from './modules/finance'
export { HelpersModule } from './modules/helpers'

// Default faker instance for convenience
import { Faker } from './faker'
export const faker = new Faker()

// Default export
export default faker
