import type { FinanceOptions } from '../types'
import type { Random } from '../random'

export class FinanceModule {
  constructor(private random: Random) {}

  /**
   * Generate a random financial amount
   * @example faker.finance.amount() // '1234.56'
   */
  amount(options?: FinanceOptions): string {
    const min = options?.min ?? 0
    const max = options?.max ?? 10000
    const dec = options?.dec ?? 2
    const symbol = options?.symbol ?? ''

    const amount = this.random.float(min, max, dec)
    return symbol + amount.toFixed(dec)
  }

  /**
   * Generate a random account number
   * @example faker.finance.account() // '12345678'
   */
  account(length = 8): string {
    let result = ''
    for (let i = 0; i < length; i++) {
      result += this.random.int(0, 9)
    }
    return result
  }

  /**
   * Generate a random account name
   * @example faker.finance.accountName() // 'Savings Account'
   */
  accountName(): string {
    const types = ['Savings', 'Checking', 'Money Market', 'Investment', 'Credit Card', 'Personal Loan']
    return `${this.random.arrayElement(types)} Account`
  }

  /**
   * Generate a random routing number (9 digits)
   * @example faker.finance.routingNumber() // '123456789'
   */
  routingNumber(): string {
    return this.account(9)
  }

  /**
   * Generate a random credit card number
   * @example faker.finance.creditCardNumber() // '4532-1234-5678-9010'
   */
  creditCardNumber(options?: { issuer?: string, formatted?: boolean }): string {
    const formatted = options?.formatted ?? true
    const issuer = options?.issuer ?? this.random.arrayElement(['visa', 'mastercard', 'amex', 'discover'])

    let prefix = ''
    let length = 16

    switch (issuer) {
      case 'visa':
        prefix = '4'
        length = 16
        break
      case 'mastercard':
        prefix = '5' + this.random.int(1, 5)
        length = 16
        break
      case 'amex':
        prefix = '3' + this.random.arrayElement(['4', '7'])
        length = 15
        break
      case 'discover':
        prefix = '6011'
        length = 16
        break
    }

    let number = prefix
    while (number.length < length) {
      number += this.random.int(0, 9)
    }

    if (formatted) {
      if (issuer === 'amex') {
        return `${number.slice(0, 4)}-${number.slice(4, 10)}-${number.slice(10)}`
      }
      return number.match(/.{1,4}/g)?.join('-') ?? number
    }

    return number
  }

  /**
   * Generate a random CVV
   * @example faker.finance.cvv() // '123'
   */
  cvv(): string {
    return this.account(3)
  }

  /**
   * Generate a random IBAN
   * @example faker.finance.iban() // 'GB82WEST12345698765432'
   */
  iban(options?: { countryCode?: string, formatted?: boolean }): string {
    const countryCode = options?.countryCode ?? 'GB'
    const formatted = options?.formatted ?? false
    const checkDigits = this.random.int(10, 99).toString()
    const bankCode = 'WEST'
    const accountNumber = this.account(14)

    const iban = countryCode + checkDigits + bankCode + accountNumber

    if (formatted) {
      return iban.match(/.{1,4}/g)?.join(' ') ?? iban
    }

    return iban
  }

  /**
   * Generate a random BIC/SWIFT code
   * @example faker.finance.bic() // 'DEUTDEFF'
   */
  bic(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''

    // Bank code (4 letters)
    for (let i = 0; i < 4; i++) {
      result += letters[this.random.int(0, letters.length - 1)]
    }

    // Country code (2 letters)
    for (let i = 0; i < 2; i++) {
      result += letters[this.random.int(0, letters.length - 1)]
    }

    // Location code (2 characters)
    for (let i = 0; i < 2; i++) {
      result += this.random.arrayElement([...letters.split(''), ...Array.from({ length: 10 }, (_, i) => i.toString())])
    }

    return result
  }

  /**
   * Generate a random Bitcoin address
   * @example faker.finance.bitcoin() // '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'
   */
  bitcoin(): string {
    const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
    let result = this.random.arrayElement(['1', '3']) // Bitcoin addresses start with 1 or 3

    for (let i = 0; i < 33; i++) {
      result += chars[this.random.int(0, chars.length - 1)]
    }

    return result
  }

  /**
   * Generate a random Ethereum address
   * @example faker.finance.ethereum() // '0x71C7656EC7ab88b098defB751B7401B5f6d8976F'
   */
  ethereum(): string {
    const chars = '0123456789abcdef'
    let result = '0x'

    for (let i = 0; i < 40; i++) {
      result += chars[this.random.int(0, chars.length - 1)]
    }

    return result
  }

  /**
   * Generate a random currency code
   * @example faker.finance.currencyCode() // 'USD'
   */
  currencyCode(): string {
    const codes = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD', 'INR', 'BRL', 'RUB', 'KRW']
    return this.random.arrayElement(codes)
  }

  /**
   * Generate a random currency name
   * @example faker.finance.currencyName() // 'US Dollar'
   */
  currencyName(): string {
    const names = [
      'US Dollar', 'Euro', 'British Pound', 'Japanese Yen', 'Australian Dollar',
      'Canadian Dollar', 'Swiss Franc', 'Chinese Yuan', 'Swedish Krona', 'New Zealand Dollar',
      'Indian Rupee', 'Brazilian Real', 'Russian Ruble', 'South Korean Won',
    ]
    return this.random.arrayElement(names)
  }

  /**
   * Generate a random currency symbol
   * @example faker.finance.currencySymbol() // '$'
   */
  currencySymbol(): string {
    const symbols = ['$', '€', '£', '¥', '₹', 'R$', '₽', '₩', 'kr', 'CHF']
    return this.random.arrayElement(symbols)
  }

  /**
   * Generate a random transaction type
   * @example faker.finance.transactionType() // 'deposit'
   */
  transactionType(): string {
    const types = ['deposit', 'withdrawal', 'payment', 'invoice', 'transfer']
    return this.random.arrayElement(types)
  }
}
