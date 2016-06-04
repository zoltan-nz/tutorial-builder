import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    updateMyCode() {
      Ember.run.once(this, () => this.get('model').save(), 500);
    }
  }
});
