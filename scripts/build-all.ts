#!/usr/bin/env bun

import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

const packagesDir = join(import.meta.dir, '../packages')
const packages = [
  'core',
  // Base locales
  'cs',
  'da',
  'de',
  'en',
  'es',
  'fi',
  'fr',
  'hi',
  'it',
  'ja',
  'ko',
  'nl',
  'no',
  'pl',
  'pt',
  'sv',
  'tl',
  'tr',
  'uk',
  'zh',
  'zu',
  'eo',
  'fa',
  'he',
  'ar',
  'af',
  'az',
  // Locale variants
  'en-us',
  'en-gb',
  'en-ca',
  'en-ng',
  'en-za',
  'en-in',
  'en-gh',
  'en-hk',
  'en-ie',
  'es-mx',
  'pt-mz',
  'de-at',
  'de-ch',
  'zh-cn',
  'zh-tw',
  'zu-za',
  'fr-be',
  'fr-ca',
  'fr-ch',
  'fr-lu',
  'fr-sn',
  'af-za',
]

for (const pkg of packages) {
  const pkgDir = join(packagesDir, pkg)
  const buildFile = join(pkgDir, 'build.ts')

  if (!existsSync(buildFile)) {
    console.log(`⚠️  No build.ts found for ${pkg}`)
    continue
  }

  console.log(`🔨 Building ${pkg}...`)

  const result = spawnSync('bun', ['--bun', 'build.ts'], {
    cwd: pkgDir,
    stdio: pkg === 'core' ? 'inherit' : 'pipe',
  })

  if (result.status !== 0) {
    console.error(`❌ Failed to build ${pkg}`)
    process.exit(1)
  }

  console.log(`✓ Built ${pkg}`)
}

console.log('\n✨ All packages built successfully!')
