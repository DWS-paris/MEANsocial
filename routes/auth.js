/*
Import des composants de la route
*/
  // Class
  let express = require('express');
  let router = express.Router();
  let bodyParser = require('body-parser');
  let jwt = require('jsonwebtoken');
  let bcrypt = require('bcryptjs');

  // Middleware
  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(bodyParser.json());
  router.use( (user, req, res, next)  => { res.status(200).send(user) });

  // Modules
  let config = require('../config/token.js');
  let VerifyToken = require('../models/verify.token');
  let MongooseUser = require('../models/user.mongoose');
// 




/*
Définition des routes
*/
  // Inscription utilisateur
  router.post('/register', (req, res) => {
      // Hashage du mot de passe
      const hashedPassword = bcrypt.hashSync(req.body.password, 8);
      
      // Création de l'utilisateur
      MongooseUser.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : hashedPassword,
        bio : req.body.bio,
        linkedin : req.body.linkedin,
        twitter : req.body.twitter,
        facebook : req.body.facebook
      },

      // Fonction de callback
      (err, user) => {
        // Message d'erreur
        if (err) return res.status(500).send("There was a problem registering the user.")
        
        // Création du token
        const token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });

        // Envoie de la réponse
        res.status(200).send({ auth: true, token: token });
      }); 
  });


  // Connexion utilisateur
  router.post('/login', (req, res) => {

    console.log(req.body)
      
      // Recherche de l'utilisateur
      MongooseUser.findOne({ email: req.body.email },  (err, user) => {

        // Message d'erreur
          if (err) return res.status(500).send('Error on the server.');
          if (!user) return res.status(404).send('No user found.');
        // 

        // Hashage du mot de passe
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        
        // Message d'erreur
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        // Création du token
        const token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });

        // Envoie de la réponse
        res.status(200).send({ auth: true, token: token });
      });
  });


  // Deconnexion utilisateur
  router.get('/logout', (req, res) => {
      res.status(200).send({ auth: false, token: null });
  });


  // Informations utilisateurs
  router.get('/me', VerifyToken, (req, res, next) => {

    // Recherche de l'utilisateur
    MongooseUser.findById(req.userId, { password: 0 },  (err, user) => {

      // Message d'erreur
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
      // 
      
      // Envoie de la réponse
      res.status(200).send(user);
    });
  });
// 



/*
Export du module des routes
*/
  module.exports = router;
//