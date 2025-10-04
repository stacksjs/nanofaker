import type { LocaleDefinition } from '../types'

export const fr: LocaleDefinition = {
  title: 'French',
  person: {
    firstName: [
      'Marie', 'Nathalie', 'Isabelle', 'Anne', 'Christine', 'Sophie', 'Catherine', 'Françoise', 'Monique', 'Julie',
      'Jean', 'Pierre', 'Michel', 'André', 'Philippe', 'Alain', 'Bernard', 'Jacques', 'Louis', 'Nicolas',
      'Emma', 'Louise', 'Chloé', 'Camille', 'Léa', 'Manon', 'Clara', 'Sarah', 'Inès', 'Zoé',
    ],
    lastName: [
      'Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau',
      'Simon', 'Laurent', 'Lefebvre', 'Michel', 'Garcia', 'David', 'Bertrand', 'Roux', 'Vincent', 'Fournier',
    ],
    prefix: ['M.', 'Mme', 'Mlle', 'Dr.', 'Prof.'],
    suffix: ['Jr', 'Sr', 'I', 'II', 'III', 'IV', 'V'],
    gender: ['Masculin', 'Féminin', 'Non-binaire', 'Agenre', 'Bigenre', 'Genre fluide'],
    jobTitle: [
      'Ingénieur Logiciel', 'Chef de Produit', 'Designer', 'Data Scientist', 'Ingénieur DevOps',
      'Responsable Marketing', 'Commercial', 'Comptable', 'Directeur des Ressources Humaines', 'Directeur',
    ],
  },
  address: {
    street: [
      'République', 'Victor Hugo', 'Liberté', 'Église', 'Gare', 'Paix', 'Mairie', 'Château',
      'Nationale', 'Charles de Gaulle', 'Verdun', 'Pasteur', 'Jaurès', 'Carnot',
    ],
    city: [
      'Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier',
      'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Le Havre', 'Saint-Étienne', 'Toulon',
    ],
    state: [
      'Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Auvergne-Rhône-Alpes', 'Nouvelle-Aquitaine',
      'Occitanie', 'Hauts-de-France', 'Bretagne', 'Grand Est', 'Pays de la Loire', 'Normandie',
    ],
    stateAbbr: [
      'IDF', 'PAC', 'ARA', 'NAQ', 'OCC', 'HDF', 'BRE', 'GES', 'PDL', 'NOR',
    ],
    country: [
      'France', 'Belgique', 'Suisse', 'Canada', 'Luxembourg', 'Monaco', 'Sénégal', 'Côte d\'Ivoire',
      'Cameroun', 'Madagascar', 'Mali', 'Burkina Faso', 'Niger', 'Haïti',
    ],
    countryCode: ['FR', 'BE', 'CH', 'CA', 'LU', 'MC', 'SN', 'CI', 'CM', 'MG', 'ML', 'BF', 'NE', 'HT'],
    zipCode: ['#####'],
    buildingNumber: ['###', '##', '#'],
    direction: ['Nord', 'Sud', 'Est', 'Ouest', 'Nord-Est', 'Nord-Ouest', 'Sud-Est', 'Sud-Ouest'],
    streetSuffix: [
      'Rue', 'Avenue', 'Boulevard', 'Place', 'Allée', 'Chemin', 'Route', 'Impasse',
      'Passage', 'Square', 'Cours', 'Quai',
    ],
  },
  company: {
    name: [
      'TechFrance', 'SolutionDigitale', 'InnovaFR', 'DataSys', 'NouveauTech', 'FutureSoft',
      'SmartSystème', 'CoreTech Paris', 'GlobalFR', 'ProTech',
    ],
    suffix: ['SA', 'SARL', 'SAS', 'EURL', 'SNC', 'Technologies', 'Solutions', 'Systèmes'],
    industry: [
      'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce', 'Manufacture',
      'Télécommunications', 'Énergie', 'Immobilier', 'Transport', 'Médias', 'Hôtellerie',
    ],
    buzzwords: [
      'synergiser', 'exploiter', 'innover', 'révolutionner', 'optimiser', 'transformer',
      'autonomiser', 'faciliter', 'orchestrer', 'intégrer',
    ],
    adjective: [
      'révolutionnaire', 'innovant', 'avancé', 'leader', 'premium', 'entreprise',
      'évolutif', 'robuste', 'agile', 'sécurisé', 'efficace', 'intelligent',
    ],
    descriptor: [
      'global', 'numérique', 'cloud', 'IA', 'data-driven', 'centré utilisateur',
      'automatisé', 'intégré', 'moderne', 'innovant',
    ],
    noun: [
      'solution', 'plateforme', 'système', 'service', 'technologie', 'framework', 'infrastructure',
      'application', 'réseau', 'portail', 'écosystème', 'architecture',
    ],
  },
  internet: {
    domainSuffix: ['fr', 'com', 'net', 'org', 'eu', 'be', 'ch'],
    freeEmail: ['gmail.com', 'yahoo.fr', 'hotmail.fr', 'outlook.fr', 'orange.fr', 'free.fr'],
  },
  phone: {
    formats: [
      '01-##-##-##-##',
      '02-##-##-##-##',
      '06-##-##-##-##',
      '+33-#-##-##-##-##',
    ],
  },
}
