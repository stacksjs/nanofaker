# Locale Support

nanofaker provides comprehensive locale support with **complete translations** across all data categories. Unlike other faker libraries that have incomplete or partial translations, nanofaker ensures 100% coverage for every supported locale.

## Supported Locales

All 26 locales have full coverage across all 16 data categories:

### English (en)

- **Status**: Full coverage ✓
- **Default locale**: Yes
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'en'
console.log(faker.person.fullName()) // "John Doe"
console.log(faker.address.city()) // "New York"
```

### Spanish (es)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'es'
console.log(faker.person.fullName()) // "María García"
console.log(faker.address.city()) // "Madrid"
```

### French (fr)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'fr'
console.log(faker.person.fullName()) // "Pierre Dupont"
console.log(faker.address.city()) // "Paris"
```

### German (de)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'de'
console.log(faker.person.fullName()) // "Hans Müller"
console.log(faker.address.city()) // "Berlin"
```

### Italian (it)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'it'
console.log(faker.person.fullName()) // "Marco Rossi"
console.log(faker.address.city()) // "Roma"
```

### Portuguese (pt)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'pt'
console.log(faker.person.fullName()) // "João Silva"
console.log(faker.address.city()) // "Lisboa"
```

### Japanese (ja)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'ja'
console.log(faker.person.fullName()) // "田中太郎"
console.log(faker.address.city()) // "東京"
```

### Filipino (tl)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'tl'
console.log(faker.person.fullName()) // "Juan dela Cruz"
console.log(faker.address.city()) // "Manila"
```

### Chinese (zh)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'zh'
console.log(faker.person.fullName()) // "王伟"
console.log(faker.address.city()) // "北京"
```

### Dutch (nl)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'nl'
console.log(faker.person.fullName()) // "Daan de Jong"
console.log(faker.address.city()) // "Amsterdam"
```

### Korean (ko)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'ko'
console.log(faker.person.fullName()) // "김민준"
console.log(faker.address.city()) // "서울"
```

### Norwegian (no)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'no'
console.log(faker.person.fullName()) // "Emma Hansen"
console.log(faker.address.city()) // "Oslo"
```

### Swedish (sv)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'sv'
console.log(faker.person.fullName()) // "Alice Andersson"
console.log(faker.address.city()) // "Stockholm"
```

### Danish (da)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'da'
console.log(faker.person.fullName()) // "Emma Nielsen"
console.log(faker.address.city()) // "København"
```

### Ukrainian (uk)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'uk'
console.log(faker.person.fullName()) // "Олександр Шевченко"
console.log(faker.address.city()) // "Київ"
```

### Hindi (hi)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'hi'
console.log(faker.person.fullName()) // "राज शर्मा"
console.log(faker.address.city()) // "मुंबई"
```

### Finnish (fi)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'fi'
console.log(faker.person.fullName()) // "Juhani Virtanen"
console.log(faker.address.city()) // "Helsinki"
```

### Turkish (tr)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'tr'
console.log(faker.person.fullName()) // "Mehmet Yılmaz"
console.log(faker.address.city()) // "İstanbul"
```

### Polish (pl)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'pl'
console.log(faker.person.fullName()) // "Jan Kowalski"
console.log(faker.address.city()) // "Warszawa"
```

### Czech (cs)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'cs'
console.log(faker.person.fullName()) // "Jan Novák"
console.log(faker.address.city()) // "Praha"
```

### Esperanto (eo)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'eo'
console.log(faker.person.fullName()) // "Johano Zamenhof"
console.log(faker.address.city()) // "Varsovio"
```

### Persian/Farsi (fa)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'fa'
console.log(faker.person.fullName()) // "محمد احمدی"
console.log(faker.address.city()) // "تهران"
```

### Hebrew (he)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'he'
console.log(faker.person.fullName()) // "דוד כהן"
console.log(faker.address.city()) // "תל אביב"
```

### Arabic (ar)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'ar'
console.log(faker.person.fullName()) // "أحمد محمد"
console.log(faker.address.city()) // "القاهرة"
```

### Afrikaans (af)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'af'
console.log(faker.person.fullName()) // "Pieter van der Merwe"
console.log(faker.address.city()) // "Kaapstad"
```

### Azerbaijani (az)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'az'
console.log(faker.person.fullName()) // "Əli Məmmədov"
console.log(faker.address.city()) // "Bakı"
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
