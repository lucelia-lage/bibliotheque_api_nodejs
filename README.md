# Bibliothèque de Livres - API Node.js

Ce projet est une API RESTful développée avec Node.js, Express et MongoDB, permettant de gérer une bibliothèque de livres.  
Il offre des fonctionnalités pour ajouter, modifier, supprimer et consulter des livres.

---

## Fonctionnalités

- Liste des livres
- Ajout d’un nouveau livre
- Modification d’un livre existant
- Suppression d’un livre
- Interface web simple pour interagir avec l’API

---

## Installation

1. Clone le dépôt :  
   ```bash
   git clone https://github.com/ton-utilisateur/ton-repo.git
   cd ton-repo
Installe les dépendances :
npm install
Configure la connexion à MongoDB (exemple dans .env ou fichier config)
Exemple :
MONGODB_URI=mongodb://localhost:27017/bibliotheque
Lance le serveur :
npm start
Utilisation
L’API est accessible sur http://localhost:3000 (ou autre port configuré)

Utilise l’interface web disponible à la racine (index.html) pour gérer les livres

Ou interagis avec l’API via des requêtes HTTP (GET, POST, PUT, DELETE)

Structure du projet
server.js — point d’entrée du serveur Express

routers/ — routes pour les livres

models/ — modèles Mongoose

public/ — fichiers statiques (HTML, CSS, JS)

package.json — gestion des dépendances

Contributions
N’hésite pas à contribuer via des issues ou pull requests !

Améliorations futures possibles

- Retourner les bons codes HTTP (`201`, `400`, `404`, etc.)  
- Implémenter la route `GET /books/title/:title` pour rechercher par titre  
- Validation améliorée des champs (longueur minimale, REGEX, etc.)  
- Utiliser un fichier `.env` pour les variables sensibles (connexion à MongoDB, port, etc.)  
- Améliorer la gestion des erreurs (messages plus clairs, gestion centralisée)
