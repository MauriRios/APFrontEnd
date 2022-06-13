import { Component,  Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  constructor( private experienciaService: ExperienciaService ) { }

  @Input() experiencia: Experiencia = {
    empresa: '',
    puesto: '',
    periodoTrabajado: '',
    img: ''
  }

  ngOnInit(): void {
    
  }

  Agregar() {
    this.experienciaService.addExperiencia( this.experiencia );
    this.experienciaService.createExperiencia(this.experiencia)
    .subscribe(),
    console.log(this.experiencia);
  }
}

