const router = require('express').Router();
const Users = require('../../models/user.model')

// Route to get all users
router.get('/', async (req, res) => {
    try {
        const users = await Users.find(); // Retrieve all users from the database
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching users.' });
    }
});

module.exports = router