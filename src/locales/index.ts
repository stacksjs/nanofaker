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
import { nl } from './nl'
import { ko } from './ko'
import { no } from './no'
import { sv } from './sv'
import { da } from './da'
import { uk } from './uk'
import { hi } from './hi'

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
  nl,
  ko,
  no,
  sv,
  da,
  uk,
  hi,
}

export { en, es, fr, de, it, pt, ja, tl, zh, nl, ko, no, sv, da, uk, hi }
