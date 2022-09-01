import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {

  base64: String
  experiencias: Experiencia[];
  closeResult: string;
  editForm: FormGroup;
  private deleteId: number;
  roles: string[];
  isAdmin = false;


  constructor(config: NgbModalConfig,
    private experienciaService:ExperienciaService,
    private tokenService : TokenService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    public httpClient:HttpClient,
    private sanitizer: DomSanitizer) {

    config.backdrop = 'static';
    config.keyboard = false;
    
  }

  ngOnInit(): void {
    this.getExperiencias();
    this.editForm = this.fb.group({
      id: [''],
      empresa: [''],
      puesto: [''],
      periodoTrabajado: [''],
      img: [''],
    }),

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }


  onFileChanged(e:any):void {
    this.base64 = e[0].base64;
    this.editForm.value.img = this.base64;
  }

  //Traer lista experiencias
  getExperiencias(){
    this.experienciaService.getExperiencia()
    .subscribe(data => (this.experiencias = data));
    
  }

  //Abrir modal de agregar
  onAgregar(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    .result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  //Metodo enviar formulario de agregar
  onSubmit(f: NgForm) {
    f.form.value.img = this.base64;
    //console.log(f.form.value);
    this.experienciaService.addExperiencia(f.value)
      .subscribe((result) => {
        this.ngOnInit(); // recarga la tabla
      });
      f.form.value.img = this.base64 = '';
    this.modalService.dismissAll(); // cierra el modal
  }

  //Abre modal de editar
  openEdit(targetModal, experiencia:Experiencia) {
    this.modalService.open(targetModal, {
      centered: true,   //Setea las propiedades del modal
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( { //Rellena los valores del formulario
      id: experiencia.id,
      empresa: experiencia.empresa,
      puesto: experiencia.puesto,
      periodoTrabajado: experiencia.periodoTrabajado,
      img: experiencia.img
    });
  }

  //Guarda lo editado
  onSave() {
    this.experienciaService.updateExperiencia(this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

//Abre modal de eliminar
  openDelete(targetModal, experiencia:Experiencia) {
    this.deleteId = experiencia.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  //Borra
  onDelete() {
    this.experienciaService.deleteExperiencia(this.deleteId)
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
