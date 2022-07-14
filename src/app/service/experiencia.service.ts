import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {


  URL = 'https://backmiportfolio.herokuapp.com/experiencia'
  // 'http://localhost:8080/experiencia';

  experiencia: Experiencia = {
    empresa: '',
    puesto: '',
    periodoTrabajado: '',
    img: ''
  }

  experiencias: Experiencia[] = [];

  constructor(private http: HttpClient,
              private router:Router,
              ) {}
  
  traerExperienciasServicio() {
  this.getExperiencias().subscribe(data => {this.experiencias = data});
  }

  addExperiencia(experiencias: Experiencia) {
    this.experiencias.push(experiencias);
  }

  getIdService(experiencia: Experiencia) {
    let id = localStorage.getItem("id");
    this.getExperiencia(+id).subscribe((data) => {
      this.experiencia = data;});
      
  }


  public getExperiencias(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.URL + '/traer');
  }

  public getExperiencia(id: number) {
    return this.http.get<Experiencia>(this.URL + '/' + id);
  }

  public createExperiencia(experiencia: Experiencia) {
    return this.http.post<Experiencia>(this.URL + '/crear/', experiencia);
  }

  public deleteExperiencia(experiencia: Experiencia) {
    return this.http.delete<Experiencia>(this.URL + '/borrar/' + experiencia.id);
  }

  public editExperiencia(experiencia: Experiencia){
    return this.http.put<Experiencia>(this.URL + 'editar/' + experiencia.id,experiencia);
  }

}
