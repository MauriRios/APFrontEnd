import { Component, OnInit } from '@angular/core';
import { acercaDe } from 'src/app/model/acercade.model';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  //acercaDe: acercaDe = new acercaDe("", "");
  acercaDe: acercaDe [] = [];

  constructor(public acercaDeService: AcercaDeService) { }

  ngOnInit(): void {
    this.acercaDeService.getAcercaDe().subscribe(data => {this.acercaDe = data})
  }

}
