import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe } from '../model/acercade.model';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {


  URL = 'https://backmiportfolio.herokuapp.com/acercade/'
  // URL = 'http://localhost:8080/acercade/';

  constructor(private http: HttpClient) { }

  public getAcercaDe(): Observable<AcercaDe>{
    return this.http.get<AcercaDe>(this.URL+ 'traer/perfil');
  }
  public EditAcercaDe(acercaDe:AcercaDe){
    return this.http.put<AcercaDe>(this.URL +'editar/' + acercaDe.id, acercaDe)

  }

}
