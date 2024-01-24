// Import des modules nécessaires
const User = require('../repositories/users.js');  // Import du modèle User depuis le répertoire repositories
const bcrypt = require('bcryptjs');  // Module pour le hachage des mots de passe


exports.get = (req, res) => {
    res.render('auth');
};


// Exporter la fonction pour gérer la requête POST d'authentification
exports.post = (req, res) => {
    // Utilisation de 'findOne' pour rechercher un utilisateur par email
    User.findOne({ email: req.body.email }).then((user) => {
        // Vérifier si un utilisateur a été trouvé
        if (user) {
            // Comparer le mot de passe fourni avec le mot de passe haché de l'utilisateur
            if (bcrypt.compareSync(req.body.password, user.password)) {
                // Si les mots de passe correspondent, créer une session utilisateur
                req.session.user = {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    connected: true
                };
                // Rediriger vers la page d'accueil avec un message de notification
                req.flash('notify', `Vous êtes maintenant connecté`);
                res.redirect('/');
                return;
            }
        }
        // Si l'authentification échoue, rendre la vue 'auth' avec un message d'erreur
        res.render('auth', { error: `L'identification a échoué`, email: req.body.email });
    });

};

exports.getDeconnect = (request, response) => {
    request.session.user = null;
    request.flash('notify', 'Vous êtes maintenant déconnecté !')
    response.redirect('/')
}

