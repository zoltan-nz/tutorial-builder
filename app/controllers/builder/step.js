import Ember from "ember";
import inject from 'ember-service/inject';
import { schedule } from 'ember-runloop';

const BUILDER_EDITOR_ID = 'builder-editor';

export default Ember.Controller.extend({

  codeMirror: inject(),

  builderEditor: null,

  init() {
    schedule('afterRender', this, this.afterRender.bind(this))
  },

  afterRender() {
    this.set('builderEditor', this.get('codeMirror')._instances[BUILDER_EDITOR_ID]);

    const editor = this.get('builderEditor');
    const code = this.get('model.code');
    if (!code) return;

    editor.setValue(code);
  },

  actions: {

    save() {
      this._save();
    },

    saveAndNextStep() {
      this._save();

      let builder = this.get('model.builder');
      let counter = builder.get('builderSteps.length') + 1;

      this.store.createRecord('builder-step', { sort: counter, builder }).save()
        .then(newStep => {
          newStep.get('builder').then(builder => builder.save());
          this.transitionToRoute('builder.step', newStep);
        });
    }

  },

  _save() {
    let model = this.get('model');
    const builderEditor = this.get('builderEditor');

    model.set('code', builderEditor.getValue());
    model.set('history', JSON.stringify(builderEditor.getHistory()));

    model.save();
  }


})
