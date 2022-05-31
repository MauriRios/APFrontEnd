import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ExperienciaComponent } from '../../experiencia.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  experiencia: Experiencia = new Experiencia(0, '', '', '', '');

  constructor(private experienciaService: ExperienciaService,
              private form:FormBuilder,
              private router:Router,
    ) { }

  experienciaForm:FormGroup = this.form.group({
    empresa:['',Validators.required],
    puesto:['',Validators.required],
    periodoTrabajado:['',Validators.required],
    img:['']
  })


  ngOnInit(): void {
    this.Editar(this.experiencia)

  }

  Actualizar(experiencia: Experiencia): void {
    this.experienciaService.editExperiencia(experiencia).subscribe((data) => {
      this.experiencia = data;
      alert('Se Actualizo con Exito...!!!');
      this.router.navigate([''])
    console.log(this.experiencia);

    });

    console.log(this.experienciaForm.value)
    
  }

  Editar(experiencia: Experiencia) {
    let id = localStorage.getItem("id");
    this.experienciaService.getExperiencia(+id).subscribe((data) => {
      this.experiencia = data;
    });
  }

  

}
