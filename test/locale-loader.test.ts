import { describe, expect, it, beforeEach } from 'bun:test'
import { LocaleLoader } from '../src/locale-loader'
import { Faker } from '../src/faker'

describe('LocaleLoader', () => {
  beforeEach(() => {
    // Clear cache before each test
    LocaleLoader.clearCache()
  })

  describe('load', () => {
    it('should load English locale synchronously', async () => {
      const locale = await LocaleLoader.load('en')
      expect(locale).toBeDefined()
      expect(locale.title).toBe('English')
    })

    it('should load Spanish locale asynchronously', async () => {
      const locale = await LocaleLoader.load('es')
      expect(locale).toBeDefined()
      expect(locale.title).toBe('Spanish')
    })

    it('should load French locale asynchronously', async () => {
      const locale = await LocaleLoader.load('fr')
      expect(locale).toBeDefined()
      expect(locale.title).toBe('French')
    })

    it('should load all 20 locales successfully', async () => {
      const locales = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ja', 'tl', 'zh', 'nl', 'ko', 'no', 'sv', 'da', 'uk', 'hi', 'fi', 'tr', 'pl', 'cs']

      for (const localeCode of locales) {
        const locale = await LocaleLoader.load(localeCode)
        expect(locale).toBeDefined()
        expect(locale.person).toBeDefined()
        expect(locale.address).toBeDefined()
        expect(locale.company).toBeDefined()
      }
    })

    it('should throw error for invalid locale', async () => {
      expect(async () => {
        await LocaleLoader.load('invalid')
      }).toThrow()
    })

    it('should cache loaded locales', async () => {
      const locale1 = await LocaleLoader.load('es')
      expect(LocaleLoader.isCached('es')).toBe(true)

      const locale2 = await LocaleLoader.load('es')
      expect(locale1).toBe(locale2) // Same reference
    })

    it('should handle concurrent loads of the same locale', async () => {
      const [locale1, locale2, locale3] = await Promise.all([
        LocaleLoader.load('fr'),
        LocaleLoader.load('fr'),
        LocaleLoader.load('fr'),
      ])

      expect(locale1).toBe(locale2)
      expect(locale2).toBe(locale3)
    })
  })

  describe('loadSync', () => {
    it('should load English locale synchronously', () => {
      const locale = LocaleLoader.loadSync('en')
      expect(locale).toBeDefined()
      expect(locale.title).toBe('English')
    })

    it('should load cached locale synchronously', async () => {
      await LocaleLoader.load('es')
      const locale = LocaleLoader.loadSync('es')
      expect(locale).toBeDefined()
      expect(locale.title).toBe('Spanish')
    })

    it('should throw error for non-cached locale', () => {
      expect(() => {
        LocaleLoader.loadSync('de')
      }).toThrow()
    })
  })

  describe('preload', () => {
    it('should preload multiple locales', async () => {
      await LocaleLoader.preload(['es', 'fr', 'de'])

      expect(LocaleLoader.isCached('es')).toBe(true)
      expect(LocaleLoader.isCached('fr')).toBe(true)
      expect(LocaleLoader.isCached('de')).toBe(true)
    })

    it('should allow sync access after preload', async () => {
      await LocaleLoader.preload(['it', 'pt'])

      const itLocale = LocaleLoader.loadSync('it')
      const ptLocale = LocaleLoader.loadSync('pt')

      expect(itLocale.title).toBe('Italian')
      expect(ptLocale.title).toBe('Portuguese')
    })
  })

  describe('isCached', () => {
    it('should return false for non-cached locale', () => {
      expect(LocaleLoader.isCached('ja')).toBe(false)
    })

    it('should return true for cached locale', async () => {
      await LocaleLoader.load('ja')
      expect(LocaleLoader.isCached('ja')).toBe(true)
    })

    it('should return true for English without loading', () => {
      LocaleLoader.loadSync('en')
      expect(LocaleLoader.isCached('en')).toBe(true)
    })
  })

  describe('clearCache', () => {
    it('should clear all cached locales', async () => {
      await LocaleLoader.preload(['es', 'fr', 'de'])

      expect(LocaleLoader.isCached('es')).toBe(true)
      expect(LocaleLoader.isCached('fr')).toBe(true)

      LocaleLoader.clearCache()

      expect(LocaleLoader.isCached('es')).toBe(false)
      expect(LocaleLoader.isCached('fr')).toBe(false)
    })
  })

  describe('getAvailableLocales', () => {
    it('should return all 20 available locales', () => {
      const locales = LocaleLoader.getAvailableLocales()
      expect(locales.length).toBe(20)
      expect(locales).toContain('en')
      expect(locales).toContain('es')
      expect(locales).toContain('fr')
      expect(locales).toContain('de')
      expect(locales).toContain('it')
      expect(locales).toContain('pt')
      expect(locales).toContain('ja')
      expect(locales).toContain('tl')
      expect(locales).toContain('zh')
      expect(locales).toContain('nl')
      expect(locales).toContain('ko')
      expect(locales).toContain('no')
      expect(locales).toContain('sv')
      expect(locales).toContain('da')
      expect(locales).toContain('uk')
      expect(locales).toContain('hi')
      expect(locales).toContain('fi')
      expect(locales).toContain('tr')
      expect(locales).toContain('pl')
      expect(locales).toContain('cs')
    })
  })
})

