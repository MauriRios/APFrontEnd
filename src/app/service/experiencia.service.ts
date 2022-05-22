import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'http://localhost:8080/experiencia/';

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<experiencia[]>{
    return this.http.get<experiencia[]>(this.URL + 'traer');
  }

  createExperiencia(experiencia2:experiencia){
    return this.http.post<experiencia>(this.URL + 'crear', experiencia2);
  }
  
  deletePorId(id: number){
    console.log(id);
    return this.http.delete<experiencia>(this.URL + 'borrar/' + id);

  }

}
