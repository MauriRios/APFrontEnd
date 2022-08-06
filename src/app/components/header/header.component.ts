import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

persona: Persona = new Persona(0,"", "", "", "");
isAdmin = false;
roles: string[];
URL = 'https://backmiportfolio.herokuapp.com/';
URL2 = 'https://localhost:8080/'

  constructor(public personaService: PersonaService,
              private tokenService : TokenService,) { 
    
  }

  ngOnInit(): void {
    this.cargarPersonas(),

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarPersonas(): void {
    this.personaService.getPersona().subscribe(
      data => {
        this.persona = data;
      });
  }


  Editar(persona:Persona){
    this.personaService.EditPersona( persona ).subscribe
    (data => {this.persona = data});

    // console.log( this.persona )
  }
  onFileChanged(event){
    console.log(event);
    this.persona.img = event[0].base64;
  }
}

