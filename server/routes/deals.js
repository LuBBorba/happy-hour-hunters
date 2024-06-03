const express = require('express');
const router = express.Router();
const { getDeals } = require('../controllers/dealsController');

// Define the route for fetching deals
router.get('/deals', getDeals);

module.exports = router;
