import type { LocaleDefinition } from '../types'

export const de: LocaleDefinition = {
  title: 'German',
  person: {
    firstName: [
      'Alexander', 'Andreas', 'Anton', 'Benjamin', 'Christian', 'Daniel', 'David', 'Elias', 'Emil', 'Felix',
      'Finn', 'Friedrich', 'Gabriel', 'Georg', 'Hans', 'Heinrich', 'Jakob', 'Johannes', 'Jonas', 'Jonathan',
      'Josef', 'Julius', 'Karl', 'Konstantin', 'Leon', 'Levi', 'Liam', 'Louis', 'Luca', 'Lukas',
      'Markus', 'Martin', 'Matthias', 'Maximilian', 'Michael', 'Moritz', 'Niklas', 'Noah', 'Oliver', 'Oskar',
      'Paul', 'Peter', 'Philipp', 'Rafael', 'Robert', 'Samuel', 'Sebastian', 'Simon', 'Stefan', 'Theodor',
      'Thomas', 'Tim', 'Tobias', 'Valentin', 'Vincent', 'Wilhelm', 'Wolfgang',
      'Alexandra', 'Amelie', 'Andrea', 'Angela', 'Anita', 'Anja', 'Anna', 'Anne', 'Barbara', 'Birgit',
      'Britta', 'Charlotte', 'Christina', 'Christine', 'Claudia', 'Diana', 'Doris', 'Elisabeth', 'Ella', 'Emma',
      'Emilia', 'Eva', 'Franziska', 'Gisela', 'Hannah', 'Heike', 'Helena', 'Helga', 'Ingrid', 'Irmgard',
      'Isabella', 'Jana', 'Johanna', 'Julia', 'Karin', 'Katharina', 'Katrin', 'Laura', 'Lea', 'Lena',
      'Lina', 'Lisa', 'Luisa', 'Maria', 'Marie', 'Martina', 'Melanie', 'Mia', 'Monika', 'Nadine',
      'Nicole', 'Nina', 'Petra', 'Rosa', 'Sabine', 'Sandra', 'Sara', 'Sarah', 'Silke', 'Sofia',
      'Sophia', 'Sophie', 'Stefanie', 'Susanne', 'Tanja', 'Theresa', 'Ursula', 'Vanessa', 'Vera',
    ],
    lastName: [
      'Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann',
      'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann',
      'Braun', 'Krüger', 'Hofmann', 'Hartmann', 'Lange', 'Schmitt', 'Werner', 'Schmitz', 'Krause', 'Meier',
      'Lehmann', 'Schmid', 'Schulze', 'Maier', 'Köhler', 'Herrmann', 'König', 'Walter', 'Mayer', 'Huber',
      'Kaiser', 'Fuchs', 'Peters', 'Lang', 'Scholz', 'Möller', 'Weiß', 'Jung', 'Hahn', 'Schubert',
      'Vogel', 'Friedrich', 'Keller', 'Günther', 'Frank', 'Berger', 'Winkler', 'Roth', 'Beck', 'Lorenz',
      'Baumann', 'Franke', 'Albrecht', 'Schuster', 'Simon', 'Ludwig', 'Böhm', 'Winter', 'Kraus', 'Martin',
    ],
    prefix: ['Herr', 'Frau', 'Dr.', 'Prof.', 'Dr. med.', 'Dr. phil.', 'Dipl.-Ing.'],
    suffix: ['Jr.', 'Sr.', 'I', 'II', 'III', 'IV', 'V', 'B.Sc.', 'M.Sc.', 'MBA', 'PhD'],
    gender: ['Männlich', 'Weiblich', 'Nicht-binär', 'Divers', 'Genderfluid', 'Agender'],
    jobTitle: [
      'Software-Ingenieur', 'Produktmanager', 'Designer', 'Datenwissenschaftler', 'DevOps-Ingenieur',
      'Marketingmanager', 'Vertriebsmitarbeiter', 'Buchhalter', 'Personalleiter', 'Geschäftsführer',
      'Technischer Leiter', 'Projektmanager', 'Entwickler', 'Systemadministrator', 'Qualitätsmanager',
      'Berater', 'Analyst', 'Koordinator', 'Architekt', 'Techniker', 'Assistent', 'Spezialist',
      'Abteilungsleiter', 'Teamleiter', 'Controller', 'Sachbearbeiter', 'Ingenieur', 'Direktor',
    ],
  },
  address: {
    street: [
      'Haupt', 'Bahnhof', 'Schul', 'Kirch', 'Markt', 'Ring', 'Park', 'Berg', 'Wald', 'Feld',
      'Garten', 'Wiesen', 'Mühl', 'Bach', 'See', 'Dorf', 'Schloss', 'Turm', 'Brücken', 'Brunnen',
      'Kaiser', 'König', 'Bismarck', 'Goethe', 'Schiller', 'Mozart', 'Bach', 'Beethoven', 'Wagner',
      'Friedrich', 'Wilhelm', 'Karl', 'Ludwig', 'Heinrich', 'Albert', 'Neue', 'Alte', 'Lange', 'Kurze',
    ],
    city: [
      'Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt am Main', 'Stuttgart', 'Düsseldorf', 'Dortmund',
      'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hannover', 'Nürnberg', 'Duisburg', 'Bochum', 'Wuppertal',
      'Bielefeld', 'Bonn', 'Münster', 'Karlsruhe', 'Mannheim', 'Augsburg', 'Wiesbaden', 'Gelsenkirchen',
      'Mönchengladbach', 'Braunschweig', 'Chemnitz', 'Kiel', 'Aachen', 'Halle', 'Magdeburg', 'Freiburg',
      'Krefeld', 'Lübeck', 'Oberhausen', 'Erfurt', 'Mainz', 'Rostock', 'Kassel', 'Hagen', 'Hamm',
      'Saarbrücken', 'Mülheim', 'Potsdam', 'Ludwigshafen', 'Oldenburg', 'Leverkusen', 'Osnabrück',
    ],
    state: [
      'Baden-Württemberg', 'Bayern', 'Berlin', 'Brandenburg', 'Bremen', 'Hamburg', 'Hessen',
      'Mecklenburg-Vorpommern', 'Niedersachsen', 'Nordrhein-Westfalen', 'Rheinland-Pfalz',
      'Saarland', 'Sachsen', 'Sachsen-Anhalt', 'Schleswig-Holstein', 'Thüringen',
    ],
    stateAbbr: [
      'BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW', 'RP', 'SL', 'SN', 'ST', 'SH', 'TH',
    ],
    country: [
      'Deutschland', 'Österreich', 'Schweiz', 'Liechtenstein', 'Luxemburg', 'Belgien', 'Niederlande',
      'Frankreich', 'Italien', 'Polen', 'Tschechien', 'Dänemark', 'Spanien', 'Vereinigtes Königreich',
    ],
    countryCode: ['DE', 'AT', 'CH', 'LI', 'LU', 'BE', 'NL', 'FR', 'IT', 'PL', 'CZ', 'DK', 'ES', 'GB'],
    zipCode: ['#####'],
    buildingNumber: ['###', '##', '#', '####'],
    direction: ['Nord', 'Ost', 'Süd', 'West', 'Nordost', 'Nordwest', 'Südost', 'Südwest'],
    streetSuffix: [
      'Straße', 'Weg', 'Allee', 'Platz', 'Gasse', 'Ring', 'Damm', 'Chaussee', 'Ufer', 'Pfad',
      'Promenade', 'Boulevard', 'Passage', 'Zeile', 'Hof', 'Berg', 'Tal', 'Steig',
    ],
  },
  company: {
    name: [
      'TechnikAG', 'GlobalSoft', 'DatenSysteme', 'CloudNetz', 'InnovationGmbH', 'DigitalLösungen',
      'NächsteGeneration', 'ZukunftsTech', 'SmartSysteme', 'KernTech', 'PrimeSoft', 'AlphaTech',
      'BayernTech', 'NordSoft', 'OstTech', 'WestSysteme', 'SüdSoft', 'RheinTech', 'ElbeSoft',
      'DonauTech', 'AlpenSoft', 'HansaTech', 'SpreeDigital', 'IsarSoft', 'NeckarTech',
    ],
    suffix: ['GmbH', 'AG', 'KG', 'GmbH & Co. KG', 'SE', 'UG', 'Technologies', 'Solutions', 'Systems'],
    industry: [
      'Technologie', 'Finanzen', 'Gesundheitswesen', 'Bildung', 'Einzelhandel', 'Fertigung',
      'Telekommunikation', 'Energie', 'Immobilien', 'Transport', 'Medien', 'Gastgewerbe',
      'Maschinenbau', 'Automobilindustrie', 'Pharmazie', 'Chemie', 'Logistik', 'Versicherung',
    ],
    buzzwords: [
      'synergisieren', 'nutzen', 'innovieren', 'revolutionieren', 'optimieren', 'transformieren',
      'ermächtigen', 'ermöglichen', 'erleichtern', 'orchestrieren', 'integrieren', 'digitalisieren',
    ],
    adjective: [
      'revolutionär', 'innovativ', 'fortschrittlich', 'führend', 'erstklassig', 'unternehmenstauglich',
      'skalierbar', 'robust', 'agil', 'sicher', 'effizient', 'intelligent', 'modern', 'nachhaltig',
    ],
    descriptor: [
      'global', 'digital', 'cloudbasiert', 'KI-gestützt', 'datengesteuert', 'benutzerzentriert',
      'automatisiert', 'integriert', 'vernetzt', 'intelligent', 'maßgeschneidert', 'zukunftssicher',
    ],
    noun: [
      'Lösung', 'Plattform', 'System', 'Dienst', 'Technologie', 'Framework', 'Infrastruktur',
      'Anwendung', 'Netzwerk', 'Portal', 'Ökosystem', 'Architektur', 'Engine', 'Suite',
    ],
  },
  internet: {
    domainSuffix: ['de', 'com', 'net', 'org', 'eu', 'at', 'ch', 'info', 'biz'],
    freeEmail: ['gmail.com', 'gmx.de', 'web.de', 't-online.de', 'outlook.de', 'yahoo.de', 'freenet.de'],
  },
  phone: {
    formats: [
      '0###-########',
      '0###/########',
      '(0###) ########',
      '+49-###-########',
      '+49 ### ########',
    ],
  },
}
