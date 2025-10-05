# API Reference

Complete API reference for ts-mocker with all available methods and their return types.

## Core

### faker

The main faker instance with default locale (English).

```ts
import { faker } from 'ts-mocker'
```

### faker.locale

Set or get the current locale.

```ts
faker.locale = 'es' // Set to Spanish
const currentLocale = faker.locale // Get current locale
```

**Type**: `string`
**Available values**: `'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ja' | 'tl' | 'zh'`

### faker.locale(locale)

Create a new faker instance with a specific locale.

```ts
const spanishFaker = faker.locale('es')
```

**Parameters**:

- `locale: string` - The locale code

**Returns**: `Faker` - New faker instance

### faker.seed(seed)

Set a seed for reproducible random data generation.

```ts
faker.seed(12345)
```

**Parameters**:

- `seed: number | undefined` - Seed value (undefined for random)

**Returns**: `void`

## Person

Methods for generating personal data.

### faker.person.firstName(options?)

Generate a random first name.

```ts
faker.person.firstName() // "John"
faker.person.firstName({ gender: 'male' }) // "Michael"
faker.person.firstName({ gender: 'female' }) // "Sarah"
faker.person.firstName({ gender: 'neutral' }) // "Alex"
```

**Parameters**:

- `options?: PersonNameOptions` - Optional gender configuration
  - `gender?: 'male' | 'female' | 'neutral'` - Gender of the name

**Returns**: `string`

### faker.person.firstNameMale()

Generate a random male first name.

```ts
faker.person.firstNameMale() // "Michael"
```

**Returns**: `string`

### faker.person.firstNameFemale()

Generate a random female first name.

```ts
faker.person.firstNameFemale() // "Sarah"
```

**Returns**: `string`

### faker.person.firstNameNeutral()

Generate a random gender-neutral first name.

```ts
faker.person.firstNameNeutral() // "Alex"
```

**Returns**: `string`

**Note**: If the locale doesn't have neutral names defined, it will return a random name from the combined male and female names list.

### faker.person.lastName()

Generate a random last name.

```ts
faker.person.lastName() // "Doe"
```

**Returns**: `string`

### faker.person.fullName(options?)

Generate a random full name.

```ts
faker.person.fullName() // "John Doe"
faker.person.fullName({ gender: 'male' }) // "Michael Smith"
faker.person.fullName({ gender: 'female' }) // "Sarah Johnson"
faker.person.fullName({ prefix: true }) // "Mr. John Doe"
faker.person.fullName({ suffix: true }) // "John Doe Jr."
faker.person.fullName({ gender: 'female', prefix: true, suffix: true }) // "Ms. Sarah Johnson III"
```

**Parameters**:

- `options?: PersonFullNameOptions` - Optional configuration
  - `gender?: 'male' | 'female' | 'neutral'` - Gender of the first name
  - `prefix?: boolean` - Include a prefix (Mr., Mrs., etc.)
  - `suffix?: boolean` - Include a suffix (Jr., Sr., etc.)

**Returns**: `string`

### faker.person.gender()

Generate a random gender.

```ts
faker.person.gender() // "Male"
```

**Returns**: `string`

### faker.person.jobTitle()

Generate a random job title.

```ts
faker.person.jobTitle() // "Software Engineer"
```

**Returns**: `string`

### faker.person.prefix()

Generate a random name prefix.

```ts
faker.person.prefix() // "Mr."
```

**Returns**: `string`

### faker.person.suffix()

Generate a random name suffix.

```ts
faker.person.suffix() // "Jr."
```

**Returns**: `string`

## Address

Methods for generating address data.

### faker.address.street()

Generate a random street name.

```ts
faker.address.street() // "Main Street"
```

**Returns**: `string`

### faker.address.city()

Generate a random city name.

```ts
faker.address.city() // "New York"
```

**Returns**: `string`

### faker.address.state()

Generate a random state/province name.

```ts
faker.address.state() // "California"
```

**Returns**: `string`

### faker.address.country()

Generate a random country name.

```ts
faker.address.country() // "United States"
```

**Returns**: `string`

### faker.address.zipCode()

Generate a random ZIP/postal code.

```ts
faker.address.zipCode() // "90210"
```

**Returns**: `string`

### faker.address.direction()

Generate a random direction.

```ts
faker.address.direction() // "North"
```

**Returns**: `string`

## Company

Methods for generating company data.

### faker.company.name()

Generate a random company name.

```ts
faker.company.name() // "Tech Innovations Inc."
```

**Returns**: `string`

### faker.company.industry()

Generate a random industry.

```ts
faker.company.industry() // "Technology"
```

**Returns**: `string`

### faker.company.buzzword()

Generate a random business buzzword.

```ts
faker.company.buzzword() // "synergy"
```

**Returns**: `string`

### faker.company.descriptor()

Generate a random company descriptor.

```ts
faker.company.descriptor() // "leading"
```

**Returns**: `string`

## Internet

Methods for generating internet data.

### faker.internet.email()

Generate a random email address.

```ts
faker.internet.email() // "john.doe@example.com"
```

