/*
Configuration du composants
*/
  // Import des interfaces
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

  // Importer les composants
  import { LoginComponent } from './login.component';
  import { Routing } from './route';

  // Définition du module
  @NgModule({
    declarations: [ LoginComponent ],
    imports: [ FormsModule, CommonModule, Routing ]
  })
//


/*
Export du module
*/
  export class LoginModule { };
// 