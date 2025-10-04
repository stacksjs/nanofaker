# Data Categories

nanofaker provides 16 comprehensive data categories, each with multiple data types. All categories are fully supported across all 9 locales.

## Person

Generate personal information like names, genders, and job titles.

```ts
faker.person.firstName()  // "John"
faker.person.lastName()   // "Doe"
faker.person.fullName()   // "John Doe"
faker.person.gender()     // "Male"
faker.person.jobTitle()   // "Software Engineer"
faker.person.prefix()     // "Mr."
faker.person.suffix()     // "Jr."
```

**Available in all 9 locales with culturally appropriate names.**

## Address

Generate location data including streets, cities, states, and countries.

```ts
faker.address.street()    // "Main Street"
faker.address.city()      // "New York"
faker.address.state()     // "California"
faker.address.country()   // "United States"
faker.address.zipCode()   // "90210"
faker.address.direction() // "North"
```

**Locale-specific addresses with authentic formatting.**

## Company

Generate business-related data.

```ts
faker.company.name()      // "Tech Innovations Inc."
faker.company.industry()  // "Technology"
faker.company.buzzword()  // "synergy"
faker.company.descriptor() // "leading"
```

**Business terms appropriate for each locale.**

## Internet

Generate internet-related data like emails and URLs.

```ts
faker.internet.email()      // "john.doe@example.com"
faker.internet.domainName() // "example.com"
faker.internet.url()        // "https://example.com"
```

**Realistic internet data for testing.**

## Phone

Generate locale-specific phone numbers.

```ts
faker.phone.number() // "+1-555-123-4567"
```

**Phone formats that match each locale's conventions.**

## Food

Generate culinary data including dishes, ingredients, and cuisines.

```ts
faker.food.dish()       // "Spaghetti Carbonara"
faker.food.ingredient() // "Tomato"
faker.food.cuisine()    // "Italian"
faker.food.dessert()    // "Tiramisu"
faker.food.fruit()      // "Apple"
faker.food.vegetable()  // "Carrot"
faker.food.meat()       // "Chicken"
faker.food.spice()      // "Basil"
```

**Culturally appropriate food items for each locale.**

## Animal

Generate animal names across various categories.

```ts
faker.animal.dog()    // "Golden Retriever"
faker.animal.cat()    // "Persian"
faker.animal.bird()   // "Eagle"
faker.animal.fish()   // "Salmon"
faker.animal.horse()  // "Arabian"
faker.animal.rabbit() // "Flemish Giant"
faker.animal.insect() // "Butterfly"
```

**Animal names translated for each locale.**

## Sport

Generate sports-related data.

```ts
faker.sport.sport()   // "Basketball"
faker.sport.team()    // "Lakers"
faker.sport.athlete() // "Michael Jordan"
```

**Popular sports and teams for each region.**

## Music

Generate music-related data.

```ts
faker.music.genre()      // "Rock"
faker.music.artist()     // "The Beatles"
faker.music.song()       // "Hey Jude"
faker.music.instrument() // "Guitar"
```

**Music data relevant to each locale.**

## Commerce

Generate e-commerce and product data.

```ts
faker.commerce.product()    // "Laptop"
faker.commerce.adjective()  // "Premium"
faker.commerce.material()   // "Aluminum"
faker.commerce.department() // "Electronics"
faker.commerce.color()      // "Silver"
```

**Product and commerce terms for each locale.**

## Book

Generate book-related data.

```ts
faker.book.title()     // "To Kill a Mockingbird"
faker.book.author()    // "Harper Lee"
faker.book.publisher() // "Penguin Books"
faker.book.genre()     // "Fiction"
faker.book.series()    // "Harry Potter"
faker.book.review()    // "A masterpiece!"
```

**Books and authors from each locale's literature.**

## Vehicle

Generate vehicle-related data.

```ts
faker.vehicle.manufacturer() // "Toyota"
faker.vehicle.model()        // "Camry"
faker.vehicle.type()         // "Sedan"
faker.vehicle.fuel()         // "Gasoline"
faker.vehicle.bicycle()      // "Mountain Bike"
```

**Vehicle data including regional manufacturers.**

## Word

Generate different types of words.

```ts
faker.word.adjective()    // "beautiful"
faker.word.adverb()       // "quickly"
faker.word.conjunction()  // "and"
faker.word.interjection() // "wow"
faker.word.noun()         // "table"
faker.word.preposition()  // "under"
faker.word.verb()         // "run"
```

**Grammar-appropriate words in each language.**

## Hacker/Tech

Generate technical and hacker culture terms.

```ts
faker.hacker.abbreviation() // "HTTP"
faker.hacker.adjective()    // "distributed"
faker.hacker.noun()         // "protocol"
faker.hacker.verb()         // "compile"
faker.hacker.ingverb()      // "parsing"
faker.hacker.phrase()       // "connecting the neural network"
```

**Technical jargon translated for each locale.**

## System

Generate system and file-related data.

```ts
faker.system.fileName() // "document"
faker.system.fileType() // "pdf"
```

**File system data for testing.**

## Science

Generate scientific data.

```ts
faker.science.chemicalElement() // "Oxygen"
faker.science.unit()            // "meter"
faker.science.constant()        // "Speed of Light"
faker.science.field()           // "Physics"
```

**Scientific terms and concepts in each locale.**

## Using Categories

All categories are accessible through the faker instance and automatically use the current locale:

```ts
import { faker } from 'nanofaker'

// English (default)
console.log(faker.food.dish()) // "Hamburger"

// Switch to Spanish
faker.locale = 'es'
console.log(faker.food.dish()) // "Paella"

// Switch to Japanese
faker.locale = 'ja'
console.log(faker.food.dish()) // "寿司"
```
