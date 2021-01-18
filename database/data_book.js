var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var BookSchema = new mongoose.Schema({
    idOfAuthor: Array,
    nameOfBook: String,
    nameLink:String,
    categories: Array,
    nameOfAuthor: String,
    sale: Boolean,
    price: Number,
    pirceSale: Number,
    freeShip: Boolean,
    nameProducer: String,
    dateOfPublic: Date,
    numberPage:Number,
    describe: Array,
    image: Array,
    store: String,
    numberBook: Number,
    sold: Number
});

var book = mongoose.model('book',BookSchema,'listBook')

module.exports = book