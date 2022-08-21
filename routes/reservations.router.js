const express = require('express');
const ReservationService = require('../services/reservations.service');
const router = express.Router();
const reservationService = new ReservationService();

router.get('/', (req, res) => {
    const data = reservationService.find();
    res.status(200).json(data);
});

module.exports = router;
