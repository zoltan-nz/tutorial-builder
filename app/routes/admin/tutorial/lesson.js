import Ember from 'ember';

export default Ember.Route.extend({

  afterModel(model) {
    this.set('breadCrumb', { title: model.get('title') });
  }

});
