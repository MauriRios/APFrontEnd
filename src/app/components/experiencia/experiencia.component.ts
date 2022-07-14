import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/model/experiencia.model';
import { TokenService } from 'src/app/service/token.service';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[];
  closeResult: string;
  editForm: FormGroup;
  private deleteId: number;
  roles: string[];
  isAdmin = false;
  URL = 'https://backmiportfolio.herokuapp.com/';
  URL2 = 'https://localhost:8080/'
  

  constructor(config: NgbModalConfig,
    private tokenService : TokenService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    public httpClient:HttpClient) {
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

  getExperiencias(){
    this.httpClient.get<any>('https://backmiportfolio.herokuapp.com/experiencia/traer').subscribe(
      response =>{
        // console.log(response);
        this.experiencias = response;
      }
    )
  }

  onSubmit(f: NgForm) {
    // console.log(f.form.value);
    const url = 'https://backmiportfolio.herokuapp.com/experiencia/crear';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); // reload the table
      });
    this.modalService.dismissAll(); // dismiss the modal
  }

  openEdit(targetModal, experiencia:Experiencia) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      id: experiencia.id,
      empresa: experiencia.empresa,
      puesto: experiencia.puesto,
      periodoTrabajado: experiencia.periodoTrabajado,
      img: experiencia.img
    });
  }

  onSave() {
    const editURL = 'https://backmiportfolio.herokuapp.com/experiencia/' + 'editar/'  + this.editForm.value.id ;
    this.httpClient.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

  openDelete(targetModal, experiencia:Experiencia) {
    this.deleteId = experiencia.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    const deleteURL = 'https://backmiportfolio.herokuapp.com/experiencia/' +  'borrar/'+ this.deleteId ;
    this.httpClient.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }


  onAgregar(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

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
