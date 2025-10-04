import type { Random } from '../random'
import type { LocaleDefinition } from '../types'

export class AnimalModule {
  constructor(
    private random: Random,
    private locale?: LocaleDefinition,
  ) {}

  /**
   * Generate an animal type
   * @example faker.animal.type() // 'Mammal'
   */
  type(): string {
    if (this.locale?.animal?.type) {
      return this.random.arrayElement(this.locale.animal.type)
    }

    const types = [
      'Mammal',
      'Bird',
      'Reptile',
      'Amphibian',
      'Fish',
      'Invertebrate',
      'Insect',
      'Arachnid',
    ]
    return this.random.arrayElement(types)
  }

  /**
   * Generate a dog breed
   * @example faker.animal.dog() // 'Golden Retriever'
   */
  dog(): string {
    if (this.locale?.animal?.dog) {
      return this.random.arrayElement(this.locale.animal.dog)
    }

    const breeds = [
      'Golden Retriever',
      'Labrador Retriever',
      'German Shepherd',
      'Bulldog',
      'Beagle',
      'Poodle',
      'Rottweiler',
      'Yorkshire Terrier',
      'Boxer',
      'Dachshund',
      'Siberian Husky',
      'Great Dane',
      'Doberman Pinscher',
      'Australian Shepherd',
      'Cavalier King Charles Spaniel',
      'Shih Tzu',
      'Boston Terrier',
      'Pomeranian',
      'Havanese',
      'Shetland Sheepdog',
      'Bernese Mountain Dog',
      'English Springer Spaniel',
      'Brittany',
      'Pug',
      'Cocker Spaniel',
      'Border Collie',
    ]
    return this.random.arrayElement(breeds)
  }

  /**
   * Generate a cat breed
   * @example faker.animal.cat() // 'Persian'
   */
  cat(): string {
    if (this.locale?.animal?.cat) {
      return this.random.arrayElement(this.locale.animal.cat)
    }

    const breeds = [
      'Persian',
      'Maine Coon',
      'Ragdoll',
      'British Shorthair',
      'Siamese',
      'Scottish Fold',
      'Sphynx',
      'Abyssinian',
      'Devon Rex',
      'American Shorthair',
      'Bengal',
      'Russian Blue',
      'Birman',
      'Oriental Shorthair',
      'Norwegian Forest Cat',
      'Cornish Rex',
      'Himalayan',
      'Exotic Shorthair',
      'Burmese',
      'Turkish Angora',
      'Somali',
      'Manx',
      'Tonkinese',
    ]
    return this.random.arrayElement(breeds)
  }

  /**
   * Generate a bird species
   * @example faker.animal.bird() // 'Eagle'
   */
  bird(): string {
    if (this.locale?.animal?.bird) {
      return this.random.arrayElement(this.locale.animal.bird)
    }

    const birds = [
      'Eagle',
      'Hawk',
      'Falcon',
      'Owl',
      'Parrot',
      'Macaw',
      'Cockatoo',
      'Parakeet',
      'Canary',
      'Finch',
      'Sparrow',
      'Robin',
      'Blue Jay',
      'Cardinal',
      'Crow',
      'Raven',
      'Pigeon',
      'Dove',
      'Hummingbird',
      'Woodpecker',
      'Pelican',
      'Swan',
      'Duck',
      'Goose',
      'Flamingo',
      'Penguin',
      'Ostrich',
      'Emu',
      'Peacock',
      'Turkey',
      'Chicken',
      'Rooster',
    ]
    return this.random.arrayElement(birds)
  }

  /**
   * Generate a fish species
   * @example faker.animal.fish() // 'Goldfish'
   */
  fish(): string {
    if (this.locale?.animal?.fish) {
      return this.random.arrayElement(this.locale.animal.fish)
    }

    const fish = [
      'Goldfish',
      'Betta',
      'Guppy',
      'Angelfish',
      'Neon Tetra',
      'Molly',
      'Platy',
      'Swordtail',
      'Clownfish',
      'Tang',
      'Damselfish',
      'Lionfish',
      'Grouper',
      'Snapper',
      'Tuna',
      'Marlin',
      'Swordfish',
      'Shark',
      'Ray',
      'Barracuda',
      'Catfish',
      'Bass',
      'Pike',
      'Trout',
      'Carp',
    ]
    return this.random.arrayElement(fish)
  }

