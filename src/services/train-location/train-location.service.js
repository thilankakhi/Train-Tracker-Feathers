// Initializes the `trainLocation` service on path `/trainLocation`
const createService = require('feathers-mongoose');
const createModel = require('../../models/train-location.model');
const hooks = require('./train-location.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/trainLocation', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('trainLocation');

  service.hooks(hooks);
};
