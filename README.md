<p align="center"><img src=".github/art/cover.jpg" alt="Social Card of this repo"></p>

[![npm version][npm-version-src]][npm-version-href]
[![GitHub Actions][github-actions-src]][github-actions-href]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<!-- [![npm downloads][npm-downloads-src]][npm-downloads-href] -->
<!-- [![Codecov][codecov-src]][codecov-href] -->

# nanofaker

A performance-focused and lightweight faker library for TypeScript with comprehensive locale support.

## Features

- ⚡️ **Performance-focused** - Built with speed and efficiency in mind
- 🌍 **Multi-locale Support** - Complete translations for 26 languages:
  - Afrikaans (af)
  - Arabic (ar)
  - Azerbaijani (az)
  - Czech (cs)
  - Danish (da)
  - German (de)
  - English (en)
  - Esperanto (eo)
  - Spanish (es)
  - Persian/Farsi (fa)
  - Finnish (fi)
  - French (fr)
  - Hebrew (he)
  - Hindi (hi)
  - Italian (it)
  - Japanese (ja)
  - Korean (ko)
  - Dutch (nl)
  - Norwegian (no)
  - Polish (pl)
  - Portuguese (pt)
  - Swedish (sv)
  - Filipino (tl)
  - Turkish (tr)
  - Ukrainian (uk)
  - Chinese (zh)
- 📦 **Lightweight** - Minimal dependencies and small bundle size
- 💪 **Fully Typed** - Written in TypeScript with comprehensive type definitions
- 🎯 **Comprehensive Data** - 16+ data categories including:
  - Person (names, job titles, genders)
  - Address (streets, cities, countries)
  - Company (names, industries, buzzwords)
  - Internet (emails, domains)
  - Phone numbers
  - Food (dishes, ingredients, cuisines)
  - Animals (dogs, cats, birds, fish, etc.)
  - Sports (teams, athletes)
  - Music (genres, artists, songs)
  - Commerce (products, colors, materials)
  - Books (titles, authors, publishers)
  - Vehicles (manufacturers, models, types)
  - Words (adjectives, verbs, nouns, etc.)
  - Hacker/Tech (abbreviations, phrases)
  - System (file names, file types)
  - Science (elements, units, constants)

## Installation

```bash
# npm
npm install nanofaker

# pnpm
pnpm add nanofaker

# bun
bun add nanofaker

# yarn
yarn add nanofaker
```

## Usage

```typescript
import { faker } from 'nanofaker'

// Generate random data with default locale (English)
const name = faker.person.fullName()
const email = faker.internet.email()
const address = faker.address.city()

console.log(name) // "John Doe"
console.log(email) // "john.doe@example.com"
console.log(address) // "New York"
```

### Using Different Locales

```typescript
import { faker } from 'nanofaker'

// Set locale globally
faker.setLocale('es') // Spanish
console.log(faker.person.fullName()) // "María García"

// Or create a new instance with a specific locale
const spanishFaker = new Faker({ locale: 'es' })
const japaneseFaker = new Faker({ locale: 'ja' })
const chineseFaker = new Faker({ locale: 'zh' })

console.log(spanishFaker.person.fullName()) // "Carlos López"
console.log(japaneseFaker.person.fullName()) // "田中太郎"
console.log(chineseFaker.person.fullName()) // "王伟"
```

### Available Locales

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
- `zh` - Chinese

### API Examples