**Returns**: `string`

### faker.internet.domainName()

Generate a random domain name.

```ts
faker.internet.domainName() // "example.com"
```

**Returns**: `string`

### faker.internet.url()

Generate a random URL.

```ts
faker.internet.url() // "https://example.com"
```

**Returns**: `string`

## Phone

Methods for generating phone data.

### faker.phone.number()

Generate a random phone number.

```ts
faker.phone.number() // "+1-555-123-4567"
```

**Returns**: `string`

## Food

Methods for generating food data.

### faker.food.dish()

Generate a random dish name.

```ts
faker.food.dish() // "Spaghetti Carbonara"
```

**Returns**: `string`

### faker.food.ingredient()

Generate a random ingredient.

```ts
faker.food.ingredient() // "Tomato"
```

**Returns**: `string`

### faker.food.cuisine()

Generate a random cuisine type.

```ts
faker.food.cuisine() // "Italian"
```

**Returns**: `string`

### faker.food.dessert()

Generate a random dessert.

```ts
faker.food.dessert() // "Tiramisu"
```

**Returns**: `string`

### faker.food.fruit()

Generate a random fruit.

```ts
faker.food.fruit() // "Apple"
```

**Returns**: `string`

### faker.food.vegetable()

Generate a random vegetable.

```ts
faker.food.vegetable() // "Carrot"
```

**Returns**: `string`

### faker.food.meat()

Generate a random meat.

```ts
faker.food.meat() // "Chicken"
```

**Returns**: `string`

### faker.food.spice()

Generate a random spice.

```ts
faker.food.spice() // "Basil"
```

**Returns**: `string`

## Animal

Methods for generating animal data.

### faker.animal.dog()

Generate a random dog breed.

```ts
faker.animal.dog() // "Golden Retriever"
```

**Returns**: `string`

### faker.animal.cat()

Generate a random cat breed.

```ts
faker.animal.cat() // "Persian"
```

**Returns**: `string`

### faker.animal.bird()

Generate a random bird species.

```ts
faker.animal.bird() // "Eagle"
```

**Returns**: `string`

### faker.animal.fish()

Generate a random fish species.

```ts
faker.animal.fish() // "Salmon"
```

**Returns**: `string`

### faker.animal.horse()

Generate a random horse breed.

```ts
faker.animal.horse() // "Arabian"
```

**Returns**: `string`

### faker.animal.rabbit()

Generate a random rabbit breed.

```ts
faker.animal.rabbit() // "Flemish Giant"
```

**Returns**: `string`

### faker.animal.insect()

Generate a random insect.

```ts
faker.animal.insect() // "Butterfly"
```

**Returns**: `string`

## Sport

Methods for generating sports data.

### faker.sport.sport()

Generate a random sport name.

```ts
faker.sport.sport() // "Basketball"
```

**Returns**: `string`

### faker.sport.team()

Generate a random team name.

```ts
faker.sport.team() // "Lakers"
```

**Returns**: `string`

### faker.sport.athlete()

Generate a random athlete name.

```ts
faker.sport.athlete() // "Michael Jordan"
```

**Returns**: `string`

## Music

Methods for generating music data.

### faker.music.genre()

Generate a random music genre.

```ts
faker.music.genre() // "Rock"
```

**Returns**: `string`

### faker.music.artist()

Generate a random artist name.

```ts
faker.music.artist() // "The Beatles"
```

**Returns**: `string`

### faker.music.song()

Generate a random song title.

```ts
faker.music.song() // "Hey Jude"
```

**Returns**: `string`

### faker.music.instrument()

Generate a random musical instrument.

```ts
faker.music.instrument() // "Guitar"
```

**Returns**: `string`

## Commerce

Methods for generating commerce data.

### faker.commerce.product()

Generate a random product name.

```ts
faker.commerce.product() // "Laptop"
```

**Returns**: `string`

### faker.commerce.adjective()

Generate a random product adjective.

```ts
faker.commerce.adjective() // "Premium"
```

**Returns**: `string`

### faker.commerce.material()

Generate a random material.

```ts
faker.commerce.material() // "Aluminum"
```

**Returns**: `string`

### faker.commerce.department()

Generate a random department.

```ts
faker.commerce.department() // "Electronics"
```

**Returns**: `string`

### faker.commerce.color()

Generate a random color.

```ts
faker.commerce.color() // "Silver"
```

**Returns**: `string`

## Book

Methods for generating book data.

### faker.book.title()

Generate a random book title.

```ts
faker.book.title() // "To Kill a Mockingbird"
```

**Returns**: `string`

### faker.book.author()

Generate a random author name.

```ts
faker.book.author() // "Harper Lee"
```

**Returns**: `string`

### faker.book.publisher()

Generate a random publisher name.

```ts
faker.book.publisher() // "Penguin Books"
```

**Returns**: `string`

### faker.book.genre()

Generate a random book genre.

```ts
faker.book.genre() // "Fiction"
```

**Returns**: `string`

### faker.book.series()

Generate a random book series.

