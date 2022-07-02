import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/model/skill.model';



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

  constructor(config: NgbModalConfig, 
    private modalService: NgbModal,
    private fb: FormBuilder,
    public httpClient:HttpClient) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getSkill();
    this.editForm = this.fb.group({
      id: [''],
      skill: [''],
      skillBar: [''],
    });
  }

  getSkill(){
    this.httpClient.get<any>('http://localhost:8080/skill/traer').subscribe(
      response =>{
        console.log(response);
        this.skills = response;
      }
    )
  }

  onSubmit(f: NgForm) {
    console.log(f.form.value);
    const url = 'http://localhost:8080/skill/crear';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); // reload the table
      });
    this.modalService.dismissAll(); // dismiss the modal
  }

  openEdit(targetModal, skill:Skill) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      id: skill.id,
      skill: skill.skill,
      skillBar: skill.skillBar,

    });
  }

  onSave() {
    const editURL = 'http://localhost:8080/skill/' + 'editar/'  + this.editForm.value.id ;
    this.httpClient.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

  openDelete(targetModal, skill:Skill) {
    this.deleteId = skill.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    const deleteURL = 'http://localhost:8080/skill/' +  'borrar/'+ this.deleteId ;
    this.httpClient.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }


  onAgregar(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    .result.then((result) => {
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

//   skills: Skill[];
//   skill?: Skill = new Skill(0,"","");
//   closeResult: string;
//   editForm: FormGroup;
//   private deleteId: number;
  


//   constructor(config: NgbModalConfig, 
//     private modalService: NgbModal,
//     private fb: FormBuilder,
//     private  skillService: SkillService,
//     public httpClient:HttpClient) {
  
//     config.backdrop = 'static';
//     config.keyboard = false;
//   }

  

//   ngOnInit(): void {
//     this.skillService.getSkill().subscribe(data => {this.skills = data})
//     this.editForm = this.fb.group({
//       id: [''],
//       skill: [''],
//       skillBar: [''],
      
//     });
//   }

// openSkill(targetModal: any) {
//   this.modalService.open(targetModal, {
//     centered: true,
//     backdrop: 'static',
//     size: 'lg'

//   });
// }

//   Submit(){
//     console.log(this.editForm.value);
//   }


//   guardarSkill(){
//     const url = 'http://localhost:8080/skill/crear';
//     console.log(this.editForm.value);
//     this.httpClient.post(url, this.editForm.value).subscribe(res=>{this.skills!=res,
//     this.ngOnInit();
//   })
//     this.modalService.dismissAll();
//   }
  
//   openEdit(targetModal, skill: Skill) {
//     this.modalService.open(targetModal, {
//       centered: true,
//       backdrop: 'static',
//       size: 'lg'
//     });
//     this.editForm.patchValue( {
//       id: skill.id,
//       skill: skill.skill,
//       skillBar: skill.skillBar,
//     });
//   }

//   editarSkill(){
//     console.log (this.editForm.value);
//     const editURL = 'http://localhost:8080/skill/' + 'editar/'  + this.editForm.value.id ;
//     this.httpClient.put(editURL, this.editForm.value)
//       .subscribe((results) => {
//         this.skills!= results,
//         this.ngOnInit();
        
//       });
    
//       this.modalService.dismissAll();
  
//   }

//   openDelete(targetModal, skill:Skill) {
//     this.deleteId= skill.id;
//     this.modalService.open(targetModal, {
//       backdrop: 'static',
//       size: 'lg'
//     });
//   }

//   onDelete() {
//     const deleteURL = 'http://localhost:8080/skill/' +  'borrar/'+ this.deleteId ;
//     this.httpClient.delete(deleteURL)
//       .subscribe((results) => {
//         this.ngOnInit();
//         this.modalService.dismissAll();
//       });
//   }


//   open(content) {
//     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
//     .result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }

//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return `with: ${reason}`;
//     }
//   }

}
