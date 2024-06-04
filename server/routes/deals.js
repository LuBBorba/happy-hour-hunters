const express = require('express');
const router = express.Router();
const { getPlacesByDay } = require('../controllers/dealsController');

router.get('/deals/:day_of_week', async (req, res) => {
    try {
        await getPlacesByDay(req, res);
    } catch (err) {
        res.status(400).send(`Error retrieving places: ${err.message}`);
    }
});

module.exports = router;
