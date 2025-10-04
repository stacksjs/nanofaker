import type { FakerOptions, LocaleDefinition } from './types'
import { Random } from './random'
import { PersonModule } from './modules/person'
import { AddressModule } from './modules/address'
import { InternetModule } from './modules/internet'
import { PhoneModule } from './modules/phone'
import { CompanyModule } from './modules/company'
import { LoremModule } from './modules/lorem'
import { DateModule } from './modules/date'
import { NumberModule } from './modules/number'
import { StringModule } from './modules/string'
import { ColorModule } from './modules/color'
import { FinanceModule } from './modules/finance'
import { HelpersModule } from './modules/helpers'
import { VehicleModule } from './modules/vehicle'
import { ImageModule } from './modules/image'
import { GitModule } from './modules/git'
import { ScienceModule } from './modules/science'
import { MusicModule } from './modules/music'
import { DatabaseModule } from './modules/database'
import { FoodModule } from './modules/food'
import { CommerceModule } from './modules/commerce'
import { BookModule } from './modules/book'
import { AnimalModule } from './modules/animal'
import { SportModule } from './modules/sport'
import { HackerModule } from './modules/hacker'
import { SystemModule } from './modules/system'
import { WordModule } from './modules/word'
import { locales } from './locales'

/**
 * Main Faker class - the entry point for generating fake data
 *
 * @example
 * ```ts
 * import { Faker } from 'nanofaker'
 *
 * const faker = new Faker()
 * console.log(faker.person.firstName()) // 'John'
 * console.log(faker.internet.email()) // 'john.doe@example.com'
 * ```
 */
export class Faker {
  private _random: Random
  private _locale: LocaleDefinition

  public readonly person: PersonModule
  public readonly address: AddressModule
  public readonly internet: InternetModule
  public readonly phone: PhoneModule
  public readonly company: CompanyModule
  public readonly lorem: LoremModule
  public readonly date: DateModule
  public readonly number: NumberModule
  public readonly string: StringModule
  public readonly color: ColorModule
  public readonly finance: FinanceModule
  public readonly helpers: HelpersModule
  public readonly vehicle: VehicleModule
  public readonly image: ImageModule
  public readonly git: GitModule
  public readonly science: ScienceModule
  public readonly music: MusicModule
  public readonly database: DatabaseModule
  public readonly food: FoodModule
  public readonly commerce: CommerceModule
  public readonly book: BookModule
  public readonly animal: AnimalModule
  public readonly sport: SportModule
  public readonly hacker: HackerModule
  public readonly system: SystemModule
  public readonly word: WordModule

  constructor(options?: FakerOptions) {
    const locale = options?.locale ?? 'en'
    const seed = options?.seed

    this._locale = locales[locale] ?? locales.en
    this._random = new Random(seed)

    // Initialize all modules
    this.person = new PersonModule(this._random, this._locale)
    this.address = new AddressModule(this._random, this._locale)
    this.internet = new InternetModule(this._random, this._locale)
    this.phone = new PhoneModule(this._random, this._locale)
    this.company = new CompanyModule(this._random, this._locale)
    this.lorem = new LoremModule(this._random)
    this.date = new DateModule(this._random)
    this.number = new NumberModule(this._random)
    this.string = new StringModule(this._random)
    this.color = new ColorModule(this._random, this._locale)
    this.finance = new FinanceModule(this._random)
    this.helpers = new HelpersModule(this._random)
    this.image = new ImageModule(this._random)
    this.git = new GitModule(this._random)
    this.science = new ScienceModule(this._random, this._locale)
    this.music = new MusicModule(this._random, this._locale)
    this.database = new DatabaseModule(this._random)
    this.food = new FoodModule(this._random, this._locale)
    this.commerce = new CommerceModule(this._random, this._locale)
    this.book = new BookModule(this._random, this._locale)
    this.animal = new AnimalModule(this._random, this._locale)
    this.sport = new SportModule(this._random, this._locale)
    this.hacker = new HackerModule(this._random, this._locale)
    this.system = new SystemModule(this._random, this._locale)
    this.word = new WordModule(this._random, this._locale)
    this.vehicle = new VehicleModule(this._random, this._locale)
  }

