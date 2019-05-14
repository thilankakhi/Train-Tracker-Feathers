const users = require('./users/users.service.js');
const arrivalTime = require('./arrival-time/arrival-time.service.js');
const trainLocation = require('./train-location/train-location.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(arrivalTime);
  app.configure(trainLocation);
};
