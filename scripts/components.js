
Vue.component('category-selection', {
  template: '<div>\
    <div class="btn-group" role="group">\
      <button v-for="category in categories"\
              v-on:click="toggleCategory(category)"\
              v-bind:class="{ \'btn-success\': category.selected }"\
              class="btn"\
              type="button">\
        {{ category.name | capitalize }} <span class="badge">{{ countInCategory(category.name) }}</span>\
      </button>\
    </div>\
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

Vue.component('ingredient-search-filter', {
  template: '<div class="input-group">\
      <input type="text"\
             class="form-control"\
             placeholder="Search for..."\
             v-model="query">\
      <span class="input-group-btn">\
        <button class="btn btn-default"\
                type="button"\
                aria-label="Close"\
                v-on:click="clearSearchQuery">\
          <span aria-hidden="true">&times;</span>\
        </button>\
      </span>\
    </div>',
  props: ['searchQuery'],
  data: function() {
    return {
      query: this.searchQuery
    };
  },
  watch: {
    query: function() {
      this.$emit('search-query-change', this.query);
    }
  },
  methods: {
    clearSearchQuery: function() {
      this.$emit('search-query-clear');
      this.query = null;
    }
  }
});

Vue.component('total-price', {
  template: '<code>€{{total}}</code>',
  props: ['ingredients'],
  computed: {
    total: function() {
      var _selectedIngredients = _.filter(this.ingredients, 'selected');
      return _.round(_.sumBy(_selectedIngredients, 'price'), 2);
    }
  }
});

Vue.component('ingredient-selection-list', {
  template: '<ul>\
      <li v-for="ingredient in filteredIngredients"\
          v-on:click="toggleIngredient(ingredient)"\
          v-bind:class="{ \'is-selected\': ingredient.selected }"\
          class="ingredient-item">\
        {{ingredient.name}}\
      </li>\
    </ul>',
  props: ['ingredients', 'searchQuery'],
  computed: {
    filteredIngredients: function () {
      if (!this.searchQuery) { return this.ingredients; }
      var _this = this;
      return _.filter(this.ingredients, function(ingredient) {
        var _name = _.lowerCase(ingredient.name);
        var _qname = _.lowerCase(_this.searchQuery);
        return _name.indexOf(_qname) !== -1;
      });
    }
  },
  methods: {
    // Mutates state.
    // TODO: refactor, handle through events instead.
    toggleIngredient: function(ingredient) {
      if (ingredient.mandatory) { return false; }
      ingredient.selected = !ingredient.selected;
    }
  }
});

Vue.component('ingredient-selection', {
  template: '<div>\
    <ingredient-selection-list v-for="category in selectedCategories"\
                               v-bind:ingredients="ingredientsByCategory(category)"\
                               v-bind:searchQuery="query">\
    </ingredient-selection-list>\
  </div>',
  props: ['categories', 'ingredients', 'query'],
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
  template: '<div>\
    <h3>Ingredients</h3>\
    <ul>\
      <li v-for="ingredient in selectedIngredients">{{ingredient.name}}</li>\
    </ul>\
  </div>',
  props: ['ingredients'],
  computed: {
    selectedIngredients: function() {
      return _.filter(this.ingredients, 'selected');
    }
  }
});

Vue.component('selected-options', {
  template: '<div>\
    <h3>Options</h3>\
    <ul>\
      <li v-for="option in selectedOptions">{{ option.name }}</li>\
    </ul>\
  </div>',
  props: ['options'],
  computed: {
    selectedOptions: function() {
      return _.filter(this.options, 'selected');
    }
  }
});
