import DS from 'ember-data';

const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  title: attr(),
  sort: attr('number'),
  visited: attr('boolean'),
  steps: hasMany('step'),
  tutorial: belongsTo('tutorial'),

  code: Ember.computed('steps.@each.code', function() {

    let code = '';

    let steps = this.get('steps').sortBy('sort');
    steps.forEach(step => code = code + step.get('code'));

    return code;
  })
});
