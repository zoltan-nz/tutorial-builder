import Ember from "ember";

export default Ember.Controller.extend({

  source: '<html></html>',

  actions: {

    updateSource(source) {
      this.set('source', source);
    }
  }

})
