'use strict';

const api = require('./controllers/api');
const pages = require('./controllers/pages');

module.exports = function (app) {
    app.get('/', pages.index);

    // base api urls
    app.get('/api/flights', api.flightsList), // get flights
    app.post('/api/flights', api.flightsPut), // create new flight
    app.put('/api/flights/:flight_id', api.flightsEdit), // update flight
    app.delete('/api/flights/:flight_id', api.flightsDelete), // delete flight

    app.all('*', pages.error404);

    /* eslint no-unused-vars: 0 */
    /* eslint max-params: [2, 4] */
    app.use((err, req, res, next) => {
        console.error(err);

        res.sendStatus(500);
    });
};