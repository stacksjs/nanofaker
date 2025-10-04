import type { Random } from '../random'

export class WordModule {
  constructor(private random: Random) {}

  /**
   * Generate an adjective
   * @example faker.word.adjective() // 'beautiful'
   */
  adjective(): string {
    const adjectives = [
      'beautiful', 'happy', 'sad', 'quick', 'slow', 'big', 'small', 'tall', 'short', 'long',
      'wide', 'narrow', 'thick', 'thin', 'heavy', 'light', 'hard', 'soft', 'hot', 'cold',
      'warm', 'cool', 'bright', 'dark', 'loud', 'quiet', 'strong', 'weak', 'clean', 'dirty',
      'new', 'old', 'young', 'fresh', 'dry', 'wet', 'smooth', 'rough', 'sharp', 'dull',
      'simple', 'complex', 'easy', 'difficult', 'good', 'bad', 'right', 'wrong', 'true', 'false',
    ]
    return this.random.arrayElement(adjectives)
  }

  /**
   * Generate an adverb
   * @example faker.word.adverb() // 'quickly'
   */
  adverb(): string {
    const adverbs = [
      'quickly', 'slowly', 'carefully', 'easily', 'hardly', 'loudly', 'quietly', 'suddenly',
      'finally', 'really', 'very', 'completely', 'absolutely', 'perfectly', 'badly', 'well',
      'almost', 'always', 'never', 'often', 'rarely', 'sometimes', 'usually', 'frequently',
      'occasionally', 'immediately', 'instantly', 'eventually', 'probably', 'possibly',
    ]
    return this.random.arrayElement(adverbs)
  }

  /**
   * Generate a conjunction
   * @example faker.word.conjunction() // 'and'
   */
  conjunction(): string {
    const conjunctions = [
      'and', 'but', 'or', 'nor', 'for', 'yet', 'so', 'although', 'because', 'since',
      'unless', 'while', 'where', 'if', 'than', 'when', 'after', 'before', 'until',
    ]
    return this.random.arrayElement(conjunctions)
  }

  /**
   * Generate an interjection
   * @example faker.word.interjection() // 'wow'
   */
  interjection(): string {
    const interjections = [
      'wow', 'oh', 'ah', 'hey', 'oops', 'ouch', 'yay', 'hooray', 'alas', 'bravo',
      'hello', 'goodbye', 'yes', 'no', 'well', 'hmm', 'uh', 'er', 'um',
    ]
    return this.random.arrayElement(interjections)
  }

  /**
   * Generate a noun
   * @example faker.word.noun() // 'table'
   */
  noun(): string {
    const nouns = [
      'table', 'chair', 'book', 'pen', 'computer', 'phone', 'door', 'window', 'car', 'house',
      'tree', 'flower', 'dog', 'cat', 'bird', 'fish', 'water', 'air', 'fire', 'earth',
      'mountain', 'river', 'ocean', 'sky', 'sun', 'moon', 'star', 'cloud', 'rain', 'snow',
      'person', 'man', 'woman', 'child', 'friend', 'family', 'food', 'music', 'art', 'book',
      'school', 'work', 'time', 'day', 'night', 'morning', 'evening', 'world', 'life', 'love',
    ]
    return this.random.arrayElement(nouns)
  }

  /**
   * Generate a preposition
   * @example faker.word.preposition() // 'in'
   */
  preposition(): string {
    const prepositions = [
      'in', 'on', 'at', 'by', 'for', 'with', 'from', 'to', 'of', 'about', 'under', 'over',
      'above', 'below', 'between', 'through', 'during', 'before', 'after', 'against', 'among',
      'into', 'onto', 'upon', 'within', 'without', 'toward', 'near', 'beside', 'behind',
    ]
    return this.random.arrayElement(prepositions)
  }

  /**
   * Generate a verb
   * @example faker.word.verb() // 'run'
   */
  verb(): string {
    const verbs = [
      'run', 'walk', 'jump', 'swim', 'fly', 'eat', 'drink', 'sleep', 'work', 'play',
      'read', 'write', 'speak', 'listen', 'watch', 'look', 'see', 'hear', 'think', 'know',
      'want', 'like', 'love', 'hate', 'need', 'make', 'take', 'give', 'get', 'put',
      'come', 'go', 'say', 'tell', 'ask', 'answer', 'help', 'start', 'stop', 'begin',
      'end', 'open', 'close', 'show', 'hide', 'find', 'lose', 'buy', 'sell', 'learn',
    ]
    return this.random.arrayElement(verbs)
  }

  /**
   * Generate a sample word
   * @example faker.word.sample() // 'beautiful'
   */
  sample(): string {
    const types = ['adjective', 'adverb', 'conjunction', 'interjection', 'noun', 'preposition', 'verb']
    const type = this.random.arrayElement(types) as keyof WordModule

    return this[type]() as string
  }

  /**
   * Generate multiple words
   * @example faker.word.words() // 'beautiful table run'
   */
  words(count = 3): string {
    const words: string[] = []
    for (let i = 0; i < count; i++) {
      words.push(this.sample())
    }
    return words.join(' ')
  }
}
