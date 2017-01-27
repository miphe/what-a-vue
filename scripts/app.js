
/**
 * What a Vue - JS example app.
 */

var ingredients = [

  /* Base */
  { selected: true, category: 'base', name: 'Dough', price: 1.8, mandatory: true },

  /* Vegetarian */
  { selected: false, category: 'vegetarian', name: 'Cheese', price: 0.5 },
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
  { selected: false, category: 'vegan', name: 'Artichoke Hearts', price: 0.3 },
  { selected: false, category: 'vegan', name: 'Pineapple', price: 0.5 },
  { selected: false, category: 'vegan', name: 'Mushrooms', price: 0.4 },
  { selected: false, category: 'vegan', name: 'Black Olives', price: 0.8 },
  { selected: false, category: 'vegan', name: 'Broccoli', price: 0.5 },
  { selected: false, category: 'vegan', name: 'Spinach', price: 0.5 },
  { selected: false, category: 'vegan', name: 'Tomatoes', price: 0.3 },

  /* Meat */
  { selected: false, category: 'meat', name: 'Ham', price: 1 },
  { selected: false, category: 'meat', name: 'Bacon', price: 1 },
  { selected: false, category: 'meat', name: 'Salami', price: 0.8 },
  { selected: false, category: 'meat', name: 'Shrimps', price: 1.2 },
  { selected: false, category: 'meat', name: 'Sausage', price: 1 },
  { selected: false, category: 'meat', name: 'Chicken', price: 1 },
  { selected: false, category: 'meat', name: 'Meatballs', price: 1.2 },
  { selected: false, category: 'meat', name: 'Beef', price: 1.2 },
  { selected: false, category: 'meat', name: 'Parma Ham', price: 1.2 }
];

var categories = [
  { name: 'base', selected: true },
  { name: 'vegetarian', selected: true },
  { name: 'vegan', selected: true },
  { name: 'meat', selected: true }
];

var meta = [
  { selected: true, id: 1, name: 'Standard Flat Pizza', conflicts: 2 },
  { selected: false, id: 2, name: 'Folded Pizza', conflicts: 1 },
  { selected: false, id: 3, name: 'Gluten Free' },
  { selected: false, id: 4, name: 'Family Pizza Size', conflicts: [5, 6] },
  { selected: true, id: 5, name: 'Medium Pizza Size', conflicts: [4, 6] },
  { selected: false, id: 6, name: 'Small Pizza Size', conflicts: [4, 5] }
];

var app = new Vue({
  el: '#components',
  data: {
    categories: categories,
    ingredients: ingredients,
    meta: meta,
    searchQuery: null
  },
  methods: {
    queryChange: function(query) {
      this.searchQuery = query;
    },
    queryClear: function() {
      this.searchQuery = null;
    }
  }
});
