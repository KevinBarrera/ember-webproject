import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | /app/create-juego', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:/app/create-juego');
    assert.ok(route);
  });
});
