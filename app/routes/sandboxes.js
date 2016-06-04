import Ember from "ember";

export default Ember.Route.extend({

  model() {
    return this.store.findAll('sandbox');
  },

  actions: {

    newSandbox() {
      this.store.createRecord('sandbox', {name: 'file_name.html', source: ''})
        .save()
        .then(sandbox => this.transitionTo('sandboxes.sandbox', sandbox));
    },

    deleteSandbox(sandbox) {
      sandbox.destroyRecord()
        .then(() => this.transitionTo('sandboxes'));
    }
  }

});
