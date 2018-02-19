/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit } from '@angular/core';

  // Import des modules
  import { AuthService } from '../../services/auth/auth.service';
  import { UserRegisterModel } from '../../models/user.register';
  import { FileUploadModel } from '../../models/file.upload';

  // Définition du composant
  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    providers: [ AuthService ]
  })
// 


/*
Export du composant
*/
  export class DashboardComponent implements OnInit {
    // Configuration du constructeur
    constructor( private myService: AuthService ) { };

    // Définition des varaibles
    public singleUser: UserRegisterModel;
    public singleFile: FileUploadModel;

    // Création d'une fonction pour récupérer les information sur l'utilisateur
    public getUserInfos(){
      this.myService.getUserInfos().then( infoUser => {
        this.singleUser = infoUser;
        this.singleFile = { user: infoUser._id, file: null };
        
      }).catch( error => {
        console.log(error)
      });
    };

    // Créer une fonction pour uploader un fichier
    public uploadFile(event){
      console.log(event);
    };

    ngOnInit() {
      this.getUserInfos();
    };

  };
// 