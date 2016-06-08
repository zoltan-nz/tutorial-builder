import Ember from "ember";

export default Ember.Controller.extend({

  actions: {

    updateSandboxName(name) {
      this.set('model.name', name);
      this.get('model').updateWithLatency();
    },

    updateSandboxSource(source) {
      this.set('model.source', source);
      this.get('model').updateWithLatency();
    }
  }
});
