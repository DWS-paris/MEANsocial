/*
Configuration du composants
*/
  // Import des interfaces
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

  // Importer les composants
  import { DashboardComponent } from './dashboard.component';
  import { UsercardComponent } from '../../partials/usercard/usercard.component';
  import { UploadFileComponent } from '../../partials/upload-file/upload-file.component';
  import { Routing } from './route';
// 

/*
Définition et export du module
*/
  // Définition
  @NgModule({
    declarations: [ DashboardComponent, UsercardComponent, UploadFileComponent ],
    imports: [ Routing, CommonModule, FormsModule ]
  })

  // Export
  export class DashboardModule { };
// 