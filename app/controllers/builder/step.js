import Ember from "ember";
import inject from 'ember-service/inject';
import { schedule } from 'ember-runloop';

const BUILDER_EDITOR_ID = 'builder-editor';

export default Ember.Controller.extend({

  codeMirror: inject(),

  // The active builder model
  builder: Ember.computed.alias('model.builder'),

  builderEditor: null,

  init() {
    console.log('step controller initialized');

    schedule('afterRender', this, this.afterRender.bind(this))
  },

  afterRender() {
    this.set('builderEditor', this.get('codeMirror')._instances[BUILDER_EDITOR_ID]);

    // Attach to a global variable for debugging
    window.editor = this.get('builderEditor');
  },

  history: Ember.computed('builderEditor', function() {
    const builderEditor = this.get('builderEditor');
    if (!builderEditor) return;

    return builderEditor.getHistory();
  }),

  historySize: Ember.computed('builderEditor', 'model.history', function() {
    const builderEditor = this.get('builderEditor');
    if (builderEditor) {
      return builderEditor.historySize();
    }

  }),

  actions: {

    save() {
      this._save();
    },

    saveAndNextStep() {
      this._save();

      let builder = this.get('builder');

      if (this.get('model.isLastStep')) {
        let counter = builder.get('stepSize') + 1;
        this.store.createRecord('builder-step', { sort: counter, codeStartState: this.get('model.codeFinalState'), builder }).save()
          .then(newStep => {
            newStep.get('builder').then(builder => builder.save());
            this.transitionToRoute('builder.step', newStep);
          });
      }

      this.transitionToRoute('builder.step', builder.get('nextStep'));
    }

  },

  _save() {
    let model = this.get('model');
    const builderEditor = this.get('builderEditor');

    model.set('code', builderEditor.getValue());
    model.set('codeFinalState', builderEditor.getValue());
    model.set('history', builderEditor.getHistory());

    model.save();
  }


})
