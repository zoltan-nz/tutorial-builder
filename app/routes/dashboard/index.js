import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    createTutorial(name) {
      let newTutorial = this.store.createRecord('tutorial', { name }).save();

      this.transitionTo('dashboard.tutorial', newTutorial);
    }
  }
});
