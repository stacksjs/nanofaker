import type { LocaleDefinition } from '../types'

export const nl: LocaleDefinition = {
  title: 'Dutch',
  person: {
    firstNameMale: [
      'Daan', 'Sem', 'Lucas', 'Milan', 'Levi', 'Luuk', 'Bram', 'Jayden', 'Lars', 'Thomas',
      'Noah', 'Max', 'Jesse', 'Tim', 'Tom', 'Nick', 'Kevin', 'Thijs', 'Ruben', 'Sam',
      'Stijn', 'Finn', 'Sven', 'Bas', 'Mees', 'Jasper', 'Wouter', 'Casper', 'Teun', 'Julian',
      'Jan', 'Pieter', 'Kees', 'Henk', 'Dirk', 'Joop', 'Bart', 'Mark', 'Peter', 'Johan',
    ],
    firstNameFemale: [
      'Emma', 'Sophie', 'Julia', 'Anna', 'Lisa', 'Saar', 'Eva', 'Isa', 'Tess', 'Fleur',
      'Sara', 'Mila', 'Luna', 'Noa', 'Lotte', 'Femke', 'Liv', 'Zoey', 'Nina', 'Roos',
      'Fenna', 'Lieke', 'Lauren', 'Evi', 'Olivia', 'Yara', 'Amy', 'Lynn', 'Floor', 'Sanne',
      'Anne', 'Marie', 'Els', 'Anja', 'Ingrid', 'Petra', 'Maria', 'Marieke', 'Esther', 'Linda',
    ],
    firstNameNeutral: [
      'Robin', 'Kim', 'Alex', 'Sam', 'Dani', 'Charlie', 'Janne', 'Remy', 'Lou', 'Jip',
    ],
    lastName: [
      'de Jong', 'Jansen', 'de Vries', 'van den Berg', 'van Dijk', 'Bakker', 'Visser', 'Smit',
      'Meijer', 'de Boer', 'Mulder', 'de Groot', 'Bos', 'Vos', 'Peters', 'Hendriks', 'van Leeuwen',
      'Dekker', 'Brouwer', 'de Wit', 'Dijkstra', 'Smeets', 'de Graaf', 'van der Meer', 'van der Linden',
      'Kok', 'Jacobs', 'de Haan', 'Vermeulen', 'van den Heuvel', 'van der Heijden', 'van der Veen',
    ],
    gender: ['Man', 'Vrouw', 'Non-binair'],
    jobTitle: [
      'Software Engineer', 'Accountant', 'Architect', 'Leraar', 'Verpleegkundige', 'Arts',
      'Advocaat', 'Verkoper', 'Manager', 'Consultant', 'Designer', 'Developer', 'Analist',
      'Secretaresse', 'Technicus', 'Monteur', 'Kok', 'Brandweerman', 'Politieagent',
      'Journalist', 'Fotograaf', 'Timmerman', 'Elektricien', 'Loodgieter', 'Schilder',
    ],
    prefix: ['Dhr.', 'Mevr.', 'Dr.', 'Prof.', 'Ir.', 'Drs.'],
    suffix: ['Jr.', 'Sr.', 'II', 'III', 'IV'],
  },
  address: {
    street: [
      'Hoofdstraat', 'Dorpsstraat', 'Kerkstraat', 'Schoolstraat', 'Stationsweg', 'Parallelweg',
      'Molenstraat', 'Beatrixlaan', 'Wilhelminalaan', 'Julianastraat', 'Nassaustraat',
      'Koninginnegracht', 'Prins Hendrikstraat', 'Van Goghstraat', 'Rembrandtlaan',
      'Mozartstraat', 'Beethovenstraat', 'Bachstraat', 'Chopinstraat', 'Handelstraat',
      'Lindenlaan', 'Esdoornlaan', 'Berkenlaan', 'Eikenlaan', 'Populierenlaan',
    ],
    city: [
      'Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Eindhoven', 'Groningen', 'Tilburg',
      'Almere', 'Breda', 'Nijmegen', 'Enschede', 'Apeldoorn', 'Haarlem', 'Arnhem', 'Zaanstad',
      'Amersfoort', 'Haarlemmermeer', 's-Hertogenbosch', 'Zoetermeer', 'Zwolle', 'Leiden',
      'Maastricht', 'Dordrecht', 'Ede', 'Alphen aan den Rijn', 'Westland', 'Alkmaar',
    ],
    state: [
      'Noord-Holland', 'Zuid-Holland', 'Utrecht', 'Gelderland', 'Noord-Brabant', 'Limburg',
      'Zeeland', 'Flevoland', 'Overijssel', 'Drenthe', 'Friesland', 'Groningen',
    ],
    country: [
      'Nederland', 'België', 'Duitsland', 'Frankrijk', 'Spanje', 'Italië', 'Verenigd Koninkrijk',
      'Zweden', 'Noorwegen', 'Denemarken', 'Finland', 'Oostenrijk', 'Zwitserland', 'Portugal',
    ],
    zipCode: ['1011 AA', '2011 BB', '3011 CC', '4011 DD', '5011 EE', '6011 FF', '7011 GG', '8011 HH', '9011 II'],
    direction: ['Noord', 'Zuid', 'Oost', 'West', 'Noordoost', 'Noordwest', 'Zuidoost', 'Zuidwest'],
  },
  company: {
    name: [
      'Technologie BV', 'Handel & Co', 'Groep Nederland', 'Holding Maatschappij', 'Services BV',
      'Solutions Nederland', 'Consulting Group', 'Media Groep', 'Retail BV', 'Transport & Logistiek',
      'Bouw & Ontwikkeling', 'Energie Nederland', 'Verzekeringen BV', 'Bank & Financiën',
    ],
    industry: [
      'Technologie', 'Retail', 'Financiën', 'Gezondheidszorg', 'Onderwijs', 'Bouw', 'Transport',
      'Media', 'Energie', 'Landbouw', 'Toerisme', 'Horeca', 'Productie', 'Consultancy',
    ],
    buzzword: [
      'innovatie', 'duurzaamheid', 'digitalisering', 'groei', 'optimalisatie', 'synergie',
      'transformatie', 'strategie', 'efficiëntie', 'kwaliteit', 'klantgericht', 'toekomstgericht',
    ],
    descriptor: [
      'toonaangevend', 'innovatief', 'duurzaam', 'betrouwbaar', 'ervaren', 'professioneel',
      'dynamisch', 'vooruitstrevend', 'groeiend', 'internationaal', 'succesvol', 'gerenommeerd',
    ],
  },
  internet: {
    domainSuffix: ['nl', 'com', 'net', 'org', 'eu', 'be'],
    exampleEmail: [
      'jan@voorbeeld.nl',
      'info@bedrijf.nl',
      'contact@firma.nl',
      'service@webshop.nl',
    ],
  },
  phone: {
    number: [
      '+31 6 12345678',
      '+31 20 1234567',
      '+31 30 1234567',
      '+31 10 1234567',
      '06-12345678',
      '020-1234567',
    ],
  },
  food: {
    dish: [
      'Stamppot', 'Erwtensoep', 'Hachee', 'Hutspot', 'Boerenkool', 'Zuurkool', 'Andijviestamppot',
      'Stroopwafels', 'Poffertjes', 'Bitterballen', 'Kroketten', 'Frikandel', 'Kaassoufflé',
      'Haring', 'Kibbeling', 'Patat', 'Satésaus', 'Appeltaart', 'Oliebollen', 'Tompouce',
      'Vlaai', 'Bossche Bol', 'Pepernoten', 'Speculaas', 'Hagelslag', 'Pindakaas',
    ],
    ingredient: [
      'Aardappel', 'Boerenkool', 'Andijvie', 'Prei', 'Wortel', 'Ui', 'Gehakt', 'Rookworst',
      'Spek', 'Kaas', 'Melk', 'Boter', 'Eieren', 'Bloem', 'Suiker', 'Zout', 'Peper',
      'Haring', 'Zalm', 'Kabeljauw', 'Garnalen', 'Tomaat', 'Komkommer', 'Sla', 'Paprika',
    ],
    cuisine: [
      'Nederlandse keuken', 'Indonesische keuken', 'Surinaamse keuken', 'Chinese keuken',
      'Italiaanse keuken', 'Franse keuken', 'Griekse keuken', 'Turkse keuken',
    ],
    dessert: [
      'Appeltaart', 'Vlaai', 'Tompouce', 'Bossche Bol', 'Stroopwafels', 'Poffertjes',
      'Oliebollen', 'Speculaas', 'Pepernoten', 'Vla', 'Yoghurt', 'IJs', 'Pudding',
    ],
    fruit: [
      'Appel', 'Peer', 'Banaan', 'Sinaasappel', 'Mandarijn', 'Aardbei', 'Framboos', 'Blauwe bes',
      'Druif', 'Meloen', 'Watermeloen', 'Ananas', 'Mango', 'Kiwi', 'Perzik', 'Pruim',
    ],
    vegetable: [
      'Aardappel', 'Wortel', 'Ui', 'Knoflook', 'Tomaat', 'Komkommer', 'Paprika', 'Courgette',
      'Aubergine', 'Broccoli', 'Bloemkool', 'Boerenkool', 'Andijvie', 'Sla', 'Spinazie', 'Prei',
    ],
    meat: [
      'Rundvlees', 'Varkensvlees', 'Kip', 'Kalkoen', 'Lam', 'Gehakt', 'Spek', 'Rookworst',
      'Worst', 'Ham', 'Biefstuk', 'Schnitzel', 'Varkenshaas', 'Kipfilet',
    ],
    spice: [
      'Zout', 'Peper', 'Kaneel', 'Nootmuskaat', 'Kruidnagel', 'Gember', 'Knoflook', 'Peterselie',
      'Basilicum', 'Oregano', 'Tijm', 'Rozemarijn', 'Kerrie', 'Paprikapoeder', 'Kurkuma',
    ],
  },
  animal: {
    dog: [
      'Labrador', 'Duitse Herder', 'Golden Retriever', 'Bulldog', 'Beagle', 'Poedel',
      'Rottweiler', 'Yorkshire Terrier', 'Boxer', 'Teckel', 'Jack Russell', 'Border Collie',
    ],
    cat: [
      'Europese Korthaar', 'Perzische Kat', 'Siamese', 'Maine Coon', 'Britse Korthaar',
      'Ragdoll', 'Bengaal', 'Noorse Boskat', 'Sphynx', 'Schotse Vouwoor',
    ],
    bird: [
      'Merel', 'Mees', 'Vink', 'Mus', 'Ekster', 'Gaai', 'Koolmees', 'Roodborst', 'Lijster',
      'Specht', 'Zwaan', 'Eend', 'Gans', 'Reiger', 'Uil', 'Arend', 'Valk', 'Papegaai',
    ],
    fish: [
      'Zalm', 'Kabeljauw', 'Haring', 'Makreel', 'Tonijn', 'Zeebaars', 'Snoekbaars', 'Karper',
      'Forel', 'Paling', 'Snoek', 'Baars', 'Brasem', 'Voorn', 'Tong', 'Schol',
    ],
    horse: [
      'Fries Paard', 'Gelders Paard', 'Groninger Paard', 'KWPN', 'Shetlander', 'IJslander',
      'Arabier', 'Andalusiër', 'Quarter Horse', 'Appaloosa', 'Paint Horse',
    ],
    rabbit: [
      'Nederlands Hangoor', 'Vlaams Reus', 'Dwergkonijn', 'Angora', 'Rex', 'Hollander',
      'Leeuwenkop', 'Vlaamse Reus', 'Klein Zilver', 'Tan',
    ],
    insect: [
      'Bij', 'Vlinder', 'Lieveheersbeestje', 'Mier', 'Wesp', 'Hommel', 'Libel', 'Spin',
      'Kever', 'Sprinkhaan', 'Mot', 'Vlo', 'Mug', 'Tor',
    ],
  },
  sport: {
    sport: [
      'Voetbal', 'Hockey', 'Tennis', 'Wielrennen', 'Schaatsen', 'Zwemmen', 'Volleybal',
      'Handbal', 'Basketbal', 'Atletiek', 'Turnen', 'Paardrijden', 'Zeilen', 'Roeien',
    ],
    team: [
      'Ajax', 'Feyenoord', 'PSV', 'AZ', 'FC Utrecht', 'FC Groningen', 'Vitesse', 'FC Twente',
      'Oranje', 'Jong Oranje', 'Oranje Leeuwinnen', 'HC Bloemendaal', 'HC Den Bosch',
    ],
    athlete: [
      'Johan Cruijff', 'Marco van Basten', 'Ruud Gullit', 'Frank Rijkaard', 'Dennis Bergkamp',
      'Robin van Persie', 'Arjen Robben', 'Wesley Sneijder', 'Memphis Depay', 'Virgil van Dijk',
      'Fanny Blankers-Koen', 'Sven Kramer', 'Ireen Wüst', 'Epke Zonderland', 'Dafne Schippers',
    ],
  },
  music: {
    genre: [
      'Pop', 'Rock', 'Dance', 'Nederhop', 'Nederlandstalig', 'EDM', 'House', 'Techno',
      'Jazz', 'Klassiek', 'Blues', 'R&B', 'Reggae', 'Soul', 'Folk', 'Country',
    ],
    artist: [
      'André Hazes', 'Marco Borsato', 'Anouk', 'Golden Earring', 'Doe Maar', 'Bløf',
      'Racoon', 'Kane', 'De Dijk', 'Guus Meeuwis', 'Acda en de Munnik', 'Volumia!',
      'Tiësto', 'Armin van Buuren', 'Afrojack', 'Martin Garrix', 'Hardwell', 'Nicky Romero',
    ],
    song: [
      'Zij Gelooft In Mij', 'Blij Dat Ik Leef', 'Het Dorp', 'Omdat Ik Zo Van Je Hou',
      'Radar Love', 'De Bom', 'Is Dit Alles', 'Dansen Aan Zee', 'Brabant', 'Mag Ik Dan Bij Jou',
    ],
    instrument: [
      'Piano', 'Gitaar', 'Drums', 'Viool', 'Saxofoon', 'Trompet', 'Fluit', 'Klarinet',
      'Accordeon', 'Mondharmonica', 'Harp', 'Cello', 'Contrabas', 'Blokfluit',
    ],
  },
  commerce: {
    product: [
      'Fiets', 'Laptop', 'Telefoon', 'Tablet', 'Camera', 'Televisie', 'Koelkast', 'Wasmachine',
      'Stofzuiger', 'Koffiezetapparaat', 'Bureau', 'Stoel', 'Tafel', 'Lamp', 'Klok', 'Boek',
    ],
    productAdjective: [
      'Nieuwe', 'Moderne', 'Klassieke', 'Luxe', 'Budget', 'Premium', 'Handgemaakte', 'Duurzame',
      'Innovatieve', 'Slimme', 'Compacte', 'Professionele', 'Ergonomische', 'Stijlvolle',
    ],
    productMaterial: [
      'Houten', 'Metalen', 'Plastic', 'Glazen', 'Leren', 'Stoffen', 'Keramische', 'Stenen',
      'Aluminium', 'Stalen', 'Kartonnen', 'Rubberen', 'Bamboe', 'Betonnen',
    ],
    department: [
      'Kleding', 'Schoenen', 'Elektronica', 'Boeken', 'Speelgoed', 'Sport', 'Tuin', 'Wonen',
      'Keuken', 'Baby', 'Beauty', 'Auto', 'Fietsen', 'Gereedschap', 'Dieren',
    ],
    color: [
      'Rood', 'Blauw', 'Groen', 'Geel', 'Oranje', 'Paars', 'Roze', 'Bruin', 'Zwart', 'Wit',
      'Grijs', 'Beige', 'Turquoise', 'Lime', 'Magenta', 'Cyaan',
    ],
  },
  book: {
    title: [
      'Het Achterhuis', 'De Aanslag', 'De Donkere Kamer van Damokles', 'De Avonden', 'Turks Fruit',
      'Het Gouden Ei', 'De Ontdekking van de Hemel', 'Oeroeg', 'Max Havelaar', 'De Tweeling',
      'Het Verdriet van België', 'De Engelenmaker', 'Publieke Werken', 'Bonita Avenue',
    ],
    author: [
      'Anne Frank', 'Harry Mulisch', 'Gerard Reve', 'Willem Frederik Hermans', 'Jan Wolkers',
      'Hella Haasse', 'Louis Couperus', 'Multatuli', 'Simon Vestdijk', 'Cees Nooteboom',
      'Arnon Grunberg', 'Tommy Wieringa', 'Peter Buwalda', 'Marieke Lucas Rijneveld',
    ],
    publisher: [
      'De Bezige Bij', 'Ambo Anthos', 'Atlas Contact', 'Uitgeverij Prometheus', 'Querido',
      'Nijgh & Van Ditmar', 'Meulenhoff', 'Van Oorschot', 'Lebowski Publishers',
    ],
    genre: [
      'Roman', 'Thriller', 'Fantasy', 'Historisch', 'Poëzie', 'Non-fictie', 'Biografie',
      'Autobiografie', 'Jeugdliteratuur', 'Literatuur', 'Spanning', 'Sciencefiction',
    ],
    series: [
      'Harry Potter', 'De Griezelbus', 'Kruistocht in Spijkerbroek', 'Het Bureau', 'Tonio',
      'Spijt!', 'Oorlogswinter', 'Gouden Eeuw', 'De Beuk', 'Polleke',
    ],
    review: [
      'Een meesterwerk!', 'Onvergetelijk mooi.', 'Aanrader voor iedereen.',
      'Prachtig geschreven.', 'Indrukwekkend en ontroerend.', 'Spanning van begin tot eind.',
      'Een must-read!', 'Schitterend verhaal.', 'Blijft je bij.', 'Geweldig boek!',
    ],
  },
  vehicle: {
    manufacturer: [
      'DAF', 'Spyker', 'Donkervoort', 'Volkswagen', 'Mercedes-Benz', 'BMW', 'Audi', 'Opel',
      'Peugeot', 'Renault', 'Citroën', 'Fiat', 'Toyota', 'Honda', 'Nissan', 'Mazda',
    ],
    model: [
      'Golf', 'Polo', 'Passat', 'A-Klasse', 'C-Klasse', 'E-Klasse', '3-Serie', '5-Serie',
      'Corolla', 'Yaris', 'Auris', 'Civic', 'Accord', 'Clio', 'Megane', '208', '308',
    ],
    type: [
      'Sedan', 'Hatchback', 'Stationwagon', 'SUV', 'MPV', 'Cabrio', 'Coupé', 'Bestelwagen',
      'Vrachtwagen', 'Motor', 'Scooter', 'Bromfiets', 'Elektrische auto', 'Hybride',
    ],
    fuel: [
      'Benzine', 'Diesel', 'Elektrisch', 'Hybride', 'LPG', 'CNG', 'Waterstof',
    ],
    bicycle: [
      'Stadsfiets', 'Racefiets', 'Mountainbike', 'Elektrische fiets', 'Bakfiets', 'Vouwfiets',
      'Tandem', 'Ligfiets', 'Kinderfiets', 'BMX', 'Crossfiets', 'Transportfiets',
    ],
  },
  word: {
    adjective: [
      'groot', 'klein', 'mooi', 'lelijk', 'goed', 'slecht', 'nieuw', 'oud', 'warm', 'koud',
      'snel', 'langzaam', 'hoog', 'laag', 'breed', 'smal', 'dik', 'dun', 'zwaar', 'licht',
    ],
    adverb: [
      'snel', 'langzaam', 'goed', 'slecht', 'graag', 'veel', 'weinig', 'altijd', 'nooit', 'vaak',
      'soms', 'hier', 'daar', 'nu', 'toen', 'later', 'vroeg', 'laat', 'samen', 'alleen',
    ],
    conjunction: [
      'en', 'of', 'maar', 'want', 'dus', 'omdat', 'terwijl', 'hoewel', 'toen', 'als',
      'dat', 'dan', 'noch', 'ofwel', 'tenzij', 'voordat', 'nadat', 'zodra',
    ],
    interjection: [
      'hé', 'oh', 'ah', 'wow', 'oeps', 'au', 'hoera', 'helaas', 'jammer', 'pfff',
      'tja', 'hmm', 'eh', 'zo', 'nou', 'hallo', 'doei', 'dag', 'yes', 'nee',
    ],
    noun: [
      'huis', 'auto', 'fiets', 'boom', 'bloem', 'tafel', 'stoel', 'boek', 'computer', 'telefoon',
      'deur', 'raam', 'straat', 'stad', 'land', 'water', 'lucht', 'aarde', 'zon', 'maan',
    ],
    preposition: [
      'in', 'op', 'aan', 'bij', 'met', 'van', 'voor', 'na', 'door', 'over', 'onder',
      'boven', 'naast', 'tussen', 'achter', 'vanaf', 'tot', 'zonder', 'tegen', 'uit',
    ],
    verb: [
      'zijn', 'hebben', 'doen', 'gaan', 'komen', 'zien', 'maken', 'geven', 'kunnen', 'moeten',
      'willen', 'worden', 'zeggen', 'vinden', 'denken', 'weten', 'houden', 'blijven', 'lopen', 'lezen',
    ],
  },
  hacker: {
    abbreviation: [
      'HTTP', 'HTTPS', 'FTP', 'SSH', 'DNS', 'IP', 'TCP', 'UDP', 'HTML', 'CSS', 'JS', 'API',
      'SQL', 'JSON', 'XML', 'VPN', 'SSL', 'TLS', 'URL', 'URI', 'RAM', 'CPU', 'GPU', 'SSD',
    ],
    adjective: [
      'digitaal', 'virtueel', 'gedistribueerd', 'open-source', 'cloud-gebaseerd', 'veilig',
      'versleuteld', 'draadloos', 'mobiel', 'schaalbaar', 'modulair', 'gedecentraliseerd',
    ],
    noun: [
      'server', 'database', 'netwerk', 'protocol', 'algoritme', 'interface', 'framework',
      'module', 'library', 'firewall', 'router', 'switch', 'gateway', 'endpoint',
    ],
    verb: [
      'hacken', 'compileren', 'deployen', 'debuggen', 'testen', 'optimaliseren', 'implementeren',
      'integreren', 'migreren', 'backuppen', 'herstellen', 'monitoren', 'scannen', 'patchen',
    ],
    ingverb: [
      'hackend', 'compilerend', 'deployend', 'debuggend', 'testend', 'optimaliseerend',
      'implementerend', 'integrerend', 'migrerend', 'backuppend', 'herstellend', 'monitorend',
    ],
    phrase: [
      'het netwerk verbinden',
      'de database optimaliseren',
      'de firewall configureren',
      'het systeem updaten',
      'de server herstarten',
      'de backup maken',
      'de code reviewen',
      'de security patchen',
    ],
  },
  system: {
    fileName: [
      'document', 'rapport', 'factuur', 'offerte', 'contract', 'notitie', 'memo', 'brief',
      'presentatie', 'spreadsheet', 'database', 'backup', 'log', 'configuratie', 'instellingen',
    ],
    fileType: [
      'audio', 'afbeelding', 'tekst', 'video', 'document', 'spreadsheet', 'presentatie',
      'database', 'archief', 'code', 'configuratie', 'log', 'backup', 'systeem',
    ],
  },
  science: {
    chemicalElement: [
      'Waterstof', 'Helium', 'Lithium', 'Beryllium', 'Boor', 'Koolstof', 'Stikstof', 'Zuurstof',
      'Fluor', 'Neon', 'Natrium', 'Magnesium', 'Aluminium', 'Silicium', 'Fosfor', 'Zwavel',
      'Chloor', 'Argon', 'Kalium', 'Calcium', 'IJzer', 'Koper', 'Zilver', 'Goud', 'Kwik',
    ],
    unit: [
      'meter', 'kilogram', 'seconde', 'ampère', 'kelvin', 'mol', 'candela', 'newton',
      'joule', 'watt', 'volt', 'ohm', 'farad', 'henry', 'hertz', 'pascal', 'liter',
    ],
    constant: [
      'Lichtsnelheid', 'Zwaartekrachtconstante', 'Constante van Planck', 'Boltzmannconstante',
      'Avogadroconstante', 'Gasconstante', 'Elektrische constante', 'Magnetische constante',
    ],
    field: [
      'Natuurkunde', 'Scheikunde', 'Biologie', 'Wiskunde', 'Astronomie', 'Geologie',
      'Meteorologie', 'Ecologie', 'Genetica', 'Biochemie', 'Kwantummechanica', 'Thermodynamica',
    ],
  },
}
