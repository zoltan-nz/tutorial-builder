import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    if (!serialized) return '';
    return JSON.parse(serialized);
  },

  serialize(deserialized) {
    if (!deserialized) return '';
    return JSON.stringify(deserialized);
  }
});
