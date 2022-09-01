import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'https://backmiportfolio.herokuapp.com/educacion/';
  //URL2 = 'https://localhost:8080/'

  
  constructor(private http: HttpClient) { }


  public getEducacion(): Observable<Educacion[]>  {
    return this.http.get<Educacion[]>(this.URL + 'traer');
  }

  public getEducacionId(id: any): Observable<Educacion> {
    return this.http.get<Educacion>(this.URL + 'traer/' + id);
  }
  public addEducacion(educacion: Educacion) {
    return this.http.post<Educacion>(this.URL + 'crear', educacion);
  }

  public deleteEducacion(id: any) {
    return this.http.delete<Educacion>(this.URL + 'borrar/' + id);
  }

  public updateEducacion(educacion: Educacion) {
    return this.http.put<Educacion>(this.URL + 'editar/'+ educacion.id,educacion)
  }

}