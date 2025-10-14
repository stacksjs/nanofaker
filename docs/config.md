# Configuration

ts-mocker is designed to work out of the box with minimal configuration. However, you can customize its behavior to suit your needs.

## Setting Default Locale

You can set a default locale that will be used for all faker operations:

```ts
import { faker } from 'ts-mocker'

// Set default locale to Spanish
faker.locale = 'es'

// Now all operations will use Spanish locale
const name = faker.person.fullName() // "María García"
const city = faker.address.city() // "Madrid"
```

## Creating Locale-Specific Instances

For applications that need to generate data in multiple locales simultaneously, create separate instances:

```ts
import { faker } from 'ts-mocker'

const enFaker = faker.locale('en')
const esFaker = faker.locale('es')
const jaFaker = faker.locale('ja')

// Use different locales in the same application
const englishName = enFaker.person.fullName() // "John Doe"
const spanishName = esFaker.person.fullName() // "María García"
const japaneseName = jaFaker.person.fullName() // "田中太郎"
```

## Using with TypeScript

ts-mocker is written in TypeScript and provides full type definitions. You can import types for better IDE support:

```ts
import type { Faker, LocaleDefinition } from 'ts-mocker'
import { faker } from 'ts-mocker'

const customFaker: Faker = faker.locale('en')
```

## Available Locales

ts-mocker supports 28 locales with complete translations across all categories:

- `af` - Afrikaans
- `ar` - Arabic
- `az` - Azerbaijani
- `cs` - Czech
- `da` - Danish
- `de` - German
- `en` - English
- `eo` - Esperanto
- `es` - Spanish
- `fa` - Persian/Farsi
- `fi` - Finnish
- `fr` - French
- `he` - Hebrew
- `hi` - Hindi
- `it` - Italian
- `ja` - Japanese
- `ko` - Korean
- `nl` - Dutch
- `no` - Norwegian
- `pl` - Polish
- `pt` - Portuguese
- `sv` - Swedish
- `tl` - Filipino
- `tr` - Turkish
- `uk` - Ukrainian
- `zh-cn` - Chinese (Simplified)
- `zh-tw` - Chinese (Traditional)
- `zu` - Zulu

All locales have full coverage across all 16 data categories.

## Performance Considerations

ts-mocker is designed for performance:

- **Lightweight** - Minimal dependencies and small bundle size
- **Fast** - Optimized for speed with efficient random selection
- **Tree-shakeable** - Only import what you need

To optimize bundle size, you can import only the locales you need:

```ts
import { faker } from 'ts-mocker'
import { es } from 'ts-mocker/locales'

// Use only Spanish locale
const spanishFaker = faker.locale('es')
```
