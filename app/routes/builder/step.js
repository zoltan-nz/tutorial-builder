import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('builder-step', params.id);
  },

  setupController(model, controller) {
    this._super(model, controller)
  },

  actions: {
    didTransition() {
      const editor = this.controller.get('builderEditor');
      if (!editor) return;

      const code = this.controller.get('model.code');
      if (!code) return;
      editor.setValue(code);
    }
  }

});
