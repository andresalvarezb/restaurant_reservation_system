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

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const data = service.findOne(id);
    res.status(200).json(data);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const data = service.update(id, body);
    if (data.index) {
        res.status(404).json(data.message);
    }
    res.status(200).json(data);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const data = service.delete(id);
    res.status(200).send(`Delete restaurant ${data.name}`);
});

module.exports = router;
