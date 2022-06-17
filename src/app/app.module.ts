import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { ExperienciaService } from './service/experiencia.service';
import { PersonaService } from './service/persona.service';
import { SkillService } from './service/skill.service';
import { EducacionService } from './service/educacion.service';
import { AcercaDeService } from './service/acerca-de.service';
import { ProyectoService } from './service/proyecto.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



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
    MainComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    NgbModule
  ],
  providers: [ExperienciaService,
              PersonaService,
              SkillService,
              EducacionService,
              AcercaDeService,
              ProyectoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
