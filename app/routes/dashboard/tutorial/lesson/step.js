import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    saveStep(step) {
      step.save();
    }
  }
});
