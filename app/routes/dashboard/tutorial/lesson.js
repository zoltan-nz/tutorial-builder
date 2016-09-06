import Ember from 'ember';

export default Ember.Route.extend({

  afterModel(model) {
    this.set('breadCrumb', { title: model.get('title') });
  },

  actions: {

    addNewStep() {
      let lesson = this.controller.get('model');
      let newStep = this.store.createRecord('step', { name: 'New Step', lesson });

      newStep.save();
      lesson.save();

      this.transitionTo('dashboard.tutorial.lesson.step', newStep );
    }
  }

});
