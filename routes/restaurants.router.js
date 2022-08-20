const express = require('express');
const router = express.Router();

const RestaurantServices = require('../services/restaurants.service');
const service = new RestaurantServices();

router.post('/', (req, res) => {
    const { body } = req;
    const data = service.create(body);
    res.status(201).json(data);
});

router.get('/', (req, res) => {
    const data = service.find();
    res.status(200).json(data);
});

module.exports = router;
