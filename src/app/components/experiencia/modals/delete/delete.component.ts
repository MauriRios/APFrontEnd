import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  experiencia: Experiencia = new Experiencia(0,"","","","")
  experiencias: Experiencia[] = [];

  @Input() id: Experiencia;
  @Input() expe: Experiencia;

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    
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

}
