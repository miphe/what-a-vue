
/**
 * What a Vue - JS example app.
 */

var ingredients = [

  /* Base */
  { selected: true, category: 'base', name: 'Dough', price: 1.8, mandatory: true },

  /* Vegetarian */
  { selected: false, category: 'vegetarian', name: 'Cheese', price: 0.5 },
  { selected: false, category: 'vegetarian', name: 'Feta Cheese', price: 0.5 },
  { selected: false, category: 'vegetarian', name: 'Parmesan Cheese', price: 0.5 },
  { selected: false, category: 'vegetarian', name: 'Mozarella Cheese', price: 0.5 },
  { selected: false, category: 'vegetarian', name: 'Sour Cream', price: 0.5 },
  { selected: false, category: 'vegetarian', name: 'Egg', price: 1 },

  /* Vegan */
  { selected: true, category: 'vegan', name: 'Tomato Sauce', price: 0.1 },
  { selected: false, category: 'vegan', name: 'Bell Pepper', price: 0.5 },
  { selected: false, category: 'vegan', name: 'Yellow Onion', price: 0.3 },
  { selected: false, category: 'vegan', name: 'Red Onion', price: 0.3 },
  { selected: false, category: 'vegan', name: 'Garlic Sauce', price: 0.3 },
  { selected: false, category: 'vegan', name: 'Ruccola', price: 0.8 },
  { selected: false, category: 'vegan', name: 'Hot Pepper', price: 0.3 },
  { selected: false, category: 'vegan', name: 'Pineapple', price: 0.5 },
  { selected: false, category: 'vegan', name: 'Black Olives', price: 0.8 },
  { selected: false, category: 'vegan', name: 'Green Olives', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Kalamata Olives', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Broccoli', price: 0.5 },
  { selected: false, category: 'vegan', name: 'Spinach', price: 0.5 },
  { selected: false, category: 'vegan', name: 'Tomatoes', price: 0.3 },
  { selected: false, category: 'vegan', name: 'Beets', price: 0.3 },
  { selected: false, category: 'vegan', name: 'Alfalfa Sprouts', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Artichoke Hearts', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Avocado', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Baby Leeks', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Beetroot', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Black Beans', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Broccoli', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Capers', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Capicolla', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Carrot', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Cherry Tomatoes', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Dried Tomatoes', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Eggplant', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Fungi', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Fungi Carciofi', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Green Pepper', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Lettuce', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Onions', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Peas', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Porcini Mushrooms', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Portobello Mushroom', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Red Beans', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Red Onions', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Red Peppers', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Roast Cauliflower', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Roasted Eggplant', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Roasted Garlic', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Roasted Peppers', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Scallions', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Shallots', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Snow Peas', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Spinach', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Sun Dried Tomatoes', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Sweet Corn', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Watercress', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Wild Mushrooms', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Yellow Peppers', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Yellow Squash', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Zucchini', price: 0.4 },

  /* Meat */
  { selected: false, category: 'meat', name: 'Ham', price: 1 },
  { selected: false, category: 'meat', name: 'Bacon', price: 1 },
  { selected: false, category: 'meat', name: 'Salami', price: 0.8 },
  { selected: false, category: 'meat', name: 'Shrimps', price: 1.2 },
  { selected: false, category: 'meat', name: 'Sausage', price: 1 },
  { selected: false, category: 'meat', name: 'Chicken', price: 1 },
  { selected: false, category: 'meat', name: 'Meatballs', price: 1.2 },
  { selected: false, category: 'meat', name: 'Beef', price: 1.2 },
  { selected: false, category: 'meat', name: 'Parma Ham', price: 1.2 },
  { selected: false, category: 'meat', name: 'Turkey', price: 0.8 },
  { selected: false, category: 'meat', name: 'Cajun Chicken', price: 1 },
  { selected: false, category: 'meat', name: 'Chicken Masala', price: 1 },
  { selected: false, category: 'meat', name: 'Chicken Tikka', price: 1 },
  { selected: false, category: 'meat', name: 'Chorizo', price: 1 },
  { selected: false, category: 'meat', name: 'Duck', price: 1 },
  { selected: false, category: 'meat', name: 'Honey Cured Ham', price: 1 },
  { selected: false, category: 'meat', name: 'Meatballs', price: 1 },
  { selected: false, category: 'meat', name: 'Pepperoni', price: 1 },
  { selected: false, category: 'meat', name: 'Proscuitto', price: 1 },
  { selected: false, category: 'meat', name: 'Serrano Ham', price: 1 },
  { selected: false, category: 'meat', name: 'Venison', price: 1 },

  /* Sea Food */
  { selected: false, category: 'sea-food', name: 'Anchovies', price: 1 },
  { selected: false, category: 'sea-food', name: 'Cajun Prawn', price: 1 },
  { selected: false, category: 'sea-food', name: 'Crayfish', price: 1 },
  { selected: false, category: 'sea-food', name: 'Lobster', price: 1 },
  { selected: false, category: 'sea-food', name: 'Oysters', price: 1 },
  { selected: false, category: 'sea-food', name: 'Prawns', price: 1 },
  { selected: false, category: 'sea-food', name: 'Salmon', price: 1 },
  { selected: false, category: 'sea-food', name: 'Shrimps', price: 1 },
  { selected: false, category: 'sea-food', name: 'Smoked Salmon', price: 1 },
  { selected: false, category: 'sea-food', name: 'Squid', price: 1 },
  { selected: false, category: 'sea-food', name: 'Tuna', price: 1 },
  { selected: false, category: 'sea-food', name: 'Whitebait', price: 1 }
];

