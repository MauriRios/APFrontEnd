import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EditComponent } from './components/experiencia/modals/edit/edit.component';
import { MainComponent } from './components/main/main.component';



  const rutas: Routes=[

    {
      path: '',component: MainComponent
  },
    {
        path: 'edit',component: EditComponent
    },





];

export const routing = RouterModule.forRoot(rutas);


@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
