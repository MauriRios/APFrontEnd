import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { IThemeProperties } from 'src/app/themes/theme.interface';
import { ThemeService } from 'src/app/themes/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  persona: Persona = new Persona(0,"", "", "", "");
  isDefault = false;
  isLogged = false;
  isAdmin = false;
  roles: string[];
  nombreUsuario = '';

  constructor(public personaService: PersonaService,
              private tokenService: TokenService,
              private themeService: ThemeService
              ) { 
      this.changeTheme(this.themeService.getTheme())
    }

  ngOnInit(): void {
    this.personaService.getPersona()
    .subscribe(data => {this.persona = data});

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    };

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  changeTheme(name: string) {
    this.themeService.setTheme(name);
      this.isDefault = !this.isDefault
    }

  }


