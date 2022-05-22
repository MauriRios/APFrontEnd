import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

 experiencia2: experiencia = new experiencia(0,"","","","");
 experiencia: experiencia [] = [];
  
 

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(data => {this.experiencia = data})
   
  }

  Agregar(experiencia2: experiencia){
    this.experienciaService.createExperiencia(experiencia2).subscribe(data => {alert("Se creo piola")})


      console.log(experiencia)

  }

  Eliminar(id:number){
    console.log(id);
    this.experienciaService.deletePorId(id).subscribe(data=> {alert("Se creo piola")});
  }



  }


