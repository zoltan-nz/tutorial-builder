import Ember from "ember";

export default Ember.Route.extend({

  model() {
    return this.store.findAll('builder').then(all => this._createOrSelect(all));
  },

  afterModel(builder, transition) {
    const firstStep = builder.get('builderSteps.firstObject');
    this.transitionTo('builder.step', firstStep.get('id'));
  },

  _createOrSelect(allBuilder) {

    if (Ember.isEmpty(allBuilder)) {
      return this._createBoth();
    }

    const theBuilder = allBuilder.get('firstObject');
    const builderSteps = theBuilder.get('builderSteps');

    if (Ember.isEmpty(builderSteps)) {
      return this._createFirstStep(theBuilder).then(() => theBuilder.save())
    }

    return theBuilder;
  },

  _createBoth() {
    return this._createDefaultBuilder()
      .then(newBuilder => this._createFirstStep(newBuilder))
      .then(firstStep => firstStep.get('builder'))
      .then(builder => builder.save());
  },

  _createDefaultBuilder() {
    return this.store.createRecord('builder', { name: 'default' }).save();
  },

  _createFirstStep(builder) {
    return this.store.createRecord('builder-step', { sort: 1, builder }).save();
  },

  actions: {

    deleteStep(step) {
      step.destroyRecord();
      this.controller.get('model').save();

    }
  }
});
