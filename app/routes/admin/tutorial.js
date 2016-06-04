import Ember from "ember";

export default Ember.Route.extend({

  afterModel(tutorial) {
    this.set('breadCrumb', {title: tutorial.get('name')});
  },

  actions: {

    createLesson(title) {
      const tutorial = this.controller.get('model');

      this.store.createRecord('lesson', {title, tutorial}).save();
      tutorial.save();
    }
  }
});
