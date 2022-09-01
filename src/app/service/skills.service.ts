import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = 'https://backmiportfolio.herokuapp.com/skill/';
  //URL2 = 'https://localhost:8080/'
  

  constructor(private http:HttpClient) { }

  
  public getSkill(): Observable<Skill[]>  {
    return this.http.get<Skill[]>(this.URL + 'traer');
  }
  public getSkillId(id: any): Observable<Skill> {
    return this.http.get<Skill>(this.URL + 'traer/' + id);
  }
  public addSkill(skill: Skill) {
    return this.http.post<Skill>(this.URL + 'crear', skill);
  }

  public deleteSkill(id: any) {
    return this.http.delete<Skill>(this.URL + 'borrar/' + id);
  }

  public updateSkill(skill: Skill) {
    return this.http.put<Skill>(this.URL + 'editar/'+ skill.id, skill)
  }
}