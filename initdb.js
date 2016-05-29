const dbFile = "flights.db";
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);
var exists = fs.existsSync(dbFile);

if(!exists) {
    console.log("Creating DB file.");
    fs.openSync(dbFile, "w");
}
db.run('CREATE TABLE "flights" ' +
    '(id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
    'number VARCHAR(255), ' +
    'city_up VARCHAR(255),' +
    'city_down VARCHAR(255),' +
    'plane_type VARCHAR(255),' +
    'time DATE,' +
    'fact_time DATE,' +
    'status VARCHAR(255))', function(err) {
    if (err !== null) {
        console.log("SQL table 'flights' already initialized");
    }
    else {
        console.log("SQL Table 'flights' initialized.")
    }
});