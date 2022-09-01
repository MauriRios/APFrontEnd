import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[];
  closeResult: string;
  editForm: FormGroup;
  private deleteId: number;
  isAdmin = false;
  roles: string[];


  constructor(config: NgbModalConfig, 
    private proyectosService : ProyectosService,
    private tokenService : TokenService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    public httpClient:HttpClient) {
    
    config.backdrop = 'static';
    config.keyboard = false;
  }

  

  ngOnInit(): void {
    this.getProyectos();
    this.editForm = this.fb.group({
      id: [''],
      tituloProyecto: [''],
      descripcionProyecto: [''],
    }),

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  // Traer lista de proyectos
  getProyectos(){
    this.proyectosService.getProyectos()
    .subscribe(data => (this.proyectos = data));
    
  }

  //Abrir modal de agregar
  onAgregar(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  //Metodo enviar formulario de agregar
  onSubmit(f: NgForm) {
    // console.log(f.form.value);
    this.proyectosService.addProyecto(f.value)
      .subscribe((result) => {
        this.ngOnInit(); // recarga la tabla
      });
    this.modalService.dismissAll(); // cierra el modal
  }

  //Abre modal de editar
  openEdit(targetModal, proyecto:Proyecto) {
    this.modalService.open(targetModal, {
      centered: true, 
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      id: proyecto.id,
      tituloProyecto: proyecto.tituloProyecto,
      descripcionProyecto: proyecto.descripcionProyecto,
    });
  }

    //Guarda lo editado
  onSave() {
  this.proyectosService.updateProyecto(this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

  //Abre modal de eliminar
  openDelete(targetModal, proyecto:Proyecto) {
    this.deleteId = proyecto.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

    //Borra
  onDelete(): void {
    this.proyectosService.deleteProyecto(this.deleteId)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

//Metodo para cerrar el modal con esc y click fuera del modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
}
