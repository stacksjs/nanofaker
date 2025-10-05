import { describe, expect, it } from 'bun:test'
import { detectPackageManager, installPackage } from '../packages/core/src/utils/package-manager'

describe('Auto-Install Utilities', () => {
  describe('detectPackageManager', () => {
    it('should detect a package manager', () => {
      const pm = detectPackageManager()
      expect(['bun', 'npm', 'yarn', 'pnpm']).toContain(pm)
    })

    it('should default to bun when in ts-mocker project', () => {
      // Our project uses bun, so it should detect it
      const pm = detectPackageManager()
      expect(pm).toBe('bun')
    })
  })

  describe('installPackage', () => {
    it('should have a function to install packages', () => {
      expect(typeof installPackage).toBe('function')
    })

    // Note: We don't actually test installation here to avoid
    // modifying node_modules during tests
  })
})

describe('Auto-Install Config', () => {
  it('should have autoInstallLocales in MockConfig type', async () => {
    const { defaultConfig } = await import('../packages/core/src/config')
    expect(defaultConfig).toHaveProperty('autoInstallLocales')
    expect(defaultConfig.autoInstallLocales).toBe(false)
  })

  it('should accept autoInstallLocales in Faker options', async () => {
    const { Faker } = await import('../packages/core/src/faker')
    const faker = new Faker({ autoInstallLocales: true })
    expect(faker).toBeDefined()
  })
})
