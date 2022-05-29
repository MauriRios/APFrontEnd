import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  experiencia: Experiencia = new Experiencia(0, '', '', '', '');


  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Actualizar(experiencia: Experiencia) {
    this.experienciaService.editExperiencia(experiencia).subscribe((data) => {
      this.experiencia = data;
      alert('Se Actualizo con Exito...!!!');

    console.log(this.experiencia);

    });
    
  }

  Editar(): void {
    let id = localStorage.getItem("id");
    this.experienciaService.getExperiencia(+id).subscribe((data) => {
      this.experiencia = data;
    });
  }

}
