import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

 experiencia: Experiencia = new Experiencia(0,"","","","");
 experiencias: Experiencia [] = [];
  
  constructor(private experienciaService: ExperienciaService,

  ) { }

  ngOnInit(): void {
    this.tomarId(this.experiencia);
    this.cargarExperiencias();
   
    // this.experienciaService.getExperiencia().subscribe(data => {this.experiencia = data})

  }

  cargarExperiencias(){
    this.experienciaService.getExperiencias().subscribe(
      data => {
        this.experiencias = data;
      });
  }

   Agregar(experiencia: Experiencia) {
    this.experienciaService.createExperiencia(experiencia).subscribe();
       alert("Experiencia creada...");
    window.location.reload( );

      console.log(Experiencia)
  }

   Eliminar(experiencias:Experiencia){     
    this.experienciaService.deleteExperiencia(experiencias).subscribe(data=>{       
           this.experiencias = this.experiencias.filter(p =>
             p !== experiencias);
                  alert("Experiencia eliminada...");    
     })

     console.log(experiencias)
             
  }

  getValue(id: number) {
    this.experiencia.id = this.experiencia.id;
    console.log(this.experiencia.id)
  }

  Editar(): void {
    let id = localStorage.getItem("id");
         this.experienciaService.getExperiencia(+id).subscribe(data=>{
         this.experiencia = data;

         console.log(id);
})
}  

Actualizar(experiencia: Experiencia){
  this.experienciaService.editExperiencia( experiencia).subscribe
  (data => { this.experiencia = data;
alert("Se Actualizo con Exito...!!!")
})

console.log(this.experiencia)
}

  tomarId(experiencia : Experiencia ): void{   
     localStorage.setItem("id", experiencia.id.toString());  
                     
       }
  }


  

  



