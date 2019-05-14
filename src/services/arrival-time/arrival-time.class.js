/* eslint-disable no-unused-vars */


class Service {
    constructor(options) {
        this.paginate = options.paginate;
    }
    setup(app) {
        this.app = app;
    }

    async create(data, params) {
        const trainId = data.trainId;
        var location = null;
        await this.app.service('trainLocation').find({ trainId: '1' }).then(result => { location = result.data[0].location.coordinates; });
        return {
            trainId: trainId,
            currentLocation: location
        };
    }
}

module.exports = function(options) {
    return new Service(options);
};

module.exports.Service = Service;