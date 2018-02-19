/*
Import des composants du service
*/
  // Import des interfaces
  import { Injectable } from '@angular/core';
  import { Http, Response } from '@angular/http';
  import { Headers } from '@angular/http';
  import 'rxjs/add/operator/toPromise';

  // Import des modules
  import { UserLoginModel } from '../../models/user.login';
  import { UserRegisterModel } from '../../models/user.register';
// 


/*
Définition et export du service
*/
  @Injectable()
  export class AuthService {

    // Créer une variable pour l'adresse de l'API
    private apiUrl: string = '/api/auth';

    constructor(
      // Injecter une variable de type Http dans le service
      private http: Http
    ) {};

    
    // Créer une fonction pour connecter l'utilistateur
    public userLogin(userData: UserLoginModel): Promise<any>{
      // Définition du header de la requête
      let myHeader = new Headers();
      myHeader.append('Content-Type', 'application/json');

      return this.http.post(`${this.apiUrl}/login`, userData, { headers: myHeader }).toPromise().then(this.getData).catch(this.handleError);
    };

    // Créer une fonction pour connecter l'utilistateur
    public userRegister(userData: UserRegisterModel): Promise<any>{
      // Définition du header de la requête
      let myHeader = new Headers();
      myHeader.append('Content-Type', 'application/json');

      return this.http.post(`${this.apiUrl}/register`, userData, { headers: myHeader }).toPromise().then(this.getData).catch(this.handleError);
    };

    // Créer une fonction afficher les informations de l'utilistateur
    public getUserInfos(): Promise<any>{
      // Définition du header de la requête
      let myHeader = new Headers();
      const userToken = localStorage.getItem('DWStoken');
      myHeader.append('x-access-token', userToken);

      return this.http.get(`${this.apiUrl}/me`, { headers: myHeader }).toPromise().then(this.getData).catch(this.handleError);
    };


    // Créer une fonction pour traiter le retour de l'API
    private getData(res: Response){
      return res.json() || {};
    };

    // Créer une fonction pour traiter les erreurs de requête
    private handleError(err: any){
      return Promise.reject(err);
    };
  };
// 