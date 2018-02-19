
// Importer la classes pour configurer le service
import { Injectable } from '@angular/core'

// Importer les classes pour le requêtes HTTP
import { Http, Response } from '@angular/http'

// Importer le système de promise depuis rxjs
import 'rxjs/add/operator/toPromise'

// Importer l'interface UserModel
// import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {

  
  
  // Créer une variable pour l'adresse de l'API
  private apiUrl: string = '/api/admin'

  constructor(
    // Injecter une variable de type Http dans le service
    private http: Http
  ) { }

  
  // Créer une fonction pour connecter l'admin
  public userLogin(userData: any): Promise<any>{
    return this.http.get(`${this.apiUrl}/login/${userData.email}/${userData.password}`).toPromise().then(this.getDataFromApi).catch(this.handleError)
  }


  // Créer une fonction pour traiter le retour de l'API
  private getDataFromApi(res: Response){
    return res.json() || {}
  }

  // Créer une fonction pour traiter les erreurs de requête
  private handleError(err: any){
    return Promise.reject(err)
  }
}