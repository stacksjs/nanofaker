# Auto-Install Locale Packages

ts-mocker can automatically install missing locale packages when you try to use them. This feature makes it easier to work with different locales without manually managing dependencies.

## Configuration

### Method 1: Config File (Recommended)

Create a `mock.config.ts` file in your project root:

```typescript
import type { MockConfig } from 'ts-mocker'

export default {
  autoInstallLocales: true,
  locale: 'en',
  verbose: false,
} satisfies MockConfig
```

_Alternatively, you could also use the alias `faker.config.ts` if you prefer._

### Method 2: Programmatic

Enable auto-install when creating a Faker instance:

```typescript
import { Faker } from 'ts-mocker'

// Using the async factory
const faker = await Faker.create({
  locale: 'es',
  autoInstallLocales: true
})

// Or with the constructor
const faker = new Faker({
  locale: 'es',
  autoInstallLocales: true
})
```

## How It Works

When you try to use a locale that isn't installed:

1. **Without auto-install** (default):

   ```
   Error: Locale 'es' is not installed.
   Install it with: bun add @mock-locale/es
   Or enable auto-install in your mock.config.ts
   ```

2. **With auto-install enabled**:

   ```
   🔍 Locale 'es' not found. Auto-installing @mock-locale/es...
   📦 Installing @mock-locale/es using bun...
   ✓ Successfully installed @mock-locale/es
   ```

## Package Manager Detection

ts-mocker automatically detects your package manager based on lock files:

- `bun.lockb` → uses `bun add`
- `pnpm-lock.yaml` → uses `pnpm add`
- `yarn.lock` → uses `yarn add`
- `package-lock.json` → uses `npm install`
- No lock file → defaults to `bun add`

## Example

```typescript
import { Faker } from 'ts-mocker'

async function main() {
  // First time: installs @mock-locale/fr
  const frenchFaker = await Faker.create({
    locale: 'fr',
    autoInstallLocales: true
  })
  console.log(frenchFaker.person.fullName())

  // Second time: uses cached locale (no installation)
  const anotherFrenchFaker = await Faker.create({ locale: 'fr' })
  console.log(anotherFrenchFaker.person.fullName())
}

main()
```

## Manual Installation

You can always manually install locale packages:

```bash
# Install a specific locale
bun add @mock-locale/es

# Install multiple locales
bun add @mock-locale/{es,fr,de}

# Install all locales
bun add @mock-locale/{cs,da,de,en,es,fi,fr,hi,it,ja,ko,nl,no,pl,pt,sv,tl,tr,uk,zh}
```

## Performance Considerations

- **First use**: Includes installation time (a few seconds)
- **Subsequent uses**: Instant (locale is cached)
- **English (en)**: Always bundled, never needs installation

## CI/CD Environments

In CI/CD environments, it's recommended to:

1. Pre-install required locales in your package.json
2. Or set `autoInstallLocales: false` and install manually
3. Lock files ensure consistent installations

## Security

Auto-install only works for official `@mock-locale/*` packages published by the `ts-mocker` team. It will not install arbitrary packages.
