import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    updateMyCode() {
      Ember.run.debounce(this, () => this.get('model').save(), 300);
    }
  }
});
