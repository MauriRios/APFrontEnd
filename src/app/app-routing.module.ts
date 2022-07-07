import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';

import { MainComponent } from './components/main/main.component';



  const rutas: Routes=[


    {path: '',redirectTo:'/home', pathMatch:'full'},
    {path: 'home',component: MainComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent}

];

export const routing = RouterModule.forRoot(rutas);


@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