var categories = [
  { name: 'base', selected: true },
  { name: 'vegetarian', selected: true },
  { name: 'vegan', selected: true },
  { name: 'meat', selected: true },
  { name: 'sea-food', selected: true }
];

var meta = [
  { selected: true, id: 1, name: 'Standard Flat Pizza', conflicts: 2 },
  { selected: false, id: 2, name: 'Folded Pizza', conflicts: 1 },
  { selected: false, id: 3, name: 'Gluten Free' },
  { selected: false, id: 4, name: 'Family Pizza Size', conflicts: [5, 6] },
  { selected: true, id: 5, name: 'Medium Pizza Size', conflicts: [4, 6] },
  { selected: false, id: 6, name: 'Small Pizza Size', conflicts: [4, 5] }
];

var compounds = [
  { name: 'Vesuvio', components: ['Dough', 'Tomato Sauce', 'Cheese'] },
  { name: 'Capriciosa', components: ['Dough', 'Tomato Sauce', 'Cheese', 'Ham'], meta: [2] },
  { name: 'Proscuitto e Funghi', components: ['Dough', 'Tomato Sauce', 'Cheese', 'Proscuitto', 'Fungi'] },
];

var app = new Vue({
  el: '#components',
  data: {
    categories: categories,
    ingredients: ingredients,
    meta: meta,
    count: 1,
    searchQuery: null,
    compounds: compounds,
    accumulation: []
  },
  methods: {
    queryChange: function(query) {
      this.searchQuery = query;
    },
    queryClear: function() {
      this.searchQuery = null;
    },
    composeCurrentItem: function() {
      var _s = _.filter(this.ingredients, 'selected');
      var _p = _.round(_.sumBy(_s, 'price') * this.count, 2);
      return {
        name: 'Custom pizza', // TODO: set name of pizza, if there is one.
        ingredients: _s,
        price:_p,
        count: this.count,
        options: this.meta
      };
    },
    newItem: function() {
      this.accumulation.push(this.composeCurrentItem());
    },
    addCoundOfSelection: function() {
      this.count++;
    },
    subCountOfSelection: function() {
      this.count--;
    },
    removeItemFromAccumulation: function(index) {
      this.accumulation.splice(index, 1);
    }
  }
});
