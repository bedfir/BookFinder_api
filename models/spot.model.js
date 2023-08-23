const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CoordinateSchema = new schema({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
});

const spotSchema = new schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    coordinate: CoordinateSchema,
    books: [{ type: schema.Types.ObjectId, ref: 'Book' }],
}, {
    timestamps: true
});

const Spot = mongoose.model('Spot', spotSchema);

module.exports = Spot;
