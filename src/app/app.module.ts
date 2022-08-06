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
import { PersonaService } from './service/persona.service';
import { AcercaDeService } from './service/acerca-de.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { interceptorProvider } from './service/interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './components/footer/footer.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';


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
    LoginComponent,
    RegistroComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AlifeFileToBase64Module
    
    
  ],
  providers: [
              PersonaService,
              AcercaDeService,
              interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
