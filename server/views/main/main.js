require('./main.css');

import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';

import Page from '../../../client/components/mainPage/page';
import {addFlight} from '../../../client/actions';
import {FlightApp} from '../../../client/reducers';

const store = createStore(FlightApp);

function render() {
    ReactDom.render(
    <Page store={store} />,
        document.getElementById('root')
    );
}

render();
store.subscribe(render);

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

fetch('/api/flights', {method: 'GET', headers: myHeaders})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.flights.forEach(flight => {
            store.dispatch(addFlight(flight));
        });
    });