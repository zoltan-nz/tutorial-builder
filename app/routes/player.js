import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.query('builder', { name: 'default' })
      .then(builders => builders.get('firstObject'))
      .then(builder => builder.get('builderSteps'));
  }
});
