const express = require('express');
const reservationService = require('../services/reservations.service');
const router = express.Router();

router.get('/', (req, res) => {
    const data = reservationService.find();
    res.status(200).json(data);
});

module.exports = router;
