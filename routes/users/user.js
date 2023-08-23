const router = require('express').Router();
const User = require('../../models/user.model');

// Route to get a user by ID
router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId); // Find user by ID in the database

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching the user.' });
    }
});

module.exports = router