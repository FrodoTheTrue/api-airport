const Flight = require('./server/models/flight');
// Flight.getAllFlights(function (err, flights) {
//     console.log(flights);
// });
const dbFile = "flights.db";
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

// db.run('UPDATE flights SET number=333, city_up=444 WHERE id=1', function(err, row) {
//     console.log(row);
// });
//

// Flight.updateFlight(2, {
//     number: "123",
//     city_up: "Юра лох"
// }, function (err, row) {
//     console.log(err, row);
// });

// db.all('SELECT * FROM flights', function(err, row) {
//     console.log(row);
// });