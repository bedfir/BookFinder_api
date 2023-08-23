const casual = require('casual');
const Spot = require('../models/spot.model');
const Book = require('../models/book.model');
const User = require('../models/user.model');

// Function to populate Spots collection
async function populateSpots() {
    for (let i = 0; i < 10; i++) {
        const spot = new Spot({
            name: casual.company_name,
            address: casual.address,
            coordinate: {
                latitude: casual.latitude,
                longitude: casual.longitude,
            },
        });

        // Generate an array of book IDs for the spot's books
        const bookIds = [];
        for (let j = 0; j < 3; j++) {
            const book = await generateBook();
            bookIds.push(book._id);
        }

        spot.books = bookIds;

        await spot.save();
    }
}

// Function to generate a book
async function generateBook() {
    const book = new Book({
        name: casual.title,
        author: casual.full_name,
        summary: casual.sentences(3),
        image: casual.url,
    });

    await book.save();
    return book;
}

// Function to populate Users collection
async function populateUsers() {
    for (let i = 0; i < 10; i++) {
        const user = new User({
            firstName: casual.first_name,
            lastName: casual.last_name,
            email: casual.email,
            avatar: casual.url,
        });

        // Generate an array of book IDs for the user's borrowed and deposited books
        const borrowedBookIds = [];
        const depositedBookIds = [];
        for (let j = 0; j < 3; j++) {
            const book = await generateBook();
            borrowedBookIds.push(book._id);
            depositedBookIds.push(book._id);
        }

        user.borrowedBooks = borrowedBookIds;
        user.depositedBooks = depositedBookIds;

        await user.save();
    }
}

// const {populateSpots, populateUsers} = require("../services/fixtures");
//
// // Call the functions to populate collections
// (async () => {
//     await populateSpots();
//     await populateUsers();
//     console.log('Database populated with fake data.');
//     mongoose.disconnect();
// })();


module.exports = {
    populateSpots,
    populateUsers
};
