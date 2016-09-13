import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({

  builder: belongsTo('builder'),
  sort: attr('number'),
  comment: attr('string'),

  code: attr('string'),
  history: attr('string')

});
