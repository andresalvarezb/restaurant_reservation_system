const express = require('express');
const router = express.Router();

const isEmptyObject = require('../utils/isEmptyObject');
const restaurantService = require('../services/restaurants.service');
// const restaurantService = new RestaurantServices();
const reservationService = require('../services/reservations.service');

router.post('/', (req, res) => {
    const { body } = req;
    const data = restaurantService.create(body);
    res.status(201).json(data);
});

router.get('/', (req, res) => {
    if (isEmptyObject(req.query)) {
        const data = restaurantService.find();
        res.status(200).json(data);
    } else {
        const data = restaurantService.filter(req.query);
        // if happen a error, this status code should change
        res.status(200).json(data);
    }
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const { reservation } = req.query;
    if (reservation) {
        const data = reservationService.create(id);
        res.status(200).json(data);
    } else {
        const data = restaurantService.findOne(id);
        res.status(200).json(data);
    }
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const data = restaurantService.update(id, body);
    if (data.index) {
        res.status(404).json(data.message);
    }
    res.status(200).json(data);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const data = restaurantService.delete(id);
    res.status(200).send(`Delete restaurant ${data.name}`);
});

module.exports = router;
