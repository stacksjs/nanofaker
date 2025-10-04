# Helpers

The helpers module provides utility functions for working with random data, arrays, and strings.

## Array Helpers

### arrayElement

Pick a random element from an array.

```ts
import { faker } from 'nanofaker'

const colors = ['red', 'blue', 'green', 'yellow']
const color = faker.helpers.arrayElement(colors)
// "blue"
```

### randomElement

Laravel-compatible alias for `arrayElement`.

```ts
const items = ['apple', 'banana', 'orange']
const fruit = faker.helpers.randomElement(items)
// "banana"
```

### arrayElements

Pick multiple random elements from an array.

```ts
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const selected = faker.helpers.arrayElements(numbers, 3)
// [4, 7, 2]

// Without count parameter, returns random number of elements
const random = faker.helpers.arrayElements(numbers)
// [1, 5, 9, 3]
```

### shuffle

Shuffle an array randomly.

```ts
const deck = ['A', 'K', 'Q', 'J', '10']
const shuffled = faker.helpers.shuffle(deck)
// ['Q', '10', 'A', 'J', 'K']
```

**Note**: Returns a new array, doesn't modify the original.

## String Helpers

### numerify

Replace `#` symbols with random digits (0-9).

```ts
faker.helpers.numerify('###-###')
// "123-456"

faker.helpers.numerify('ID-######')
// "ID-847239"
```

### lexify

Replace `?` symbols with random lowercase letters (a-z).

```ts
faker.helpers.lexify('???')
// "abc"

faker.helpers.lexify('User-????')
// "User-xkqm"
```

### bothify

Replace `#` with digits and `?` with letters.

```ts
faker.helpers.bothify('##??##')
// "12ab34"

faker.helpers.bothify('???-###')
// "xyz-789"

faker.helpers.bothify('Product-??##??')
// "Product-ab12cd"
```

### replaceSymbols

Replace common symbols with random characters.

```ts
faker.helpers.replaceSymbols('Hello ###!')
// "Hello 847!"

faker.helpers.replaceSymbols('Code: ??##')
// "Code: xy42"
```

### replaceCreditCardSymbols

Generate credit card-like numbers.

```ts
faker.helpers.replaceCreditCardSymbols()
// "1234-5678-9012-3456"

faker.helpers.replaceCreditCardSymbols('#### #### #### ####')
// "9876 5432 1098 7654"

// Custom symbol
faker.helpers.replaceCreditCardSymbols('XXXX-XXXX-XXXX-XXXX', 'X')
// "4829-7361-0482-9173"
```

### regexify

Generate strings based on simple regex patterns.

```ts
faker.helpers.regexify('[A-Z][A-Z][A-Z]')
// "KQM"

faker.helpers.regexify('[a-z][a-z][0-9][0-9]')
// "xy42"
```

**Note**: Supports basic patterns only: `[A-Z]`, `[a-z]`, `[0-9]`

## Boolean & Conditional

### boolean

Generate a random boolean value.

```ts
faker.helpers.boolean()
// true or false (50/50 chance)

// With custom probability (0.0 to 1.0)
faker.helpers.boolean(0.8)
// true (80% of the time)

faker.helpers.boolean(0.2)
// false (80% of the time)
```

### maybe

Conditionally return a value or `undefined`.

```ts
faker.helpers.maybe(() => 'value')
// "value" or undefined (50/50 chance)

// With custom probability
faker.helpers.maybe(() => faker.person.firstName(), 0.8)
// "John" (80% of the time) or undefined (20% of the time)
```

**Use case**: Optional fields in test data

```ts
interface User {
  name: string
  nickname?: string
  bio?: string
}

const user: User = {
  name: faker.person.fullName(),
  nickname: faker.helpers.maybe(() => faker.person.firstName(), 0.3),
  bio: faker.helpers.maybe(() => faker.lorem.paragraph(), 0.5),
}
```

## Multiple & Unique

### multiple

Generate multiple items using a callback function.

```ts
// Generate 5 names
const names = faker.helpers.multiple(() => faker.person.fullName(), 5)
// ["John Doe", "Jane Smith", "Bob Johnson", "Alice Brown", "Charlie Wilson"]

// Generate 3 emails
const emails = faker.helpers.multiple(() => faker.internet.email(), 3)
// ["john@example.com", "jane@example.com", "bob@example.com"]

// Default count is 3
const cities = faker.helpers.multiple(() => faker.address.city())
// ["New York", "London", "Tokyo"]
```

### unique

