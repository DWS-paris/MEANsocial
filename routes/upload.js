/*
Import des composants de la route
*/
    // Class
    const express = require('express');
    const router = express.Router();
    const bodyParser = require('body-parser');
    const fileUpload = require('express-fileupload');

    // Middleware
    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(bodyParser.json());
//


/*
Définition des routes
*/
// Page Home
    router.post(['/profil-picture'], (req, res) => {
        if (!req.files) return console.log('No file');
        
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let sampleFile = req.files.sampleFile;
        
        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv('/uploads', function(err) {
            if (err) return console.log('Error move');
        
            console.log('File uploaded!');
        });
    });
//


/*
Export de la route
*/
    module.exports = router;
//