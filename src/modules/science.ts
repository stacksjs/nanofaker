import type { Random } from '../random'
import type { LocaleDefinition } from '../types'

export class ScienceModule {
  constructor(
    private random: Random,
    private locale?: LocaleDefinition,
  ) {}

  /**
   * Generate a chemical element
   * @example faker.science.chemicalElement() // 'Hydrogen'
   */
  chemicalElement(): string {
    if (this.locale?.science?.chemicalElement) {
      return this.random.arrayElement(this.locale.science.chemicalElement)
    }

    const elements = [
      'Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen',
      'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur',
      'Chlorine', 'Argon', 'Potassium', 'Calcium', 'Iron', 'Copper', 'Zinc', 'Silver', 'Gold',
      'Mercury', 'Lead', 'Uranium', 'Platinum', 'Titanium',
    ]
    return this.random.arrayElement(elements)
  }

  /**
   * Generate a chemical element symbol
   * @example faker.science.chemicalElementSymbol() // 'H'
   */
  chemicalElementSymbol(): string {
    const symbols = [
      'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S',
      'Cl', 'Ar', 'K', 'Ca', 'Fe', 'Cu', 'Zn', 'Ag', 'Au', 'Hg', 'Pb', 'U', 'Pt', 'Ti',
    ]
    return this.random.arrayElement(symbols)
  }

  /**
   * Generate a unit of measurement
   * @example faker.science.unit() // 'meter'
   */
  unit(): string {
    if (this.locale?.science?.unit) {
      return this.random.arrayElement(this.locale.science.unit)
    }

    const units = [
      'meter', 'kilogram', 'second', 'ampere', 'kelvin', 'mole', 'candela',
      'newton', 'pascal', 'joule', 'watt', 'coulomb', 'volt', 'ohm', 'farad',
      'weber', 'tesla', 'henry', 'celsius', 'lumen', 'lux', 'becquerel', 'gray',
      'sievert', 'katal', 'hertz', 'radian', 'steradian',
    ]
    return this.random.arrayElement(units)
  }

  /**
   * Generate a scientific constant name
   * @example faker.science.constant() // 'Speed of Light'
   */
  constant(): string {
    if (this.locale?.science?.constant) {
      return this.random.arrayElement(this.locale.science.constant)
    }

    const constants = [
      'Speed of Light', 'Gravitational Constant', 'Planck Constant', 'Boltzmann Constant',
      'Avogadro Constant', 'Elementary Charge', 'Magnetic Constant', 'Electric Constant',
      'Fine Structure Constant', 'Rydberg Constant', 'Gas Constant', 'Stefan-Boltzmann Constant',
    ]
    return this.random.arrayElement(constants)
  }

  /**
   * Generate a scientific field/discipline
   * @example faker.science.field() // 'Physics'
   */
  field(): string {
    if (this.locale?.science?.field) {
      return this.random.arrayElement(this.locale.science.field)
    }

    const fields = [
      'Physics', 'Chemistry', 'Biology', 'Astronomy', 'Geology', 'Ecology', 'Genetics',
      'Neuroscience', 'Quantum Mechanics', 'Thermodynamics', 'Electromagnetism', 'Biochemistry',
      'Molecular Biology', 'Microbiology', 'Botany', 'Zoology', 'Meteorology', 'Oceanography',
    ]
    return this.random.arrayElement(fields)
  }

  /**
   * Generate a DNA sequence
   * @example faker.science.dnaSequence() // 'ATCGATCGATCG'
   */
  dnaSequence(length = 12): string {
    const bases = ['A', 'T', 'C', 'G']
    let sequence = ''
    for (let i = 0; i < length; i++) {
      sequence += this.random.arrayElement(bases)
    }
    return sequence
  }

  /**
   * Generate an RNA sequence
   * @example faker.science.rnaSequence() // 'AUCGAUCGAUCG'
   */
  rnaSequence(length = 12): string {
    const bases = ['A', 'U', 'C', 'G']
    let sequence = ''
    for (let i = 0; i < length; i++) {
      sequence += this.random.arrayElement(bases)
    }
    return sequence
  }

  /**
   * Generate a scientific hypothesis
   * @example faker.science.hypothesis() // 'If temperature increases, then reaction rate increases'
   */
  hypothesis(): string {
    const conditions = [
      'temperature increases', 'pressure decreases', 'concentration rises', 'pH changes',
      'light intensity increases', 'surface area increases', 'catalyst is added',
    ]
    const effects = [
      'reaction rate increases', 'solubility changes', 'equilibrium shifts', 'rate decreases',
      'yield improves', 'product formation accelerates', 'process efficiency increases',
    ]

    return `If ${this.random.arrayElement(conditions)}, then ${this.random.arrayElement(effects)}`
  }
}
