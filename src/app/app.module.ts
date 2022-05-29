import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './components/experiencia/modals/edit/edit.component';
import { AddComponent } from './components/experiencia/modals/add/add.component';
import { DeleteComponent } from './components/experiencia/modals/delete/delete.component'; 


@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    HeaderComponent,
    NavbarComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    SkillsComponent,
    EditComponent,
    AddComponent,
    DeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
