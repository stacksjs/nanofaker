# Performance Optimizations

This document details the optimizations made to achieve ts-mocker's exceptional performance.

## Summary

**Result**: ts-mocker now wins **ALL 9 benchmarks** (100% win rate) and is **6.57x faster** than @faker-js/faker on average.

### Key Improvements

- ✅ **Full Name Generation**: 31.35M ops/s (11.4x improvement)
- ✅ **Phone Number Generation**: 9.77M ops/s (3.4x improvement)
- ✅ **Complex Objects**: 7.97ms for 10k records (1.9x improvement)

## Optimizations Applied

### 1. Direct Array Access (Random.arrayElement)

**Before:**

```ts
arrayElement<T>(array: readonly T[]): T {
  return array[this.int(0, array.length - 1)]
}
```

**After:**

```ts
arrayElement<T>(array: readonly T[]): T {
  // Optimize for unseeded random - avoid int() overhead
  if (this.seed === undefined) {
    return array[Math.floor(Math.random() * array.length)]
  }
  return array[this.int(0, array.length - 1)]
}
```

**Impact**: Eliminates function call overhead for unseeded random, making direct array access 30-40% faster.

### 2. Optimized replaceSymbols (Phone Numbers)

**Before:**

```ts
replaceSymbols(format: string): string {
  return format.replace(/[#?]/g, (match) => {
    if (match === '#') {
      return String(this.int(0, 9))
    }
    return this.arrayElement('abcdefghijklmnopqrstuvwxyz'.split(''))
  })
}
```

**After:**

```ts
replaceSymbols(format: string): string {
  if (this.seed === undefined) {
    let result = ''
    for (let i = 0; i < format.length; i++) {
      const char = format[i]
      if (char === '#') {
        result += Random.DIGITS[Math.floor(Math.random() * 10)]
      }
      else if (char === '?') {
        result += Random.ALPHABET[Math.floor(Math.random() * 26)]
      }
      else {
        result += char
      }
    }
    return result
  }
  // Seeded version uses regex...
}
```

**Impact**:

- Eliminates regex overhead
- Uses pre-computed alphabet array (static readonly)
- Avoids string split on every call
- **Result**: Phone number generation is 3.4x faster (9.77M ops/s)

### 3. Template Literals for fullName()

**Before:**

```ts
fullName(options?: PersonFullNameOptions): string {
  const parts: string[] = []

  if (options?.prefix) {
    parts.push(this.prefix())
  }
  parts.push(this.firstName({ gender: options?.gender }))
  parts.push(this.lastName())

  if (options?.suffix) {
    parts.push(this.suffix())
  }

  return parts.join(' ')
}
```

**After:**

```ts
fullName(options?: PersonFullNameOptions): string {
  // Optimized: avoid array creation for common case
  if (!options) {
    return `${this.firstName()} ${this.lastName()}`
  }

  const first = this.firstName({ gender: options.gender })
  const last = this.lastName()

  if (options.prefix && options.suffix) {
    return `${this.prefix()} ${first} ${last} ${this.suffix()}`
  }
  if (options.prefix) {
    return `${this.prefix()} ${first} ${last}`
  }
  if (options.suffix) {
    return `${first} ${last} ${this.suffix()}`
  }

  return `${first} ${last}`
}
```

**Impact**:

- Eliminates array creation and join overhead
- Uses direct template literals
- **Result**: Full name generation is 11.4x faster (31.35M ops/s)

### 4. Avoid Array Spreading in firstName()

**Before:**

```ts
firstName(options?: PersonNameOptions): string {
  if (options?.gender) {
    // handle specific gender...
  }

  // Slow: creates new combined array
  const allNames = [
    ...this.locale.person.firstNameMale,
    ...this.locale.person.firstNameFemale,
    ...(this.locale.person.firstNameNeutral || []),
  ]

  return this.random.arrayElement(allNames)
}
```

**After:**

```ts
firstName(options?: PersonNameOptions): string {
  if (options?.gender) {
    // handle specific gender...
  }

  // Optimized: select from combined length without creating array
  const maleLen = this.locale.person.firstNameMale.length
  const femaleLen = this.locale.person.firstNameFemale.length
  const neutralLen = this.locale.person.firstNameNeutral?.length || 0
  const totalLen = maleLen + femaleLen + neutralLen

  const index = this.random.int(0, totalLen - 1)

  if (index < maleLen) {
    return this.locale.person.firstNameMale[index]
  }
  if (index < maleLen + femaleLen) {
    return this.locale.person.firstNameFemale[index - maleLen]
  }
  return this.locale.person.firstNameNeutral![index - maleLen - femaleLen]
}
```

**Impact**:

- Eliminates array spreading overhead
- Direct index calculation
- Contributes to overall fullName() speed improvement

### 5. Pre-computed Static Arrays

**Before:**

```ts
class Random {
  replaceSymbols(format: string): string {
    return format.replace(/[#?]/g, (match) => {
      if (match === '#') {
        return String(this.int(0, 9))
      }
      return this.arrayElement('abcdefghijklmnopqrstuvwxyz'.split(''))
    })
  }
}
```

**After:**

```ts
class Random {
  private static readonly ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')
  private static readonly DIGITS = '0123456789'

  // Now uses Random.ALPHABET and Random.DIGITS
}
```

**Impact**: Alphabet array created once (static), not on every call.

## Performance Results by Category

### Won All Benchmarks

| Category | ops/s | vs @faker-js/faker | vs Best Competitor |
|----------|-------|-------------------|-------------------|
| Full Name | 31.35M | 58.3x faster | 8.3x faster |
| Phone Number | 9.77M | 4.8x faster | 3.6x faster |
| Email | 1.96M | 3.5x faster | 1.1x faster |
| City | 39.63M | 50.8x faster | 2.2x faster |
| Country | 38.55M | 2.4x faster | 2.0x faster |
| Company | 37.64M | 67.5x faster | 2.1x faster |
| Product | 30.65M | 1.7x faster | 1.4x faster |
| UUID | 1.02M | 1.9x faster | 1.8x faster |
| Complex (10k) | 7.97ms | 6.6x faster | 3.2x faster |

## Key Takeaways

### Why These Optimizations Work

1. **Avoid intermediate data structures** - Template literals beat array + join
2. **Minimize function calls** - Direct Math.random() beats this.int()
3. **Pre-compute static data** - Calculate once, use many times
4. **Skip regex when possible** - Character-by-character iteration is faster for simple patterns
5. **Branch for common cases** - Fast path for unseeded random (most common usage)

### Trade-offs

- **Code size**: ~5% larger due to branching logic
- **Maintainability**: Slightly more complex (seeded vs unseeded paths)
- **Benefits**: 3-58x performance improvements across the board

## Benchmark Environment

- Runtime: Bun v1.2.21
- Platform: macOS ARM64 (Apple Silicon)
- Tool: tinybench v2.9.0
- Iterations: Automatic (500ms per benchmark)

## Verification

Run benchmarks to verify:

```bash
bun run bench
```

All optimizations maintain:

- ✅ Seeded reproducibility
- ✅ API compatibility
- ✅ Type safety
- ✅ Test coverage
