import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/model/skill.model';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];
  closeResult: string;
  editForm: FormGroup;
  private deleteId: number;
  isAdmin = false;
  roles: string[];


  constructor(config: NgbModalConfig, 
    private skillService : SkillsService,
    private tokenService : TokenService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    public httpClient:HttpClient) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getSkill();
    this.editForm = this.fb.group({
      id: [''],
      skill: [''],
      skillBar: [''],
    }),

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

//Trae lista de skills
  getSkill(){
    this.httpClient.get<any>('https://backmiportfolio.herokuapp.com/skill/traer').subscribe(
      response =>{
        // console.log(response);
        this.skills = response;
      }
    )
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
  this.skillService.addSkill(f.value)
      .subscribe((result) => {
        this.ngOnInit();
      });
    this.modalService.dismissAll();
  }

  //Abre modal de editar
  openEdit(targetModal, skill:Skill) {
    this.modalService.open(targetModal, {
      centered: true,   //Setea las propiedades del modal
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( { //Rellena los valores del formulario
      id: skill.id,
      skill: skill.skill,
      skillBar: skill.skillBar,

    });
  }

  //Guarda lo editado
  onSave() {
    this.skillService.updateSkill(this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }
  
  //Abre modal de eliminar
  openDelete(targetModal, skill:Skill) {
    this.deleteId = skill.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

    //Borra
  onDelete() {
    this.skillService.deleteSkill(this.deleteId)
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
