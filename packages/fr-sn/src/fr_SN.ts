import type { LocaleDefinition } from 'nanofaker'

/**
 * French (Senegal) locale
 * Extends the base 'fr' locale with Senegal-specific data
 */
export const fr_SN: Partial<LocaleDefinition> = {
  title: 'French (Senegal)',

  // Senegal-specific person names
  person: {
    firstNameMale: [
      'Abdoulaye', 'Mamadou', 'Moussa', 'Ibrahima', 'Ousmane', 'Cheikh', 'Amadou',
      'Modou', 'Lamine', 'Babacar', 'Saliou', 'Fallou', 'Issa', 'Omar', 'Alioune',
      'Boubacar', 'Cheikhou', 'Demba', 'Matar', 'Thierno', 'Youssou', 'Pape',
    ],
    firstNameFemale: [
      'Fatou', 'Awa', 'Aïssatou', 'Mariama', 'Khady', 'Aminata', 'Ndèye', 'Binta',
      'Sokhna', 'Coumba', 'Maimouna', 'Rama', 'Adama', 'Khadija', 'Rokhaya',
      'Seynabou', 'Astou', 'Daba', 'Yacine', 'Mame', 'Bineta', 'Ndeye',
    ],
    lastName: [
      'Diallo', 'Ndiaye', 'Diop', 'Fall', 'Sow', 'Sy', 'Sarr', 'Gueye',
      'Kane', 'Cissé', 'Ba', 'Diouf', 'Faye', 'Thiam', 'Niang', 'Seck',
      'Wade', 'Mbaye', 'Ndao', 'Toure', 'Ly', 'Dione', 'Sall', 'Dieng',
    ],
  },

  // Senegal-specific address data
  address: {
    city: [
      'Dakar', 'Pikine', 'Touba', 'Thiès', 'Kaolack', 'Saint-Louis', 'Mbour',
      'Ziguinchor', 'Rufisque', 'Kolda', 'Louga', 'Tambacounda', 'Diourbel',
      'Matam', 'Richard-Toll', 'Kédougou', 'Sédhiou', 'Kaffrine', 'Fatick',
      'Guédiawaye', 'Tivaouane', 'Podor', 'Foundiougne', 'Linguère', 'Dagana',
    ],
    state: [
      'Dakar', 'Thiès', 'Diourbel', 'Fatick', 'Kaolack', 'Kaffrine',
      'Kédougou', 'Kolda', 'Louga', 'Matam', 'Saint-Louis', 'Sédhiou',
      'Tambacounda', 'Ziguinchor',
    ],
    country: ['Sénégal', 'Senegal'],
    countryCode: ['SN'],
    zipCode: ['#####'],
  },

  // Senegal phone formats
  phone: {
    formats: [
      '77 ### ## ##',
      '78 ### ## ##',
      '70 ### ## ##',
      '+221 77 ### ## ##',
      '+221 78 ### ## ##',
      '+221 70 ### ## ##',
    ],
  },

  // Senegalese cuisine
  food: {
    dish: [
      'Thiéboudienne', 'Yassa', 'Mafé', 'Thiou', 'Domoda', 'Caldou',
      'Ceebu jën', 'Ceebu yapp', 'Soupou kandja', 'Bassi salté', 'Firire',
      'Fataya', 'Pastels', 'Accara', 'Thiakry', 'Ngalax', 'Sombi',
      'Chakery', 'Bouye', 'Bissap', 'Kinkeliba', 'Café Touba',
    ],
    ingredient: [
      'Riz', 'Poisson', 'Viande', 'Huile d\'arachide', 'Oignons', 'Tomates',
      'Ail', 'Piment', 'Citron', 'Moutarde', 'Tamarin', 'Bissap', 'Bouye',
      'Manioc', 'Mil', 'Niébé', 'Gombo', 'Arachide', 'Patate douce',
    ],
    dessert: [
      'Thiakry', 'Ngalax', 'Sombi', 'Chakery', 'Lakh', 'Fondé',
      'Thiéré', 'Arraw', 'Cinq centimes', 'Pastels sucrés',
    ],
    cuisine: [
      'Sénégalaise', 'Wolof', 'Diola', 'Peul', 'Mandingue', 'Toucouleur',
      'Ouest-africaine', 'Africaine', 'Créole sénégalaise',
    ],
  },

  // Senegal internet domains
  internet: {
    domainSuffix: ['sn', 'com', 'org'],
    freeEmail: ['gmail.com', 'yahoo.fr', 'hotmail.fr', 'orange.sn', 'arc.sn'],
  },
}
