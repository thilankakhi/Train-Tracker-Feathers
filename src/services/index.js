const users = require('./users/users.service.js');
const arrivalTime = require('./arrival-time/arrival-time.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(arrivalTime);
};
