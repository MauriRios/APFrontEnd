import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  URL = 'https://backmiportfolio.herokuapp.com/skill/' 
  //'http://localhost:8080/skill/'

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.URL + 'traer');
  }
}
