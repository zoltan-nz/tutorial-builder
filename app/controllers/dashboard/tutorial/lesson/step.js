import Ember from "ember";
import inject from 'ember-service/inject';
import { schedule } from 'ember-runloop';

const { computed } = Ember;

export default Ember.Controller.extend({

  codeMirror: inject(),

  stepEditorId: 'step-editor',
  resultEditorId: 'result-editor',

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
      this.set('model.content', value);
    }

  }

})
