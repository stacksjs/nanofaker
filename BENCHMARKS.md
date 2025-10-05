# Performance Benchmarks

Comprehensive benchmarks comparing ts-mocker against other popular JavaScript/TypeScript faker libraries.

## Latest Results

**Environment:**

- Runtime: Bun v1.2.21
- Platform: macOS ARM64 (Apple Silicon)
- Date: 2025-10-04

## Summary

✅ **ts-mocker won 9 out of 9 benchmarks**
⚡ **6.57x faster than @faker-js/faker on average**

## Detailed Results

### 📛 Full Name Generation

| Library | ops/s | avg time | margin | vs fastest |
|---------|-------|----------|--------|------------|
| **ts-mocker** | 31.35M ops/s | 0.0319ms | ±0.47% | **(fastest)** ✅ |
| @ngneat/falso | 3.76M ops/s | 0.2659ms | ±0.95% | 0.12x |
| casual | 2.61M ops/s | 0.3833ms | ±0.96% | 0.08x |
| chance | 2.56M ops/s | 0.3900ms | ±1.01% | 0.08x |
| @faker-js/faker | 537.95K ops/s | 1.8589ms | ±1.40% | 0.02x |

### 📧 Email Generation

| Library | ops/s | avg time | margin | vs fastest |
|---------|-------|----------|--------|------------|
| **ts-mocker** | 1.96M ops/s | 0.5098ms | ±1.43% | **(fastest)** ✅ |
| @ngneat/falso | 1.81M ops/s | 0.5512ms | ±1.12% | 0.92x |
| casual | 1.09M ops/s | 0.9172ms | ±0.79% | 0.56x |
| chance | 849.49K ops/s | 1.1772ms | ±1.43% | 0.43x |
| @faker-js/faker | 567.44K ops/s | 1.7623ms | ±1.16% | 0.29x |

### 📞 Phone Number Generation

| Library | ops/s | avg time | margin | vs fastest |
|---------|-------|----------|--------|------------|
| **ts-mocker** | 9.77M ops/s | 0.1024ms | ±1.13% | **(fastest)** ✅ |
| chance | 2.68M ops/s | 0.3735ms | ±1.21% | 0.27x |
| @faker-js/faker | 2.05M ops/s | 0.4869ms | ±0.99% | 0.21x |
| casual | 1.23M ops/s | 0.8117ms | ±0.61% | 0.13x |
| @ngneat/falso | 470.39K ops/s | 2.1259ms | ±0.87% | 0.05x |

### 🏙️ City Generation

| Library | ops/s | avg time | margin | vs fastest |
|---------|-------|----------|--------|------------|
| **ts-mocker** | 39.63M ops/s | 0.0252ms | ±0.58% | **(fastest)** ✅ |
| @ngneat/falso | 18.13M ops/s | 0.0552ms | ±1.20% | 0.46x |
| casual | 1.99M ops/s | 0.5020ms | ±0.89% | 0.05x |
| chance | 1.12M ops/s | 0.8969ms | ±1.19% | 0.03x |
| @faker-js/faker | 779.69K ops/s | 1.2826ms | ±1.29% | 0.02x |

### 🌍 Country Generation

| Library | ops/s | avg time | margin | vs fastest |
|---------|-------|----------|--------|------------|
| **ts-mocker** | 38.55M ops/s | 0.0259ms | ±0.71% | **(fastest)** ✅ |
| casual | 18.98M ops/s | 0.0527ms | ±1.08% | 0.49x |
| @ngneat/falso | 17.93M ops/s | 0.0558ms | ±1.14% | 0.46x |
| @faker-js/faker | 15.83M ops/s | 0.0632ms | ±0.80% | 0.41x |
| chance | 2.53M ops/s | 0.3946ms | ±1.47% | 0.07x |

### 🏢 Company Name Generation

| Library | ops/s | avg time | margin | vs fastest |
|---------|-------|----------|--------|------------|
| **ts-mocker** | 37.64M ops/s | 0.0266ms | ±1.15% | **(fastest)** ✅ |
| @ngneat/falso | 17.78M ops/s | 0.0562ms | ±1.09% | 0.47x |
| casual | 2.32M ops/s | 0.4317ms | ±0.99% | 0.06x |
| chance | 800.45K ops/s | 1.2493ms | ±1.61% | 0.02x |
| @faker-js/faker | 557.33K ops/s | 1.7943ms | ±1.66% | 0.01x |

### 🛍️ Product Generation