```ts
faker.book.series() // "Harry Potter"
```

**Returns**: `string`

### faker.book.review()

Generate a random book review.

```ts
faker.book.review() // "A masterpiece!"
```

**Returns**: `string`

## Vehicle

Methods for generating vehicle data.

### faker.vehicle.manufacturer()

Generate a random vehicle manufacturer.

```ts
faker.vehicle.manufacturer() // "Toyota"
```

**Returns**: `string`

### faker.vehicle.model()

Generate a random vehicle model.

```ts
faker.vehicle.model() // "Camry"
```

**Returns**: `string`

### faker.vehicle.type()

Generate a random vehicle type.

```ts
faker.vehicle.type() // "Sedan"
```

**Returns**: `string`

### faker.vehicle.fuel()

Generate a random fuel type.

```ts
faker.vehicle.fuel() // "Gasoline"
```

**Returns**: `string`

### faker.vehicle.bicycle()

Generate a random bicycle type.

```ts
faker.vehicle.bicycle() // "Mountain Bike"
```

**Returns**: `string`

## Word

Methods for generating word data.

### faker.word.adjective()

Generate a random adjective.

```ts
faker.word.adjective() // "beautiful"
```

**Returns**: `string`

### faker.word.adverb()

Generate a random adverb.

```ts
faker.word.adverb() // "quickly"
```

**Returns**: `string`

### faker.word.conjunction()

Generate a random conjunction.

```ts
faker.word.conjunction() // "and"
```

**Returns**: `string`

### faker.word.interjection()

Generate a random interjection.

```ts
faker.word.interjection() // "wow"
```

**Returns**: `string`

### faker.word.noun()

Generate a random noun.

```ts
faker.word.noun() // "table"
```

**Returns**: `string`

### faker.word.preposition()

Generate a random preposition.

```ts
faker.word.preposition() // "under"
```

**Returns**: `string`

### faker.word.verb()

Generate a random verb.

```ts
faker.word.verb() // "run"
```

**Returns**: `string`

## Hacker

Methods for generating tech/hacker data.

### faker.hacker.abbreviation()

Generate a random tech abbreviation.

```ts
faker.hacker.abbreviation() // "HTTP"
```

**Returns**: `string`

### faker.hacker.adjective()

Generate a random tech adjective.

```ts
faker.hacker.adjective() // "distributed"
```

**Returns**: `string`

### faker.hacker.noun()

Generate a random tech noun.

```ts
faker.hacker.noun() // "protocol"
```

**Returns**: `string`

### faker.hacker.verb()

Generate a random tech verb.

```ts
faker.hacker.verb() // "compile"
```

**Returns**: `string`

### faker.hacker.ingverb()

Generate a random tech -ing verb.

```ts
faker.hacker.ingverb() // "parsing"
```

**Returns**: `string`

### faker.hacker.phrase()

Generate a random tech phrase.

```ts
faker.hacker.phrase() // "connecting the neural network"
```

**Returns**: `string`

## System

Methods for generating system data.

### faker.system.fileName()

Generate a random file name.

```ts
faker.system.fileName() // "document"
```

**Returns**: `string`

### faker.system.fileType()

Generate a random file type.

```ts
faker.system.fileType() // "pdf"
```

**Returns**: `string`

## Science

Methods for generating scientific data.

### faker.science.chemicalElement()

Generate a random chemical element.

```ts
faker.science.chemicalElement() // "Oxygen"
```

**Returns**: `string`

### faker.science.unit()

Generate a random unit of measurement.

```ts
faker.science.unit() // "meter"
```

**Returns**: `string`

### faker.science.constant()

Generate a random scientific constant.

```ts
faker.science.constant() // "Speed of Light"
```

**Returns**: `string`

### faker.science.field()

Generate a random scientific field.

```ts
faker.science.field() // "Physics"
```

**Returns**: `string`

## Types

### LocaleDefinition

Interface defining the structure of a locale.

```ts
interface LocaleDefinition {
  title: string
  person: PersonDefinition
  address: AddressDefinition
  company: CompanyDefinition
  internet: InternetDefinition
  phone: PhoneDefinition
  food: FoodDefinition
  animal: AnimalDefinition
  sport: SportDefinition
  music: MusicDefinition
  commerce: CommerceDefinition
  book: BookDefinition
  vehicle: VehicleDefinition
  word: WordDefinition
  hacker: HackerDefinition
  system: SystemDefinition
  science: ScienceDefinition
}
```

### Faker

The main faker interface.

```ts
interface Faker {
  locale: string
  locale: (locale: string) => Faker
  seed: (seed?: number) => void
  person: PersonMethods
  address: AddressMethods
  company: CompanyMethods
  internet: InternetMethods
  phone: PhoneMethods
  food: FoodMethods
  animal: AnimalMethods
  sport: SportMethods
  music: MusicMethods
  commerce: CommerceMethods
  book: BookMethods
  vehicle: VehicleMethods
  word: WordMethods
  hacker: HackerMethods
  system: SystemMethods
  science: ScienceMethods
}
```
