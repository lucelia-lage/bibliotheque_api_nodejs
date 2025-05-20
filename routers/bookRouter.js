const bookModel = require('../models/bookModel');
const express = require('express');
const bookRouter = express.Router();

// Ajouter un nouveau livre
bookRouter.post('/books', async (req, res) => {
  try {
    const book = new bookModel({
      title: req.body.title,
      author: req.body.author,
      publishedDate: req.body.publishedDate,
      genre: req.body.genre,
    });
    await book.save();
    res.json({ message: 'Livre ajouté avec succès !', book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error, message: "Erreur lors de l'ajout du livre." });
  }
});

// Récupérer tous les livres
bookRouter.get('/books', async (req, res) => {
  try {
    const books = await bookModel.find();
    res.json({ books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error, message: "Erreur lors de la récupération des livres." });
  }
});

// Récupérer un livre par ID
bookRouter.get('/books/:id', async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Livre non trouvé.' });
    res.json({ book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error, message: 'Erreur lors de la récupération du livre.' });
  }
});

// Mettre à jour un livre
bookRouter.put('/books/:id', async (req, res) => {
  try {
    const updated = await bookModel.updateOne(
      { _id: req.params.id },
      {
        title: req.body.title,
        author: req.body.author,
        publishedDate: req.body.publishedDate,
        genre: req.body.genre,
      }
    );
    res.json({ message: 'Livre mis à jour avec succès.', updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error, message: "Erreur lors de la mise à jour du livre." });
  }
});

// Supprimer un livre
bookRouter.delete('/books/:id', async (req, res) => {
  try {
    const deleted = await bookModel.deleteOne({ _id: req.params.id });
    res.json({ message: 'Livre supprimé avec succès.', deleted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error, message: 'Erreur lors de la suppression du livre.' });
  }
});

module.exports = bookRouter;

