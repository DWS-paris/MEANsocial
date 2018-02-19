import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importer les composants
import { RegisterComponent } from './register.component';
import { Routing } from './route';

@NgModule({
  declarations: [ RegisterComponent ],
  imports: [ Routing, CommonModule, FormsModule ]
})

export class RegisterModule { };