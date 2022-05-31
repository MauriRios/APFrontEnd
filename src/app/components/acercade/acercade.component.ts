import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/model/acercade.model';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  acercaDe: AcercaDe = new AcercaDe(0,"","");
  // acercaDes: AcercaDe [] = [];

  constructor(public acercaDeService: AcercaDeService,) { }

  ngOnInit(): void {
    this.cargarAcercaDe();
  }

  cargarAcercaDe():void {
    this.acercaDeService.getAcercaDe().subscribe(
      data => {
        this.acercaDe = data;
      });
  }

  
  Editar(acercaDe:AcercaDe){
    this.acercaDeService.EditAcercaDe( acercaDe ).subscribe
    (data => {this.acercaDe = data});

    console.log( this.acercaDe )
  }


}