```typescript
import { faker } from 'nanofaker'

// Person
faker.person.firstName() // Random first name
faker.person.firstName({ gender: 'male' }) // Random male first name
faker.person.firstName({ gender: 'female' }) // Random female first name
faker.person.firstName({ gender: 'neutral' }) // Random neutral first name
faker.person.firstNameMale() // Random male first name
faker.person.firstNameFemale() // Random female first name
faker.person.firstNameNeutral() // Random neutral first name
faker.person.lastName() // Random last name
faker.person.fullName() // Random full name
faker.person.fullName({ gender: 'male' }) // Random full name with male first name
faker.person.fullName({ gender: 'female' }) // Random full name with female first name
faker.person.fullName({ prefix: true }) // Random full name with prefix
faker.person.fullName({ suffix: true }) // Random full name with suffix
faker.person.gender() // Random gender
faker.person.jobTitle() // Random job title
faker.person.prefix() // Random prefix (Mr., Mrs., etc.)
faker.person.suffix() // Random suffix (Jr., Sr., etc.)

// Address
faker.address.street() // Random street name
faker.address.city() // Random city
faker.address.state() // Random state/province
faker.address.country() // Random country
faker.address.zipCode() // Random ZIP/postal code
faker.address.direction() // Random direction (North, South, etc.)

// Company
faker.company.name() // Random company name
faker.company.industry() // Random industry
faker.company.buzzword() // Random business buzzword

// Internet
faker.internet.email() // Random email address
faker.internet.domainName() // Random domain name
faker.internet.url() // Random URL

// Phone
faker.phone.number() // Random phone number

// Food
faker.food.dish() // Random dish name
faker.food.ingredient() // Random ingredient
faker.food.cuisine() // Random cuisine type
faker.food.dessert() // Random dessert
faker.food.fruit() // Random fruit
faker.food.vegetable() // Random vegetable
faker.food.meat() // Random meat
faker.food.spice() // Random spice

// Animal
faker.animal.dog() // Random dog breed
faker.animal.cat() // Random cat breed
faker.animal.bird() // Random bird species
faker.animal.fish() // Random fish species
faker.animal.horse() // Random horse breed
faker.animal.rabbit() // Random rabbit breed
faker.animal.insect() // Random insect

// Sport
faker.sport.sport() // Random sport name
faker.sport.team() // Random team name
faker.sport.athlete() // Random athlete name

// Music
faker.music.genre() // Random music genre
faker.music.artist() // Random artist name
faker.music.song() // Random song title
faker.music.instrument() // Random instrument

// Commerce
faker.commerce.product() // Random product name
faker.commerce.adjective() // Random product adjective
faker.commerce.material() // Random material
faker.commerce.department() // Random department
faker.commerce.color() // Random color

// Book
faker.book.title() // Random book title
faker.book.author() // Random author name
faker.book.publisher() // Random publisher
faker.book.genre() // Random book genre
faker.book.series() // Random book series
faker.book.review() // Random book review

// Vehicle
faker.vehicle.manufacturer() // Random vehicle manufacturer
faker.vehicle.model() // Random vehicle model
faker.vehicle.type() // Random vehicle type
faker.vehicle.fuel() // Random fuel type
faker.vehicle.bicycle() // Random bicycle type

// Word
faker.word.adjective() // Random adjective
faker.word.adverb() // Random adverb
faker.word.conjunction() // Random conjunction
faker.word.interjection() // Random interjection
faker.word.noun() // Random noun
faker.word.preposition() // Random preposition
faker.word.verb() // Random verb

// Hacker/Tech
faker.hacker.abbreviation() // Random tech abbreviation
faker.hacker.adjective() // Random tech adjective
faker.hacker.noun() // Random tech noun
faker.hacker.verb() // Random tech verb
faker.hacker.ingverb() // Random tech -ing verb
faker.hacker.phrase() // Random tech phrase

// System
faker.system.fileName() // Random file name
faker.system.fileType() // Random file type

// Science
faker.science.chemicalElement() // Random chemical element
faker.science.unit() // Random unit of measurement
faker.science.constant() // Random scientific constant
faker.science.field() // Random scientific field
```

## Command Line Interface

nanofaker includes a powerful CLI for generating fake data from the terminal.

### Installation

```bash
# Global installation
npm install -g nanofaker

# Or use with npx
npx nanofaker [command]
```

### Quick Examples

```bash
# Generate a random name
nanofaker generate person fullName

# Generate 5 emails in Spanish
nanofaker generate internet email --locale es --count 5

# Generate 10 test users as JSON
nanofaker batch 10

# List all available categories
nanofaker categories

# List methods for a category
nanofaker methods food
```

### Available Commands

