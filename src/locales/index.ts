import type { LocaleDefinition } from '../types'
import { en } from './en'
import { es } from './es'
import { fr } from './fr'
import { de } from './de'
import { it } from './it'
import { pt } from './pt'
import { ja } from './ja'
import { tl } from './tl'
import { zh } from './zh'

export const locales: Record<string, LocaleDefinition> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
  ja,
  tl,
  zh,
}

export { en, es, fr, de, it, pt, ja, tl, zh }
