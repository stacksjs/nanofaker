import type { LocaleDefinition } from '../types'

export const en: LocaleDefinition = {
  title: 'English',
  person: {
    firstName: [
      'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles',
      'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen',
      'Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Charlotte', 'Amelia', 'Harper', 'Evelyn',
      'Liam', 'Noah', 'Oliver', 'Elijah', 'Lucas', 'Mason', 'Logan', 'Alexander', 'Ethan', 'Jacob',
    ],
    lastName: [
      'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
      'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
      'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
    ],
    prefix: ['Mr.', 'Mrs.', 'Ms.', 'Miss', 'Dr.', 'Prof.'],
    suffix: ['Jr.', 'Sr.', 'I', 'II', 'III', 'IV', 'V', 'MD', 'PhD', 'DDS'],
    gender: ['Male', 'Female', 'Non-binary', 'Agender', 'Bigender', 'Genderfluid', 'Genderqueer'],
    jobTitle: [
      'Software Engineer', 'Product Manager', 'Designer', 'Data Scientist', 'DevOps Engineer',
      'Marketing Manager', 'Sales Representative', 'Accountant', 'Human Resources Manager', 'CEO',
      'CTO', 'CFO', 'COO', 'Director', 'Manager', 'Analyst', 'Consultant', 'Administrator',
      'Coordinator', 'Specialist', 'Developer', 'Architect', 'Engineer', 'Technician', 'Assistant',
    ],
  },
  address: {
    street: [
      'Main', 'Oak', 'Maple', 'Cedar', 'Elm', 'Washington', 'Lake', 'Hill', 'Park', 'River',
      'Sunset', 'Pine', 'Walnut', 'Highland', 'Madison', 'Lincoln', 'Jackson', 'Franklin',
    ],
    city: [
      'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio',
      'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus',
      'Charlotte', 'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Boston', 'Nashville',
    ],
    state: [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
      'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
      'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
      'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
      'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
      'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
      'Wisconsin', 'Wyoming',
    ],
    stateAbbr: [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA',
      'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
      'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT',
      'VA', 'WA', 'WV', 'WI', 'WY',
    ],
    country: [
      'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Spain',
      'Italy', 'Japan', 'China', 'India', 'Brazil', 'Mexico', 'Russia', 'South Korea',
    ],
    countryCode: ['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'ES', 'IT', 'JP', 'CN', 'IN', 'BR', 'MX', 'RU', 'KR'],
    zipCode: ['#####', '#####-####'],
    buildingNumber: ['###', '####', '#', '##'],
    direction: ['North', 'East', 'South', 'West', 'Northeast', 'Northwest', 'Southeast', 'Southwest'],
    streetSuffix: [
      'Street', 'Avenue', 'Road', 'Boulevard', 'Drive', 'Court', 'Circle', 'Lane', 'Way',
      'Place', 'Terrace', 'Parkway', 'Commons', 'Trail', 'Square', 'Run', 'Crossing',
    ],
  },
  company: {
    name: [
      'TechCorp', 'GlobalSoft', 'DataSystems', 'CloudNet', 'Innovate Inc', 'Digital Solutions',
      'NextGen Tech', 'FutureTech', 'SmartSystems', 'CoreTech', 'PrimeSoft', 'AlphaTech',
    ],
    suffix: ['Inc', 'LLC', 'Corp', 'Group', 'Ltd', 'Co', 'Technologies', 'Solutions', 'Systems'],
    industry: [
      'Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 'Manufacturing',
      'Telecommunications', 'Energy', 'Real Estate', 'Transportation', 'Media', 'Hospitality',
    ],
    buzzwords: [
      'synergize', 'leverage', 'innovate', 'disrupt', 'optimize', 'streamline', 'transform',
      'revolutionize', 'empower', 'enable', 'facilitate', 'orchestrate', 'integrate',
    ],
    adjective: [
      'revolutionary', 'cutting-edge', 'innovative', 'next-generation', 'advanced', 'leading',
      'premier', 'world-class', 'enterprise', 'scalable', 'robust', 'seamless',
    ],
    descriptor: [
      'global', 'digital', 'cloud-based', 'AI-powered', 'data-driven', 'user-centric',
      'agile', 'secure', 'efficient', 'intelligent', 'automated', 'integrated',
    ],
    noun: [
      'solution', 'platform', 'system', 'service', 'technology', 'framework', 'infrastructure',
      'application', 'network', 'portal', 'ecosystem', 'architecture', 'engine',
    ],
  },
  internet: {
    domainSuffix: ['com', 'net', 'org', 'io', 'co', 'app', 'dev', 'tech', 'ai', 'cloud'],
    freeEmail: ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'proton.me'],
  },
  phone: {
    formats: [
      '###-###-####',
      '(###) ###-####',
      '1-###-###-####',
      '+1-###-###-####',
      '###.###.####',
    ],
  },
}
