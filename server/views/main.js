require('./main.css');

import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';

import Page from '../../client/components/page';
import {addFlight} from '../../client/actions';
import {FlightApp} from '../../client/reducers';

const store = createStore(FlightApp);

function render() {
    ReactDom.render(
    <Page store={store} />,
        document.getElementById('root')
    );
}

render();
store.subscribe(render);

var payload = {
    number: "1",
    city_up: "2",
    city_down: "3",
    plane_type: "4",
    time: "2012-06-18 15:34:09",
    fact_time: "2012-06-18 15:34:09",
    status: "5"
};

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// fetch('/api/flights', {
//     headers: myHeaders,
//     method: 'POST',
//     body: JSON.stringify(payload)
// }).then(function(res){ console.log(res) });

// fetch('/api/flights/2', {
//     headers: myHeaders,
//     method: 'PUT',
//     body: JSON.stringify({
//         number: 1000,
//         city_up: "Волгоград"
//     })
// }).then(function(res){ console.log(res) });

// fetch('/api/flights/1', {
//     headers: myHeaders,
//     method: 'DELETE'
// }).then(function(res){ console.log(res) });

fetch('/api/flights', {method: 'GET', headers: myHeaders})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.flights.forEach(flight => {
            store.dispatch(addFlight(flight));
        });
    });