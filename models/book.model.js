const mongoose = require('mongoose');
const schema = mongoose.Schema;

const bookSchema = schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    summary: String,
    image: String,
}, {
    timestamps: true
});
const Book = mongoose.model('Book', bookSchema);

module.exports = Book