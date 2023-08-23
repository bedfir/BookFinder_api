const router = require('express').Router();
const Book = require('../../models/book.model')

// Route to get a book by ID
router.get('/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await Book.findById(bookId); // Find Book by ID in the database

        if (!book) {
            return res.status(404).json({ message: 'Book not found.' });
        }

        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching the Book.' });
    }
});

module.exports = router