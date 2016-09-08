import DS from 'ember-data';
import Ember from 'ember';

const { Model, attr } = DS;
const { run: { debounce }} =  Ember;

export default Model.extend({

  _SAVE_LATENCY: 2000,

  name: attr(),
  source: attr(),

  updateWithLatency() {
    debounce(this, this._saveLater, this._SAVE_LATENCY);
  },

  _saveLater() {
    if (this.get('hasDirtyAttributes') && !this.get('isSaving')) {
      this.save();
    }
  }
});
