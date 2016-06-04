import Ember from 'ember';

export default Ember.Route.extend({

  afterModel(sandbox) {
    this.set('breadCrumb', { title: sandbox.get('name') });
  }

});
