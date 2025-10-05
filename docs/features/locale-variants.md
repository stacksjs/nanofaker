# Locale Variants

Nanofaker supports **locale variants** to provide region-specific data for the same language. For example, English has different formats and data for the United States, United Kingdom, Canada, and Australia.

## Supported Locale Variants

Locale variants use the format `{language}_{REGION}` or `{language}-{REGION}`:

### English Variants

- `en_US` / `en-US` - English (United States)
- `en_GB` / `en-GB` - English (United Kingdom)
- `en_CA` / `en-CA` - English (Canada)
- `en_AU` / `en-AU` - English (Australia)
- `en_NG` / `en-NG` - English (Nigeria)
- `en_ZA` / `en-ZA` - English (South Africa)
- `en_IN` / `en-IN` - English (India)
- `en_GH` / `en-GH` - English (Ghana)
- `en_HK` / `en-HK` - English (Hong Kong)
- `en_IE` / `en-IE` - English (Ireland)

### Spanish Variants

- `es_ES` / `es-ES` - Spanish (Spain)
- `es_MX` / `es-MX` - Spanish (Mexico)

### German Variants

- `de_DE` / `de-DE` - German (Germany)
- `de_AT` / `de-AT` - German (Austria)
- `de_CH` / `de-CH` - German (Switzerland)

### Chinese Variants

- `zh_CN` / `zh-CN` - Chinese (Simplified, China)
- `zh_TW` / `zh-TW` - Chinese (Traditional, Taiwan)

### Portuguese Variants

- `pt_BR` / `pt-BR` - Portuguese (Brazil)
- `pt_PT` / `pt-PT` - Portuguese (Portugal)
- `pt_MZ` / `pt-MZ` - Portuguese (Mozambique)

### French Variants

- `fr_FR` / `fr-FR` - French (France)
- `fr_BE` / `fr-BE` - French (Belgium)
- `fr_CA` / `fr-CA` - French (Canada)
- `fr_CH` / `fr-CH` - French (Switzerland)
- `fr_LU` / `fr-LU` - French (Luxembourg)
- `fr_SN` / `fr-SN` - French (Senegal)

### Other Variants

- `zu_ZA` / `zu-ZA` - Zulu (South Africa)
- `af_ZA` / `af-ZA` - Afrikaans (South Africa)

## Usage

```typescript
import { Faker } from 'nanofaker'

// US English
const usFaker = await Faker.create({ locale: 'en_US' })
console.log(usFaker.address.city())     // "New York"
console.log(usFaker.address.state())    // "California"
console.log(usFaker.address.zipCode())  // "90210"

// UK English
const ukFaker = await Faker.create({ locale: 'en_GB' })
console.log(ukFaker.address.city())     // "London"
console.log(ukFaker.address.state())    // "England"
console.log(ukFaker.address.zipCode())  // "SW1A 1AA"

// Mexican Spanish
const mxFaker = await Faker.create({ locale: 'es_MX' })
console.log(mxFaker.address.city())       // "Ciudad de México"
console.log(mxFaker.person.firstName())   // "Miguel"
```

## Separator Flexibility

Both underscore and hyphen separators are supported:

```typescript
const faker1 = await Faker.create({ locale: 'en_US' })  // ✅ Underscore
const faker2 = await Faker.create({ locale: 'en-US' })  // ✅ Hyphen
// Both create the same locale
```

## Fallback System

Locale variants automatically fall back to the base locale when needed:

1. **Try variant first**: `en_US` → load `@nanofaker/locale-en-us`
2. **Load base locale**: `en` → load `@nanofaker/locale-en`
3. **Merge**: Variant data overrides base data

This means:

- Variant locales only need to define region-specific data
- All other data is inherited from the base locale
- Smaller package sizes for variants

### Example Fallback

```typescript
// en_US variant only defines:
// - US cities, states, zip codes
// - US phone formats
//
// Everything else (person names, etc.) comes from base 'en' locale

const faker = await Faker.create({ locale: 'en_US' })
faker.person.firstName()  // From base 'en' locale
faker.address.city()      // From 'en_US' variant
```

## Installation

### Install Specific Variants

```bash
# Install a specific variant
bun add @nanofaker/locale-en-us

# Install multiple variants
bun add @nanofaker/locale-{en-us,en-gb,es-mx}
```

### Auto-Install

Enable auto-install to automatically download variants when needed:

```typescript
// faker.config.ts
export default {
  autoInstallLocales: true
}
```

Then just use any variant:

```typescript
const faker = await Faker.create({ locale: 'en_GB' })
// 🔍 Locale 'en_GB' not found. Auto-installing @nanofaker/locale-en-gb...
// ✓ Successfully installed @nanofaker/locale-en-gb
```

## Creating Custom Variants

You can create your own locale variants by extending base locales:

```typescript
// packages/en-ca/src/en_CA.ts
import type { LocaleDefinition } from 'nanofaker'

export const en_CA: Partial<LocaleDefinition> = {
  title: 'English (Canada)',

  address: {
    city: ['Toronto', 'Montreal', 'Vancouver', /* ... */],
    state: ['Ontario', 'Quebec', 'British Columbia', /* ... */],
    country: ['Canada'],
    zipCode: ['?#? #?#'],  // Canadian postal code format
  },

  phone: {
    formats: [
      '###-###-####',
      '(###) ###-####',
      '+1-###-###-####',
    ],
  },
}
```

Key points:

- Use `Partial<LocaleDefinition>` to only override specific fields
- The variant automatically inherits from the base locale
- Only define region-specific data

## Package Naming

Locale variant packages follow the naming convention:

- Locale code: `en_US` or `en-US` (both work)
- Package name: `@nanofaker/locale-en-us` (lowercase, hyphen-separated)

## Benefits

✅ **Accurate data**: Region-specific cities, states, phone formats, zip codes
✅ **Smaller packages**: Variants only include differences from base locales
✅ **Automatic fallback**: Missing data falls back to base locale
✅ **Type-safe**: Full TypeScript support with autocomplete
✅ **Flexible**: Use underscore or hyphen separators

## Examples

### Comparing Variants

```typescript
const us = await Faker.create({ locale: 'en_US', seed: 12345 })
const uk = await Faker.create({ locale: 'en_GB', seed: 12345 })
const mx = await Faker.create({ locale: 'es_MX', seed: 12345 })

console.log('US:', us.address.city(), us.phone.number())
// US: Phoenix (555) 123-4567

console.log('UK:', uk.address.city(), uk.phone.number())
// UK: Birmingham 01234 567890

console.log('MX:', mx.address.city(), mx.phone.number())
// MX: Guadalajara +52 33 1234 5678
```

### Dynamic Locale Switching

```typescript
const faker = await Faker.create({ locale: 'en_US' })
console.log(faker.address.city())  // "Chicago"

await faker.setLocale('en_GB')
console.log(faker.address.city())  // "London"

await faker.setLocale('es_MX')
console.log(faker.address.city())  // "Monterrey"
```

## See Also

- [Auto-Install Feature](./auto-install.md)
- [Locale System](./locales.md)
- [Creating Custom Locales](../advanced/extending.md)
