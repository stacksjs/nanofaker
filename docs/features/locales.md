# Locale Support

nanofaker provides comprehensive locale support with **complete translations** across all data categories. Unlike other faker libraries that have incomplete or partial translations, nanofaker ensures 100% coverage for every supported locale.

## Supported Locales

All 26 locales have full coverage across all 16 data categories:

### Afrikaans (af)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'af'
console.log(faker.person.fullName()) // "Pieter van der Merwe"
console.log(faker.address.city()) // "Kaapstad"
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

### Azerbaijani (az)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'az'
console.log(faker.person.fullName()) // "Əli Məmmədov"
console.log(faker.address.city()) // "Bakı"
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

### Danish (da)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'da'
console.log(faker.person.fullName()) // "Emma Nielsen"
console.log(faker.address.city()) // "København"
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

### Esperanto (eo)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'eo'
console.log(faker.person.fullName()) // "Johano Zamenhof"
console.log(faker.address.city()) // "Varsovio"
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

### Persian/Farsi (fa)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'fa'
console.log(faker.person.fullName()) // "محمد احمدی"
console.log(faker.address.city()) // "تهران"
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

### French (fr)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'fr'
console.log(faker.person.fullName()) // "Pierre Dupont"
console.log(faker.address.city()) // "Paris"
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

### Hindi (hi)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'hi'
console.log(faker.person.fullName()) // "राज शर्मा"
console.log(faker.address.city()) // "मुंबई"
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

### Japanese (ja)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'ja'
console.log(faker.person.fullName()) // "田中太郎"
console.log(faker.address.city()) // "東京"
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

### Dutch (nl)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'nl'
console.log(faker.person.fullName()) // "Daan de Jong"
console.log(faker.address.city()) // "Amsterdam"
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

### Polish (pl)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'pl'
console.log(faker.person.fullName()) // "Jan Kowalski"
console.log(faker.address.city()) // "Warszawa"
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

### Swedish (sv)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'sv'
console.log(faker.person.fullName()) // "Alice Andersson"
console.log(faker.address.city()) // "Stockholm"
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

### Turkish (tr)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'tr'
console.log(faker.person.fullName()) // "Mehmet Yılmaz"
console.log(faker.address.city()) // "İstanbul"
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

### Chinese (zh)

- **Status**: Full coverage ✓
- **Categories**: All 16 categories fully translated

```ts
import { faker } from 'nanofaker'

faker.locale = 'zh'
console.log(faker.person.fullName()) // "王伟"
console.log(faker.address.city()) // "北京"
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
