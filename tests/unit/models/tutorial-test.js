import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tutorial', 'Unit | Model | tutorial', {
  // Specify the other units that are required for this test.
  needs: ['model:step']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
