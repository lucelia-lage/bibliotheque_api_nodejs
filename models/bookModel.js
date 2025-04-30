const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
    required: [true, 'le titre est requis'],
    },
    author : {      
        type: String,
        required: [true, 'l\'auteur est requis'],
    },
    publishedDate: {
        type: Date,
        required: [true, 'la date de publication est requise'],
    },
    genre: {
        type: String,
        required: [true, 'le genre est requis'],
    },
},
);

const bookModel = mongoose.model('books', bookSchema);
module.exports = bookModel;


