import Ember from "ember";
import inject from 'ember-service/inject';
import { schedule } from 'ember-runloop';

const { computed } = Ember;

export default Ember.Controller.extend({

  codeMirror: inject(),

  stepEditorId: 'step-editor',
  resultEditorId: 'result-editor',

  stepEditor: computed('stepEditorId', 'model.code', function() {
    const cm = this.get('codeMirror');
    return cm._instances[this.get('stepEditorId')];
  }),

  resultEditor: computed('resultEditorId', function() {
    const cm = this.get('codeMirror');
    return cm._instances[this.get('resultEditorId')];
  }),

  init() {
    schedule('afterRender', this, this.afterRender)
  },

  afterRender() {
    this.get('resultEditor').on('cursorActivity', this.updateCursorPosition.bind(this));
  },

  updateCursorPosition(cm) {
    let cursor = cm.getCursor();

    this.set('model.line', cursor.line);
    this.set('model.char', cursor.ch)
  },

  actions: {
    updateType(value) {
      this.set('model.type', value);
    },

    updateContent(value) {
      this.set('model.code', value);
    },

    updateResult() {
      let resultEditor = this.get('resultEditor');
    }
  },

  historySize: computed('stepEditor', 'model.code', function() {
    const editor = this.get('stepEditor');

    if (editor) {
      return this.get('stepEditor').historySize();
    }
  }),

  history: computed('stepEditor', 'model.code', function() {
    const editor = this.get('stepEditor');

    if (editor) {
      return this.get('stepEditor').getHistory();
    }
  })
})
