const knex = require('../knex');

// Function to get all deals along with their associated place details
const getDeals = async (req, res) => {
    try {
        const deals = await knex('deals')
            .join('places', 'deals.place_id', '=', 'places.id')
            .select(
                'deals.id as deal_id',
                'places.name as place_name',
                'places.address',
                'places.contact_info',
                'places.website',
                'deals.day_of_week',
                'deals.start_time',
                'deals.end_time',
                'deals.item'
            );

        res.json(deals);
    } catch (error) {
        console.error('Error fetching deals:', error);
        res.status(500).json({ error: 'Failed to fetch deals' });
    }
};

module.exports = { getDeals };