Generate a unique value (won't repeat recently generated values).

```ts
// Generate a unique first name
const uniqueName = faker.helpers.unique(() => faker.person.firstName())

// Generate unique email
const uniqueEmail = faker.helpers.unique(() => faker.internet.email())
```

**Generating unique arrays**:

```ts
// Generate 10 unique names
const uniqueNames = Array.from({ length: 10 }, () =>
  faker.helpers.unique(() => faker.person.firstName())
)

// Generate 5 unique emails
const uniqueEmails = Array.from({ length: 5 }, () =>
  faker.helpers.unique(() => faker.internet.email())
)
```

**Note**: The unique helper tracks values and retries up to 50 times. If it can't find a unique value, it throws an error.

```ts
// This might fail if the source data is too small
try {
  const names = Array.from({ length: 100 }, () =>
    faker.helpers.unique(() => faker.helpers.arrayElement(['A', 'B', 'C']))
  )
} catch (error) {
  console.error('Failed to generate unique values')
}
```

## Object Helpers

### objectKey

Get a random key from an object.

```ts
const config = {
  development: 'dev',
  staging: 'stage',
  production: 'prod',
}

const randomEnv = faker.helpers.objectKey(config)
// "development" or "staging" or "production"
```

### objectValue

Get a random value from an object.

```ts
const statusCodes = {
  ok: 200,
  created: 201,
  badRequest: 400,
  notFound: 404,
}

const code = faker.helpers.objectValue(statusCodes)
// 200 or 201 or 400 or 404
```

## Common Patterns

### Weighted Random Selection

```ts
function weightedRandom<T>(options: { value: T, weight: number }[]): T {
  const totalWeight = options.reduce((sum, opt) => sum + opt.weight, 0)
  const random = Math.random() * totalWeight

  let cumulative = 0
  for (const option of options) {
    cumulative += option.weight
    if (random <= cumulative) {
      return option.value
    }
  }

  return options[options.length - 1].value
}

// 70% common, 20% rare, 10% legendary
const rarity = weightedRandom([
  { value: 'common', weight: 70 },
  { value: 'rare', weight: 20 },
  { value: 'legendary', weight: 10 },
])
```

### Random Pick with Exclusions

```ts
function pickExcluding<T>(array: T[], exclude: T[]): T {
  const filtered = array.filter(item => !exclude.includes(item))
  return faker.helpers.arrayElement(filtered)
}

const allColors = ['red', 'blue', 'green', 'yellow', 'purple']
const color = pickExcluding(allColors, ['red', 'blue'])
// "green" or "yellow" or "purple"
```

### Random Enum Value

```ts
enum Role {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}

const randomRole = faker.helpers.objectValue(Role)
// "admin" or "user" or "guest"
```

### Conditional Nested Data

```ts
interface Product {
  name: string
  price: number
  discount?: {
    percentage: number
    code: string
  }
}

const product: Product = {
  name: faker.commerce.product(),
  price: Number(faker.commerce.price()),
  discount: faker.helpers.maybe(() => ({
    percentage: faker.helpers.arrayElement([10, 15, 20, 25]),
    code: faker.helpers.bothify('SAVE##'),
  }), 0.3), // 30% chance of having a discount
}
```

### Generate Variations

```ts
// Generate same data with variations
function generateUserVariations(baseName: string, count: number) {
  return faker.helpers.multiple(() => ({
    username: `${baseName}${faker.helpers.numerify('###')}`,
    email: `${baseName.toLowerCase()}${faker.helpers.numerify('##')}@example.com`,
    verified: faker.helpers.boolean(0.7),
  }), count)
}

const users = generateUserVariations('john', 5)
// [
//   { username: "john247", email: "john47@example.com", verified: true },
//   { username: "john893", email: "john12@example.com", verified: true },
//   ...
// ]
```

### Random Subset

```ts
function randomSubset<T>(array: T[], min: number, max: number): T[] {
  const count = faker.number.int({ min, max })
  return faker.helpers.arrayElements(array, count)
}

const tags = ['javascript', 'typescript', 'react', 'vue', 'angular', 'svelte']
const postTags = randomSubset(tags, 2, 4)
// ["react", "typescript", "vue"]
```

## Integration Examples

### With Seeding

```ts
faker.seed(12345)

// Always returns same shuffled array with same seed
const shuffled = faker.helpers.shuffle([1, 2, 3, 4, 5])

// Always returns same unique values with same seed
const unique = Array.from({ length: 3 }, () =>
  faker.helpers.unique(() => faker.person.firstName())
)
```

### With Locales

```ts
// Helpers work with all locales
faker.setLocale('es')

const names = faker.helpers.multiple(() => faker.person.fullName(), 5)
// ["María García", "Carlos López", "Ana Martínez", ...]

const shuffledCities = faker.helpers.shuffle([
  faker.address.city(),
  faker.address.city(),
  faker.address.city(),
])
```

### In Tests

```ts
import { describe, test, expect } from 'bun:test'
import { faker } from 'nanofaker'

describe('User tests', () => {
  test('creates valid users', () => {
    const users = faker.helpers.multiple(() => ({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      active: faker.helpers.boolean(0.9), // 90% active
      role: faker.helpers.arrayElement(['admin', 'user', 'guest']),
    }), 10)

    expect(users).toHaveLength(10)
    users.forEach(user => {
      expect(user.email).toContain('@')
      expect(['admin', 'user', 'guest']).toContain(user.role)
    })
  })
})
```

The helpers module provides the building blocks for creating complex, realistic test data with precise control over randomness and uniqueness.
