import Ember from "ember";

export default Ember.Controller.extend({

  source: '<html></html>',

  actions: {

    // Update the preview window
    updateSource(source) {
      this.set('source', source);
    }
  }

})
