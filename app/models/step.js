import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
// import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  sort: attr('integer'),
  actionContent: attr(),
  // actionType: belongsTo('action-type'),
  lesson: belongsTo('lesson')
});
