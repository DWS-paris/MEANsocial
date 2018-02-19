/*
Configuration du composants
*/
  // Import des interfaces
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

  // Import des modules
  import { FileUploadModel } from '../../models/file.upload';
  
  // Définition du composant
  @Component({
    selector: 'app-upload-file',
    templateUrl: './upload-file.component.html',
    styles: []
  })
// 


/*
Export du composant
*/
  export class UploadFileComponent implements OnInit {

    @Input() singleFile: FileUploadModel;
    @Output() sendFileUrl: EventEmitter<FileUploadModel> = new EventEmitter;

    constructor() { };

    public submitUploadFile(){
      console.log(this.singleFile);
      this.sendFileUrl.emit(this.singleFile);
    }

    ngOnInit() {
    };

  };
// 