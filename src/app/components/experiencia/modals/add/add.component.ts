import { Component, Input, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion.model';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  experiencia: Experiencia = new Experiencia(0, '', '', '', '');
//experiencia: Experiencia [] = []
  
  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
  }

  Agregar(experiencia: Experiencia) {
    this.experienciaService.createExperiencia(experiencia)
    .subscribe();
    alert('Experiencia creada...');
    window.location.reload();

    console.log(Experiencia);
  }
  
  // saveExperiencia(){
  //   this.experiencia.push({
  //     id: this.id, 
  //     empresa: this.empresa,
  //     puesto: this.puesto,
  //     periodoTrabajado: this.periodoTrabajado,
  //     img: this.img,
  //   }
  //   );
  //   this.experienciaService.createExperiencia( this.experiencia ).subscribe();
  //   console.log("Objeto añadido")
  // }

}
