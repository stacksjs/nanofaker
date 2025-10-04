import type { Random } from '../random'
import type { LocaleDefinition } from '../types'

export class BookModule {
  constructor(
    private random: Random,
    private locale?: LocaleDefinition,
  ) {}

  /**
   * Generate a book title
   * @example faker.book.title() // 'To Kill a Mockingbird'
   */
  title(): string {
    if (this.locale?.book?.title) {
      return this.random.arrayElement(this.locale.book.title)
    }

    const titles = [
      'To Kill a Mockingbird',
      '1984',
      'Pride and Prejudice',
      'The Great Gatsby',
      'Moby Dick',
      'War and Peace',
      'The Odyssey',
      'The Catcher in the Rye',
      'The Lord of the Rings',
      'Harry Potter and the Sorcerer\'s Stone',
      'The Hobbit',
      'The Chronicles of Narnia',
      'Brave New World',
      'The Divine Comedy',
      'Crime and Punishment',
      'The Brothers Karamazov',
      'One Hundred Years of Solitude',
      'The Sound and the Fury',
      'Invisible Man',
      'Beloved',
      'The Grapes of Wrath',
      'Catch-22',
      'Slaughterhouse-Five',
      'Fahrenheit 451',
      'The Handmaid\'s Tale',
      'The Road',
      'Life of Pi',
      'The Kite Runner',
      'The Book Thief',
    ]
    return this.random.arrayElement(titles)
  }

  /**
   * Generate an author name
   * @example faker.book.author() // 'Ernest Hemingway'
   */
  author(): string {
    if (this.locale?.book?.author) {
      return this.random.arrayElement(this.locale.book.author)
    }

    const authors = [
      'Ernest Hemingway',
      'F. Scott Fitzgerald',
      'Jane Austen',
      'Charles Dickens',
      'Mark Twain',
      'Leo Tolstoy',
      'Fyodor Dostoevsky',
      'George Orwell',
      'J.R.R. Tolkien',
      'J.K. Rowling',
      'Stephen King',
      'Agatha Christie',
      'William Shakespeare',
      'Edgar Allan Poe',
      'Harper Lee',
      'Maya Angelou',
      'Toni Morrison',
      'Gabriel García Márquez',
      'Franz Kafka',
      'James Joyce',
      'Virginia Woolf',
      'Oscar Wilde',
      'Emily Dickinson',
      'Walt Whitman',
      'Robert Frost',
      'Sylvia Plath',
      'Kurt Vonnegut',
      'Margaret Atwood',
      'Haruki Murakami',
      'Chimamanda Ngozi Adichie',
    ]
    return this.random.arrayElement(authors)
  }

  /**
   * Generate a publisher
   * @example faker.book.publisher() // 'Penguin Random House'
   */
  publisher(): string {
    if (this.locale?.book?.publisher) {
      return this.random.arrayElement(this.locale.book.publisher)
    }

    const publishers = [
      'Penguin Random House',
      'HarperCollins',
      'Simon & Schuster',
      'Macmillan',
      'Hachette',
      'Scholastic',
      'Oxford University Press',
      'Cambridge University Press',
      'Pearson',
      'Wiley',
      'Springer',
      'McGraw-Hill',
      'Bloomsbury',
      'Vintage',
      'Doubleday',
      'Knopf',
    ]
    return this.random.arrayElement(publishers)
  }

  /**
   * Generate a genre
   * @example faker.book.genre() // 'Mystery'
   */
  genre(): string {
    if (this.locale?.book?.genre) {
      return this.random.arrayElement(this.locale.book.genre)
    }

    const genres = [
      'Fiction',
      'Non-Fiction',
      'Mystery',
      'Thriller',
      'Romance',
      'Science Fiction',
      'Fantasy',
      'Horror',
      'Historical Fiction',
      'Biography',
      'Autobiography',
      'Self-Help',
      'Poetry',
      'Drama',
      'Comedy',
      'Adventure',
      'Young Adult',
      'Children\'s',
      'Crime',
      'Western',
      'Dystopian',
      'Paranormal',
      'Contemporary',
      'Classic',
      'Literary Fiction',
    ]
    return this.random.arrayElement(genres)
  }

  /**
   * Generate a series name
   * @example faker.book.series() // 'Harry Potter'
   */
  series(): string {
    if (this.locale?.book?.series) {
      return this.random.arrayElement(this.locale.book.series)
    }

    const series = [
      'Harry Potter',
      'The Lord of the Rings',
      'A Song of Ice and Fire',
      'The Hunger Games',
      'Twilight',
      'The Chronicles of Narnia',
      'Percy Jackson',
      'The Maze Runner',
      'Divergent',
      'The Mortal Instruments',
      'Sherlock Holmes',
      'Discworld',
      'Dune',
      'Foundation',
      'The Wheel of Time',
      'The Witcher',
      'Millennium',
      'Jack Reacher',
    ]
    return this.random.arrayElement(series)
  }

  /**
   * Generate an ISBN
   * @example faker.book.isbn() // '978-1-234-56789-0'
   */
  isbn(): string {
    const isbn10 = this.random.boolean(0.5)

    if (isbn10) {
      // ISBN-10 format
      const digits = Array.from({ length: 9 }, () => this.random.int(0, 9))
      const checksum = this.random.int(0, 10) === 10 ? 'X' : String(this.random.int(0, 9))
      return `${digits.slice(0, 1).join('')}-${digits.slice(1, 4).join('')}-${digits.slice(4, 9).join('')}-${checksum}`
    }

    // ISBN-13 format
    const prefix = '978'
    const group = this.random.int(0, 9)
    const publisher = Array.from({ length: 3 }, () => this.random.int(0, 9)).join('')
    const title = Array.from({ length: 5 }, () => this.random.int(0, 9)).join('')
    const checksum = this.random.int(0, 9)

    return `${prefix}-${group}-${publisher}-${title}-${checksum}`
  }

  /**
   * Generate a format/binding type
   * @example faker.book.format() // 'Hardcover'
   */
  format(): string {
    const formats = [
      'Hardcover',
      'Paperback',
      'Mass Market Paperback',
      'eBook',
      'Audiobook',
      'Kindle',
      'PDF',
      'EPUB',
      'Board Book',
      'Leather Bound',
      'Library Binding',
    ]
    return this.random.arrayElement(formats)
  }

  /**
   * Generate a review quote
   * @example faker.book.review() // 'A masterpiece of modern literature!'
   */
  review(): string {
    if (this.locale?.book?.review) {
      return this.random.arrayElement(this.locale.book.review)
    }

    const reviews = [
      'A masterpiece of modern literature!',
      'Gripping from start to finish.',
      'Couldn\'t put it down!',
      'A must-read for everyone.',
      'Beautifully written and deeply moving.',
      'An unforgettable story.',
      'Brilliant and thought-provoking.',
      'A page-turner with incredible characters.',
      'One of the best books I\'ve ever read.',
      'Absolutely captivating!',
    ]
    return this.random.arrayElement(reviews)
  }
}
