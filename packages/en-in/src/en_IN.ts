import type { LocaleDefinition } from 'nanofaker'

/**
 * English (India) locale
 * Extends the base 'en' locale with India-specific data
 */
export const en_IN: Partial<LocaleDefinition> = {
  title: 'English (India)',

  person: {
    firstNameMale: [
      'Raj', 'Rahul', 'Amit', 'Rohan', 'Arjun', 'Aditya', 'Akash', 'Ankit',
      'Vikram', 'Karan', 'Sanjay', 'Rajesh', 'Suresh', 'Ramesh', 'Krishna',
      'Ravi', 'Ajay', 'Vijay', 'Deepak', 'Manoj', 'Sandeep', 'Ashok',
    ],
    firstNameFemale: [
      'Priya', 'Anjali', 'Pooja', 'Neha', 'Sneha', 'Kavya', 'Divya', 'Isha',
      'Aisha', 'Shreya', 'Nikita', 'Simran', 'Riya', 'Ananya', 'Aditi',
      'Meera', 'Lakshmi', 'Sita', 'Radha', 'Gita', 'Sunita', 'Rekha',
    ],
    lastName: [
      'Kumar', 'Sharma', 'Patel', 'Singh', 'Gupta', 'Reddy', 'Verma', 'Joshi',
      'Mehta', 'Nair', 'Rao', 'Iyer', 'Khan', 'Das', 'Banerjee', 'Desai',
      'Agarwal', 'Mishra', 'Shah', 'Pillai', 'Menon', 'Kulkarni', 'Mukherjee',
    ],
  },

  address: {
    city: [
      'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune',
      'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore',
      'Bhopal', 'Visakhapatnam', 'Vadodara', 'Patna', 'Ludhiana', 'Agra',
      'Nashik', 'Rajkot', 'Varanasi', 'Srinagar', 'Kochi', 'Coimbatore',
    ],
    state: [
      'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan',
      'Uttar Pradesh', 'West Bengal', 'Madhya Pradesh', 'Kerala', 'Punjab',
      'Telangana', 'Andhra Pradesh', 'Haryana', 'Bihar', 'Odisha', 'Assam',
      'Jharkhand', 'Chhattisgarh', 'Uttarakhand', 'Goa', 'Himachal Pradesh',
      'Jammu and Kashmir', 'Meghalaya', 'Manipur', 'Nagaland', 'Tripura',
      'Mizoram', 'Sikkim', 'Arunachal Pradesh', 'Delhi',
    ],
    country: ['India', 'Bharat'],
    countryCode: ['IN'],
    zipCode: ['### ###', '######'],
  },

  phone: {
    formats: [
      '+91 ##### #####',
      '0#### ######',
      '9#### #####',
      '8#### #####',
      '7#### #####',
    ],
  },

  food: {
    dish: [
      'Biryani', 'Butter Chicken', 'Dosa', 'Idli', 'Samosa', 'Paneer Tikka',
      'Tandoori Chicken', 'Naan', 'Roti', 'Paratha', 'Dal Makhani', 'Palak Paneer',
      'Chole Bhature', 'Pav Bhaji', 'Vada Pav', 'Masala Dosa', 'Uttapam',
      'Gulab Jamun', 'Rasmalai', 'Jalebi', 'Kheer', 'Halwa', 'Barfi',
    ],
    cuisine: [
      'Indian', 'North Indian', 'South Indian', 'Punjabi', 'Bengali',
      'Gujarati', 'Maharashtrian', 'Rajasthani', 'Kerala', 'Goan',
    ],
  },

  internet: {
    domainSuffix: ['in', 'co.in', 'org.in', 'net.in', 'edu.in', 'gov.in'],
    freeEmail: ['gmail.com', 'yahoo.co.in', 'rediffmail.com', 'hotmail.com'],
  },
}
