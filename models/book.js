const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    
    authors: {type: Array, required: true},
    title: {type: String, required: true},
    description: {type: String},
    link:{type: String, required: true}, 
    image:{type: String, required: true},
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;