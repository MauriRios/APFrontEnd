import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';



  const rutas: Routes=[


    {path: '',redirectTo:'/home', pathMatch:'full'},
    {path: 'home',component: MainComponent},
    // {path: 'edit',component: EditComponent},
    // {path: 'editedu',component: EditComponent},
    // {path: 'editskills',component: EditComponent},

];

export const routing = RouterModule.forRoot(rutas);


@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
