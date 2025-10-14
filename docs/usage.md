# Usage

There are two main ways of using ts-mocker: _with the default locale or with a specific locale._

## Basic Usage

Given the npm package is installed:

```ts
import { faker } from 'ts-mocker'

// Generate random data with default locale (English)
const name = faker.person.fullName()
const email = faker.internet.email()
const city = faker.address.city()

console.log(name) // "John Doe"
console.log(email) // "john.doe@example.com"
console.log(city) // "New York"
```

## Using Different Locales

You can set the locale globally or use a specific locale instance:

```ts
import { faker } from 'ts-mocker'

// Set locale globally
faker.locale = 'es' // Spanish
console.log(faker.person.fullName()) // "María García"

// Or create a locale-specific instance
const spanishFaker = faker.locale('es')
const japaneseFaker = faker.locale('ja')
const chineseSimplifiedFaker = faker.locale('zh-cn')
const chineseTraditionalFaker = faker.locale('zh-tw')

console.log(spanishFaker.person.fullName()) // "Carlos López"
console.log(japaneseFaker.person.fullName()) // "田中太郎"
console.log(chineseSimplifiedFaker.person.fullName()) // "王伟"
console.log(chineseTraditionalFaker.person.fullName()) // "陳小明"
```

## Available Locales

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

## API Examples

### Person Data

```ts
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
```

### Address Data

```ts
faker.address.street() // Random street name
faker.address.city() // Random city
faker.address.state() // Random state/province
faker.address.country() // Random country
faker.address.zipCode() // Random ZIP/postal code
faker.address.direction() // Random direction (North, South, etc.)
```

### Company Data

```ts
faker.company.name() // Random company name
faker.company.industry() // Random industry
faker.company.buzzword() // Random business buzzword
```

### Internet Data

```ts
faker.internet.email() // Random email address
faker.internet.domainName() // Random domain name
faker.internet.url() // Random URL
```

### Phone Numbers

```ts
faker.phone.number() // Random phone number
```

### Food Data

```ts
faker.food.dish() // Random dish name
faker.food.ingredient() // Random ingredient
faker.food.cuisine() // Random cuisine type
faker.food.dessert() // Random dessert
faker.food.fruit() // Random fruit
faker.food.vegetable() // Random vegetable
faker.food.meat() // Random meat
faker.food.spice() // Random spice
```

### Animal Data

```ts
faker.animal.dog() // Random dog breed
faker.animal.cat() // Random cat breed
faker.animal.bird() // Random bird species
faker.animal.fish() // Random fish species
faker.animal.horse() // Random horse breed
faker.animal.rabbit() // Random rabbit breed
faker.animal.insect() // Random insect
```

### Sports Data

```ts
faker.sport.sport() // Random sport name
faker.sport.team() // Random team name
faker.sport.athlete() // Random athlete name
```

### Music Data

```ts
faker.music.genre() // Random music genre
faker.music.artist() // Random artist name
faker.music.song() // Random song title
faker.music.instrument() // Random instrument
```

### Commerce Data

```ts
faker.commerce.product() // Random product name
faker.commerce.adjective() // Random product adjective
faker.commerce.material() // Random material
faker.commerce.department() // Random department
faker.commerce.color() // Random color
```

### Book Data

```ts
faker.book.title() // Random book title
faker.book.author() // Random author name
faker.book.publisher() // Random publisher
faker.book.genre() // Random book genre
faker.book.series() // Random book series
faker.book.review() // Random book review
```

### Vehicle Data

```ts
faker.vehicle.manufacturer() // Random vehicle manufacturer
faker.vehicle.model() // Random vehicle model
faker.vehicle.type() // Random vehicle type
faker.vehicle.fuel() // Random fuel type
faker.vehicle.bicycle() // Random bicycle type
```

### Word Data

```ts
faker.word.adjective() // Random adjective
faker.word.adverb() // Random adverb
faker.word.conjunction() // Random conjunction
faker.word.interjection() // Random interjection
faker.word.noun() // Random noun
faker.word.preposition() // Random preposition
faker.word.verb() // Random verb
```

### Tech/Hacker Data

```ts
faker.hacker.abbreviation() // Random tech abbreviation
faker.hacker.adjective() // Random tech adjective
faker.hacker.noun() // Random tech noun
faker.hacker.verb() // Random tech verb
faker.hacker.ingverb() // Random tech -ing verb
faker.hacker.phrase() // Random tech phrase
```

### System Data

```ts
faker.system.fileName() // Random file name
faker.system.fileType() // Random file type
```

### Science Data

```ts
faker.science.chemicalElement() // Random chemical element
faker.science.unit() // Random unit of measurement
faker.science.constant() // Random scientific constant
faker.science.field() // Random scientific field
```

## Testing

```bash
bun test
```
