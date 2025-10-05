import type { LocaleDefinition } from 'nanofaker'

/**
 * French (Belgium) locale
 * Extends the base 'fr' locale with Belgium-specific data
 */
export const fr_BE: Partial<LocaleDefinition> = {
  title: 'French (Belgium)',

  // Belgium-specific address data
  address: {
    city: [
      'Bruxelles', 'Liège', 'Charleroi', 'Namur', 'Mons', 'Tournai',
      'Verviers', 'Dinant', 'Arlon', 'Bastogne', 'Waterloo', 'Wavre',
      'Nivelles', 'La Louvière', 'Mouscron', 'Seraing', 'Herstal',
      'Andenne', 'Huy', 'Spa', 'Rochefort', 'Bouillon', 'Malmedy',
      'Eupen', 'Saint-Hubert', 'Ciney', 'Marche-en-Famenne',
    ],
    state: [
      'Bruxelles-Capitale', 'Wallonie', 'Flandre',
      'Région Bruxelles-Capitale', 'Région Wallonne', 'Région Flamande',
    ],
    stateAbbr: ['BRU', 'WAL', 'VLG'],
    country: ['Belgique', 'Belgium'],
    countryCode: ['BE'],
    zipCode: ['####'],
  },

  // Belgian phone formats
  phone: {
    formats: [
      '0# ### ## ##',
      '+32 # ### ## ##',
      '04## ## ## ##',
      '+32 4## ## ## ##',
    ],
  },

  // Belgian cuisine
  food: {
    dish: [
      'Frites', 'Moules-frites', 'Gaufres de Liège', 'Gaufres de Bruxelles',
      'Carbonnade flamande', 'Waterzooi', 'Stoemp', 'Boulets à la liégeoise',
      'Vol-au-vent', 'Américain préparé', 'Filet d\'Anvers', 'Chicons au gratin',
      'Lapin à la kriek', 'Anguilles au vert', 'Flamiche', 'Tarte au riz',
      'Couque de Dinant', 'Spéculoos', 'Cramique', 'Pain à la grecque',
      'Mattentaart', 'Tarte al djote', 'Pâté gaumais', 'Boudin blanc',
    ],
    ingredient: [
      'Beurre', 'Fromage', 'Bière', 'Chicorée', 'Endives', 'Choux de Bruxelles',
      'Pommes de terre', 'Oignons', 'Lard', 'Crème', 'Moutarde', 'Sirop de Liège',
      'Cassonade', 'Speculoos', 'Chocolat belge', 'Fromage de Herve',
    ],
    dessert: [
      'Gaufres de Liège', 'Gaufres de Bruxelles', 'Spéculoos', 'Pralines',
      'Couque de Dinant', 'Tarte au sucre', 'Mattentaart', 'Cramique',
      'Lacquemant', 'Pain à la grecque', 'Chocolat belge', 'Cuberdon',
    ],
    cuisine: [
      'Belge', 'Wallonne', 'Flamande', 'Bruxelloise', 'Française',
      'Brasserie', 'Traditionnelle',
    ],
  },

  // Belgian internet domains
  internet: {
    domainSuffix: ['be', 'com', 'eu', 'net'],
    freeEmail: ['gmail.com', 'hotmail.be', 'outlook.be', 'skynet.be', 'proximus.be'],
  },
}
