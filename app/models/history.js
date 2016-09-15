import Ember from 'ember';
import { alias } from 'ember-computed';

export default Ember.ObjectProxy.extend({

  doneList: alias('done'),
  undoneList: alias('undone')

});
