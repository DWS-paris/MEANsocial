/*
Import des composants
*/
  const jwt = require('jsonwebtoken');
  const config = require('../config/token');
// 


/*
Fonction du model
*/
  function verifyToken(req, res, next) {
    // Récupération du token
    const token = req.headers['x-access-token'];
    
    // Message d'erreur
    if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

    // Vérification du token
    jwt.verify(token, config.secret, (err, decoded) => {
      // Message d'erreur
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

      // Envoie de la réponse
      req.userId = decoded.id;
      next();
    });
  }
// 


/*
Export du model
*/
  module.exports = verifyToken;
// 