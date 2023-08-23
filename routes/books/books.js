const router = require('express').Router();
const Books = require('../../models/book.model')

// Route to get all books
router.get('/', async (req, res) => {
    try {
        const books = await Books.find(); // Retrieve all books from the database
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching books.' });
    }
});

module.exports = router