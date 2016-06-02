import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('sandbox', params.sandbox_id);
  },

  afterModel(model) {
    this.set('breadCrumb', { title: model.get('name') });
  }

});
