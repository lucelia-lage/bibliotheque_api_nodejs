const API_URL = '/books';

// Affiche tous les livres
async function fetchBooks() {
  const res = await fetch(API_URL);
  const data = await res.json();
  const container = document.getElementById('booksContainer');
  container.innerHTML = '';

  data.books.forEach(book => {
    const div = document.createElement('div');
    div.className = 'book';
    div.innerHTML = `
      <strong>${book.title}</strong> par ${book.author}<br/>
      📅 Publié le: ${new Date(book.publishedDate).toLocaleDateString()}<br/>
      🎭 Genre: ${book.genre}<br/>
    `;

    // Bouton Supprimer
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Supprimer';
    delBtn.className = 'delete';
    delBtn.onclick = () => deleteBook(book._id);
    div.appendChild(delBtn);

    // Bouton Modifier (ouvre la modale)
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Modifier';
    editBtn.className = 'update';
    editBtn.onclick = () => openEditModal(book);
    div.appendChild(editBtn);

    container.appendChild(div);
  });
}

// Supprimer un livre
async function deleteBook(id) {
  if (confirm("Supprimer ce livre ?")) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchBooks();
  }
}

// Ajout ou modification via formulaire principal
document.getElementById('bookForm').addEventListener('submit', async e => {
  e.preventDefault();
  const book = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    publishedDate: document.getElementById('publishedDate').value,
    genre: document.getElementById('genre').value
  };

  const bookId = document.getElementById('bookId').value;
  if (bookId) {
    // Modifier
    await fetch(`${API_URL}/${bookId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    });
  } else {
    // Ajouter
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    });
  }

  e.target.reset();
  document.getElementById('bookId').value = '';
  document.getElementById('submitBtn').textContent = 'Ajouter';
  fetchBooks();
});

// Ouvrir la modale avec données pré-remplies
const editModal = document.getElementById('editModal');
const closeEditModalBtn = document.getElementById('closeEditModal');

function openEditModal(book) {
  document.getElementById('editBookId').value = book._id;
  document.getElementById('editTitle').value = book.title;
  document.getElementById('editAuthor').value = book.author;
  document.getElementById('editPublishedDate').value = book.publishedDate.split('T')[0];
  document.getElementById('editGenre').value = book.genre;

  editModal.style.display = 'block';
}

// Fermer la modale au clic sur la croix
closeEditModalBtn.onclick = () => {
  editModal.style.display = 'none';
};

// Fermer la modale si clic hors contenu
window.onclick = e => {
  if (e.target === editModal) {
    editModal.style.display = 'none';
  }
};

// Soumettre formulaire modale pour modifier
document.getElementById('editBookForm').addEventListener('submit', async e => {
  e.preventDefault();

  const id = document.getElementById('editBookId').value;
  const updatedBook = {
    title: document.getElementById('editTitle').value,
    author: document.getElementById('editAuthor').value,
    publishedDate: document.getElementById('editPublishedDate').value,
    genre: document.getElementById('editGenre').value,
  };

  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedBook),
  });

  const data = await res.json();
  console.log('Livre modifié:', data);

  editModal.style.display = 'none';
  fetchBooks();
});

// Chargement initial
fetchBooks();