| Library | ops/s | avg time | margin | vs fastest |
|---------|-------|----------|--------|------------|
| **ts-mocker** | 30.65M ops/s | 0.0326ms | ±0.98% | **(fastest)** ✅ |
| casual | 21.34M ops/s | 0.0469ms | ±0.65% | 0.70x |
| @faker-js/faker | 17.78M ops/s | 0.0562ms | ±0.49% | 0.58x |
| @ngneat/falso | 365.26K ops/s | 2.7378ms | ±0.83% | 0.01x |

### 🔑 UUID Generation

| Library | ops/s | avg time | margin | vs fastest |
|---------|-------|----------|--------|------------|
| **ts-mocker** | 1.02M ops/s | 0.9849ms | ±0.26% | **(fastest)** ✅ |
| @ngneat/falso | 555.23K ops/s | 1.8011ms | ±0.52% | 0.55x |
| @faker-js/faker | 531.61K ops/s | 1.8811ms | ±0.55% | 0.52x |
| casual | 464.73K ops/s | 2.1518ms | ±0.53% | 0.46x |
| chance | 428.55K ops/s | 2.3335ms | ±0.78% | 0.42x |

### 📊 Complex User Object (10,000 records)

Generates 10,000 complete user objects with:

- Full Name
- Email
- Phone Number
- City
- Country

| Library | Total Time | μs/record | vs fastest |
|---------|------------|-----------|------------|
| **ts-mocker** | 7.97ms | 0.7975μs | **(fastest)** ✅ |
| casual | 25.44ms | 2.5442μs | 0.31x |
| @ngneat/falso | 28.64ms | 2.8644μs | 0.28x |
| chance | 33.12ms | 3.3117μs | 0.24x |
| @faker-js/faker | 52.39ms | 5.2394μs | 0.15x |

## Libraries Tested

| Library | Version | Published Size | Files |
|---------|---------|----------------|-------|
| **ts-mocker** | (core) | **174 KB** | **38** |
| **casual** | v1.6.2 | 408 KB | 75 |
| **@ngneat/falso** | v7.4.0 | 1.16 MB | 399 |
| **chance** | v1.1.13 | 2.08 MB | 164 |
| **@faker-js/faker** | v10.0.0 | 4.29 MB | 231 |

### Package Size Advantages

ts-mocker is **dramatically smaller** than all competitors:

- **24.7x smaller** than @faker-js/faker (saves 4.12 MB)
- **12.0x smaller** than chance (saves 1.91 MB)
- **6.7x smaller** than @ngneat/falso (saves 1.01 MB)
- **2.4x smaller** than casual (saves 234 KB)

Even compared to the smallest competitor (casual), ts-mocker is **2.4x smaller** while offering 26 full locales vs limited support.

📦 See [PACKAGE-SIZES.md](./PACKAGE-SIZES.md) for detailed size comparison and analysis.

## Key Takeaways

### Where ts-mocker Excels

1. **Full name generation** - 31.35M ops/s (8.3x faster than nearest competitor)
2. **Phone number generation** - 9.77M ops/s (3.6x faster than nearest competitor)
3. **Simple data types** (City, Country, Company, Product) - 30-40M ops/s
4. **Email generation** - 1.96M ops/s (fastest)
5. **Complex objects** - 6.57x faster than @faker-js/faker
6. **Consistency** - Low margin of error (±0.47-1.43%)
7. **100% win rate** - Fastest in ALL categories

### Performance vs @faker-js/faker

ts-mocker is significantly faster across all categories:

- **Full Name**: 58.3x faster
- **Phone Number**: 4.8x faster
- **City**: 50.8x faster
- **Country**: 2.4x faster
- **Company**: 67.5x faster
- **Product**: 1.7x faster
- **UUID**: 1.9x faster
- **Email**: 3.5x faster
- **Complex Objects**: 6.6x faster

### Average improvement: 6.57x faster

## Running Benchmarks

```bash
# From repository root
bun run bench

# From benchmarks package
cd packages/benchmarks
bun run bench
```

## Benchmark Configuration

- **Time per benchmark**: 500ms
- **Warmup**: Yes (automatic)
- **Iterations**: Automatic (based on time budget)
- **Benchmarking library**: tinybench v2.9.0

## Why ts-mocker is Fast

1. **Direct array access** - O(1) constant-time lookups
2. **Minimal overhead** - Lightweight abstraction layer
3. **No complex computations** - Simple random selection
4. **Efficient data structures** - Optimized locale data
5. **Modern JavaScript** - Uses latest ES features
6. **Tree-shakeable** - Only load what you use

## Contributing

To update benchmarks or add new tests:

1. Edit `packages/benchmarks/src/index.ts`
2. Run `bun run bench` to verify
3. Update this file with new results

## License

MIT
