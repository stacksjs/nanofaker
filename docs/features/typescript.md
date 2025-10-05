# TypeScript Support

ts-mocker is written in TypeScript from the ground up, providing excellent type safety and IDE support out of the box.

## Fully Typed API

Every method in ts-mocker is fully typed:

```ts
import { faker } from 'ts-mocker'

// TypeScript knows the return types
const name: string = faker.person.fullName()
const email: string = faker.internet.email()
const city: string = faker.address.city()

// Autocomplete works perfectly
// faker.person. // IDE shows: firstName, lastName, fullName, gender, jobTitle, etc.
```

## Type Definitions

ts-mocker exports comprehensive type definitions:

```ts
import type {
  AddressDefinition,
  CompanyDefinition,
  Faker,
  LocaleDefinition,
  PersonDefinition,
  // ... all other types
} from 'ts-mocker'
```

## Locale Type Safety

Locales are strongly typed:

```ts
import { faker } from 'ts-mocker'

// Type-safe locale setting
faker.locale = 'en' // ✓ Valid
faker.locale = 'es' // ✓ Valid
faker.locale = 'invalid' // ✗ TypeScript error

// Type-safe locale creation
const enFaker = faker.locale('en') // ✓ Valid
const esFaker = faker.locale('es') // ✓ Valid
const badFaker = faker.locale('xx') // ✗ TypeScript error
```

## Custom Type Extensions

You can extend ts-mocker types for your specific needs:

```ts
import type { Faker } from 'ts-mocker'

// Extend with your custom types
interface ExtendedFaker extends Faker {
  custom: {
    myMethod: () => string
  }
}

// Use in your application
const customFaker = faker as ExtendedFaker
```

## Generic Types

Use generics for type-safe data generation:

```ts
import { faker } from 'ts-mocker'

interface User {
  name: string
  email: string
  city: string
}

function generateUser(): User {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.address.city(),
  }
}

// TypeScript ensures all User fields are populated
const user = generateUser()
```

## Type Inference

ts-mocker leverages TypeScript's type inference:

```ts
import { faker } from 'ts-mocker'

// TypeScript infers the type automatically
const userData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  age: Math.floor(Math.random() * 80) + 18,
}

// Type is inferred as:
// {
//   firstName: string
//   lastName: string
//   age: number
// }
```

## Locale Definition Types

Create custom locale definitions with full type safety:

```ts
import type { LocaleDefinition } from 'ts-mocker'

const customLocale: LocaleDefinition = {
  title: 'Custom',
  person: {
    firstName: ['Alice', 'Bob'],
    lastName: ['Smith', 'Jones'],
    gender: ['Male', 'Female'],
    jobTitle: ['Developer', 'Designer'],
    prefix: ['Mr.', 'Mrs.'],
    suffix: ['Jr.', 'Sr.'],
  },
  // ... TypeScript ensures all required fields are present
}
```

## Strict Null Checks

ts-mocker works perfectly with strict null checks:

```json
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true
  }
}
```

```ts
import { faker } from 'ts-mocker'

// All methods return non-nullable strings
const name: string = faker.person.fullName() // ✓ No null/undefined
const email: string = faker.internet.email() // ✓ No null/undefined
```

## IDE Support

### Visual Studio Code

Full IntelliSense support:

- Method autocomplete
- Parameter hints
- Type information on hover
- Go to definition
- Find all references

### WebStorm/IntelliJ IDEA

Complete TypeScript integration:

- Smart autocomplete
- Type checking
- Refactoring support
- Quick documentation

### Other Editors

Any editor with TypeScript support will work:

- Sublime Text with LSP
- Vim/Neovim with coc.nvim
- Emacs with tide

## Type-Safe Patterns

### Factory Pattern

```ts
import { faker } from 'ts-mocker'

interface Product {
  id: string
  name: string
  price: number
  category: string
}

class ProductFactory {
  static create(): Product {
    return {
      id: Math.random().toString(36).substr(2, 9),
      name: faker.commerce.product(),
      price: Math.random() * 1000,
      category: faker.commerce.department(),
    }
  }

  static createMany(count: number): Product[] {
    return Array.from({ length: count }, () => this.create())
  }
}

// Type-safe usage
const products: Product[] = ProductFactory.createMany(10)
```

### Builder Pattern

```ts
import { faker } from 'ts-mocker'

class UserBuilder {
  private user: Partial<User> = {}

  withName(name?: string): this {
    this.user.name = name ?? faker.person.fullName()
    return this
  }

  withEmail(email?: string): this {
    this.user.email = email ?? faker.internet.email()
    return this
  }

  build(): User {
    return this.user as User
  }
}

// Type-safe building
const user = new UserBuilder()
  .withName()
  .withEmail()
  .build()
```

## Type Guards

Use type guards with ts-mocker:

```ts
import { faker } from 'ts-mocker'

type SupportedLocale = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ja' | 'tl' | 'zh'

function isSupportedLocale(locale: string): locale is SupportedLocale {
  return ['en', 'es', 'fr', 'de', 'it', 'pt', 'ja', 'tl', 'zh'].includes(locale)
}

function setLocale(locale: string) {
  if (isSupportedLocale(locale)) {
    faker.locale = locale // ✓ Type-safe
  }
}
```

## Best Practices

### 1. Use Explicit Types

```ts
// Good - Explicit type
const name: string = faker.person.fullName()

// Also good - Let TypeScript infer
const email = faker.internet.email()
```

### 2. Create Interfaces

```ts
interface TestData {
  user: {
    name: string
    email: string
  }
  address: {
    city: string
    country: string
  }
}

function generateTestData(): TestData {
  return {
    user: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
    },
    address: {
      city: faker.address.city(),
      country: faker.address.country(),
    },
  }
}
```

### 3. Use Const Assertions

```ts
const locales = ['en', 'es', 'fr'] as const
type Locale = typeof locales[number] // 'en' | 'es' | 'fr'

function getFaker(locale: Locale) {
  return faker.locale(locale)
}
```

## Zero Configuration

ts-mocker works with TypeScript without any configuration:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true
  }
}
```

ts-mocker's TypeScript support ensures type safety, excellent IDE experience, and catches errors at compile time rather than runtime.
