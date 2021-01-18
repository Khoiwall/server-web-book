var express = require('express')
var router = express.Router()

// call controller
var bookController = require('../controller/book_controller.js')
//router
router.get('/api-hot-book',bookController.apiHotBook);
router.get('/api-book-sale',bookController.apiSale);

module.exports = router;