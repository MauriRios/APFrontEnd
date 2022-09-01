import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'https://backmiportfolio.herokuapp.com/proyecto/';
  //URL2 = 'https://localhost:8080/'
  

  constructor(private http:HttpClient) { }

  
  public getProyectos(): Observable<Proyecto[]>  {
    return this.http.get<Proyecto[]>(this.URL + 'traer');
  }
  public getProyectoId(id: any): Observable<Proyecto> {
    return this.http.get<Proyecto>(this.URL + 'traer/' + id);
  }
  public addProyecto(proyecto: Proyecto) {
    return this.http.post<Proyecto>(this.URL + 'crear', proyecto);
  }

  public deleteProyecto(id: any) {
    return this.http.delete<Proyecto>(this.URL + 'borrar/' + id);
  }

  public updateProyecto(proyecto: Proyecto) {
    return this.http.put<Proyecto>(this.URL + 'editar/'+ proyecto.id, proyecto)
  }
}