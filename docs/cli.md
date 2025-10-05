# Command Line Interface

nanofaker includes a powerful CLI for generating fake data directly from your terminal. Perfect for quick data generation, testing, and scripting.

## Installation

If you installed nanofaker globally, the CLI is available as `nanofaker`:

```bash
npm install -g nanofaker
```

For local installations, use `npx`:

```bash
npx nanofaker [command]
```

## Commands

### generate

Generate random data from any category and method.

```bash
nanofaker generate <category> <method> [options]
```

**Options:**

- `--locale <locale>` - Locale to use (af, ar, az, cs, da, de, en, eo, es, fa, fi, fr, he, hi, it, ja, ko, nl, no, pl, pt, sv, tl, tr, uk, zh)
- `--count <count>` - Number of items to generate (default: 1)
- `--seed <seed>` - Seed for reproducible results
- `--json` - Output as JSON

**Examples:**

```bash
# Generate a single name
nanofaker generate person fullName

# Generate 5 Spanish names
nanofaker generate person fullName --locale es --count 5

# Generate reproducible data with seed
nanofaker generate address city --seed 12345

# Output as JSON
nanofaker generate person firstName --count 3 --json
```

### categories

List all available data categories.

```bash
nanofaker categories
```

Shows all 16 categories:

- person - Names, genders, job titles, prefixes, suffixes
- address - Streets, cities, states, countries, postal codes
- company - Names, industries, buzzwords, descriptors
- internet - Email addresses, domains, URLs
- phone - Phone numbers
- food - Dishes, ingredients, cuisines, desserts, fruits, vegetables, meats, spices
- animal - Dogs, cats, birds, fish, horses, rabbits, insects
- sport - Sports names, teams, athletes
- music - Genres, artists, songs, instruments
- commerce - Products, adjectives, materials, departments, colors
- book - Titles, authors, publishers, genres, series, reviews
- vehicle - Manufacturers, models, types, fuel types, bicycles
- word - Adjectives, adverbs, conjunctions, interjections, nouns, prepositions, verbs
- hacker - Technical abbreviations, terms, phrases
- system - File names, file types
- science - Chemical elements, units, constants, scientific fields

### methods

List all methods available for a specific category.

```bash
nanofaker methods <category>
```

**Examples:**

```bash
# List all person methods
nanofaker methods person

# List all food methods
nanofaker methods food
```

Shows each method with a live example:

```
Available methods in 'person':

  firstName            // "John"
  lastName             // "Doe"
  fullName             // "John Doe"
  gender               // "Male"
  jobTitle             // "Software Engineer"
  prefix               // "Mr."
  suffix               // "Jr."
```

### locales

List all available locales.

```bash
nanofaker locales
```

Shows all 26 supported locales:

- af - Afrikaans
- ar - Arabic
- az - Azerbaijani
- cs - Czech
- da - Danish
- de - German
- en - English
- eo - Esperanto
- es - Spanish
- fa - Persian/Farsi
- fi - Finnish
- fr - French
- he - Hebrew
- hi - Hindi
- it - Italian
- ja - Japanese
- ko - Korean
- nl - Dutch
- no - Norwegian
- pl - Polish
- pt - Portuguese
- sv - Swedish
- tl - Filipino
- tr - Turkish
- uk - Ukrainian
- zh - Chinese

### batch

Generate multiple complete records using predefined templates.

```bash
nanofaker batch <count> [options]
```

**Options:**

- `--template <template>` - Template to use: user, product, address, company (default: user)
- `--locale <locale>` - Locale to use
- `--seed <seed>` - Seed for reproducible results

**Examples:**

```bash
# Generate 10 users
nanofaker batch 10

# Generate 5 products in Spanish
nanofaker batch 5 --template product --locale es

# Generate reproducible data
nanofaker batch 3 --template user --seed 12345
```

**Templates:**

#### user

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1-555-123-4567",
  "city": "New York",
  "country": "United States"
}
```

#### product

```json
{
  "name": "Ergonomic Wooden Chair",
  "description": "The beautiful range of...",
  "price": "123.45",
  "category": "Furniture",
  "sku": "ABC-12345-XYZ"
}
```

#### address

```json
{
  "street": "Main Street",
  "city": "New York",
  "state": "California",
  "country": "United States",
  "zipCode": "90210"
}
```

#### company

```json
{
  "name": "Tech Innovations Inc.",
  "industry": "Technology",
  "buzzword": "synergy",
  "email": "contact@techinnovations.com",
  "website": "https://techinnovations.com"
}
```

### seed

Generate data with a specific seed to demonstrate reproducibility.

```bash
nanofaker seed <seed> [options]
```

**Options:**

- `--category <category>` - Category to use (default: person)
- `--method <method>` - Method to use (default: fullName)
- `--count <count>` - Number of items to generate (default: 5)

**Examples:**

```bash
# Generate 5 names with seed
nanofaker seed 12345

