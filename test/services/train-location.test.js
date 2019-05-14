const assert = require('assert');
const app = require('../../src/app');

describe('\'trainLocation\' service', () => {
  it('registered the service', () => {
    const service = app.service('trainLocation');

    assert.ok(service, 'Registered the service');
  });
});
