import type { Random } from '../random'
import type { LocaleDefinition } from '../types'

export class CommerceModule {
  constructor(
    private random: Random,
    private locale?: LocaleDefinition,
  ) {}

  /**
   * Generate a product name
   * @example faker.commerce.product() // 'Ergonomic Wooden Chair'
   */
  product(): string {
    const adjectives = this.locale?.commerce?.productAdjective ?? [
      'Small',
      'Ergonomic',
      'Rustic',
      'Intelligent',
      'Gorgeous',
      'Incredible',
      'Fantastic',
      'Practical',
      'Sleek',
      'Awesome',
      'Generic',
      'Handcrafted',
      'Handmade',
      'Licensed',
      'Refined',
      'Unbranded',
      'Tasty',
      'Premium',
      'Luxury',
      'Professional',
      'Durable',
    ]
    const materials = this.locale?.commerce?.productMaterial ?? [
      'Steel',
      'Wooden',
      'Concrete',
      'Plastic',
      'Cotton',
      'Granite',
      'Rubber',
      'Metal',
      'Soft',
      'Fresh',
      'Frozen',
      'Silk',
      'Leather',
      'Glass',
      'Carbon',
      'Aluminum',
    ]
    const products = this.locale?.commerce?.product ?? [
      'Chair',
      'Table',
      'Lamp',
      'Keyboard',
      'Mouse',
      'Computer',
      'Shoes',
      'Shirt',
      'Pants',
      'Hat',
      'Gloves',
      'Towel',
      'Soap',
      'Bike',
      'Ball',
      'Book',
      'Wallet',
      'Watch',
      'Phone',
      'Desk',
      'Bottle',
      'Plate',
      'Cup',
      'Bag',
      'Pen',
      'Notebook',
      'Backpack',
      'Sunglasses',
    ]

    return `${this.random.arrayElement(adjectives)} ${this.random.arrayElement(materials)} ${this.random.arrayElement(products)}`
  }

  /**
   * Generate a product name (alias for product())
   * @example faker.commerce.productName() // 'Premium Leather Wallet'
   */
  productName(): string {
    return this.product()
  }

  /**
   * Generate a department
   * @example faker.commerce.department() // 'Electronics'
   */
  department(): string {
    if (this.locale?.commerce?.department) {
      return this.random.arrayElement(this.locale.commerce.department)
    }

    const departments = [
      'Books',
      'Movies',
      'Music',
      'Games',
      'Electronics',
      'Computers',
      'Home',
      'Garden',
      'Tools',
      'Grocery',
      'Health',
      'Beauty',
      'Toys',
      'Kids',
      'Baby',
      'Clothing',
      'Shoes',
      'Jewelry',
      'Sports',
      'Outdoors',
      'Automotive',
      'Industrial',
    ]
    return this.random.arrayElement(departments)
  }

  /**
   * Generate a price
   * @example faker.commerce.price() // '123.45'
   */
  price(options?: { min?: number, max?: number, dec?: number, symbol?: string }): string {
    const min = options?.min ?? 1
    const max = options?.max ?? 1000
    const dec = options?.dec ?? 2
    const symbol = options?.symbol ?? ''

    const price = this.random.float(min, max, dec)
    return symbol + price.toFixed(dec)
  }

  /**
   * Generate a product adjective
   * @example faker.commerce.productAdjective() // 'Ergonomic'
   */
  productAdjective(): string {
    if (this.locale?.commerce?.productAdjective) {
      return this.random.arrayElement(this.locale.commerce.productAdjective)
    }

    const adjectives = [
      'Small',
      'Ergonomic',
      'Rustic',
      'Intelligent',
      'Gorgeous',
      'Incredible',
      'Fantastic',
      'Practical',
      'Sleek',
      'Awesome',
      'Generic',
      'Handcrafted',
      'Handmade',
      'Licensed',
      'Refined',
      'Unbranded',
      'Tasty',
      'Premium',
      'Luxury',
      'Professional',
      'Durable',
      'Innovative',
      'Compact',
      'Versatile',
      'Modern',
      'Classic',
      'Vintage',
      'Contemporary',
    ]
    return this.random.arrayElement(adjectives)
  }

  /**
   * Generate a product material
   * @example faker.commerce.productMaterial() // 'Wooden'
   */
  productMaterial(): string {
    if (this.locale?.commerce?.productMaterial) {
      return this.random.arrayElement(this.locale.commerce.productMaterial)
    }

    const materials = [
      'Steel',
      'Wooden',
      'Concrete',
      'Plastic',
      'Cotton',
      'Granite',
      'Rubber',
      'Metal',
      'Soft',
      'Fresh',
      'Frozen',
      'Silk',
      'Leather',
      'Glass',
      'Carbon',
      'Aluminum',
      'Bronze',
      'Copper',
      'Brass',
      'Titanium',
      'Ceramic',
      'Velvet',
      'Linen',
      'Wool',
    ]
    return this.random.arrayElement(materials)
  }

  /**
   * Generate a product description
   * @example faker.commerce.productDescription() // 'The beautiful range of...'
   */
  productDescription(): string {
    const templates = [
      'The beautiful range of {adjective} {material} {product} comes with a {feature}.',
      'Experience the {adjective} {product} that redefines {benefit}.',
      'Our {adjective} {material} {product} is designed for {benefit}.',
      'Discover the {adjective} {product} with {feature} for {benefit}.',
    ]

    const features = [
      'lifetime warranty',
      'money-back guarantee',
      'premium quality',
      'eco-friendly design',
      'cutting-edge technology',
      'ergonomic design',
      'sleek finish',
      'modern aesthetics',
    ]

    const benefits = [
      'maximum comfort',
      'everyday use',
      'professional performance',
      'home and office',
      'outdoor adventures',
      'creative projects',
      'productivity',
      'entertainment',
    ]

    const template = this.random.arrayElement(templates)
    return template
      .replace('{adjective}', this.productAdjective().toLowerCase())
      .replace('{material}', this.productMaterial().toLowerCase())
      .replace('{product}', 'product')
      .replace('{feature}', this.random.arrayElement(features))
      .replace('{benefit}', this.random.arrayElement(benefits))
  }

  /**
   * Generate a product review
   * @example faker.commerce.review() // 'This product exceeded my expectations!'
   */
  review(): string {
    const reviews = [
      'This product exceeded my expectations!',
      'Absolutely love it! Worth every penny.',
      'Great quality and fast shipping.',
      'Not what I expected, but still decent.',
      'Amazing! Highly recommend to everyone.',
      'Perfect for my needs. Very satisfied.',
      'Good value for the price.',
      'Could be better, but it does the job.',
      'Fantastic product! Will buy again.',
      'Best purchase I\'ve made this year!',
    ]
    return this.random.arrayElement(reviews)
  }

  /**
   * Generate a discount code
   * @example faker.commerce.discountCode() // 'SAVE20'
   */
  discountCode(): string {
    const prefixes = ['SAVE', 'GET', 'DEAL', 'OFFER', 'PROMO', 'SALE', 'DISCOUNT', 'SPECIAL']
    const suffix = this.random.int(10, 99)
    return `${this.random.arrayElement(prefixes)}${suffix}`
  }

  /**
   * Generate a SKU (Stock Keeping Unit)
   * @example faker.commerce.sku() // 'ABC-12345-XYZ'
   */
  sku(): string {
    const part1 = this.random.arrayElement('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')).repeat(3)
    const part2 = this.random.int(10000, 99999)
    const part3 = this.random.arrayElement('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')).repeat(3)
    return `${part1}-${part2}-${part3}`
  }
}
