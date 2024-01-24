// Importation du fichier de configuration de la base de données MongoDB
require('../../app/database_mongo.js');

// Importation du module mongoose pour la modélisation des données
const mongoose = require("mongoose");

// Définition du schéma de la collection "users" dans la base de données
const schema = new mongoose.Schema({
    email: { type: String, unique: true }, // Champ email unique
    lastname: { type: String }, // Champ pour le nom de famille
    firstname: { type: String }, // Champ pour le prénom
    password: { type: String }, // Champ pour le mot de passe
    createdAt: { type: Date, default: Date.now() } // Champ pour la date de création, avec une valeur par défaut de la date actuelle
});

// Création du modèle "user" à partir du schéma défini
module.exports = mongoose.model('user', schema);
