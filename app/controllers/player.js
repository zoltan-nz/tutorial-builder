import Ember from "ember";
import computed from 'ember-computed';

export default Ember.Controller.extend({

  queryParams: ['activeStep'],

  activeStep: 1,

  step: computed('model', 'activeStep', function() {
    return this.get('model').findBy('sort', this.get('activeStep'));
  }),

  source: computed('step', 'step.code', function() {
    return this.get('step').get('code');
  }),

  actions: {
    back() {
      this.decrementProperty('activeStep');
    },

    forward() {
      this.incrementProperty('activeStep');
    },

    // User can modify the code like in playground, it is not persisted in database
    updateSource(source) {
      this.set('step.code', source);
    }
  }
})
