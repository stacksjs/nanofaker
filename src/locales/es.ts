import type { LocaleDefinition } from '../types'

export const es: LocaleDefinition = {
  title: 'Spanish',
  person: {
    firstName: [
      'María', 'Carmen', 'Josefa', 'Isabel', 'Dolores', 'Pilar', 'Teresa', 'Ana', 'Francisca', 'Laura',
      'Antonio', 'José', 'Manuel', 'Francisco', 'Juan', 'David', 'Carlos', 'Miguel', 'Pedro', 'Luis',
      'Sofía', 'Isabella', 'Valentina', 'Camila', 'Valeria', 'Lucía', 'Martina', 'Emma', 'Victoria', 'Gabriela',
    ],
    lastName: [
      'García', 'Martínez', 'López', 'González', 'Rodríguez', 'Fernández', 'Pérez', 'Sánchez', 'Ramírez', 'Torres',
      'Flores', 'Rivera', 'Gómez', 'Díaz', 'Cruz', 'Morales', 'Reyes', 'Gutiérrez', 'Ortiz', 'Jiménez',
    ],
    prefix: ['Sr.', 'Sra.', 'Srta.', 'Dr.', 'Dra.', 'Prof.'],
    suffix: ['Jr.', 'Sr.', 'I', 'II', 'III', 'IV', 'V'],
    gender: ['Masculino', 'Femenino', 'No binario', 'Agénero', 'Bigénero', 'Género fluido'],
    jobTitle: [
      'Ingeniero de Software', 'Gerente de Producto', 'Diseñador', 'Científico de Datos', 'Ingeniero DevOps',
      'Gerente de Marketing', 'Representante de Ventas', 'Contador', 'Gerente de Recursos Humanos', 'Director',
    ],
  },
  address: {
    street: [
      'Principal', 'Central', 'Mayor', 'Real', 'Nueva', 'San José', 'Las Flores', 'Del Sol',
      'La Paz', 'Libertad', 'Independencia', 'Reforma', 'Juárez', 'Hidalgo',
    ],
    city: [
      'Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 'Murcia', 'Palma',
      'Las Palmas', 'Bilbao', 'Alicante', 'Córdoba', 'Valladolid', 'Vigo', 'Gijón',
    ],
    state: [
      'Andalucía', 'Cataluña', 'Madrid', 'Comunidad Valenciana', 'Galicia', 'Castilla y León',
      'País Vasco', 'Canarias', 'Castilla-La Mancha', 'Murcia', 'Aragón', 'Extremadura',
    ],
    stateAbbr: [
      'AN', 'CT', 'MD', 'VC', 'GA', 'CL', 'PV', 'CN', 'CM', 'MU', 'AR', 'EX',
    ],
    country: [
      'España', 'México', 'Argentina', 'Colombia', 'Perú', 'Venezuela', 'Chile', 'Ecuador',
      'Guatemala', 'Cuba', 'República Dominicana', 'Honduras', 'Bolivia', 'Paraguay',
    ],
    countryCode: ['ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 'DO', 'HN', 'BO', 'PY'],
    zipCode: ['#####'],
    buildingNumber: ['###', '##', '#'],
    direction: ['Norte', 'Sur', 'Este', 'Oeste', 'Noreste', 'Noroeste', 'Sureste', 'Suroeste'],
    streetSuffix: [
      'Calle', 'Avenida', 'Plaza', 'Paseo', 'Camino', 'Ronda', 'Travesía', 'Vía',
      'Glorieta', 'Callejón', 'Pasaje', 'Carretera',
    ],
  },
  company: {
    name: [
      'TechnoSoft', 'IberiaTech', 'GlobalSol', 'DataMex', 'InnovaHispana', 'SoluDigital',
      'NuevaTech', 'FuturoSoft', 'SistemaSmart', 'CoreTech España',
    ],
    suffix: ['S.A.', 'S.L.', 'S.R.L.', 'Ltda.', 'Corp', 'Tecnologías', 'Soluciones', 'Sistemas'],
    industry: [
      'Tecnología', 'Finanzas', 'Salud', 'Educación', 'Comercio', 'Manufactura',
      'Telecomunicaciones', 'Energía', 'Inmobiliaria', 'Transporte', 'Medios', 'Hostelería',
    ],
    buzzwords: [
      'sinergizar', 'aprovechar', 'innovar', 'revolucionar', 'optimizar', 'transformar',
      'potenciar', 'habilitar', 'facilitar', 'orquestar', 'integrar',
    ],
    adjective: [
      'revolucionario', 'innovador', 'avanzado', 'líder', 'premier', 'empresarial',
      'escalable', 'robusto', 'ágil', 'seguro', 'eficiente', 'inteligente',
    ],
    descriptor: [
      'global', 'digital', 'en la nube', 'con IA', 'basado en datos', 'centrado en el usuario',
      'automatizado', 'integrado', 'moderno', 'innovador',
    ],
    noun: [
      'solución', 'plataforma', 'sistema', 'servicio', 'tecnología', 'marco', 'infraestructura',
      'aplicación', 'red', 'portal', 'ecosistema', 'arquitectura',
    ],
  },
  internet: {
    domainSuffix: ['es', 'com', 'net', 'org', 'mx', 'ar', 'co', 'cl'],
    freeEmail: ['gmail.com', 'yahoo.es', 'hotmail.es', 'outlook.es', 'correo.es'],
  },
  phone: {
    formats: [
      '###-###-###',
      '(+34) ###-###-###',
      '6##-###-###',
      '7##-###-###',
    ],
  },
}
