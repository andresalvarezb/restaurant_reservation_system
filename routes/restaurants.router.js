const express = require('express');
const router = express.Router();

const RestaurantServices = require('../services/restaurants.service');
const service = new RestaurantServices();

router.get('/', (req, res) => {
    res.json(service.find());
});

router.post('/', (req, res) => {
    const { body } = req;
    res.status(201).json({
        message: 'created',
        data: body,
    });
});

module.exports = router;
