import type { FakerConfig } from './packages/core/src/types'

const config: FakerConfig = {
  // Automatically install missing locale packages when needed
  // When enabled, nanofaker will automatically run `bun add @nanofaker/locale-{code}`
  // when you try to use a locale that isn't installed
  autoInstallLocales: true,

  // Default locale to use
  locale: 'en',

  // Enable verbose logging
  verbose: false,

  // Optional: Set a global seed for reproducible results
  // seed: 12345,
}

export default config
