import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({

  name: attr('string'),

  builderSteps: hasMany('builder-step'),

  stepSize: Ember.computed.alias('builderSteps.length'),

  // When a step active setup this property
  activeStep: 1,

  previousStep: Ember.computed('activeStep', 'builderSteps.[]', function() {
    return this.get('builderSteps').findBy('sort', this.get('activeStep') - 1);
  }),

  nextStep: Ember.computed('activeStep', 'builderSteps.[]', function() {
    return this.get('builderSteps').findBy('sort', this.get('activeStep') + 1);
  })
});
