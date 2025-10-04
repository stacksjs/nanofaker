# Locale Support

nanofaker provides comprehensive locale support with **complete translations** across all data categories. Unlike other faker libraries that have incomplete or partial translations, nanofaker ensures 100% coverage for every supported locale.

## Supported Locales

All 9 locales have full coverage across all 16 data categories:

### English (en)
- **Status**: Full coverage ✓
- **Default locale**: Yes
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'en'
console.log(faker.person.fullName()) // "John Doe"
console.log(faker.address.city())    // "New York"
```

### Spanish (es)
- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'es'
console.log(faker.person.fullName()) // "María García"
console.log(faker.address.city())    // "Madrid"
```

### French (fr)
- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'fr'
console.log(faker.person.fullName()) // "Pierre Dupont"
console.log(faker.address.city())    // "Paris"
```

### German (de)
- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'de'
console.log(faker.person.fullName()) // "Hans Müller"
console.log(faker.address.city())    // "Berlin"
```

### Italian (it)
- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'it'
console.log(faker.person.fullName()) // "Marco Rossi"
console.log(faker.address.city())    // "Roma"
```

### Portuguese (pt)
- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'pt'
console.log(faker.person.fullName()) // "João Silva"
console.log(faker.address.city())    // "Lisboa"
```

### Japanese (ja)
- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'ja'
console.log(faker.person.fullName()) // "田中太郎"
console.log(faker.address.city())    // "東京"
```

### Filipino (tl)
- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'tl'
console.log(faker.person.fullName()) // "Juan dela Cruz"
console.log(faker.address.city())    // "Manila"
```

### Chinese (zh)
- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'zh'
console.log(faker.person.fullName()) // "王伟"
console.log(faker.address.city())    // "北京"
```

## Multi-Locale Applications

For applications that need to support multiple locales simultaneously, create separate instances:

```ts
import { faker } from 'nanofaker'

const enFaker = faker.locale('en')
const esFaker = faker.locale('es')
const jaFaker = faker.locale('ja')

// Generate test data in multiple languages
const users = [
  { name: enFaker.person.fullName(), locale: 'en' },
  { name: esFaker.person.fullName(), locale: 'es' },
  { name: jaFaker.person.fullName(), locale: 'ja' },
]
```

## Locale Coverage Comparison

Unlike other faker libraries, nanofaker provides **complete** translations:

| Category | nanofaker | Other Libraries |
|----------|-----------|----------------|
| Person | ✓ All locales | Partial |
| Address | ✓ All locales | Partial |
| Company | ✓ All locales | Partial |
| Internet | ✓ All locales | Partial |
| Phone | ✓ All locales | Partial |
| Food | ✓ All locales | Limited |
| Animals | ✓ All locales | Limited |
| Sports | ✓ All locales | Limited |
| Music | ✓ All locales | Limited |
| Commerce | ✓ All locales | Limited |
| Books | ✓ All locales | Limited |
| Vehicles | ✓ All locales | Limited |
| Words | ✓ All locales | Limited |
| Hacker/Tech | ✓ All locales | Limited |
| System | ✓ All locales | Limited |
| Science | ✓ All locales | Limited |

## Why Complete Coverage Matters

Having complete translations ensures:

1. **Consistency** - All data categories work in all locales
2. **No Fallbacks** - No unexpected English words in non-English data
3. **Cultural Accuracy** - Data that makes sense in each locale
4. **Professional Quality** - Test data that looks authentic
