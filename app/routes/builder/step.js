import Ember from "ember";
import { schedule } from 'ember-runloop';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('builder-step', params.id);
  },

  // Reinitialize the editor at second or later visit
  activate() {
    const controller = this.controllerFor('builder.step');
    if (!controller.get('builderEditor')) return;
    schedule('afterRender', controller, controller.afterRender.bind(controller));
  },

  actions: {

    didTransition() {

      const builder = this.controller.get('model.builder');
      builder.set('activeStep', this.controller.get('model.sort'));

      this.send('updateCodeInEditor')
    },

    updateCodeInEditor() {

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
        editor.setHistory(history.get('content'));
      }
    }
  }
});
