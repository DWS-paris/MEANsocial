/*
Import des composants de la route
*/
    // Class
    const express = require('express');
    const router = express.Router();
    let bodyParser = require('body-parser');

    // Middleware
    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(bodyParser.json());
//


/*
Définition des routes
*/
// Page Home
    router.get(['/', '/login', '/register', '/dashboard'], (req, res) => { // => Capter l'appel sur la page d'accueil
    res.render('index'); // => Renvoyer la vue "index.html"
    });
//


/*
Export de la route
*/
    module.exports = router;
//