- `generate <category> <method>` - Generate random data
- `batch <count>` - Generate multiple complete records
- `categories` - List all available categories
- `methods <category>` - List methods for a category
- `locales` - List all supported locales
- `seed <seed>` - Generate reproducible data with a seed
- `version` - Show version

### Options

- `--locale <locale>` - Use a specific locale (af, ar, az, cs, da, de, en, eo, es, fa, fi, fr, he, hi, it, ja, ko, nl, no, pl, pt, sv, tl, tr, uk, zh)
- `--count <count>` - Number of items to generate
- `--seed <seed>` - Seed for reproducible results
- `--json` - Output as JSON
- `--template <template>` - Template for batch: user, product, address, company

### More Examples

```bash
# Reproducible data with seed
nanofaker generate person fullName --seed 12345

# Generate products in JSON
nanofaker batch 5 --template product --json

# Generate Japanese food items
nanofaker generate food dish --locale ja --count 10

# Save to file
nanofaker batch 100 --template user > users.json
```

See the [CLI documentation](https://nanofaker.stacksjs.org/cli) for complete details.

## Performance Benchmarks

nanofaker is designed for performance and efficiency:

**Performance:**
- ✅ **9 out of 9 benchmarks won** (100% win rate!)
- ⚡ **6.57x faster than @faker-js/faker** on average
- 🚀 **39.63M ops/s** for city generation
- 📊 **7.97ms** to generate 10,000 complex user objects

**Package Size:**
- 📦 **174 KB** published (core package only)
- 🎯 **24.7x smaller than @faker-js/faker** (4.29 MB)
- 🪶 **38 files** vs 231 in @faker-js/faker
- 🔌 **Modular locales** - install only what you need

### Quick Comparison

| Operation | nanofaker | @faker-js/faker | Speedup |
|-----------|-----------|-----------------|---------|
| Full Name Generation | 31.35M ops/s | 537.95K ops/s | **58x faster** |
| Phone Number Generation | 9.77M ops/s | 2.05M ops/s | **4.8x faster** |
| City Generation | 39.63M ops/s | 779.69K ops/s | **51x faster** |
| Email Generation | 1.96M ops/s | 567.44K ops/s | **3.5x faster** |
| Complex Objects (10k) | 7.97ms | 52.39ms | **6.6x faster** |

### Running Benchmarks

```bash
# Run all benchmarks
bun run bench

# Results are compared against:
# - @faker-js/faker
# - chance
# - casual
# - @ngneat/falso
```

**Detailed Documentation:**
- 📊 [BENCHMARKS.md](./BENCHMARKS.md) - Complete performance results and methodology

## Testing

```bash
bun test
```

## Development

```bash
# Install dependencies
bun install

# Run tests
bun test

# Build the library
bun run build

# Lint code
bun run lint
```

## Changelog

Please see our [releases](https://github.com/stacksjs/nanofaker/releases) page for more information on what has changed recently.

## Contributing

We welcome contributions! Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/stacksjs/nanofaker/discussions)

For casual chit-chat with others using this package:

[Join the Stacks Discord Server](https://discord.gg/stacksjs)

## Postcardware

“Software that is free, but hopes for a postcard.” We love receiving postcards from around the world showing where Stacks is being used! We showcase them on our website too.

Our address: Stacks.js, 12665 Village Ln #2306, Playa Vista, CA 90094, United States 🌎

## Sponsors

We would like to extend our thanks to the following sponsors for funding Stacks development. If you are interested in becoming a sponsor, please reach out to us.

- [JetBrains](https://www.jetbrains.com/)
- [The Solana Foundation](https://solana.com/)

## License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

Made with 💙

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nanofaker?style=flat-square
[npm-version-href]: https://npmjs.com/package/nanofaker
[github-actions-src]: https://img.shields.io/github/actions/workflow/status/stacksjs/nanofaker/ci.yml?style=flat-square&branch=main
[github-actions-href]: https://github.com/stacksjs/nanofaker/actions?query=workflow%3Aci

<!-- [codecov-src]: https://img.shields.io/codecov/c/gh/stacksjs/nanofaker/main?style=flat-square
[codecov-href]: https://codecov.io/gh/stacksjs/nanofaker -->
