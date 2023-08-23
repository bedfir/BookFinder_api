const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String,
    borrowedBooks: [{ type: schema.Types.ObjectId, ref: 'Book' }],
    depositedBooks: [{ type: schema.Types.ObjectId, ref: 'Book' }],
}, {
    timestamps: true
});

const Users = mongoose.model('User', userSchema);

module.exports = Users