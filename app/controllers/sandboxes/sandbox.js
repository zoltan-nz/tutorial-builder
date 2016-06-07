import Ember from "ember";

export default Ember.Controller.extend({

  actions: {

    updateMyCode() {
      this.get('model').updateWithLatency();
    }
  }
});
