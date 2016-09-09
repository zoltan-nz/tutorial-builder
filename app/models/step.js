import DS from 'ember-data';
import Ember from 'ember';

const { Model, attr, belongsTo } = DS;

export default Model.extend({

  name: attr('string'),
  lesson: belongsTo('lesson'),

  type: attr('string'),
  code: attr('string'),
  sort: attr('number'),

  line: attr('number'),
  char: attr('number'),

  typeOptions: Ember.A([
      'TEXT',
      'HTML',
      'CSS',
      'JS'
    ])

});
