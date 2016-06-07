import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({

  _SAVE_LATENCY: 2000,

  name: attr(),
  source: attr(),

  updateWithLatency() {
    Ember.run.debounce(this, this._saveLater, this._SAVE_LATENCY);
  },

  _saveLater() {
    if (this.get('hasDirtyAttributes') && !this.get('isSaving')) {
      this.save();
    }
  }
});
