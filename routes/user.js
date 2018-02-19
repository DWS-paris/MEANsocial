/*
Import des composants de la route
*/
    // Class
    var express = require('express');
    var router = express.Router();
    const bodyParser = require('body-parser');

    // Middleware
    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(bodyParser.json());

    // Modules
    var MongooseUser = require('../models/user.mongoose');
// 

/*
Définition des routes
*/
    // Afficher les utilisateurs
        router.get('/',  (req, res) => {
            // Rechercher les utilisateurs
            MongooseUser.find({},  (err, users) => {
                // Message d'erreur
                if (err) return res.status(500).send(`There was a problem finding the users.`);

                // Envoie de la réponse
                res.status(200).send(users);
            });
        });
    // 


    // Afficher les informations sur un utilisateur
        router.get('/:id',  (req, res) => {
            // Rechercher l'utilisateur
            MongooseUser.findById(req.params.id,  (err, user) => {
                // Message d'erreur
                if (err) return res.status(500).send(`There was a problem finding the user.`);
                if (!user) return res.status(404).send(`No user found.`);

                // Envoie de la réponse
                res.status(200).send(user);
            });
        });
    // 


    // Inscrire un utilisateur
        router.post('/',  (req, res) => {

            // Ajouter les données dans le DBB
            MongooseUser.create({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            }, 
            // Fonction de callback
            (err, user) => {
                if (err) return res.status(500).send(`There was a problem adding the information to the database.`);
                res.status(200).send(user);
            });
        });
    // 
 

    // Mettre à jour un utilisateur
        router.put('/:id',  (req, res) => {
            // Rechercher et mettre à jour l'utilisateur
            MongooseUser.findByIdAndUpdate(req.params.id, req.body, {new: true},  (err, user) => {
                // Message d'erreur
                if (err) return res.status(500).send(`There was a problem updating the user.`);

                // Envoie de la réponse
                res.status(200).send(user);
            });
        });
    // 


    // Supprimer un utilisateur
        router.delete('/:id',  (req, res) => {
            // Rechercher et supprimer l'utilisateur
            MongooseUser.findByIdAndRemove(req.params.id,  (err, user) => {
                // Message d'erreur
                if (err) return res.status(500).send(`There was a problem deleting the user.`);

                // Envoie de la réponse
                res.status(200).send(`User: ${user.name} was deleted.`);
            });
        });
    //
// 



/*
Export du module des routes
*/
  module.exports = router;
//