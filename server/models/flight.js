'use strict';
const dbFile = "flights.db";
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

class Flight {
    
    constructor(initObj) {
        this.fields = initObj;
    }
    static getAllFlights (params, callback) {
        var queryString = "";
        for (var key in params) {
            queryString += key + "='" + params[key] + "' AND ";
        }
        queryString = queryString.slice(0, -4);
        if (queryString != "") {
            queryString = " WHERE " + queryString;
        }
        console.log(queryString);
        db.all('SELECT * FROM flights' + queryString, function(err, row) {
            if(err !== null) {
                callback(true, null);
            } else {
                callback(null, row);
            }
        });
    }

    static updateFlight (id, setParams, callback) {
        var setString = "";
        for (var key in setParams) {
            setString += key + "=" + "'" + setParams[key] + "'" + ", ";
        }
        setString = setString.slice(0, -2);
        console.log(setString);
        db.run('UPDATE flights SET '+ setString +' WHERE id=' + id, function(err) {
            callback(err);
        });
    }

    static deleteFlight (id, callback) {
        db.run('DELETE FROM flights WHERE id=' + id, function(err) {
            callback(err);
        });
    }

    save(callback) {
        var sqlRequest = "INSERT INTO 'flights' (number, city_up, city_down, plane_type, time, fact_time, status) " +
            "VALUES('" +
            this.fields.number + "', '" +
            this.fields.city_up + "', '" +
            this.fields.city_down + "', '" +
            this.fields.plane_type + "', '" +
            this.fields.time + "', '" +
            this.fields.fact_time + "', '" +
            this.fields.status +
            "')";
        db.run(sqlRequest, function (err) {
            if (err !== null) {
                console.log("Cannot write to table 'flights'");
                callback(true);
            } else {
                console.log('Value inserted successfully');
                callback(null);
            }
        });
    }
}

module.exports = Flight;