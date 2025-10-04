import type { FakerConfig } from './types'
import { loadConfig } from 'bunfig'

export const defaultConfig: FakerConfig = {
  verbose: false,
  locale: 'en',
}

// eslint-disable-next-line antfu/no-top-level-await
export const config: FakerConfig = await loadConfig({
  name: 'faker',
  alias: 'nanofaker',
  defaultConfig,
})
