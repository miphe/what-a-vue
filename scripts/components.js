
// COMPONENTS

Vue.component('category-selection', {
  template: '<div>\
    <div class="btn-group" role="group">\
      <button v-for="category in categories"\
              v-on:click="toggleCategory(category)"\
              v-bind:class="{ \'btn-success\': category.selected }"\
              class="btn"\
              type="button">\
        <span class="glyphicon"\
              aria-hidden="true"\
              v-bind:class="{ \'glyphicon-eye-open\': category.selected, \'glyphicon-eye-close\': !category.selected }"></span>\
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
      <span class="input-group-addon">\
        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>\
      </span>\
      <input type="text"\
             class="form-control"\
             placeholder="Search for..."\
             v-model="query">\
      <span class="input-group-btn">\
        <button class="btn btn-default"\
                type="button"\
                aria-label="Close"\
                v-on:click="clearSearchQuery">\
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>\
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

Vue.component('current-price', {
  template: '<code>€{{total}}</code>',
  props: ['ingredients', 'count'],
  computed: {
    total: function() {
      var _selectedIngredients = _.filter(this.ingredients, 'selected');
      return _.round(_.sumBy(_selectedIngredients, 'price') * this.count, 2);
    }
  }
});

Vue.component('ingredient-selection-list', {
  template: '<ul>\
      <li v-for="ingredient in filteredIngredients"\
          v-on:click="toggleSelected(ingredient)"\
          v-bind:class="{ \'is-selected\': ingredient.selected }"\
          class="ingredient-item">\
        {{ingredient.name}}\
      </li>\
    </ul>',
  props: ['ingredients', 'searchQuery'],
  mixins: [mxToggleSelected],
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
    <p><span class="label label-primary">{{comprisedSelection}}</span></p>\
    <ul>\
      <li v-for="component in selectedComponents">\
        <span v-if="!component.mandatory" v-on:click="toggleSelected(component)" class="glyphicon glyphicon-remove" aria-hidden="true"></span> \
        {{component.name}}\
      </li>\
    </ul>\
  </div>',
  mixins: [mxComprisedSelection, mxSelectedComponents, mxToggleSelected],
  props: ['components', 'compounds']
});

Vue.component('selected-options', {
  template: '<div>\
    <h3>Options</h3>\
    <ul>\
      <li v-for="option in selectedOptions">{{ option.name }}</li>\
    </ul>\
    <div class="input-group content-row">\
      <input type="text"\
             class="form-control"\
             v-model="count">\
      <span class="input-group-btn">\
      <button class="btn btn-default"\
              type="button"\
              aria-label="Sub"\
              v-on:click="subtract">\
        <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>\
      </button>\
        <button class="btn btn-default"\
                type="button"\
                aria-label="Add"\
                v-on:click="increment">\
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>\
        </button>\
      </span>\
    </div>\
  </div>',
  props: ['options', 'count'],
  computed: {
    selectedOptions: function() {
      return _.filter(this.options, 'selected');
    }
  },
  methods: {
    increment: function() {
      this.$emit('add-count-of-selection');
    },
    subtract: function() {
      this.$emit('sub-count-of-selection');
    }
  }
});

Vue.component('clear-button', {
  template: '<button type="button"\
                     class="btn btn-default pull-right"\
                     v-on:click="clearSelection">\
    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>\
    Clear\
  </button>',
  mixins: [mxEmitClearSelection]
});

Vue.component('done-button', {
  template: '<button type="button" class="btn btn-primary" v-bind:disabled="disabledButton" v-on:click="done">\
    <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>\
    {{ text }}\
  </button>',
  props: ['count'],
  computed: {
    disabledButton: function() {
      return this.count < 1;
    },
    text: function() {
      return this.count > 1 ? 'Add Pizzas' : 'Add Pizza';
    }
  },
  methods: {
    done: function() {
      this.$emit('done-current');
    }
  }
});

Vue.component('accumulated-total', {
  template: '<code>€{{total}}</code>',
  props: ['accumulation'],
  computed: {
    total: function() {
      var _a = this.accumulation;
      return _.round(_.sumBy(_a, 'price'), 2);
    }
  }
});

Vue.component('pizza-basket', {
  template: '<ul>\
    <li v-for="(item, i) in accumulation">\
      <span v-on:click="remove(i)" class="glyphicon glyphicon-remove" aria-hidden="true"></span> \
      <span class="label label-primary">{{ item.name }}</span> \
      <span class="badge">{{item.count}}</span> \
      <span class="text-muted">€{{ item.price }}</span>\
    </li>\
  </ul>',
  props: ['accumulation'],
  methods: {
    remove: function(i) {
      this.$emit('remove-item', i);
    }
  }
});
