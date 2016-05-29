const dbFile = "flights.db";
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

var number = "RX-0456";
var city_up = "Екатеринбург";
var city_down = "Москва";
var plane_type = "Аэробус";
var time = "2012-06-18 10:34:09";
var fact_time = "2012-06-18 15:34:09";
var status = "Идет посадка";

var sqlRequest = "INSERT INTO 'flights' (number, city_up, city_down, plane_type, time, fact_time, status) " +
    "VALUES('" + 
        number + "', '" + 
        city_up + "', '" + 
        city_down + "', '" + 
        plane_type + "', '" + 
        time + "', '" + 
        fact_time + "', '" + 
        status + 
    "')";
    db.run(sqlRequest, function (err) {
        if (err !== null) {
            console.log("Cannot write to table 'flights'");
        } else {
            console.log('Value inserted successfully');
        }
    });