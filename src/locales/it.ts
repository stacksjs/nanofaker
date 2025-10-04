import type { LocaleDefinition } from '../types'

export const it: LocaleDefinition = {
  title: 'Italian',
  person: {
    firstName: [
      'Francesco', 'Alessandro', 'Andrea', 'Matteo', 'Lorenzo', 'Gabriele', 'Mattia', 'Leonardo', 'Davide', 'Riccardo',
      'Federico', 'Tommaso', 'Giuseppe', 'Antonio', 'Marco', 'Giovanni', 'Luca', 'Pietro', 'Paolo', 'Carlo',
      'Stefano', 'Massimo', 'Roberto', 'Fabio', 'Simone', 'Daniele', 'Emanuele', 'Filippo', 'Nicola', 'Alessio',
      'Michele', 'Vincenzo', 'Giorgio', 'Sergio', 'Mario', 'Angelo', 'Salvatore', 'Luigi', 'Franco', 'Enrico',
      'Sofia', 'Giulia', 'Aurora', 'Alice', 'Ginevra', 'Emma', 'Giorgia', 'Greta', 'Beatrice', 'Anna',
      'Chiara', 'Sara', 'Martina', 'Francesca', 'Alessia', 'Elisa', 'Valentina', 'Silvia', 'Elena', 'Laura',
      'Federica', 'Ilaria', 'Arianna', 'Camilla', 'Serena', 'Cristina', 'Claudia', 'Michela', 'Antonella', 'Daniela',
      'Maria', 'Lucia', 'Paola', 'Roberta', 'Giovanna', 'Teresa', 'Monica', 'Barbara', 'Simona', 'Elisabetta',
      'Vittoria', 'Ludovica', 'Bianca', 'Matilde', 'Viola', 'Nicole', 'Rebecca', 'Eleonora', 'Margherita', 'Caterina',
    ],
    lastName: [
      'Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco',
      'Bruno', 'Gallo', 'Conti', 'De Luca', 'Costa', 'Giordano', 'Mancini', 'Rizzo', 'Lombardi', 'Moretti',
      'Barbieri', 'Fontana', 'Santoro', 'Mariani', 'Rinaldi', 'Caruso', 'Ferrara', 'Galli', 'Martini', 'Leone',
      'Longo', 'Gentile', 'Martinelli', 'Vitale', 'Lombardo', 'Serra', 'Coppola', 'De Santis', 'D\'Angelo', 'Marchetti',
      'Parisi', 'Villa', 'Conte', 'Ferraro', 'Fabbri', 'Bianco', 'Marini', 'Grasso', 'Valentini', 'Messina',
      'Sala', 'De Angelis', 'Gatti', 'Pellegrini', 'Palumbo', 'Sanna', 'Farina', 'Monti', 'Testa', 'Grassi',
      'Carbone', 'Giuliani', 'Benedetti', 'Barone', 'Rossetti', 'Caputo', 'Montanari', 'Guerra', 'Palmieri', 'Bernardi',
    ],
    prefix: ['Sig.', 'Sig.ra', 'Dott.', 'Dott.ssa', 'Prof.', 'Prof.ssa', 'Ing.', 'Avv.'],
    suffix: ['Jr.', 'Sr.', 'I', 'II', 'III', 'IV'],
    gender: ['Maschile', 'Femminile', 'Non-binario', 'Agender', 'Genderfluid'],
    jobTitle: [
      'Ingegnere del Software', 'Product Manager', 'Designer', 'Data Scientist', 'Ingegnere DevOps',
      'Responsabile Marketing', 'Rappresentante Vendite', 'Contabile', 'Responsabile Risorse Umane',
      'Amministratore Delegato', 'Direttore Tecnico', 'Direttore Finanziario', 'Project Manager',
      'Business Analyst', 'Sviluppatore', 'Architetto Software', 'Consulente', 'Analista', 'Coordinatore',
      'Specialista', 'Tecnico', 'Assistente', 'Responsabile Operazioni', 'Responsabile Vendite',
    ],
  },
  address: {
    street: [
      'Roma', 'Milano', 'Garibaldi', 'Vittorio Emanuele', 'Dante', 'Mazzini', 'Cavour', 'Verdi',
      'Marconi', 'XX Settembre', 'Umberto I', 'Matteotti', 'Kennedy', 'Europa', 'Libertà', 'Nazionale',
      'Venezia', 'Torino', 'Napoli', 'Firenze', 'Bologna', 'Genova', 'Colombo', 'IV Novembre',
    ],
    city: [
      'Roma', 'Milano', 'Napoli', 'Torino', 'Palermo', 'Genova', 'Bologna', 'Firenze', 'Bari', 'Catania',
      'Venezia', 'Verona', 'Messina', 'Padova', 'Trieste', 'Brescia', 'Taranto', 'Prato', 'Parma', 'Modena',
      'Reggio Calabria', 'Reggio Emilia', 'Perugia', 'Ravenna', 'Livorno', 'Cagliari', 'Foggia', 'Rimini',
      'Salerno', 'Ferrara', 'Sassari', 'Latina', 'Giugliano in Campania', 'Monza', 'Siracusa', 'Pescara',
      'Bergamo', 'Forlì', 'Trento', 'Vicenza', 'Terni', 'Bolzano', 'Novara', 'Piacenza', 'Ancona',
    ],
    state: [
      'Lazio', 'Lombardia', 'Campania', 'Piemonte', 'Sicilia', 'Liguria', 'Emilia-Romagna', 'Toscana',
      'Puglia', 'Veneto', 'Calabria', 'Sardegna', 'Marche', 'Abruzzo', 'Friuli-Venezia Giulia',
      'Trentino-Alto Adige', 'Umbria', 'Basilicata', 'Molise', "Valle d'Aosta",
    ],
    stateAbbr: [
      'LZ', 'LM', 'CM', 'PM', 'SC', 'LG', 'ER', 'TS', 'PG', 'VN', 'CL', 'SD', 'MR', 'AB', 'FV', 'TA', 'UM', 'BS', 'ML', 'VA',
    ],
    country: [
      'Italia', 'Svizzera', 'Francia', 'Spagna', 'Germania', 'Austria', 'Grecia', 'Malta',
      'Slovenia', 'Croazia', 'San Marino', 'Città del Vaticano', 'Monaco', 'Liechtenstein',
    ],
    countryCode: ['IT', 'CH', 'FR', 'ES', 'DE', 'AT', 'GR', 'MT', 'SI', 'HR', 'SM', 'VA', 'MC', 'LI'],
    zipCode: ['#####'],
    buildingNumber: ['###', '##', '#'],
    direction: ['Nord', 'Sud', 'Est', 'Ovest', 'Nord-Est', 'Nord-Ovest', 'Sud-Est', 'Sud-Ovest'],
    streetSuffix: [
      'Via', 'Viale', 'Corso', 'Piazza', 'Largo', 'Vicolo', 'Strada', 'Lungomare', 'Borgo',
      'Circonvallazione', 'Passaggio', 'Salita', 'Discesa', 'Rotonda', 'Galleria',
    ],
  },
  company: {
    name: [
      'TechItalia', 'ItalSoft', 'RomaTech', 'MilanoSoft', 'DataSistemi', 'CloudNet Italia',
      'InnovaSrl', 'SoluzioniDigitali', 'FuturoTech', 'SmartSistemi', 'PrimeSoft', 'AlphaTech',
      'MediterraneoTech', 'AdriaticSoft', 'TirrenoTech', 'AlpiSoft', 'AppennineTech',
    ],
    suffix: ['S.p.A.', 'S.r.l.', 'S.n.c.', 'S.a.s.', 'S.r.l.s.', 'Technologies', 'Solutions', 'Systems'],
    industry: [
      'Tecnologia', 'Finanza', 'Sanità', 'Istruzione', 'Commercio', 'Manifattura',
      'Telecomunicazioni', 'Energia', 'Immobiliare', 'Trasporti', 'Media', 'Ospitalità',
      'Moda', 'Alimentare', 'Turismo', 'Automotive', 'Farmaceutica', 'Chimica',
    ],
    buzzwords: [
      'sinergizzare', 'sfruttare', 'innovare', 'rivoluzionare', 'ottimizzare', 'trasformare',
      'potenziare', 'abilitare', 'facilitare', 'orchestrare', 'integrare', 'digitalizzare',
    ],
    adjective: [
      'rivoluzionario', 'innovativo', 'avanzato', 'leader', 'premium', 'aziendale',
      'scalabile', 'robusto', 'agile', 'sicuro', 'efficiente', 'intelligente', 'moderno',
    ],
    descriptor: [
      'globale', 'digitale', 'cloud', 'AI', 'data-driven', 'user-centric', 'automatizzato',
      'integrato', 'connesso', 'intelligente', 'personalizzato', 'sostenibile',
    ],
    noun: [
      'soluzione', 'piattaforma', 'sistema', 'servizio', 'tecnologia', 'framework', 'infrastruttura',
      'applicazione', 'rete', 'portale', 'ecosistema', 'architettura', 'motore',
    ],
  },
  internet: {
    domainSuffix: ['it', 'com', 'net', 'org', 'eu', 'info', 'biz'],
    freeEmail: ['gmail.com', 'libero.it', 'virgilio.it', 'hotmail.it', 'outlook.it', 'yahoo.it', 'tiscali.it'],
  },
  phone: {
    formats: [
      '0##-#######',
      '0##/#######',
      '+39 0## #######',
      '+39-0##-#######',
      '3## ### ####',
      '+39 3## ### ####',
    ],
  },
}
