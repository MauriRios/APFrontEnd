import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';

import { ExperienciaService } from 'src/app/service/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  
  get experiencia(): Experiencia  {
    return this.experienciaService.experiencia;
  }

  get experiencias(): Experiencia[] {
    return this.experienciaService.experiencias;
  }

  constructor(private experienciaService: ExperienciaService,
              // private router:Router
    ) {}

  ngOnInit(): void {
    this.experienciaService.traerExperienciasServicio();

  }


  Eliminar(experiencias: Experiencia): void {
    this.experienciaService
      .deleteExperiencia(experiencias)
      .subscribe((data) => {
        this.experiencias.filter((e) => e !== experiencias);
        // window.location.reload
        alert('Experiencia eliminada...');
      });

    console.log(experiencias);
  }

  tomarId(experiencia: Experiencia): void {
    localStorage.setItem('id', experiencia.id.toString() ) ;
    console.log(localStorage);
    // this.router.navigate(['edit']);
    
  }

}
