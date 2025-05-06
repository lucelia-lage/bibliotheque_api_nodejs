API Livre - Node.js / Express / MongoDB

Cette API permet de gérer une collection de livres avec les opérations classiques : création, lecture, mise à jour et suppression (CRUD).

 Fonctionnalités

- `POST /books` : ajouter un livre  
- `GET /books` : récupérer tous les livres  
- `GET /books/:id` : récupérer un livre par ID  
- `GET /books/title/:title` : récupérer un livre par titre  
- `PUT /books/:id` : modifier un livre  
- `DELETE /books/:id` : supprimer un livre  

Chaque livre contient les champs suivants :  
- `title` (String)  
- `author` (String)  
- `publishedDate` (Date)  
- `genre` (String)  

Tous les champs sont requis pour l'ajout d'un livre.

 Améliorations futures

- Utiliser des codes HTTP appropriés (`201`, `400`, `404`, etc.)  
- Ajouter une validation plus poussée des champs (longueur, format, etc.)  
- Permettre la recherche par mot-clé dans les titres  
- Implémenter la pagination pour les listes de livres  
- Utiliser un fichier `.env` pour les variables d’environnement  
- Améliorer les messages d’erreur et la gestion des exceptions
