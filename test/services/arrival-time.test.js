const assert = require('assert');
const app = require('../../src/app');

describe('\'arrivalTime\' service', () => {
  it('registered the service', () => {
    const service = app.service('arrivalTime');

    assert.ok(service, 'Registered the service');
  });
});
