import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'https://backmiportfolio.herokuapp.com/experiencia/';
  //URL2 = 'https://localhost:8080/'
  

  constructor(private http:HttpClient) { }

  
  public getExperiencia(): Observable<Experiencia[]>  {
    return this.http.get<Experiencia[]>(this.URL + 'traer');
  }
  public getExperienciaId(id: any): Observable<Experiencia> {
    return this.http.get<Experiencia>(this.URL + 'traer/' + id);
  }
  public addExperiencia(experiencia: Experiencia) {
    return this.http.post<Experiencia>(this.URL + 'crear', experiencia);
  }

  public deleteExperiencia(id: any) {
    return this.http.delete<Experiencia>(this.URL + 'borrar/' + id);
  }

  public updateExperiencia(experiencia: Experiencia) {
    return this.http.put<Experiencia>(this.URL + 'editar/'+ experiencia.id,experiencia)
  }
}