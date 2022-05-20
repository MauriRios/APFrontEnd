import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

 // proyecto: proyecto = new proyecto("","");
proyecto: proyecto[] = [];

  constructor(public proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(data => {this.proyecto = data})
  }

}
