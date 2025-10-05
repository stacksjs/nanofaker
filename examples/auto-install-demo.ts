/* eslint-disable no-console */
/**
 * Demo: Auto-installing locale packages
 *
 * This example demonstrates how ts-mocker can automatically install
 * missing locale packages when autoInstallLocales is enabled.
 */

import { Faker } from '../packages/core/src/index'

// Method 1: Enable via config file (faker.config.ts)
// See faker.config.example.ts for configuration options

// Method 2: Enable programmatically
async function demoAutoInstall() {
  console.log('🚀 Demo: Auto-installing locale packages\n')

  // First, let's try without auto-install (will throw error if not installed)
  console.log('Test 1: Without auto-install (should fail if locale not installed)')
  try {
    const faker1 = await Faker.create({ locale: 'de', autoInstallLocales: false })
    console.log('✓ German locale loaded:', faker1.person.firstName())
  }
  catch (error) {
    console.log('✗ Error:', error instanceof Error ? error.message.split('\n')[0] : error)
  }

  console.log('\n---\n')

  // Now with auto-install enabled (will install if needed)
  console.log('Test 2: With auto-install enabled')
  try {
    const faker2 = await Faker.create({ locale: 'es', autoInstallLocales: true })
    console.log('✓ Spanish locale loaded:', faker2.person.firstName())
    console.log('✓ Email:', faker2.internet.email())
  }
  catch (error) {
    console.log('✗ Error:', error instanceof Error ? error.message : error)
  }
}

// Run the demo
demoAutoInstall().catch(console.error)
