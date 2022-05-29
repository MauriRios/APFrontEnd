import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  experiencia: Experiencia = new Experiencia(0, '', '', '', '');

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
  }

  Agregar(experiencia: Experiencia) {
    this.experienciaService.createExperiencia(experiencia).subscribe();
    alert('Experiencia creada...');
    window.location.reload();

    console.log(Experiencia);
  }
  

}
