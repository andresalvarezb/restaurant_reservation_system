const express = require('express');
const reservationService = require('../services/reservations.service');
const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        const data = reservationService.find();
        res.json(data);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
