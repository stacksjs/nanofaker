import type { Random } from '../random'

export class ImageModule {
  constructor(private random: Random) {}

  /**
   * Generate a placeholder image URL
   * @example faker.image.url() // 'https://via.placeholder.com/640x480'
   */
  url(options?: { width?: number, height?: number }): string {
    const width = options?.width ?? 640
    const height = options?.height ?? 480
    return `https://via.placeholder.com/${width}x${height}`
  }

  /**
   * Generate an avatar URL
   * @example faker.image.avatar() // 'https://i.pravatar.cc/150'
   */
  avatar(): string {
    const size = this.random.int(100, 500)
    return `https://i.pravatar.cc/${size}`
  }

  /**
   * Generate a random image URL from Lorem Picsum
   * @example faker.image.urlLoremFlickr() // 'https://loremflickr.com/640/480'
   */
  urlLoremFlickr(options?: { width?: number, height?: number, category?: string }): string {
    const width = options?.width ?? 640
    const height = options?.height ?? 480
    const category = options?.category ?? ''

    if (category) {
      return `https://loremflickr.com/${width}/${height}/${category}`
    }
    return `https://loremflickr.com/${width}/${height}`
  }

  /**
   * Generate a Picsum photos URL
   * @example faker.image.urlPicsumPhotos() // 'https://picsum.photos/640/480'
   */
  urlPicsumPhotos(options?: { width?: number, height?: number, grayscale?: boolean, blur?: number }): string {
    const width = options?.width ?? 640
    const height = options?.height ?? 480
    let url = `https://picsum.photos/${width}/${height}`

    if (options?.grayscale) {
      url += '?grayscale'
    }
    if (options?.blur) {
      url += options?.grayscale ? `&blur=${options.blur}` : `?blur=${options.blur}`
    }

    return url
  }

  /**
   * Generate a data URI image
   * @example faker.image.dataUri() // 'data:image/svg+xml;charset=UTF-8,...'
   */
  dataUri(options?: { width?: number, height?: number, color?: string }): string {
    const width = options?.width ?? 640
    const height = options?.height ?? 480
    const color = options?.color ?? this.random.int(0, 16777215).toString(16).padStart(6, '0')

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="${width}" height="${height}" fill="#${color}"/></svg>`
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
  }

  /**
   * Generate a GitHub avatar URL
   * @example faker.image.githubAvatar() // 'https://avatars.githubusercontent.com/u/12345'
   */
  githubAvatar(): string {
    const userId = this.random.int(1, 100000)
    return `https://avatars.githubusercontent.com/u/${userId}`
  }

  /**
   * Generate image category
   * @example faker.image.category() // 'nature'
   */
  category(): string {
    const categories = [
      'abstract',
      'animals',
      'business',
      'cats',
      'city',
      'food',
      'nature',
      'nightlife',
      'fashion',
      'people',
      'sports',
      'technics',
      'transport',
      'travel',
    ]
    return this.random.arrayElement(categories)
  }

  /**
   * Generate image type/format
   * @example faker.image.type() // 'png'
   */
  imageType(): string {
    const types = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp', 'bmp', 'tiff']
    return this.random.arrayElement(types)
  }
}
