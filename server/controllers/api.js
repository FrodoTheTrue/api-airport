const Flight = require('../models/flight');
exports.flightsList = (req, res) => {
    // список всех flights
    Flight.getAllFlights(req.query, function(err, flights) {
        res.json({
            err,
            flights
        });
    });
};
exports.flightsPut = (req, res) => {
    var newFlight = new Flight({
        number: req.body.number,
        city_up: req.body.city_up,
        city_down: req.body.city_down,
        plane_type: req.body.plane_type,
        time: req.body.time,
        fact_time: req.body.fact_time,
        status: req.body.status
    });
    newFlight.save(function(error) {
        res.json({
            error
        })
    });
};
exports.flightsEdit = (req, res) => {
    Flight.updateFlight(req.params.flight_id, req.body, function (err) {
        res.json({
            err
        });
    });
};
exports.flightsDelete = (req, res) => {
    Flight.deleteFlight(req.params.flight_id, function (err) {
        res.json({
            err
        });
    });
};