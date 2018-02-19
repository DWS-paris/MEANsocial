/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit, Input } from '@angular/core';

  // Import des modules
  import { UserRegisterModel } from '../../models/user.register';

  // Définition du composant
  @Component({
    selector: 'app-usercard',
    templateUrl: './usercard.component.html'
  })
// 


/*
Export du composant
*/
  export class UsercardComponent implements OnInit {

    @Input() singleUser: UserRegisterModel;

    constructor(  ) { };

    ngOnInit() {
      // console.log(this.singleUser);
    };

  };
//
