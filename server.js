/*
Import des composants du serveur
*/
  // Class
  const express = require('express');
  const router = express.Router();
  const mongoose = require('mongoose');
  const path = require('path');
  const ejs = require('ejs');

  // Modules
  const userRoute = require('./routes/user');
  const authRoute = require('./routes/auth');
  const uploadRoute = require('./routes/upload');
  const frontRoute = require('./routes/front');
//


/*
Configuration du serveur
*/
  // Configuration des variables d'environnement
  require('dotenv').config();
  
  // Base de données
  mongoose.connect(process.env.MONGO_HOST, { useMongoClient: true });

  // Serveur
  const app = express();
  const port = process.env.PORT
  ;

  // Dossier static
  app.set('views', __dirname + '/www');
  app.use(express.static(path.join(__dirname, 'www')));

  // Moteur de rendu
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');

  // Routes
  app.use('/users', userRoute);
  app.use('/api/auth', authRoute);
  app.use('/api/upload', uploadRoute);
  app.use('/', frontRoute);
// 


/*
Ecouter le serveur
*/
  const server = app.listen( port, () => console.log(`Express server listening on port ${port}` ) );
//