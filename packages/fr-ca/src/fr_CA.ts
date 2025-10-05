import type { LocaleDefinition } from 'nanofaker'

/**
 * French (Canada) locale
 * Extends the base 'fr' locale with Canada/Quebec-specific data
 */
export const fr_CA: Partial<LocaleDefinition> = {
  title: 'French (Canada)',

  // Canada-specific address data
  address: {
    city: [
      'Montréal', 'Québec', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke',
      'Saguenay', 'Lévis', 'Trois-Rivières', 'Terrebonne', 'Saint-Jean-sur-Richelieu',
      'Brossard', 'Repentigny', 'Drummondville', 'Saint-Jérôme', 'Granby',
      'Blainville', 'Saint-Hyacinthe', 'Shawinigan', 'Dollard-des-Ormeaux',
      'Rimouski', 'Victoriaville', 'Joliette', 'Sorel-Tracy', 'Vaudreuil-Dorion',
      'Val-d\'Or', 'Rouyn-Noranda', 'Thetford Mines', 'Sept-Îles', 'Matane',
    ],
    state: [
      'Québec', 'Ontario', 'Nouveau-Brunswick', 'Manitoba', 'Saskatchewan',
      'Alberta', 'Colombie-Britannique', 'Île-du-Prince-Édouard',
      'Nouvelle-Écosse', 'Terre-Neuve-et-Labrador', 'Yukon',
      'Territoires du Nord-Ouest', 'Nunavut',
    ],
    stateAbbr: ['QC', 'ON', 'NB', 'MB', 'SK', 'AB', 'BC', 'PE', 'NS', 'NL', 'YT', 'NT', 'NU'],
    country: ['Canada'],
    countryCode: ['CA'],
    zipCode: ['?#? #?#'],
  },

  // Canadian phone formats
  phone: {
    formats: [
      '###-###-####',
      '(###) ###-####',
      '+1 ### ### ####',
      '1-###-###-####',
    ],
  },

  // Québécois/Canadian cuisine
  food: {
    dish: [
      'Poutine', 'Tourtière', 'Cipâte', 'Ragoût de boulettes', 'Cretons',
      'Fèves au lard', 'Pâté chinois', 'Tarte au sucre', 'Pouding chômeur',
      'Pets de sœur', 'Tire d\'érable', 'Pain de viande', 'Soupe aux pois',
      'Pâté à la viande', 'Smoked meat', 'Bagel de Montréal', 'Queue de castor',
      'Tortière du Lac-Saint-Jean', 'Cipaille', 'Ragoût de pattes de cochon',
      'Tarte à la ferlouche', 'Grands-pères dans le sirop', 'Sucre à la crème',
    ],
    ingredient: [
      'Sirop d\'érable', 'Beurre', 'Fromage en grains', 'Crème', 'Lard',
      'Pommes de terre', 'Oignons', 'Viande hachée', 'Porc', 'Bœuf',
      'Cannelle', 'Cassonade', 'Farine', 'Épices', 'Herbes salées',
    ],
    dessert: [
      'Pouding chômeur', 'Tarte au sucre', 'Pets de sœur', 'Tire d\'érable',
      'Queue de castor', 'Sucre à la crème', 'Grands-pères dans le sirop',
      'Tarte à la ferlouche', 'Beignes', 'Gâteau aux carottes', 'Tarte au sirop d\'érable',
    ],
    cuisine: [
      'Québécoise', 'Canadienne-française', 'Canadienne', 'Acadienne',
      'Traditionnelle', 'Cabane à sucre', 'Franco-canadienne',
    ],
    spice: [
      'Cannelle', 'Muscade', 'Clou de girofle', 'Herbes salées',
      'Sarriette', 'Quatre-épices', 'Sel de mer',
    ],
  },

  // Canadian internet domains
  internet: {
    domainSuffix: ['ca', 'qc.ca', 'com', 'net'],
    freeEmail: ['gmail.com', 'hotmail.ca', 'yahoo.ca', 'outlook.com', 'videotron.ca', 'sympatico.ca'],
  },
}