  /**
   * Generate a bear species
   * @example faker.animal.bear() // 'Grizzly Bear'
   */
  bear(): string {
    const bears = [
      'Grizzly Bear',
      'Black Bear',
      'Polar Bear',
      'Brown Bear',
      'Panda Bear',
      'Sun Bear',
      'Sloth Bear',
      'Spectacled Bear',
      'Asian Black Bear',
      'Kodiak Bear',
    ]
    return this.random.arrayElement(bears)
  }

  /**
   * Generate a cetacean (whale/dolphin)
   * @example faker.animal.cetacean() // 'Blue Whale'
   */
  cetacean(): string {
    const cetaceans = [
      'Blue Whale',
      'Humpback Whale',
      'Orca',
      'Dolphin',
      'Porpoise',
      'Beluga Whale',
      'Sperm Whale',
      'Gray Whale',
      'Narwhal',
      'Bottlenose Dolphin',
      'Pilot Whale',
    ]
    return this.random.arrayElement(cetaceans)
  }

  /**
   * Generate a horse breed
   * @example faker.animal.horse() // 'Arabian'
   */
  horse(): string {
    if (this.locale?.animal?.horse) {
      return this.random.arrayElement(this.locale.animal.horse)
    }

    const breeds = [
      'Arabian',
      'Thoroughbred',
      'Quarter Horse',
      'Morgan',
      'Appaloosa',
      'Paint Horse',
      'Tennessee Walker',
      'Standardbred',
      'Mustang',
      'Andalusian',
      'Friesian',
      'Clydesdale',
      'Percheron',
      'Belgian',
      'Shire',
      'Haflinger',
      'Icelandic',
      'Shetland Pony',
    ]
    return this.random.arrayElement(breeds)
  }

  /**
   * Generate an insect
   * @example faker.animal.insect() // 'Butterfly'
   */
  insect(): string {
    if (this.locale?.animal?.insect) {
      return this.random.arrayElement(this.locale.animal.insect)
    }

    const insects = [
      'Butterfly',
      'Moth',
      'Bee',
      'Wasp',
      'Ant',
      'Beetle',
      'Dragonfly',
      'Grasshopper',
      'Cricket',
      'Ladybug',
      'Firefly',
      'Mosquito',
      'Fly',
      'Cockroach',
      'Termite',
      'Flea',
      'Praying Mantis',
      'Cicada',
      'Caterpillar',
      'Walking Stick',
    ]
    return this.random.arrayElement(insects)
  }

  /**
   * Generate a lion species
   * @example faker.animal.lion() // 'African Lion'
   */
  lion(): string {
    const lions = ['African Lion', 'Asiatic Lion', 'Mountain Lion', 'Sea Lion']
    return this.random.arrayElement(lions)
  }

  /**
   * Generate a rabbit breed
   * @example faker.animal.rabbit() // 'Holland Lop'
   */
  rabbit(): string {
    if (this.locale?.animal?.rabbit) {
      return this.random.arrayElement(this.locale.animal.rabbit)
    }

    const rabbits = [
      'Holland Lop',
      'Netherland Dwarf',
      'Mini Rex',
      'Lionhead',
      'Flemish Giant',
      'English Lop',
      'Mini Lop',
      'Dutch',
      'Himalayan',
      'Californian',
      'New Zealand',
      'Rex',
      'Angora',
    ]
    return this.random.arrayElement(rabbits)
  }

  /**
   * Generate a snake species
   * @example faker.animal.snake() // 'Python'
   */
  snake(): string {
    const snakes = [
      'Python',
      'Boa Constrictor',
      'Rattlesnake',
      'Cobra',
      'Viper',
      'Anaconda',
      'Garter Snake',
      'Corn Snake',
      'King Snake',
      'Milk Snake',
      'Black Mamba',
      'Copperhead',
      'Cottonmouth',
    ]
    return this.random.arrayElement(snakes)
  }
}
