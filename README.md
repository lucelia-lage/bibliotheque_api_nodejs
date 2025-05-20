API Livre - Node.js / Express / MongoDB

Cette API permet de gérer une collection de livres avec les opérations classiques de CRUD (Créer, Lire, Mettre à jour, Supprimer).

Fonctionnalités

- `POST /books` : Ajouter un nouveau livre  
- `GET /books` : Récupérer tous les livres  
- `GET /books/:id` : Récupérer un livre par son ID  
- (À implémenter : `GET /books/title/:title` pour rechercher par titre) 
- `PUT /books/:id` : *(Prévu)* Modifier un livre existant  
- `DELETE /books/:id` : *(Prévu)* Supprimer un livre  

Les routes de modification et suppression ne sont pas encore intégrées. Elles seront ajoutées prochainement.

Structure d’un livre : 

Chaque document `book` contient les champs suivants, tous requis :

- `title` (String) — Titre du livre  
- `author` (String) — Auteur  
- `publishedDate` (Date) — Date de publication  
- `genre` (String) — Genre littéraire  

Technologies utilisées

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

Améliorations futures possibles

- Retourner les bons codes HTTP (`201`, `400`, `404`, etc.)  
- Implémenter la route `GET /books/title/:title` pour rechercher par titre  
- Validation améliorée des champs (format de date, longueur minimale, REGEX, etc.)  
- Ajouter les fonctionnalités de modification et suppression
- Utiliser un fichier `.env` pour les variables sensibles (connexion à MongoDB, port, etc.)  
- Améliorer la gestion des erreurs (messages plus clairs, gestion centralisée)
