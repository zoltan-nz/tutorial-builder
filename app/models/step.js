import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
// import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  sort: attr('number'),
  content: attr(),
  contentType: belongsTo('content-type'),
  lesson: belongsTo('lesson')

});
