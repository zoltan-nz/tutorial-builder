import DS from 'ember-data';
import History from 'tutorial-builder/models/history';

export default DS.Transform.extend({

  deserialize(serialized) {
    let object;

    try {
      object = JSON.parse(serialized);
    } catch (e) {
      console.log(e);
    }

    if (!object) {
      object = { done: [], undone: [] };
    }
    return History.create({ content: object })
  },

  serialize(deserialized) {
    if (!deserialized) return { done: [], undone: [] };
    return JSON.stringify(deserialized.get('content'));
  }

})
;