# Generate 3 food dishes with seed
nanofaker seed 42 --category food --method dish --count 3
```

Running the same command again will produce the exact same results:

```bash
$ nanofaker seed 12345

Generating with seed 12345:

1. John Doe
2. Jane Smith
3. Bob Johnson
4. Alice Williams
5. Charlie Brown

Run the same command again to get the same results!
```

### version

Show the version of nanofaker.

```bash
nanofaker version
```

## Usage Examples

### Quick Data Generation

```bash
# Get a random name
nanofaker generate person fullName

# Get a random email
nanofaker generate internet email

# Get a random city
nanofaker generate address city
```

### Multiple Items

```bash
# Generate 10 names
nanofaker generate person fullName --count 10

# Generate 5 emails as JSON
nanofaker generate internet email --count 5 --json
```

### Localization

```bash
# Spanish name
nanofaker generate person fullName --locale es

# French address
nanofaker generate address city --locale fr

# Japanese food
nanofaker generate food dish --locale ja
```

### Reproducible Data

```bash
# Same seed = same results
nanofaker generate person fullName --seed 12345
nanofaker generate person fullName --seed 12345  # Same output

# Different seed = different results
nanofaker generate person fullName --seed 100
nanofaker generate person fullName --seed 200
```

### Batch Generation

```bash
# Generate 10 test users
nanofaker batch 10 > users.json

# Generate products for different locales
nanofaker batch 5 --template product --locale en > products-en.json
nanofaker batch 5 --template product --locale es > products-es.json
nanofaker batch 5 --template product --locale ja > products-ja.json
```

### Scripting

Use the CLI in shell scripts:

```bash
#!/bin/bash

# Generate test data
for i in {1..10}; do
  name=$(nanofaker generate person fullName)
  email=$(nanofaker generate internet email)
  echo "$name,$email" >> users.csv
done
```

Or with JSON output:

```bash
# Generate 100 users and save to file
nanofaker batch 100 --template user > test-data.json

# Generate products in multiple locales
for locale in en es fr de; do
  nanofaker batch 50 --template product --locale $locale > "products-$locale.json"
done
```

## Combining with jq

Use with `jq` for advanced JSON processing:

```bash
# Generate users and extract just emails
nanofaker batch 10 | jq '.[].email'

# Generate products and filter by price
nanofaker batch 100 --template product | jq '.[] | select(.price | tonumber > 500)'

# Generate addresses and format
nanofaker batch 5 --template address | jq '.[] | "\(.city), \(.state) \(.zipCode)"'
```

## Error Handling

The CLI provides helpful error messages:

```bash
# Invalid category
$ nanofaker generate invalid method
Error: Category 'invalid' not found

Available categories: person, address, company, internet, phone, ...

# Invalid method
$ nanofaker generate person invalid
Error: Method 'invalid' not found in category 'person'

Available methods in person: firstName, lastName, fullName, ...

# Invalid template
$ nanofaker batch 10 --template invalid
Error: Template 'invalid' not found

Available templates: user, product, address, company
```

## Tips

### 1. Explore Available Methods

Use the `methods` command to discover what each category offers:

```bash
nanofaker methods food
nanofaker methods animal
nanofaker methods commerce
```

### 2. Use Seeds for Testing

Seeds ensure consistent test data:

```bash
# Always get the same test user
nanofaker batch 1 --seed 42 > test-user.json
```

### 3. Pipe to Files

Save generated data to files:

```bash
nanofaker batch 1000 --template user > users.json
nanofaker generate person fullName --count 100 > names.txt
```

### 4. Combine with Other Tools

```bash
# Count unique first names
nanofaker generate person firstName --count 1000 | sort | uniq -c

# Generate CSV data
echo "name,email,city" > data.csv
for i in {1..100}; do
  nanofaker batch 1 | jq -r '.[] | [.name, .email, .city] | @csv' >> data.csv
done
```

## Global Installation

For easier access, install nanofaker globally:

```bash
npm install -g nanofaker
# or
bun add -g nanofaker
```

Then use it anywhere:

```bash
nanofaker generate person fullName
nanofaker batch 10
nanofaker methods food
```

## Shell Aliases

Create aliases for frequently used commands:

```bash
# Add to ~/.bashrc or ~/.zshrc
alias fake-name='nanofaker generate person fullName'
alias fake-email='nanofaker generate internet email'
alias fake-users='nanofaker batch 10'

# Usage
fake-name
fake-email
fake-users
```

The nanofaker CLI is a powerful tool for quickly generating test data, seeding databases, creating mock APIs, and more!
