import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion = new Educacion(0,"", "", "","");
  educaciones: Educacion [] = [];

  constructor(public educacionService: EducacionService,
              private form:FormBuilder,
              private router:Router,
    ) { }

    educacionFormEdit:FormGroup = this.form.group({
      institucion:['',Validators.required],
      titulo:['',Validators.required],
      periodoEstudio:['',Validators.required],
      img:['']
    })

  ngOnInit(): void {
    this.Editar(this.educacion)
    this.educacionService.getEducaciones().subscribe(data => {this.educaciones = data});
  }

  Actualizar(educacion: Educacion): void {
    this.educacionService.editEducacion(educacion).subscribe((data) => {
      this.educacion = data;
      alert('Se Actualizo con Exito...!!!');
      window.location.reload();
      // this.router.navigate([''])

    console.log(this.educacion);

    });

    console.log(this.educacionFormEdit.value)
    
  }

  Editar(educacion: Educacion) {
    let id = localStorage.getItem("id");
    this.educacionService.getEducacion(+id).subscribe((data) => {
      this.educacion = data;
    });
  }

  tomarId(educacion: Educacion): void {
    localStorage.setItem('id', educacion.id.toString() ) ;
    console.log(localStorage);
    // this.router.navigate(['edit'])
  }


}
