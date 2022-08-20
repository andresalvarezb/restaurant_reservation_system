// const express = require('express');
const restaurantsRouter = require('./restaurants.router');

function routesAPI(app) {
    // const baseURL = 'api/v1/'
    app.use('/restaurants', restaurantsRouter);
}

module.exports = routesAPI;
