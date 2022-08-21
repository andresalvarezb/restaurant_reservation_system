const express = require('express');
const restaurantsRouter = require('./restaurants.router');
const reservationRouter = require('./reservations.router');

function routesAPI(app) {
    const baseURL = '/api/v1';
    const router = express.Router();
    app.use(baseURL, router);

    router.use('/restaurants', restaurantsRouter);
    router.use('/reservations', reservationRouter);
}

module.exports = routesAPI;
