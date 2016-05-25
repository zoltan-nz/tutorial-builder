import { moduleForModel, test } from 'ember-qunit';

moduleForModel('step', 'Unit | Model | step', {
  // Specify the other units that are required for this test.
  needs: ['model:tutorial']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
