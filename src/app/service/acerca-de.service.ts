import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { acercaDe } from '../model/acercade.model';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  URL = 'http://localhost:8080/acercade/';

  constructor(private http: HttpClient) { }

  public getAcercaDe(): Observable<acercaDe[]>{
    return this.http.get<acercaDe[]>(this.URL+ 'traer');
  }


}
