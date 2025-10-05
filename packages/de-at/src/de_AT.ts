import type { LocaleDefinition } from 'nanofaker'

/**
 * German (Austria) locale
 * Extends the base 'de' locale with Austria-specific data
 */
export const de_AT: Partial<LocaleDefinition> = {
  title: 'German (Austria)',

  // Austria-specific address data
  address: {
    city: [
      'Wien', 'Graz', 'Linz', 'Salzburg', 'Innsbruck', 'Klagenfurt', 'Villach',
      'Wels', 'St. Pölten', 'Dornbirn', 'Wiener Neustadt', 'Steyr', 'Feldkirch',
      'Bregenz', 'Leonding', 'Klosterneuburg', 'Baden', 'Wolfsberg', 'Leoben',
      'Krems', 'Traun', 'Amstetten', 'Kapfenberg', 'Mödling', 'Hallein',
    ],
    state: [
      'Wien',
      'Niederösterreich',
      'Oberösterreich',
      'Steiermark',
      'Tirol',
      'Kärnten',
      'Salzburg',
      'Vorarlberg',
      'Burgenland',
    ],
    stateAbbr: ['W', 'NÖ', 'OÖ', 'ST', 'T', 'K', 'S', 'V', 'B'],
    country: ['Österreich', 'Austria'],
    countryCode: ['AT'],
    zipCode: ['####'],
    buildingNumber: ['###', '##', '#', '##a', '#a'],
  },

  // Austrian phone formats
  phone: {
    formats: [
      '0###/######',
      '0### ######',
      '+43 ### ######',
      '+43-###-######',
      '(0###) ######',
    ],
  },

  // Austrian cuisine
  food: {
    dish: [
      'Wiener Schnitzel', 'Tafelspitz', 'Kaiserschmarrn', 'Sachertorte',
      'Apfelstrudel', 'Tiroler Gröstl', 'Kaspressknödel', 'Schweinsbraten',
      'Backhendl', 'Gulasch', 'Erdäpfelsalat', 'Knödel', 'Leberknödelsuppe',
      'Frittatensuppe', 'Krautfleckerl', 'Brettljause', 'Käsespätzle',
      'Kärntner Kasnudeln', 'Topfenstrudel', 'Salzburger Nockerln',
      'Linzer Torte', 'Marillenknödel', 'Zwetschkenröster', 'Baunzerl',
      'Kiachl', 'Grammelknödel', 'Blunzngröstl', 'Bosna', 'Leberkäse',
    ],
    ingredient: [
      'Erdäpfel', 'Kraut', 'Zwiebel', 'Knoblauch', 'Topfen', 'Sauerrahm',
      'Schweinefleisch', 'Rindfleisch', 'Kümmel', 'Marille', 'Zwetschke',
      'Kürbiskernöl', 'Eierschwammerl', 'Serviettenknödel', 'Semmelknödel',
      'Kren', 'Preiselbeeren', 'Staubzucker', 'Schlagobers', 'Mehl',
    ],
    dessert: [
      'Sachertorte', 'Apfelstrudel', 'Kaiserschmarrn', 'Topfenstrudel',
      'Salzburger Nockerln', 'Linzer Torte', 'Marillenknödel', 'Palatschinken',
      'Mohnnudeln', 'Buchteln', 'Vanillekipferl', 'Punschkrapfen',
      'Kardinalschnitten', 'Esterhazy-Torte', 'Dobostorte',
    ],
    cuisine: [
      'Österreichisch', 'Wiener Küche', 'Tiroler Küche', 'Steirische Küche',
      'Italienisch', 'Böhmisch', 'Ungarisch', 'Balkan', 'Mediterran',
    ],
    spice: [
      'Kümmel', 'Majoran', 'Kren', 'Petersilie', 'Schnittlauch', 'Thymian',
      'Liebstöckel', 'Estragon', 'Kerbel', 'Bohnenkraut',
    ],
  },

  // Austrian internet domains
  internet: {
    domainSuffix: ['at', 'co.at', 'or.at', 'com', 'eu'],
    freeEmail: ['gmail.com', 'gmx.at', 'aon.at', 'chello.at', 'hotmail.com'],
  },
}
