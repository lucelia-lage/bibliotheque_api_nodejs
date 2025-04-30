const bookModel = require('../models/bookModel');

const bookRouter = require('express').Router();

bookRouter.post('/books', async (req, res) => {
try {   
    const book = new bookModel({
        title: req.body.title,
        author: req.body.author,
        publishedDate: req.body.publishedDate,
        genre: req.body.genre,
    })
    await book.save() 
    res.json({ message: 'le livre a été ajouté avec succès', book: book })
}
catch (error) {
    console.log(error)
    res.json({ err : error,  message: 'une erreur est survenue lors de l\'ajout du livre'})
}
});

bookRouter.get('/books', async (req, res) => { // je cherche tous les livres
try {
    const books = await bookModel.find() 
    res.json({books: books }); // je renvoie tous les livres
}catch (error) {
    console.log(error)
    res.json({ err : error,  message: 'une erreur est survenue lors de la récupération des livres'})
}
});

bookRouter.get('/books/:id', async (req, res) => { // je cherche un livre avec un id
try {
    const book = await bookModel.find({_id: req.params.id}); // envoyer via un paramètre de requête! 
    res.json({ book: book }); // je renvoie le livre
} catch (error) {
    console.log(error)
    res.json({ err : error,  message: 'une erreur est survenue lors de la récupération du livre'})
}
});

bookRouter.get('/books/.../:title', async (req, res) => { // je cherche un livre avec un titre 
try {
    const book = await bookModel.find({title: req.params.title}); // envoyer via un paramètre de requête!
    res.json({ books: books}); // je renvoie le livre
}catch (error) {
    console.log(error)
    res.json({ err : error,  message: 'une erreur est survenue lors de la récupération du livre'})
}
});

bookRouter.put('/books/:id', async (req, res) => { // je cherche un livre avec un id
try {
    const book = await bookModel.updateOne( 
        { _id: req.body.id }, // je cherche un livre avec l'id qui est dans le body de la requete
        {
            title: req.body.title, 
            author: req.body.author,
            publishedDate: req.body.publishedDate,
            genre: req.body.genre,
        }
    );
    res.json({ message: 'le livre a été mis à jour avec succès', book: book }) // je renvoie le livre
}catch (error) {
    console.log(error)
    res.json({ err : error,  message: 'une erreur est survenue lors de la mise à jour du livre'})
}
});

bookRouter.delete('/books/:id', async (req, res) => { // je cherche un livre avec un id
try {
    const book = await bookModel.deleteOne({ _id: req.params.id }); // je cherche un livre avec l'id qui est dans le parametre de la requete
    res.json({ message: 'le livre a été supprimé avec succès', book: book }) // je renvoie le livre
}catch (error) {
    console.log(error)
    res.json({ err : error,  message: 'une erreur est survenue lors de la suppression du livre'})
}
});
module.exports = bookRouter; // je l'exporte pour l'utiliser dans le server.js

