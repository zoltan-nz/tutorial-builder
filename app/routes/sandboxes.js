import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('sandbox');
  },

  actions: {

    newSandbox() {
      this.store.createRecord('sandbox', {name:'New Sandox', source: ''}).save().then( response => this.redirectTo('sandboxes.sendbox', response));
    },

    deleteSandbox(sandbox) {
      sandbox.destroyRecord();
    }
  }

});
