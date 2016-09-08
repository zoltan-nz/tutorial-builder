import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    saveStep() {
      this.controller.get('model').save();
    }
  },

  didTransition() {
    console.log('yey');
  }
});
