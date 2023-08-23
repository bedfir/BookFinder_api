const router = require('express').Router();
const Spots = require('../../models/spot.model')

// Route to get all spots
router.get('/', async (req, res) => {
    try {
        const spots = await Spots.find(); // Retrieve all spots from the database
        res.json(spots);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching spots.' });
    }
});


module.exports = router