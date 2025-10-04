import type { Random } from '../random'
import type { DateOptions } from '../types'

export class DateModule {
  constructor(private random: Random) {}

  /**
   * Generate a random date in the past
   * @example faker.date.past() // Date object from the past
   */
  past(options?: DateOptions & { years?: number }): Date {
    const years = options?.years ?? 1
    const to = options?.to ?? new Date()
    const from = options?.from ?? new Date(to.getTime() - years * 365 * 24 * 60 * 60 * 1000)

    return this.between({ from, to })
  }

  /**
   * Generate a random date in the future
   * @example faker.date.future() // Date object in the future
   */
  future(options?: DateOptions & { years?: number }): Date {
    const years = options?.years ?? 1
    const from = options?.from ?? new Date()
    const to = options?.to ?? new Date(from.getTime() + years * 365 * 24 * 60 * 60 * 1000)

    return this.between({ from, to })
  }

  /**
   * Generate a random date between two dates
   * @example faker.date.between({ from: new Date(2020, 0, 1), to: new Date(2025, 0, 1) })
   */
  between(options: DateOptions): Date {
    const from = options.from ?? new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
    const to = options.to ?? new Date()

    const fromTime = from.getTime()
    const toTime = to.getTime()

    const randomTime = this.random.int(fromTime, toTime)
    return new Date(randomTime)
  }

  /**
   * Generate a random recent date
   * @example faker.date.recent() // Date from the last few days
   */
  recent(options?: { days?: number }): Date {
    const days = options?.days ?? 1
    const to = new Date()
    const from = new Date(to.getTime() - days * 24 * 60 * 60 * 1000)

    return this.between({ from, to })
  }

  /**
   * Generate a random soon date
   * @example faker.date.soon() // Date in the next few days
   */
  soon(options?: { days?: number }): Date {
    const days = options?.days ?? 1
    const from = new Date()
    const to = new Date(from.getTime() + days * 24 * 60 * 60 * 1000)

    return this.between({ from, to })
  }

  /**
   * Generate a random month name
   * @example faker.date.month() // 'January'
   */
  month(): string {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    return this.random.arrayElement(months)
  }

  /**
   * Generate a random weekday name
   * @example faker.date.weekday() // 'Monday'
   */
  weekday(): string {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return this.random.arrayElement(weekdays)
  }

  /**
   * Laravel-compatible: Generate a random date time
   * @example faker.date.dateTime() // Date object
   */
  dateTime(): Date {
    return this.between({ from: new Date(1970, 0, 1), to: new Date() })
  }

  /**
   * Laravel-compatible: Generate a random date time between dates
   * @example faker.date.dateTimeBetween({ from: new Date(2020, 0, 1), to: new Date(2025, 0, 1) })
   */
  dateTimeBetween(options: DateOptions): Date {
    return this.between(options)
  }
}
