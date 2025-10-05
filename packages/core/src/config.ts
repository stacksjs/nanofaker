import type { MockConfig } from './types'
import { loadConfig } from 'bunfig'

export const defaultConfig: MockConfig = {
  verbose: false,
  locale: 'en',
  autoInstallLocales: false,
}

// eslint-disable-next-line antfu/no-top-level-await
export const config: MockConfig = await loadConfig({
  name: 'mock',
  alias: 'faker',
  defaultConfig,
})
