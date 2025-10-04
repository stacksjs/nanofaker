import type { Random } from '../random'
import type { LocaleDefinition } from '../types'

export class MusicModule {
  constructor(
    private random: Random,
    private locale?: LocaleDefinition,
  ) {}

  /**
   * Generate a music genre
   * @example faker.music.genre() // 'Rock'
   */
  genre(): string {
    if (this.locale?.music?.genre) {
      return this.random.arrayElement(this.locale.music.genre)
    }

    const genres = [
      'Rock', 'Pop', 'Jazz', 'Blues', 'Classical', 'Hip Hop', 'R&B', 'Country', 'Electronic', 'Dance',
      'Metal', 'Punk', 'Reggae', 'Soul', 'Funk', 'Disco', 'House', 'Techno', 'Dubstep', 'Indie',
      'Alternative', 'Folk', 'Gospel', 'Latin', 'K-Pop', 'EDM', 'Trap', 'Lo-Fi', 'Ambient', 'Ska',
    ]
    return this.random.arrayElement(genres)
  }

  /**
   * Generate a song name
   * @example faker.music.songName() // 'Dancing in the Moonlight'
   */
  songName(): string {
    if (this.locale?.music?.song) {
      return this.random.arrayElement(this.locale.music.song)
    }

    const songs = [
      'Dancing in the Moonlight', 'Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California',
      'Imagine', 'Yesterday', 'Hey Jude', 'Sweet Child O\' Mine', 'Smells Like Teen Spirit',
      'Billie Jean', 'Thriller', 'Purple Rain', 'Born to Run', 'Like a Rolling Stone',
      'What\'s Going On', 'Respect', 'Good Vibrations', 'Johnny B. Goode', 'I Want to Hold Your Hand',
      'Satisfaction', 'My Generation', 'Brown Sugar', 'Layla', 'Crossroads', 'The End',
      'Light My Fire', 'All Along the Watchtower', 'While My Guitar Gently Weeps', 'A Day in the Life',
    ]
    return this.random.arrayElement(songs)
  }

  /**
   * Generate an album name
   * @example faker.music.albumName() // 'Dark Side of the Moon'
   */
  albumName(): string {
    const albums = [
      'Abbey Road', 'The Dark Side of the Moon', 'Thriller', 'Back in Black', 'The Wall',
      'Rumours', 'Nevermind', 'Led Zeppelin IV', 'Born in the U.S.A.', 'Sgt. Pepper\'s Lonely Hearts Club Band',
      'OK Computer', 'The Beatles (White Album)', 'Purple Rain', 'Hotel California', '21',
      'Appetite for Destruction', 'Lemonade', 'To Pimp a Butterfly', 'Random Access Memories',
    ]
    return this.random.arrayElement(albums)
  }

  /**
   * Generate an artist/band name
   * @example faker.music.artist() // 'The Beatles'
   */
  artist(): string {
    if (this.locale?.music?.artist) {
      return this.random.arrayElement(this.locale.music.artist)
    }

    const artists = [
      'The Beatles', 'Led Zeppelin', 'Pink Floyd', 'Queen', 'The Rolling Stones', 'Elvis Presley',
      'Michael Jackson', 'Madonna', 'David Bowie', 'Nirvana', 'Radiohead', 'U2', 'AC/DC',
      'Metallica', 'Bob Dylan', 'Jimi Hendrix', 'Prince', 'Stevie Wonder', 'Aretha Franklin',
      'The Who', 'The Doors', 'Fleetwood Mac', 'Eagles', 'Guns N\' Roses', 'Red Hot Chili Peppers',
      'Coldplay', 'Beyoncé', 'Taylor Swift', 'Drake', 'Kendrick Lamar', 'Adele', 'Ed Sheeran',
    ]
    return this.random.arrayElement(artists)
  }

  /**
   * Generate a musical instrument
   * @example faker.music.instrument() // 'Guitar'
   */
  instrument(): string {
    if (this.locale?.music?.instrument) {
      return this.random.arrayElement(this.locale.music.instrument)
    }

    const instruments = [
      'Guitar', 'Piano', 'Drums', 'Bass', 'Violin', 'Saxophone', 'Trumpet', 'Flute', 'Clarinet',
      'Cello', 'Harp', 'Keyboard', 'Harmonica', 'Accordion', 'Ukulele', 'Banjo', 'Mandolin',
      'Trombone', 'French Horn', 'Tuba', 'Oboe', 'Bassoon', 'Xylophone', 'Marimba', 'Tambourine',
      'Synthesizer', 'Didgeridoo', 'Sitar', 'Tabla', 'Djembe',
    ]
    return this.random.arrayElement(instruments)
  }

  /**
   * Generate a musical note
   * @example faker.music.note() // 'C#'
   */
  note(): string {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    return this.random.arrayElement(notes)
  }

  /**
   * Generate a musical chord
   * @example faker.music.chord() // 'Cmaj7'
   */
  chord(): string {
    const root = this.note()
    const quality = this.random.arrayElement(['maj', 'min', 'maj7', 'min7', '7', 'dim', 'aug', 'sus4', 'sus2'])
    return `${root}${quality}`
  }

  /**
   * Generate a tempo/BPM
   * @example faker.music.tempo() // 120
   */
  tempo(): number {
    return this.random.int(60, 200)
  }

  /**
   * Generate a key signature
   * @example faker.music.key() // 'C Major'
   */
  key(): string {
    const note = this.note()
    const mode = this.random.arrayElement(['Major', 'Minor'])
    return `${note} ${mode}`
  }

  /**
   * Generate a time signature
   * @example faker.music.timeSignature() // '4/4'
   */
  timeSignature(): string {
    const signatures = ['4/4', '3/4', '6/8', '5/4', '7/8', '2/4', '9/8', '12/8']
    return this.random.arrayElement(signatures)
  }
}
