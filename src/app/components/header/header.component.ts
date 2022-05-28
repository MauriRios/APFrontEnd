import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

persona: Persona = new Persona(0,"", "", "", "");

  constructor(public personaService: PersonaService,) { 
    
  }

  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas(): void {
    this.personaService.getPersona().subscribe(
      data => {
        this.persona = data;
      });
  }


  Editar(persona:Persona){
    this.personaService.EditPersona( persona ).subscribe
    (data => {this.persona = data})

    console.log( this.persona )
  }

//   Editar(persona:Persona): void{
//          localStorage.setItem("id",persona.id.toString());
//        }
 }

