const express = require('express');
const router = express.Router();
const { getPlacesByDay } = require('../controllers/dealsController');

router.get('/deals/:day_of_week', async (req, res) => {
    try {
        await getPlacesByDay(req, res);
    } catch (err) {
        console.error(`Error retrieving places: ${err.message}`);
        res.status(500).json({ error: `Error retrieving places: ${err.message}` });
    }
});

module.exports = router;
