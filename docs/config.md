# Configuration

nanofaker is designed to work out of the box with minimal configuration. However, you can customize its behavior to suit your needs.

## Setting Default Locale

You can set a default locale that will be used for all faker operations:

```ts
import { faker } from 'nanofaker'

// Set default locale to Spanish
faker.locale = 'es'

// Now all operations will use Spanish locale
const name = faker.person.fullName() // "María García"
const city = faker.address.city()    // "Madrid"
```

## Creating Locale-Specific Instances

For applications that need to generate data in multiple locales simultaneously, create separate instances:

```ts
import { faker } from 'nanofaker'

const enFaker = faker.locale('en')
const esFaker = faker.locale('es')
const jaFaker = faker.locale('ja')

// Use different locales in the same application
const englishName = enFaker.person.fullName()  // "John Doe"
const spanishName = esFaker.person.fullName()  // "María García"
const japaneseName = jaFaker.person.fullName() // "田中太郎"
```

## Using with TypeScript

nanofaker is written in TypeScript and provides full type definitions. You can import types for better IDE support:

```ts
import { faker } from 'nanofaker'
import type { LocaleDefinition, Faker } from 'nanofaker'

const customFaker: Faker = faker.locale('en')
```

## Available Locales

nanofaker supports the following locales with complete translations across all categories:

- `en` - English
- `es` - Spanish
- `fr` - French
- `de` - German
- `it` - Italian
- `pt` - Portuguese
- `ja` - Japanese
- `tl` - Filipino
- `zh` - Chinese
- `nl` - Dutch
- `ko` - Korean
- `no` - Norwegian
- `sv` - Swedish
- `da` - Danish
- `uk` - Ukrainian
- `hi` - Hindi

All locales have full coverage across all 16 data categories.

## Performance Considerations

nanofaker is designed for performance:

- **Lightweight** - Minimal dependencies and small bundle size
- **Fast** - Optimized for speed with efficient random selection
- **Tree-shakeable** - Only import what you need

To optimize bundle size, you can import only the locales you need:

```ts
import { faker } from 'nanofaker'
import { es } from 'nanofaker/locales'

// Use only Spanish locale
const spanishFaker = faker.locale('es')
```
