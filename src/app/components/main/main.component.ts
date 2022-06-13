import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/service/experiencia.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  


  constructor(private experienciaService: ExperienciaService,
              
    ) { }

  ngOnInit(): void {
  }


}
