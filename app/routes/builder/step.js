import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('builder-step', params.id);
  },

  actions: {

    didTransition() {

      const builder = this.controller.get('model.builder');
      builder.set('activeStep', this.controller.get('model.sort'));

      const editor = this.controller.get('builderEditor');
      if (!editor) return;

      const model = this.controller.get('model');

      const code = model.get('codeFinalState');

      if (!Ember.isEmpty(code)) {
        editor.setValue(code);
      }

      editor.clearHistory();

      const history = model.get('history');
      if (!Ember.isEmpty(history)) {
        editor.setHistory(history);
      }

    }
  }

});
