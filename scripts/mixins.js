
// MIXINS

// Mixin dependencies;
// - this.compounds          # compounds object
// - this.selectedComponents # mxSelectedComponents mixin
var mxComprisedSelection = {
  computed: {
    comprisedSelection: function() {
      var res;
      var selection = _.map(this.selectedComponents, 'name');
      _.each(this.compounds, function(compound) {
        var sel_len = selection.length;
        var com_len = compound.components.length;
        var int_len = _.intersection(compound.components, selection).length;

        // Checks if the selection matches a recepie by matching the length
        // bewtween expected, selected, and intersected arrays.
        if(_.every([sel_len, com_len], function(len) { return _.isEqual(len, int_len) })) {
          res = compound.name;
        }
      });
      return res;
    }
  }
};

// Mixin dependencies;
// - none
var mxToggleSelected = {
  methods: {
    // Mutates state.
    // TODO: refactor, handle through events instead.
    toggleSelected: function(component) {
      if (component.mandatory) { return false; }
      component.selected = !component.selected;
    }
  }
};

// Mixin dependencies;
// - this.compounds # compounds object
var mxSelectedComponents = {
  computed: {
    selectedComponents: function() {
      return _.filter(this.components, 'selected');
    }
  },
};

// Mixin dependencies;
// - none
var mxEmitClearSelection = {
  methods: {
    clearSelection: function() {
      this.$emit('clear-selection');
    }
  }
};
