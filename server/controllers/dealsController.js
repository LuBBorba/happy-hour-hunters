const knex = require('../knex');

// Function to get places with deals on a specific day of the week
const getPlacesByDay = async (req, res) => {
    const { day_of_week } = req.params;
    try {
        const places = await knex('deals')
            .join('places', 'deals.place_id', '=', 'places.id')
            .select(
                'places.id as place_id',
                'places.name as place_name',
                'places.address',
                'places.contact_info',
                'places.website',
                'deals.day_of_week',
                'deals.start_time',
                'deals.end_time',
                'deals.item'
            )
            .where('deals.day_of_week', day_of_week);

        res.json(places);
    } catch (error) {
        console.error('Error fetching places:', error);
        res.status(500).json({ error: 'Failed to fetch places' });
    }
};

module.exports = { getPlacesByDay };
