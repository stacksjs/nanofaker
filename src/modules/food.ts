import type { Random } from '../random'

export class FoodModule {
  constructor(private random: Random) {}

  /**
   * Generate a dish/meal name
   * @example faker.food.dish() // 'Spaghetti Carbonara'
   */
  dish(): string {
    const dishes = [
      'Spaghetti Carbonara', 'Chicken Alfredo', 'Beef Tacos', 'Margherita Pizza', 'Caesar Salad',
      'Pad Thai', 'Chicken Tikka Masala', 'Sushi Roll', 'Beef Burger', 'Fish and Chips',
      'Ramen', 'Tom Yum Soup', 'Greek Salad', 'Lasagna', 'Paella', 'Pho', 'Falafel Wrap',
      'Burrito Bowl', 'Chicken Curry', 'Steak Frites', 'Risotto', 'Poke Bowl', 'Bibimbap',
      'Shakshuka', 'Eggs Benedict', 'Club Sandwich', 'Caprese Salad', 'Fettuccine Alfredo',
      'Chicken Parmesan', 'Pulled Pork Sandwich', 'Gyro', 'Butter Chicken', 'Peking Duck',
    ]
    return this.random.arrayElement(dishes)
  }

  /**
   * Generate an ingredient
   * @example faker.food.ingredient() // 'Garlic'
   */
  ingredient(): string {
    const ingredients = [
      'Garlic', 'Onion', 'Tomato', 'Basil', 'Oregano', 'Thyme', 'Rosemary', 'Cilantro', 'Parsley',
      'Salt', 'Pepper', 'Olive Oil', 'Butter', 'Flour', 'Sugar', 'Eggs', 'Milk', 'Cheese',
      'Chicken', 'Beef', 'Pork', 'Fish', 'Shrimp', 'Rice', 'Pasta', 'Potatoes', 'Carrots',
      'Celery', 'Bell Pepper', 'Mushrooms', 'Spinach', 'Lettuce', 'Cucumber', 'Avocado',
      'Lemon', 'Lime', 'Ginger', 'Soy Sauce', 'Vinegar', 'Honey', 'Cinnamon', 'Cumin',
    ]
    return this.random.arrayElement(ingredients)
  }

  /**
   * Generate a spice or herb
   * @example faker.food.spice() // 'Paprika'
   */
  spice(): string {
    const spices = [
      'Basil', 'Oregano', 'Thyme', 'Rosemary', 'Sage', 'Cilantro', 'Parsley', 'Mint', 'Dill',
      'Paprika', 'Cumin', 'Turmeric', 'Coriander', 'Cardamom', 'Cinnamon', 'Nutmeg', 'Cloves',
      'Black Pepper', 'White Pepper', 'Cayenne', 'Chili Powder', 'Curry Powder', 'Garam Masala',
      'Saffron', 'Vanilla', 'Bay Leaf', 'Fennel', 'Anise', 'Tarragon', 'Marjoram',
    ]
    return this.random.arrayElement(spices)
  }

  /**
   * Generate a vegetable
   * @example faker.food.vegetable() // 'Broccoli'
   */
  vegetable(): string {
    const vegetables = [
      'Broccoli', 'Carrot', 'Celery', 'Lettuce', 'Spinach', 'Kale', 'Cabbage', 'Cauliflower',
      'Brussels Sprouts', 'Asparagus', 'Green Beans', 'Peas', 'Corn', 'Potato', 'Sweet Potato',
      'Tomato', 'Cucumber', 'Bell Pepper', 'Zucchini', 'Eggplant', 'Mushroom', 'Onion', 'Garlic',
      'Radish', 'Beet', 'Turnip', 'Artichoke', 'Bok Choy', 'Arugula', 'Swiss Chard',
    ]
    return this.random.arrayElement(vegetables)
  }

