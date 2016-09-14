import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({

  builder: belongsTo('builder'),
  sort: attr('number'),
  comment: attr('string'),

  codeStartState: attr('string'),
  codeFinalState: attr('string'),

  code: attr('string'),

  history: attr('history'),

  isFirstStep: Ember.computed.equal('sort', 1),

  isLastStep: Ember.computed('sort', 'builder.stepSize', function() {
    return this.get('sort') === this.get('builder.stepSize');
  })

});
