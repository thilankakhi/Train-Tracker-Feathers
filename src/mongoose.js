const mongoose = require('mongoose');


const url = 'mongodb+srv://isuri:' + process.env.MONGODB_PW + '@traintracker-2s7h3.mongodb.net/test?retryWrites=true';
module.exports = function(app) {
    mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true });
    mongoose.Promise = global.Promise;

    app.set('mongooseClient', mongoose);
};