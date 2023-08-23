const router = require('express').Router();
const users = require('./users/users')
const user = require('./users/user')
const books = require('./books/books')
const book = require('./books/book')
const spots = require('./spots/spots')
const spot = require('./spots/spot')

router.use('/users', users)
router.use('/user', user)
router.use('/books', books)
router.use('/book', book)
router.use('/spots', spots)
router.use('/spot', spot)

module.exports = router