  /**
   * Generate a fruit
   * @example faker.food.fruit() // 'Mango'
   */
  fruit(): string {
    const fruits = [
      'Apple', 'Banana', 'Orange', 'Grape', 'Strawberry', 'Blueberry', 'Raspberry', 'Blackberry',
      'Mango', 'Pineapple', 'Watermelon', 'Cantaloupe', 'Honeydew', 'Peach', 'Plum', 'Cherry',
      'Pear', 'Kiwi', 'Papaya', 'Dragon Fruit', 'Lychee', 'Passion Fruit', 'Pomegranate',
      'Coconut', 'Avocado', 'Lemon', 'Lime', 'Grapefruit', 'Apricot', 'Fig', 'Date',
    ]
    return this.random.arrayElement(fruits)
  }

  /**
   * Generate a meat type
   * @example faker.food.meat() // 'Beef'
   */
  meat(): string {
    const meats = [
      'Beef', 'Chicken', 'Pork', 'Lamb', 'Turkey', 'Duck', 'Veal', 'Venison', 'Bison',
      'Rabbit', 'Goat', 'Quail', 'Pheasant', 'Bacon', 'Sausage', 'Ham', 'Salami',
    ]
    return this.random.arrayElement(meats)
  }

  /**
   * Generate a seafood type
   * @example faker.food.seafood() // 'Salmon'
   */
  seafood(): string {
    const seafood = [
      'Salmon', 'Tuna', 'Cod', 'Halibut', 'Trout', 'Mackerel', 'Sardines', 'Anchovies',
      'Shrimp', 'Crab', 'Lobster', 'Scallops', 'Clams', 'Mussels', 'Oysters', 'Squid',
      'Octopus', 'Tilapia', 'Sea Bass', 'Swordfish', 'Snapper', 'Grouper', 'Catfish',
    ]
    return this.random.arrayElement(seafood)
  }

  /**
   * Generate a dessert
   * @example faker.food.dessert() // 'Chocolate Cake'
   */
  dessert(): string {
    const desserts = [
      'Chocolate Cake', 'Cheesecake', 'Apple Pie', 'Ice Cream', 'Brownies', 'Cookies',
      'Tiramisu', 'Crème Brûlée', 'Panna Cotta', 'Macarons', 'Cupcakes', 'Donuts',
      'Eclairs', 'Profiteroles', 'Cannoli', 'Baklava', 'Flan', 'Churros', 'Gelato',
      'Sorbet', 'Mousse', 'Tart', 'Cobbler', 'Pudding', 'Trifle', 'Soufflé',
    ]
    return this.random.arrayElement(desserts)
  }

  /**
   * Generate an ethnic cuisine type
   * @example faker.food.ethnicCategory() // 'Italian'
   */
  ethnicCategory(): string {
    const categories = [
      'Italian', 'Chinese', 'Japanese', 'Mexican', 'Thai', 'Indian', 'French', 'Greek',
      'Spanish', 'Korean', 'Vietnamese', 'Lebanese', 'Turkish', 'Brazilian', 'Moroccan',
      'Ethiopian', 'Caribbean', 'Peruvian', 'German', 'American', 'British', 'Irish',
    ]
    return this.random.arrayElement(categories)
  }

  /**
   * Generate a restaurant description
   * @example faker.food.description() // 'Delicious and flavorful'
   */
  description(): string {
    const adjectives = [
      'Delicious', 'Savory', 'Sweet', 'Spicy', 'Tangy', 'Crispy', 'Tender', 'Juicy',
      'Flavorful', 'Rich', 'Fresh', 'Aromatic', 'Creamy', 'Zesty', 'Hearty', 'Light',
    ]
    const descriptors = [
      'and flavorful', 'and satisfying', 'and aromatic', 'and authentic', 'and homemade',
      'and traditional', 'and innovative', 'and exquisite', 'and mouthwatering',
    ]

    return `${this.random.arrayElement(adjectives)} ${this.random.arrayElement(descriptors)}`
  }
}
