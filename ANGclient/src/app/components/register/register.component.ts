/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';

  // Import des modules
  import { AuthService } from '../../services/auth/auth.service';
  import { UserRegisterModel } from '../../models/user.register';
  import { RegisterFormModel } from '../../models/register.form';

  // Définition du composant
  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    providers: [ AuthService ]
  })
// 

/*
Export du composant
*/
  export class RegisterComponent implements OnInit {
    // Configuration du constructeur
    constructor( private myService: AuthService, private router: Router ) { };

    // Définition des variables
    public userRegisterObject: UserRegisterModel = { 
      firstName: null, 
      lastName: null, 
      email: null, 
      password: null, 
      repeatePassword: null
    };

    public errorMsg: RegisterFormModel = { 
      errors: 0, 
      firstName: false, 
      lastName: false, 
      email: false, 
      password: false, 
      repeatePassword: false 
    };

    // Création d'une fonction pour enregistrer l'utilisateur
    public submitRegisterUser(): void{
      // Vider les erreurs
      this.errorMsg.errors = 0;

      // Vérification des informations saisies
      if( this.userRegisterObject.firstName == null || this.userRegisterObject.firstName.length == 0){
        // Prénom manquant
        this.errorMsg.firstName = true;
        this.errorMsg.errors++;
      }

      if( this.userRegisterObject.lastName == null || this.userRegisterObject.lastName.length == 0){
        // Nom manquant
        this.errorMsg.lastName = true;
        this.errorMsg.errors++;
      }

      if( this.userRegisterObject.email == null || this.userRegisterObject.email.length == 0){
        // Email manquant
        this.errorMsg.email = true;
        this.errorMsg.errors++;
      }
      
      if( this.userRegisterObject.password == null || this.userRegisterObject.password.length == 0){
        // Password manquant
        this.errorMsg.password = true;
        this.errorMsg.errors++;
      }

      if( this.userRegisterObject.repeatePassword == null || this.userRegisterObject.repeatePassword.length == 0){
        // repeatePassword manquant
        this.errorMsg.repeatePassword = true;
        this.errorMsg.errors++;
      }
      
      if(this.errorMsg.errors === 0){ 
        // => Formulaire validé
        this.myService.userRegister(this.userRegisterObject).then(user => {
          localStorage.setItem('DWStoken', user.token);
          this.router.navigateByUrl('/dashboard');
          
        }).catch(error => {
          console.error(error)
        })
      }
    }

    ngOnInit() {
    };

  };
// 