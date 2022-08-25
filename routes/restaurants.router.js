const express = require('express');
const router = express.Router();

const isEmptyObject = require('../utils/isEmptyObject');
const restaurantService = require('../services/restaurants.service');
const reservationService = require('../services/reservations.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
    getRestaurantSchema,
    createRestaurantSchema,
    updateRestaurantSchema,
} = require('../schemas/restaurant.schema');

router.post(
    '/',
    validatorHandler(createRestaurantSchema, 'body'),
    (req, res) => {
        const { body } = req;
        const data = restaurantService.create(body);
        res.status(201).json(data);
    }
);

router.get('/', (req, res, next) => {
    try {
        if (isEmptyObject(req.query)) {
            const data = restaurantService.find();
            res.json(data);
        } else {
            const data = restaurantService.filter(req.query);
            res.json(data);
        }
    } catch (error) {
        next(error);
    }
});

router.get(
    '/:id',
    validatorHandler(getRestaurantSchema, 'params'),
    (req, res, next) => {
        try {
            const { id } = req.params;
            const { reservation } = req.query;
            if (String(reservation) === 'true') {
                const data = reservationService.create(id);
                res.json(data);
            } else {
                const data = restaurantService.findOne(id);
                res.json(data);
            }
        } catch (error) {
            next(error);
        }
    }
);

router.patch(
    '/:id',
    validatorHandler(getRestaurantSchema, 'params'),
    validatorHandler(updateRestaurantSchema, 'body'),
    (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const data = restaurantService.update(id, body);
            res.json(data);
        } catch (error) {
            next(error);
        }
    }
);

router.delete(
    '/:id',
    validatorHandler(getRestaurantSchema, 'params'),
    (req, res, next) => {
        try {
            const { id } = req.params;
            const data = restaurantService.delete(id);
            res.send(`Delete restaurant ${data.name}`);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