  /**
   * Set a seed for reproducible results
   * @example faker.seed(12345)
   */
  seed(seed: number): this {
    this._random = new Random(seed)

    // Reinitialize all modules with new random instance
    Object.assign(this.person, new PersonModule(this._random, this._locale))
    Object.assign(this.address, new AddressModule(this._random, this._locale))
    Object.assign(this.internet, new InternetModule(this._random, this._locale))
    Object.assign(this.phone, new PhoneModule(this._random, this._locale))
    Object.assign(this.company, new CompanyModule(this._random, this._locale))
    Object.assign(this.lorem, new LoremModule(this._random))
    Object.assign(this.date, new DateModule(this._random))
    Object.assign(this.number, new NumberModule(this._random))
    Object.assign(this.string, new StringModule(this._random))
    Object.assign(this.color, new ColorModule(this._random, this._locale))
    Object.assign(this.finance, new FinanceModule(this._random))
    Object.assign(this.helpers, new HelpersModule(this._random))
    Object.assign(this.image, new ImageModule(this._random))
    Object.assign(this.git, new GitModule(this._random))
    Object.assign(this.science, new ScienceModule(this._random, this._locale))
    Object.assign(this.music, new MusicModule(this._random, this._locale))
    Object.assign(this.database, new DatabaseModule(this._random))
    Object.assign(this.food, new FoodModule(this._random, this._locale))
    Object.assign(this.commerce, new CommerceModule(this._random, this._locale))
    Object.assign(this.book, new BookModule(this._random, this._locale))
    Object.assign(this.animal, new AnimalModule(this._random, this._locale))
    Object.assign(this.sport, new SportModule(this._random, this._locale))
    Object.assign(this.hacker, new HackerModule(this._random, this._locale))
    Object.assign(this.system, new SystemModule(this._random, this._locale))
    Object.assign(this.word, new WordModule(this._random, this._locale))
    Object.assign(this.vehicle, new VehicleModule(this._random, this._locale))

    return this
  }

  /**
   * Set the locale
   * @example faker.setLocale('es')
   */
  setLocale(locale: string): this {
    this._locale = locales[locale] ?? locales.en

    // Reinitialize modules that depend on locale
    Object.assign(this.person, new PersonModule(this._random, this._locale))
    Object.assign(this.address, new AddressModule(this._random, this._locale))
    Object.assign(this.internet, new InternetModule(this._random, this._locale))
    Object.assign(this.phone, new PhoneModule(this._random, this._locale))
    Object.assign(this.company, new CompanyModule(this._random, this._locale))
    Object.assign(this.food, new FoodModule(this._random, this._locale))
    Object.assign(this.animal, new AnimalModule(this._random, this._locale))
    Object.assign(this.sport, new SportModule(this._random, this._locale))
    Object.assign(this.music, new MusicModule(this._random, this._locale))
    Object.assign(this.commerce, new CommerceModule(this._random, this._locale))
    Object.assign(this.book, new BookModule(this._random, this._locale))
    Object.assign(this.vehicle, new VehicleModule(this._random, this._locale))
    Object.assign(this.word, new WordModule(this._random, this._locale))
    Object.assign(this.hacker, new HackerModule(this._random, this._locale))
    Object.assign(this.system, new SystemModule(this._random, this._locale))
    Object.assign(this.color, new ColorModule(this._random, this._locale))
    Object.assign(this.science, new ScienceModule(this._random, this._locale))

    return this
  }

  /**
   * Get current locale
   */
  get locale(): string {
    return this._locale.title
  }

  /**
   * Get available locales
   */
  static get availableLocales(): string[] {
    return Object.keys(locales)
  }

  /**
   * Laravel-compatible: Generate a random name
   * @example faker.name() // 'John Doe'
   */
  name(): string {
    return this.person.name()
  }

  /**
   * Laravel-compatible: Generate a random email
   * @example faker.email() // 'john.doe@example.com'
   */
  email(): string {
    return this.internet.email()
  }
}
