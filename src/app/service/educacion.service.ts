import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'https://backmiportfolio.herokuapp.com/educacion/' 
  //'http://localhost:8080/educacion/';

  constructor(private http: HttpClient) { }

  public getEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.URL+ 'traer');
  }
  public getEducacion(id: number) {
    return this.http.get<Educacion>(this.URL + '' + id);
  }

  public createEducacion(educacion: Educacion) {
    return this.http.post<Educacion>(this.URL + 'crear/', educacion);
  }

  public deleteEducacion(educacion: Educacion) {
    return this.http.delete<Educacion>(this.URL + 'borrar/' + educacion.id);
  }

  public editEducacion(educacion: Educacion) {
    return this.http.put<Educacion>(this.URL + 'editar/' + educacion.id,educacion);
  }

}
