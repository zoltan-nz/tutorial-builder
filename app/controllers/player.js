import Ember from "ember";
import computed from 'ember-computed';

export default Ember.Controller.extend({

  queryParams: ['activeStep'],

  activeStep: 1,

  step: computed('model', 'activeStep', function() {
    return this.get('model').findBy('sort', this.get('activeStep'));
  }),

  source: computed('step', function() {
    return this.get('step').get('code');
  }),

  actions: {
    back() {
      this.decrementProperty('activeStep');
    },

    forward() {
      this.incrementProperty('activeStep');
    }
  }
})
