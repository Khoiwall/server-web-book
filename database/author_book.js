var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var AuthorSchema = new mongoose.Schema({
    nameOfAuthor: String,
    diffName: String,
    birthDay: Date,
    numberBook: Number,
    describe: Array,
    linkWiki: String

});

var author = mongoose.model('author',AuthorSchema,'ListAuthor')

module.exports = author