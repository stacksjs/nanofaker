import { Faker } from '../packages/core/src'
import { DataRelationships, ValidationRules, WeightedSelections } from '../packages/core/src/utils/advanced-data'

/**
 * Advanced Data Generation Features Demo
 *
 * This file demonstrates the new advanced features:
 * 1. Conditional Data Generation
 * 2. Realistic Data Relationships
 * 3. Custom Data Providers
 * 4. Data Validation
 * 5. Weighted Random Selection
 */

async function demonstrateAdvancedFeatures() {
  console.warn('🚀 Advanced Data Generation Features Demo\n')

  // Create faker instance
  const faker = await Faker.create({ locale: 'en' })

  // 1. CONDITIONAL DATA GENERATION
  console.warn('1️⃣ CONDITIONAL DATA GENERATION')
  console.warn('=====================================')

  // Generate only male names
  console.warn('Male names only:')
  for (let i = 0; i < 3; i++) {
    const name = faker.person.firstNameAdvanced({
      constraints: { gender: 'male' },
    })
    console.warn(`  - ${name}`)
  }

  // Generate names with age constraints
  console.warn('\nNames with age constraints (25-35):')
  for (let i = 0; i < 3; i++) {
    const profile = faker.person.profile({
      constraints: { ageRange: { min: 25, max: 35 } },
    })
    console.warn(`  - ${profile.fullName}, age ${profile.age}`)
  }

  // Generate addresses in specific countries
  console.warn('\nAddresses in United States only:')
  for (let i = 0; i < 3; i++) {
    const address = faker.address.addressAdvanced({
      constraints: { country: 'United States' },
    })
    console.warn(`  - ${address.street}, ${address.city}, ${address.country}`)
  }

  // 2. WEIGHTED RANDOM SELECTION
  console.warn('\n\n2️⃣ WEIGHTED RANDOM SELECTION')
  console.warn('=====================================')

  // Common first names with realistic distribution
  console.warn('Common first names (weighted by popularity):')
  for (let i = 0; i < 5; i++) {
    const name = faker.person.firstNameAdvanced({
      weighted: WeightedSelections.commonFirstNames,
    })
    console.warn(`  - ${name}`)
  }

  // Age distribution (more people in middle age ranges)
  console.warn('\nAge distribution (weighted):')
  for (let i = 0; i < 5; i++) {
    const age = faker.random.weightedArrayElement(WeightedSelections.ageDistribution.items)
    console.warn(`  - Age ${age}`)
  }

  // Country distribution (more people from populous countries)
  console.warn('\nCountry distribution (weighted by population):')
  for (let i = 0; i < 5; i++) {
    const country = faker.address.countryAdvanced({
      weighted: WeightedSelections.countryDistribution,
    })
    console.warn(`  - ${country}`)
  }

  // 3. DATA VALIDATION
  console.warn('\n\n3️⃣ DATA VALIDATION')
  console.warn('=====================================')

  // Validate names (must be 2-50 characters, letters only)
  console.warn('Validated names:')
  for (let i = 0; i < 3; i++) {
    try {
      const name = faker.person.firstNameAdvanced({
        validation: {
          rules: [
            { validator: ValidationRules.name },
            { validator: ValidationRules.length(2, 50) },
          ],
          strict: true,
        },
      })
      console.warn(`  ✅ Valid name: ${name}`)
    }
    catch (error) {
      console.warn(`  ❌ Validation failed: ${error}`)
    }
  }

  // Validate email addresses
  console.warn('\nValidated email addresses:')
  for (let i = 0; i < 3; i++) {
    const email = faker.internet.email()
    const isValid = ValidationRules.email(email)
    console.warn(`  ${isValid ? '✅' : '❌'} ${email} - ${isValid ? 'Valid' : 'Invalid'}`)
  }

  // 4. REALISTIC DATA RELATIONSHIPS
  console.warn('\n\n4️⃣ REALISTIC DATA RELATIONSHIPS')
  console.warn('=====================================')

  // Generate family with consistent last names and realistic relationships
  console.warn('Family with realistic relationships:')
  const family = faker.person.family({
    constraints: { country: 'United States' },
    size: 4,
  })

  console.warn(`Family: ${family.lastName}`)
  family.members.forEach((member) => {
    console.warn(`  - ${member.fullName} (${member.gender}, ${member.relationship})`)
  })

  // Generate neighborhood addresses (same city, nearby coordinates)
  console.warn('\nNeighborhood addresses (same region):')
  const neighborhood = faker.address.neighborhood({
    constraints: { country: 'United States' },
    size: 3,
  })

  neighborhood.forEach((address, index) => {
    console.warn(`  ${index + 1}. ${address.street}, ${address.city}, ${address.state}`)
    console.warn(`     Coordinates: ${address.latitude.toFixed(4)}, ${address.longitude.toFixed(4)}`)
  })

  // 5. CUSTOM DATA PROVIDERS (Plugin System)
  console.warn('\n\n5️⃣ CUSTOM DATA PROVIDERS')
  console.warn('=====================================')

  // Register a custom data provider for tech companies
  const techCompanyProvider = {
    name: 'Tech Company Generator',
    category: 'company',
    version: '1.0.0',
    generate: () => {
      const prefixes = ['Cloud', 'Data', 'AI', 'Cyber', 'Quantum', 'Neural', 'Blockchain']
      const suffixes = ['Tech', 'Systems', 'Solutions', 'Labs', 'Works', 'Corp']
      const prefix = faker.random.arrayElement(prefixes)
      const suffix = faker.random.arrayElement(suffixes)
      return `${prefix} ${suffix}`
    },
    validate: (value: string) => value.length > 5,
    getWeight: () => 1.0,
  }

  // Note: In a real implementation, you'd register this with the global registry
  console.warn('Custom tech companies:')
  for (let i = 0; i < 5; i++) {
    const company = techCompanyProvider.generate()
    console.warn(`  - ${company}`)
  }

  // 6. COMBINED ADVANCED FEATURES
  console.warn('\n\n6️⃣ COMBINED ADVANCED FEATURES')
  console.warn('=====================================')

  // Generate a realistic user profile with all features combined
  console.warn('Realistic user profiles with combined features:')

  for (let i = 0; i < 3; i++) {
    // Generate profile with constraints, validation, and relationships
    const profile = faker.person.profile({
      constraints: {
        ageRange: { min: 25, max: 45 },
        country: 'United States',
      },
      validation: {
        rules: [{ validator: ValidationRules.name }],
        strict: false, // Don't throw on validation failure
      },
    })

    // Generate address in same country
    const address = faker.address.addressAdvanced({
      constraints: { country: 'United States' },
      relationships: [DataRelationships.phoneByCountry],
    })

    console.warn(`\n  👤 ${profile.fullName}`)
    console.warn(`     Age: ${profile.age}`)
    console.warn(`     Job: ${profile.jobTitle}`)
    console.warn(`     📧 ${faker.internet.email()}`)
    console.warn(`     📍 ${address.street}, ${address.city}, ${address.state}`)
    console.warn(`     📞 ${faker.phone.number()}`)
  }

  // 7. PERFORMANCE COMPARISON
  console.warn('\n\n7️⃣ PERFORMANCE COMPARISON')
  console.warn('=====================================')

  const iterations = 10000

  // Regular generation
  const start1 = Date.now()
  for (let i = 0; i < iterations; i++) {
    faker.person.firstName()
  }
  const end1 = Date.now()
  console.warn(`Regular generation (10k names): ${end1 - start1}ms`)

  // Advanced generation with constraints
  const start2 = Date.now()
  for (let i = 0; i < iterations; i++) {
    faker.person.firstNameAdvanced({
      constraints: { gender: 'male' },
    })
  }
  const end2 = Date.now()
  console.warn(`Advanced generation with constraints (10k names): ${end2 - start2}ms`)

  // Advanced generation with validation
  const start3 = Date.now()
  for (let i = 0; i < iterations; i++) {
    faker.person.firstNameAdvanced({
      validation: {
        rules: [{ validator: ValidationRules.name }],
        strict: false,
      },
    })
  }
  const end3 = Date.now()
  console.warn(`Advanced generation with validation (10k names): ${end3 - start3}ms`)

  console.warn('\n✅ Advanced features demo completed!')
  console.warn('\n📚 Key Benefits:')
  console.warn('  • Conditional generation for specific use cases')
  console.warn('  • Weighted selection for realistic data distribution')
  console.warn('  • Built-in validation for data quality')
  console.warn('  • Realistic relationships between data points')
  console.warn('  • Extensible plugin system for custom providers')
  console.warn('  • Maintains high performance even with advanced features')
}

// Run the demo
demonstrateAdvancedFeatures().catch(console.error)