describe('Faker with Dynamic Locale Loading', () => {
  beforeEach(() => {
    LocaleLoader.clearCache()
  })

  describe('constructor', () => {
    it('should create instance with English by default', () => {
      const faker = new Faker()
      expect(faker.locale).toBe('English')
    })

    it('should create instance with English explicitly', () => {
      const faker = new Faker({ locale: 'en' })
      expect(faker.locale).toBe('English')
    })

    it('should fall back to English for non-cached locale (with warning)', () => {
      const faker = new Faker({ locale: 'es' })
      expect(faker.locale).toBe('English') // Falls back because 'es' not cached
    })

    it('should use cached locale if available', async () => {
      await LocaleLoader.load('es')
      const faker = new Faker({ locale: 'es' })
      expect(faker.locale).toBe('Spanish')
    })
  })

  describe('Faker.create', () => {
    it('should create instance with async locale loading', async () => {
      const faker = await Faker.create({ locale: 'es' })
      expect(faker.locale).toBe('Spanish')
      expect(faker.person.firstName()).toBeDefined()
    })

    it('should create instances with different locales', async () => {
      const esFaker = await Faker.create({ locale: 'es' })
      const frFaker = await Faker.create({ locale: 'fr' })
      const deFaker = await Faker.create({ locale: 'de' })

      expect(esFaker.locale).toBe('Spanish')
      expect(frFaker.locale).toBe('French')
      expect(deFaker.locale).toBe('German')
    })

    it('should work with all 20 locales', async () => {
      const locales = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ja', 'tl', 'zh', 'nl', 'ko', 'no', 'sv', 'da', 'uk', 'hi', 'fi', 'tr', 'pl', 'cs']

      for (const localeCode of locales) {
        const faker = await Faker.create({ locale: localeCode })
        expect(faker.person.firstName()).toBeDefined()
        expect(faker.address.city()).toBeDefined()
      }
    })
  })

  describe('setLocale', () => {
    it('should change locale asynchronously', async () => {
      const faker = new Faker()
      expect(faker.locale).toBe('English')

      await faker.setLocale('es')
      expect(faker.locale).toBe('Spanish')
    })

    it('should update all locale-dependent modules', async () => {
      const faker = new Faker()
      const enName = faker.person.firstName()

      await faker.setLocale('ja')
      const jaName = faker.person.firstName()

      // Names should be from different locales
      expect(enName).toBeDefined()
      expect(jaName).toBeDefined()
    })
  })

  describe('setLocaleSync', () => {
    it('should change to cached locale synchronously', async () => {
      await LocaleLoader.load('fr')

      const faker = new Faker()
      faker.setLocaleSync('fr')

      expect(faker.locale).toBe('French')
    })

    it('should not change for non-cached locale (with warning)', () => {
      const faker = new Faker()
      faker.setLocaleSync('de')

      expect(faker.locale).toBe('English') // Stays English
    })
  })

  describe('preloadLocales', () => {
    it('should preload locales on instance', async () => {
      const faker = new Faker()
      await faker.preloadLocales(['es', 'fr', 'de'])

      expect(Faker.isLocaleLoaded('es')).toBe(true)
      expect(Faker.isLocaleLoaded('fr')).toBe(true)
      expect(Faker.isLocaleLoaded('de')).toBe(true)
    })

    it('should allow sync locale switching after preload', async () => {
      const faker = new Faker()
      await faker.preloadLocales(['it', 'pt'])

      faker.setLocaleSync('it')
      expect(faker.locale).toBe('Italian')

      faker.setLocaleSync('pt')
      expect(faker.locale).toBe('Portuguese')
    })
  })

  describe('Faker.preloadLocales', () => {
    it('should preload locales statically', async () => {
      await Faker.preloadLocales(['nl', 'ko', 'no'])

      expect(Faker.isLocaleLoaded('nl')).toBe(true)
      expect(Faker.isLocaleLoaded('ko')).toBe(true)
      expect(Faker.isLocaleLoaded('no')).toBe(true)
    })
  })

  describe('Faker.availableLocales', () => {
    it('should return all 20 available locales', () => {
      const locales = Faker.availableLocales
      expect(locales.length).toBe(20)
    })
  })

  describe('Faker.isLocaleLoaded', () => {
    it('should check if locale is loaded', async () => {
      expect(Faker.isLocaleLoaded('sv')).toBe(false)

      await LocaleLoader.load('sv')

      expect(Faker.isLocaleLoaded('sv')).toBe(true)
    })
  })

  describe('Real-world usage patterns', () => {
    it('should support immediate English usage', () => {
      const faker = new Faker()
      const name = faker.person.fullName()
      const email = faker.internet.email()

      expect(name).toBeDefined()
      expect(email).toContain('@')
    })

    it('should support async multi-locale setup', async () => {
      await Faker.preloadLocales(['es', 'fr', 'de', 'ja'])

      const fakers = [
        new Faker({ locale: 'es' }),
        new Faker({ locale: 'fr' }),
        new Faker({ locale: 'de' }),
        new Faker({ locale: 'ja' }),
      ]

      fakers.forEach((faker) => {
        expect(faker.person.firstName()).toBeDefined()
      })
    })

    it('should support locale switching during runtime', async () => {
      const faker = new Faker()

      const enName = faker.person.firstName()
      await faker.setLocale('es')
      const esName = faker.person.firstName()
      await faker.setLocale('fr')
      const frName = faker.person.firstName()

      expect(enName).toBeDefined()
      expect(esName).toBeDefined()
      expect(frName).toBeDefined()
    })

    it('should handle concurrent faker instances with different locales', async () => {
      const [enFaker, esFaker, frFaker] = await Promise.all([
        Faker.create({ locale: 'en' }),
        Faker.create({ locale: 'es' }),
        Faker.create({ locale: 'fr' }),
      ])

      expect(enFaker.locale).toBe('English')
      expect(esFaker.locale).toBe('Spanish')
      expect(frFaker.locale).toBe('French')
    })
  })
})
