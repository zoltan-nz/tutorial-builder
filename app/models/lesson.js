import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr(),
  sort: attr('number'),
  visited: attr('boolean'),
  steps: hasMany('step'),
  tutorial: belongsTo('tutorial')
});
