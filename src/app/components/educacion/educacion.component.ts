import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  base64: string = "";
  educaciones: Educacion[];
  closeResult: string;
  editForm: FormGroup;
  private deleteId: number;
  isAdmin = false;
  roles: string[];


  constructor(config: NgbModalConfig, 
    private educacionService:EducacionService,
    private tokenService : TokenService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    public httpClient:HttpClient,
    private sanitizer: DomSanitizer) {

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    //Traer educacines y actualizar el formulario
    this.getEducaciones();
    this.editForm = this.fb.group({
      id: [''],
      titulo: [''],
      institucion: [''],
      periodoEstudio: [''],
      img: [''],
    }),


    //Metodo para saber si estas logeado como admin
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

//Metodo para ver la imagen en el modal y actualizarla
  onFileChanged(e:any):void {
    this.base64 = e[0].base64;
    this.editForm.value.img = this.base64;
  }


  //Metodo para traer las educaciones
  getEducaciones(){
    this.educacionService.getEducacion().subscribe(
      response =>{
        // console.log(response);
        this.educaciones = response;
      }
    )
  }


  //Metodo para agregar
  onSubmit(editForm: NgForm) {
    // console.log(editForm.form.value);
    const url = 'https://backmiportfolio.herokuapp.com/educacion/crear';
    this.httpClient.post(url, this.editForm.value)
      .subscribe((result) => {
        this.ngOnInit(); // reload the table
      });
    this.modalService.dismissAll(); // dismiss the modal
  }

  //Metodo para abrir el modal de editar
  openEdit(targetModal, educacion:Educacion) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      id: educacion.id,
      institucion: educacion.institucion,
      titulo: educacion.titulo,
      periodoEstudio: educacion.periodoEstudio,
      img: educacion.img,
    });
  }

  //Metodo para guardar lo editado
  onSave() {
    const editURL = 'https://backmiportfolio.herokuapp.com/educacion/' + 'editar/'  + this.editForm.value.id ;
    this.httpClient.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

  //Metodo para abrir el modal de eliminar
  openDelete(targetModal, educacion:Educacion) {
    this.deleteId = educacion.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  //Metodo Delete, Borra un registro
  onDelete() {
    const deleteURL = 'https://backmiportfolio.herokuapp.com/educacion/' +  'borrar/'+ this.deleteId ;
    this.httpClient.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

  //Metodo para abrir el modal de agregar

  onAgregar(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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

