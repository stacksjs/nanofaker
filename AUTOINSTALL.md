# 🚀 Auto-Install Locale Packages

Nanofaker now supports **automatic installation** of locale packages! When enabled, nanofaker will automatically install missing locale packages when you try to use them.

## Quick Start

### Enable in Config File

Create `faker.config.ts`:

```typescript
export default {
  autoInstallLocales: true,
}
```

### Or Enable Programmatically

```typescript
import { Faker } from 'nanofaker'

const faker = await Faker.create({
  locale: 'es',
  autoInstallLocales: true  // 👈 Enable auto-install
})
```

## What Happens?

### Without Auto-Install (Default)
```typescript
const faker = await Faker.create({ locale: 'es' })
// ❌ Error: Locale 'es' is not installed.
// Install it with: bun add @nanofaker/locale-es
```

### With Auto-Install Enabled
```typescript
const faker = await Faker.create({
  locale: 'es',
  autoInstallLocales: true
})
// 🔍 Locale 'es' not found. Auto-installing @nanofaker/locale-es...
// 📦 Installing @nanofaker/locale-es using bun...
// ✓ Successfully installed @nanofaker/locale-es
// ✅ Works immediately!
```

## Package Manager Detection

Automatically detects and uses your package manager:
- `bun.lockb` → `bun add`
- `pnpm-lock.yaml` → `pnpm add`
- `yarn.lock` → `yarn add`
- `package-lock.json` → `npm install`

## Full Example

```typescript
import { Faker } from 'nanofaker'

// Enable auto-install for all Faker instances
const faker = await Faker.create({
  autoInstallLocales: true
})

// Switch locales on the fly - installs if needed
await faker.setLocale('fr')  // Auto-installs @nanofaker/locale-fr
console.log(faker.person.firstName())  // "Pierre"

await faker.setLocale('de')  // Auto-installs @nanofaker/locale-de
console.log(faker.person.firstName())  // "Hans"

await faker.setLocale('ja')  // Auto-installs @nanofaker/locale-ja
console.log(faker.person.firstName())  // "太郎"
```

## Benefits

✅ **Developer Experience**: No manual package management
✅ **Lazy Loading**: Only install what you need
✅ **Zero Config**: Works out of the box
✅ **Safe**: Only installs official @nanofaker packages
✅ **Smart Caching**: Installs once, uses forever

## When to Use

### ✅ Great for:
- Local development
- Prototyping
- Quick scripts
- Interactive tools

### ⚠️ Consider manual install for:
- CI/CD pipelines
- Production deployments
- Locked dependency requirements

## Manual Installation (Alternative)

You can always install packages manually:

```bash
# Single locale
bun add @nanofaker/locale-es

# Multiple locales
bun add @nanofaker/locale-{es,fr,de,ja}

# All locales
bun add @nanofaker/locale-{cs,da,de,en,es,fi,fr,hi,it,ja,ko,nl,no,pl,pt,sv,tl,tr,uk,zh}
```

## See Also

- [Full Documentation](./docs/features/auto-install.md)
- [Example Code](./examples/auto-install-demo.ts)
- [Config Reference](./faker.config.example.ts)
