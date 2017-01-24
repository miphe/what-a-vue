
/**
 * What a Vue - JS example app.
 */

var ingredients = [

  /* Base */
  { category: 'base', name: 'Dough', price: '1.8', mandatory: true },
  { category: 'base', name: 'Dough (Gluten Free)', price: '1.8' },

  /* Vegetarian */
  { category: 'vegetarian', name: 'Cheese', price: '0.5' },
  { category: 'vegetarian', name: 'Cheese (Gluten Free)', price: '0.5' },
  { category: 'vegetarian', name: 'Sour Cream', price: '0.5' },
  { category: 'vegetarian', name: 'Sour Cream (Gluten Free)', price: '0.5' },
  { category: 'vegetarian', name: 'Egg', price: '1' },

  /* Vegan */
  { category: 'vegan', name: 'Tomato Sauce', price: '0.1' },
  { category: 'vegan', name: 'Bell Pepper', price: '0.5' },
  { category: 'vegan', name: 'Yellow Onion', price: '0.3' },
  { category: 'vegan', name: 'Red Onion', price: '0.3' },
  { category: 'vegan', name: 'Garlic', price: '0.3' },
  { category: 'vegan', name: 'Ruccola', price: '0.8' },
  { category: 'vegan', name: 'Hot Pepper', price: '0.3' },
  { category: 'vegan', name: 'Artichoke', price: '0.3' },

  /* Meat */
  { category: 'meat', name: 'Ham', price: '1' },
  { category: 'meat', name: 'Bacon', price: '1' },
  { category: 'meat', name: 'Salami', price: '0.8' },
  { category: 'meat', name: 'Shrimps', price: '1.2' }
];

var categories = [
  { name: 'base', selected: true },
  { name: 'vegetarian', selected: true },
  { name: 'vegan', selected: true },
  { name: 'meat', selected: true }
];

var preparations = [
  { name: 'Standard Flat' },
  { name: 'Folded' }
];

var app = new Vue({
  el: '#app',
  data: {
    categories: categories,
    ingredients: ingredients,
    preparations: preparations
  },
  computed: {
    selectedCategories: function() {
      return _.filter(this.categories, 'selected');
    },
    relevantIngredients: function() {
      var _categories = this.categories;
      return _.filter(this.ingredients, function(ingredient) {
        return _.find(_categories, { name: ingredient.category }).selected;
      });
    }
  },
  methods: {
    countInCategory: function(category) {
      return _.filter(this.ingredients, { category: category }).length;
    },
    toggleCategory: function(category) {
      var c = _.find(this.categories, { name: category.name });
      c.selected = !c.selected;
    }
  },
  filters: {
    capitalize: function(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
});
