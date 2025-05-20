const API_URL = 'http://localhost:3000/books';

document.addEventListener('DOMContentLoaded', () => {
  loadBooks();

  const form = document.getElementById('book-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newBook = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
      publishedDate: document.getElementById('publishedDate').value,
      genre: document.getElementById('genre').value,
    };

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBook)
      });

      const data = await res.json();
      if (res.ok) {
        alert('Livre ajouté !');
        form.reset();
        loadBooks();
      } else {
        alert(data.message || 'Erreur lors de l\'ajout');
        console.error(data);
      }
    } catch (error) {
      alert("Erreur de connexion au serveur.");
      console.error(error);
    }
  });
});

async function loadBooks() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    data.books.forEach(book => {
      const li = document.createElement('li');
      li.textContent = `${book.title} par ${book.author} (${book.genre}, ${book.publishedDate?.substring(0, 10)})`; // substring pour afficher la date au format YYYY-MM-DD
      bookList.appendChild(li);
    });
  } catch (error) {
    console.error('Erreur lors du chargement des livres:', error);
  }
}
