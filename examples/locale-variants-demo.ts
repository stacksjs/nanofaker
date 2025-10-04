/**
 * Demo: Locale Variants
 *
 * This example demonstrates how to use locale variants
 * to generate region-specific fake data.
 */

import { Faker } from '../packages/core/src/index'

async function demonstrateLocaleVariants() {
  console.log('🌍 Locale Variants Demo\n')
  console.log('='  .repeat(60))

  // English variants
  console.log('\n📍 English Variants:\n')

  const usFaker = await Faker.create({ locale: 'en_US', seed: 12345 })
  console.log('🇺🇸 United States (en_US):')
  console.log('  City:', usFaker.address.city())
  console.log('  State:', usFaker.address.state())
  console.log('  Zip:', usFaker.address.zipCode())
  console.log('  Phone:', usFaker.phone.number())
  console.log('  Person:', usFaker.person.fullName())

  const ukFaker = await Faker.create({ locale: 'en_GB', seed: 12345 })
  console.log('\n🇬🇧 United Kingdom (en_GB):')
  console.log('  City:', ukFaker.address.city())
  console.log('  State:', ukFaker.address.state())
  console.log('  Postcode:', ukFaker.address.zipCode())
  console.log('  Phone:', ukFaker.phone.number())
  console.log('  Person:', ukFaker.person.fullName())

  // Spanish variants
  console.log('\n\n📍 Spanish Variants:\n')

  const esFaker = await Faker.create({ locale: 'es', seed: 12345 })
  console.log('🇪🇸 Spain (es):')
  console.log('  Ciudad:', esFaker.address.city())
  console.log('  Persona:', esFaker.person.fullName())

  const mxFaker = await Faker.create({ locale: 'es_MX', seed: 12345 })
  console.log('\n🇲🇽 Mexico (es_MX):')
  console.log('  Ciudad:', mxFaker.address.city())
  console.log('  Estado:', mxFaker.address.state())
  console.log('  Persona:', mxFaker.person.fullName())

  // Hyphen vs underscore
  console.log('\n\n📍 Separator Flexibility:\n')

  const underscore = await Faker.create({ locale: 'en_US', seed: 99999 })
  const hyphen = await Faker.create({ locale: 'en-US', seed: 99999 })

  console.log('Using underscore (en_US):', underscore.address.city())
  console.log('Using hyphen (en-US):    ', hyphen.address.city())
  console.log('Same result? ✓')

  // Dynamic switching
  console.log('\n\n📍 Dynamic Locale Switching:\n')

  const dynamicFaker = await Faker.create({ locale: 'en_US', seed: 55555 })
  console.log('Start with en_US:', dynamicFaker.address.city())

  await dynamicFaker.setLocale('en_GB')
  console.log('Switch to en_GB: ', dynamicFaker.address.city())

  await dynamicFaker.setLocale('es_MX')
  console.log('Switch to es_MX: ', dynamicFaker.address.city())

  // Generate multiple records
  console.log('\n\n📍 Multiple Records Per Variant:\n')

  console.log('US Addresses:')
  for (let i = 0; i < 3; i++) {
    console.log(`  ${i + 1}. ${usFaker.address.city()}, ${usFaker.address.state()} ${usFaker.address.zipCode()}`)
  }

  console.log('\nUK Addresses:')
  for (let i = 0; i < 3; i++) {
    console.log(`  ${i + 1}. ${ukFaker.address.city()}, ${ukFaker.address.state()} ${ukFaker.address.zipCode()}`)
  }

  console.log('\n' + '='.repeat(60))
  console.log('✨ Demo complete!')
}

// Run the demo
demonstrateLocaleVariants().catch(console.error)
