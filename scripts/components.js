
Vue.component('category-selection', {
  template: '<div class="btn-group" role="group">\
    <h2>Categories</h2>\
    <button v-for="category in categories"\
            v-on:click="toggleCategory(category)"\
            v-bind:class="{ \'btn-success\': category.selected }"\
            class="btn"\
            type="button">\
      {{ category.name | capitalize }} <span class="badge">{{ countInCategory(category.name) }}</span>\
    </button>\
  </div>',
  props: ['categories', 'ingredients'],
  methods: {
    countInCategory: function(category) {
      return _.filter(this.ingredients, { category: category }).length;
    },
    // Mutates state.
    // TODO: refactor, handle through events instead.
    toggleCategory: function(category) {
      category.selected = !category.selected;
    }
  }
});

Vue.component('ingredient-selection-list', {
  template: '<ul>\
      <li v-for="ingredient in ingredients"\
          v-on:click="toggleIngredient(ingredient)"\
          v-bind:class="{ \'is-selected\': ingredient.selected }"\
          class="ingredient-item">\
        {{ingredient.name}}\
      </li>\
    </ul>',
  props: ['ingredients'],
  methods: {
    // Mutates state.
    // TODO: refactor, handle through events instead.
    toggleIngredient: function(ingredient) {
      ingredient.selected = !ingredient.selected;
    }
  }
});

Vue.component('ingredient-selection', {
  template: '<div>\
    <h2>Ingredients</h2>\
    <ingredient-selection-list v-for="category in selectedCategories"\
                               v-bind:ingredients="ingredientsByCategory(category)">\
    </ingredient-selection-list>\
  </div>',
  props: ['categories', 'ingredients'],
  computed: {
    selectedCategories: function() {
      return _.filter(this.categories, "selected");
    }
  },
  methods: {
    ingredientsByCategory: function(category) {
      return _.filter(this.ingredients, { category: category.name });
    }
  }
});

Vue.component('selected-pizza', {
  template: '<ul>\
      <li v-for="ingredient in selectedIngredients">{{ingredient.name}}</li>\
    </ul>',
  props: ['ingredients'],
  computed: {
    selectedIngredients: function() {
      return _.filter(this.ingredients, 'selected');
    }
  }
});

Vue.component('selected-options', {
  template: '<ul>\
      <li v-for="option in selectedOptions">{{ option.name }}</li>\
    </ul>',
  props: ['options'],
  computed: {
    selectedOptions: function() {
      return _.filter(this.options, 'selected');
    }
  }
});
