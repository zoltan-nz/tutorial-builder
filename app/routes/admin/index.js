import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    createTutorial(name) {
      this.store.createRecord('tutorial', { name }).save();
    }
  }
});
