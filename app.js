'use strict';

const path = require('path');

const express = require('express');
const app = express();

const hbs = require('hbs');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const viewsDir = path.join(__dirname, 'server/views');
const publicDir = path.join(__dirname, 'public');

app.set('views', viewsDir);
app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use(express.static(publicDir));

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

/* eslint max-params: [2, 4] */
app.use((err, req, res, next) => {
    console.error(err);
    next();
});

app.use((req, res, next) => {
    req.commonData = {
    meta: {
        description: 'One page application for API airport',
        charset: 'utf-8'
    },
    page: {
        title: 'API airport'
    },
    isDev: process.env.NODE_ENV === 'development'
};

next();
});

require('./server/routes')(app);

app.listen(app.get('port'),
    () => console.log(`Listening on port ${app.get('port')}`));

module.exports = app;