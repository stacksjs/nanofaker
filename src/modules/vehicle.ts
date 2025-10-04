import type { Random } from '../random'

const MANUFACTURERS = [
  'Toyota', 'Ford', 'Chevrolet', 'Honda', 'Nissan', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Hyundai',
  'Kia', 'Mazda', 'Subaru', 'Lexus', 'Tesla', 'Volvo', 'Porsche', 'Jeep', 'Ram', 'GMC',
  'Dodge', 'Chrysler', 'Buick', 'Cadillac', 'Acura', 'Infiniti', 'Genesis', 'Land Rover', 'Jaguar', 'Mini',
]

const MODELS = [
  'Accord', 'Camry', 'Civic', 'Corolla', 'CR-V', 'F-150', 'RAV4', 'Silverado', 'Tacoma', 'Altima',
  'Sentra', 'Rogue', 'Model 3', 'Model Y', 'Model S', 'X5', 'X3', '3 Series', '5 Series', 'C-Class',
  'E-Class', 'A4', 'Q5', 'Golf', 'Jetta', 'Passat', 'Tiguan', 'Escape', 'Explorer', 'Mustang',
  'Ranger', 'Malibu', 'Equinox', 'Traverse', 'Wrangler', 'Grand Cherokee', 'Cherokee', 'Compass',
]

const TYPES = [
  'Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible', 'Hatchback', 'Wagon', 'Van', 'Minivan',
  'Crossover', 'Sports Car', 'Luxury', 'Electric', 'Hybrid', 'Diesel', 'Compact',
]

const FUEL_TYPES = [
  'Gasoline', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid', 'Hydrogen', 'Ethanol', 'Biodiesel', 'CNG', 'LPG',
]

const COLORS = [
  'Black', 'White', 'Silver', 'Gray', 'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Brown',
  'Gold', 'Purple', 'Pink', 'Beige', 'Tan', 'Navy', 'Maroon', 'Teal', 'Burgundy', 'Charcoal',
]

export class VehicleModule {
  constructor(private random: Random) {}

  /**
   * Generate a random vehicle manufacturer
   * @example faker.vehicle.manufacturer() // 'Toyota'
   */
  manufacturer(): string {
    return this.random.arrayElement(MANUFACTURERS)
  }

  /**
   * Generate a random vehicle model
   * @example faker.vehicle.model() // 'Camry'
   */
  model(): string {
    return this.random.arrayElement(MODELS)
  }

  /**
   * Generate a random vehicle type
   * @example faker.vehicle.type() // 'SUV'
   */
  type(): string {
    return this.random.arrayElement(TYPES)
  }

  /**
   * Generate a random fuel type
   * @example faker.vehicle.fuel() // 'Gasoline'
   */
  fuel(): string {
    return this.random.arrayElement(FUEL_TYPES)
  }

  /**
   * Generate a random vehicle color
   * @example faker.vehicle.color() // 'Blue'
   */
  color(): string {
    return this.random.arrayElement(COLORS)
  }

  /**
   * Generate a random VIN (Vehicle Identification Number)
   * @example faker.vehicle.vin() // '1HGBH41JXMN109186'
   */
  vin(): string {
    const chars = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789' // Excludes I, O, Q
    let vin = ''
    for (let i = 0; i < 17; i++) {
      vin += chars[this.random.int(0, chars.length - 1)]
    }
    return vin
  }

  /**
   * Generate a random vehicle registration/license plate
   * @example faker.vehicle.registration() // 'ABC-1234'
   */
  registration(): string {
    const formats = [
      '???-####',
      '###-???',
      '??? ###',
      '##?-###',
      '???-###',
    ]
    const format = this.random.arrayElement(formats)
    return format
      .replace(/\?/g, () => this.random.arrayElement('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')))
      .replace(/#/g, () => String(this.random.int(0, 9)))
  }

  /**
   * Generate a complete vehicle description
   * @example faker.vehicle.vehicle() // '2023 Toyota Camry'
   */
  vehicle(): string {
    const year = this.random.int(2000, 2024)
    const manufacturer = this.manufacturer()
    const model = this.model()
    return `${year} ${manufacturer} ${model}`
  }

  /**
   * Generate bicycle type
   * @example faker.vehicle.bicycle() // 'Mountain Bike'
   */
  bicycle(): string {
    const types = [
      'Mountain Bike', 'Road Bike', 'BMX', 'Cruiser', 'Hybrid', 'Electric Bike',
      'Folding Bike', 'Touring Bike', 'Cyclocross', 'Gravel Bike', 'Track Bike', 'Recumbent',
    ]
    return this.random.arrayElement(types)
  }
}
