import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/model/acercade.model';
import { AcercaDeService } from 'src/app/service/acerca-de.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  acercaDe: AcercaDe = new AcercaDe(0,"","");
  isAdmin = false;
  roles: string[];

  constructor(public acercaDeService: AcercaDeService,
              private tokenService : TokenService,) { }

  ngOnInit(): void {
    this.cargarAcercaDe();
  }

  cargarAcercaDe():void {
    this.acercaDeService.getAcercaDe().subscribe(
      data => {
        this.acercaDe = data;
      }),

      this.roles = this.tokenService.getAuthorities();
      this.roles.forEach(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.isAdmin = true;
        }
      });
  }

  Editar(acercaDe:AcercaDe){
    this.acercaDeService.EditAcercaDe( acercaDe ).subscribe
    (data => {this.acercaDe = data});

    // console.log( this.acercaDe )
  }


}
