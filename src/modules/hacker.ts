import type { Random } from '../random'
import type { LocaleDefinition } from '../types'

export class HackerModule {
  constructor(
    private random: Random,
    private locale?: LocaleDefinition,
  ) {}

  /**
   * Generate a hacker abbreviation
   * @example faker.hacker.abbreviation() // 'TCP'
   */
  abbreviation(): string {
    if (this.locale?.hacker?.abbreviation) {
      return this.random.arrayElement(this.locale.hacker.abbreviation)
    }

    const abbreviations = [
      'TCP', 'HTTP', 'SDD', 'RAM', 'GB', 'CSS', 'SSL', 'AGP', 'SQL', 'CLI', 'IB', 'UX',
      'UI', 'FTP', 'AI', 'ADP', 'RSS', 'XML', 'EXE', 'COM', 'HDD', 'THX', 'MP3', 'GPU',
      'API', 'DNS', 'IP', 'LAN', 'WAN', 'VPN', 'SSH', 'HTTPS', 'JSON', 'REST', 'SOAP',
    ]
    return this.random.arrayElement(abbreviations)
  }

  /**
   * Generate a hacker adjective
   * @example faker.hacker.adjective() // 'auxiliary'
   */
  adjective(): string {
    if (this.locale?.hacker?.adjective) {
      return this.random.arrayElement(this.locale.hacker.adjective)
    }

    const adjectives = [
      'auxiliary', 'primary', 'back-end', 'digital', 'open-source', 'virtual', 'cross-platform',
      'redundant', 'online', 'haptic', 'multi-byte', 'bluetooth', 'wireless', 'mobile',
      'neural', 'optical', 'solid state', 'cloud', 'quantum', 'distributed', 'encrypted',
    ]
    return this.random.arrayElement(adjectives)
  }

  /**
   * Generate a hacker noun
   * @example faker.hacker.noun() // 'protocol'
   */
  noun(): string {
    if (this.locale?.hacker?.noun) {
      return this.random.arrayElement(this.locale.hacker.noun)
    }

    const nouns = [
      'driver', 'protocol', 'bandwidth', 'panel', 'microchip', 'program', 'port', 'card',
      'array', 'interface', 'system', 'sensor', 'firewall', 'hard drive', 'pixel', 'alarm',
      'feed', 'monitor', 'application', 'transmitter', 'bus', 'circuit', 'capacitor', 'matrix',
      'server', 'database', 'network', 'router', 'switch', 'gateway', 'node', 'cluster',
    ]
    return this.random.arrayElement(nouns)
  }

  /**
   * Generate a hacker verb
   * @example faker.hacker.verb() // 'bypass'
   */
  verb(): string {
    if (this.locale?.hacker?.verb) {
      return this.random.arrayElement(this.locale.hacker.verb)
    }

    const verbs = [
      'back up', 'bypass', 'hack', 'override', 'compress', 'copy', 'navigate', 'index',
      'connect', 'generate', 'quantify', 'calculate', 'synthesize', 'input', 'transmit',
      'program', 'reboot', 'parse', 'compile', 'encode', 'decode', 'encrypt', 'decrypt',
      'patch', 'upgrade', 'deploy', 'configure', 'optimize', 'refactor', 'debug',
    ]
    return this.random.arrayElement(verbs)
  }

  /**
   * Generate a hacker ingverb (verb ending in -ing)
   * @example faker.hacker.ingverb() // 'bypassing'
   */
  ingverb(): string {
    if (this.locale?.hacker?.ingverb) {
      return this.random.arrayElement(this.locale.hacker.ingverb)
    }

    const verbs = [
      'backing up', 'bypassing', 'hacking', 'overriding', 'compressing', 'copying', 'navigating',
      'indexing', 'connecting', 'generating', 'quantifying', 'calculating', 'synthesizing',
      'transmitting', 'programming', 'parsing', 'compiling', 'encoding', 'decoding',
      'encrypting', 'decrypting', 'patching', 'deploying', 'configuring', 'optimizing',
    ]
    return this.random.arrayElement(verbs)
  }

  /**
   * Generate a hacker phrase
   * @example faker.hacker.phrase() // 'Try to hack the TCP protocol, maybe it will override the wireless sensor!'
   */
  phrase(): string {
    if (this.locale?.hacker?.phrase) {
      return this.random.arrayElement(this.locale.hacker.phrase)
    }

    const patterns = [
      'If we {verb} the {noun}, we can get to the {abbreviation} {noun} through the {adjective} {abbreviation} {noun}!',
      'We need to {verb} the {adjective} {abbreviation} {noun}!',
      'Try to {verb} the {abbreviation} {noun}, maybe it will {verb} the {adjective} {noun}!',
      'You can\'t {verb} the {noun} without {ingverb} the {adjective} {abbreviation} {noun}!',
      'Use the {adjective} {abbreviation} {noun}, then you can {verb} the {adjective} {noun}!',
      'The {abbreviation} {noun} is down, {verb} the {adjective} {noun} so we can {verb} the {abbreviation} {noun}!',
      '{ingverb} the {noun} won\'t do anything, we need to {verb} the {adjective} {abbreviation} {noun}!',
      'I\'ll {verb} the {adjective} {abbreviation} {noun}, that should {verb} the {abbreviation} {noun}!',
    ]

    const pattern = this.random.arrayElement(patterns)
    return pattern
      .replace(/\{verb\}/g, () => this.verb())
      .replace(/\{ingverb\}/g, () => this.ingverb())
      .replace(/\{noun\}/g, () => this.noun())
      .replace(/\{adjective\}/g, () => this.adjective())
      .replace(/\{abbreviation\}/g, () => this.abbreviation())
  }
}
