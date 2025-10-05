# Benchmarks

Comprehensive benchmarks comparing nanofaker against other popular JavaScript/TypeScript faker libraries.

## Libraries Tested

| Library | Version | Installed Size | Files | Performance | Notes |
|---------|---------|----------------|-------|-------------|-------|
| **nanofaker** | latest | 632 KB | 37 | ⚡ Fastest | 26 locales, full coverage |
| **@faker-js/faker** | v10.0.0 | 4.9 MB | 231 | Medium | 70+ locales, partial coverage |
| **chance** | v1.1.13 | 2.6 MB | 164 | Medium | English only |
| **casual** | v1.6.2 | 584 KB | 75 | Medium | Limited locales |
| **@ngneat/falso** | v7.4.0 | 2.6 MB | 399 | Medium | TypeScript-first |

### Key Advantages

**nanofaker offers:**
- ✅ **Fastest performance** - 6.57x faster than @faker-js/faker
- ✅ **Smallest size** - 7.8x smaller than @faker-js/faker (4.3 MB savings)
- ✅ **Fewest files** - 6.2x fewer files than @faker-js/faker
- ✅ **Complete locale coverage** - 100% for all 26 languages
- ✅ **Modular architecture** - Install only what you need

## Running Benchmarks

```bash
# Install dependencies first
bun install

# Run all benchmarks
bun run bench

# From monorepo root
bun run --filter @nanofaker/benchmarks bench
```

## Benchmark Categories

### 1. Full Name Generation
Tests the performance of generating random full names.

### 2. Email Generation
Tests the performance of generating random email addresses.

### 3. Phone Number Generation
Tests the performance of generating random phone numbers.

### 4. City Generation
Tests the performance of generating random city names.

### 5. Country Generation
Tests the performance of generating random country names.

### 6. Company Name Generation
Tests the performance of generating random company names.

### 7. Product Generation
Tests the performance of generating random product names.

### 8. UUID Generation
Tests the performance of generating random UUIDs.

### 9. Complex User Object
Tests the performance of generating 10,000 complete user objects with multiple fields:
- Full Name
- Email
- Phone Number
- City
- Country

## Understanding Results

Results show:
- **ops/s** - Operations per second (higher is better)
- **avg time** - Average execution time per operation (lower is better)
- **margin** - Relative margin of error
- **speedup** - How many times faster/slower compared to the fastest

The fastest library in each category is highlighted in green.

## Benchmark Environment

- **Runtime**: Bun (latest)
- **Warmup**: Yes (automatic)
- **Iterations**: Automatic (based on time budget)
- **Time per benchmark**: 1000ms minimum

## Results Interpretation

nanofaker is optimized for:
- ⚡ **Raw speed** - Direct array access, minimal overhead
- 📦 **Bundle size** - Modular locale packages, tree-shakeable
- 🎯 **Type safety** - Full TypeScript support
- 🌍 **Locale coverage** - 100% coverage for all 26 languages

Trade-offs:
- Fewer total locales than @faker-js/faker (26 vs 70+)
- Less extensive API surface (focused on common use cases)
- Newer library (smaller ecosystem)

## Contributing

To add more benchmarks:

1. Edit `src/index.ts`
2. Add new benchmark category using `Bench`
3. Add all library implementations
4. Run `bun run bench` to verify

## License

MIT
