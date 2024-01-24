// // Importation des modules nécessaires pour l'API Deezer et la musique populaire
// const apiDeezer = require("../src/services/deezer.js");
// const apiTopMusic = require("../src/services/topMusic.js");


// // Exportation d'une fonction qui définit les routes pour l'application Express fournie
// module.exports = (app) => {
//     // Gestion des requêtes GET vers l'endpoint racine '/'
//     app.get('/', (req, res) => {
//         // Création d'instances des classes Deezer API et topMusic
//         const api = new apiDeezer();
//         const topMusic = new apiTopMusic();

//         // Vérification si le mot-clé est fourni dans les paramètres de requête et n'est pas vide
//         if (req.query.keyword != undefined && req.query.keyword.trim() != '') {
//             // Appel de la méthode 'search' de l'API Deezer avec le mot-clé fourni
//             api.search(req.query.keyword)
//                 .then((result) => {
//                     // Traitement des données du résultat et création d'un nouveau tableau 'musics'
//                     let musics = [];
//                     result.data.forEach(element => {
//                         musics.push({
//                             title: element.title,
//                             preview: element.preview,
//                             cover: topMusic.getCover(element.album)
//                         });
//                     });

//                     // Rendu de la vue 'home' avec les données 'musics'
//                     res.render('home', { musics });
//                 })
//                 .catch((error) => {
//                     // Gestion des erreurs qui peuvent survenir lors de l'appel à l'API
//                     console.error('Erreur lors de la récupération des données de l\'API Deezer :', error);
//                     res.status(500).send('Erreur interne du serveur');
//                 });
//         } else {
//             // Rendu de la vue 'home' sans données supplémentaires si aucun mot-clé n'est fourni
//             res.render('home');
//         }
//     });

const home = require('../src/controllers/Home.js');
const search = require('../src/controllers/Search.js');
const register = require('../src/controllers/Register.js');
const auth = require('../src/controllers/Authenticate.js');
const adminControllers = require('../src/controllers/AdminControllers.js')
    module.exports = (app) => {
        app.get('/', home.get)
        app.get('/search',  search.get)
        app.post('/search', search.post)

        app.get('/inscription', register.get)
        app.post('/inscription', register.post)

        app.get('/connexion', auth.get)
        app.post('/connexion', auth.post)

        app.get('/deconnexion', auth.getDeconnect)

        app.get('/admin', adminControllers.get)
        


    }

    

