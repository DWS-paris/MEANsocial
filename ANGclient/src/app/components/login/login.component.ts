/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';

  // Import des modules
  import { AuthService } from '../../services/auth/auth.service';
  import { UserLoginModel } from '../../models/user.login';
  import { LoginFormModel } from '../../models/login.form';

  // Définition du composant
  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [ AuthService ]
  })
// 


/*
Export du composant
*/
  export class LoginComponent implements OnInit {
    // Configuration du constructeur
    constructor( 
      private myService: AuthService,
      private router: Router
    ) {};

    // Définition des variables
    public userLoginObject: UserLoginModel = { email: null, password: null };
    public errorMsg: LoginFormModel = { errors: 0, email: false, password: false, invalidUser: false, invalidPassword: false };
    
    

    // Création d'une fonction pour connecter l'utilisateur
    public submitLogUser(): void{
      // Vider les erreurs
      this.errorMsg.errors = 0;

      // Vérification des informations saisies
      if( this.userLoginObject.email == null || this.userLoginObject.email.length == 0){
        // Email manquant
        this.errorMsg.email = true;
        this.errorMsg.errors++;
      }
      
      if( this.userLoginObject.password == null || this.userLoginObject.password.length == 0){
        // Password manquant
        this.errorMsg.password = true;
        this.errorMsg.errors++;
      }
      
      if(this.errorMsg.errors === 0){ 
        // => Formulaire validé
        this.myService.userLogin(this.userLoginObject).then(user => {
          localStorage.setItem('DWStoken', user.token);
          this.router.navigateByUrl('/dashboard');
          
        }).catch(error => {
          if(error.status === 404){
            // Utilisateur inconnu
            this.errorMsg.invalidUser = true;

          } else if(error.status === 401){
            // Mot de passe invalide
            this.errorMsg.invalidPassword = true;

          }
        })
      }
    }


    ngOnInit() {}

  }
// 