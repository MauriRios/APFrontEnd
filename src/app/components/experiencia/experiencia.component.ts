import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia = new Experiencia(0,"","","","")
  experiencias: Experiencia [] = [];
  

  constructor(private experienciaService: ExperienciaService,
              private router:Router
    ) {}

  ngOnInit(): void {
    this.cargarExperiencias();

    // this.experienciaService.getExperiencia().subscribe(data => {this.experiencia = data})
  }

  cargarExperiencias() {
    this.experienciaService.getExperiencias().subscribe((data) => {
      this.experiencias = data;
    });
    console.log(this.experiencia)

  }
  Eliminar(experiencias: Experiencia): void {
    this.experienciaService
      .deleteExperiencia(experiencias)
      .subscribe((data) => {
        this.experiencias = this.experiencias.filter((p) => p !== experiencias);
        window.location.reload
        alert('Experiencia eliminada...');
      });

    console.log(experiencias);
  }

  tomarId(experiencia: Experiencia): void {
    localStorage.setItem('id', experiencia.id.toString() ) ;
    console.log(localStorage);
    this.router.navigate(['home/editExp'])
  }

}
