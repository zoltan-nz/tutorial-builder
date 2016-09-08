import DS from 'ember-data';
import Ember from 'ember';

const { Model, attr, belongsTo } = DS;

export default Model.extend({

  name: attr(),
  lesson: belongsTo('lesson'),

  // snippetType: attr(),
  code: attr(),
  // sort: attr('number'),

  // line: attr('number'),
  // char: attr('number'),

  typeOptions: Ember.A([
      'TEXT',
      'HTML',
      'CSS',
      'JS'
    ])

});
