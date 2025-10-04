import type { Random } from '../random'

const LOREM_WORDS = [
  'lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'sed',
  'do',
  'eiusmod',
  'tempor',
  'incididunt',
  'ut',
  'labore',
  'et',
  'dolore',
  'magna',
  'aliqua',
  'enim',
  'ad',
  'minim',
  'veniam',
  'quis',
  'nostrud',
  'exercitation',
  'ullamco',
  'laboris',
  'nisi',
  'aliquip',
  'ex',
  'ea',
  'commodo',
  'consequat',
  'duis',
  'aute',
  'irure',
  'in',
  'reprehenderit',
  'voluptate',
  'velit',
  'esse',
  'cillum',
  'fugiat',
  'nulla',
  'pariatur',
  'excepteur',
  'sint',
  'occaecat',
  'cupidatat',
  'non',
  'proident',
  'sunt',
  'culpa',
  'qui',
  'officia',
  'deserunt',
  'mollit',
  'anim',
  'id',
  'est',
  'laborum',
]

export class LoremModule {
  constructor(private random: Random) {}

  /**
   * Generate a single lorem word
   * @example faker.lorem.word() // 'lorem'
   */
  word(): string {
    return this.random.arrayElement(LOREM_WORDS)
  }

  /**
   * Generate multiple lorem words
   * @example faker.lorem.words(5) // 'lorem ipsum dolor sit amet'
   */
  words(count = 3): string {
    const words: string[] = []
    for (let i = 0; i < count; i++) {
      words.push(this.word())
    }
    return words.join(' ')
  }

  /**
   * Generate a lorem sentence
   * @example faker.lorem.sentence() // 'Lorem ipsum dolor sit amet.'
   */
  sentence(wordCount?: number): string {
    const count = wordCount ?? this.random.int(3, 10)
    const words = this.words(count)
    return `${words.charAt(0).toUpperCase() + words.slice(1)}.`
  }

  /**
   * Generate multiple lorem sentences
   * @example faker.lorem.sentences(3) // 'Lorem ipsum. Dolor sit amet. Consectetur adipiscing elit.'
   */
  sentences(count = 3, separator = ' '): string {
    const sentences: string[] = []
    for (let i = 0; i < count; i++) {
      sentences.push(this.sentence())
    }
    return sentences.join(separator)
  }

  /**
   * Generate a lorem paragraph
   * @example faker.lorem.paragraph() // 'Lorem ipsum dolor sit amet...'
   */
  paragraph(sentenceCount?: number): string {
    const count = sentenceCount ?? this.random.int(3, 7)
    return this.sentences(count)
  }

  /**
   * Generate multiple lorem paragraphs
   * @example faker.lorem.paragraphs(3) // 'Lorem ipsum...\n\nDolor sit...\n\nConsectetur...'
   */
  paragraphs(count = 3, separator = '\n\n'): string {
    const paragraphs: string[] = []
    for (let i = 0; i < count; i++) {
      paragraphs.push(this.paragraph())
    }
    return paragraphs.join(separator)
  }

  /**
   * Generate lorem text of specified length
   * @example faker.lorem.text() // 'Lorem ipsum dolor sit amet...'
   */
  text(length?: number): string {
    const targetLength = length ?? 200
    let result = ''

    while (result.length < targetLength) {
      result += `${this.paragraph()} `
    }

    return result.trim().slice(0, targetLength)
  }

  /**
   * Generate a lorem slug
   * @example faker.lorem.slug() // 'lorem-ipsum-dolor'
   */
  slug(wordCount = 3): string {
    return this.words(wordCount).replace(/ /g, '-')
  }

  /**
   * Generate lorem lines
   * @example faker.lorem.lines() // 'Lorem ipsum\nDolor sit\nAmet consectetur'
   */
  lines(count = 3): string {
    const lines: string[] = []
    for (let i = 0; i < count; i++) {
      lines.push(this.sentence())
    }
    return lines.join('\n')
  }
}
