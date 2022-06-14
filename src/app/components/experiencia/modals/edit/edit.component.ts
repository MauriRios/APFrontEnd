import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() experiencia: Experiencia = {
    empresa: '',
    puesto: '',
    periodoTrabajado: '',
    img: ''
  }

  get experiencias(): Experiencia[] {
    return this.experienciaService.experiencias;
  }

  constructor(private experienciaService: ExperienciaService,
              private form:FormBuilder,
              private router:Router,
    ) { }

  experienciaForm :FormGroup = this.form.group({
    empresa:['',Validators.required],
    puesto:['',Validators.required],
    periodoTrabajado:['',Validators.required],
    img:[''],
  });

  ngOnInit(): void {
    this.getId(this.experiencia);
  }
  
    getId(experiencia: Experiencia) {
      let id = localStorage.getItem("id");
      this.experienciaService.getExperiencia(+id).subscribe((data) => {
        this.experiencia = data;
      });
    }

  Actualizar(experiencia: Experiencia): void {
    this.experienciaService.editExperiencia(experiencia).subscribe((data) => {
      this.experiencia = data;
      this.router.navigate([''])
    });
  }

cancelarExp(){
  this.router.navigate(['home'])
}
}
