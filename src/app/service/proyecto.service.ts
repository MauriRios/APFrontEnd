import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'https://backmiportfolio.herokuapp.com/proyecto/' 
  
  //'http://localhost:8080/proyecto/';

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.URL+'traer');
  }
}
