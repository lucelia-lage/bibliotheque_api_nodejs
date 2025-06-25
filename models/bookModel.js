const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
    required: [true, 'Le titre est requis.'],
    },
    author : {      
        type: String,
        required: [true, "L'auteur est requis."],
    },
    publishedDate: {
        type: Date,
        required: [true, 'La date de publication est requise.'],
    },
    genre: {
        type: String,
        required: [true, 'Le genre est requis.'],
    },
},
);

const bookModel = mongoose.model('books', bookSchema);
module.exports = bookModel;


