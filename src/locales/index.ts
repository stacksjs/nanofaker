import type { LocaleDefinition } from '../types'
import { en } from './en'
import { es } from './es'
import { fr } from './fr'

export const locales: Record<string, LocaleDefinition> = {
  en,
  es,
  fr,
}

export { en, es, fr }
