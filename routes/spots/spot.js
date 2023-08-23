const router = require('express').Router();
const Spot = require('../../models/spot.model')

// Route to get a spot by ID
router.get('/:id', async (req, res) => {
    try {
        const spotId = req.params.id;
        const spot = await Spot.findById(spotId); // Find spot by ID in the database

        if (!spot) {
            return res.status(404).json({ message: 'Spot not found.' });
        }

        res.json(spot);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching the spot.' });
    }
});


module.exports = router