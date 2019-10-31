import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'

import { CategoriaComponent } from './Categoria/Categoria.component';
import { ActividadComponent } from './Actividad/Actividad.component';
import { RegistrarComponent } from './Registrar/Registrar.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'categoria',
        loadChildren: () => import('./Categoria/Categoria.module').then(mod => mod.CategoriaModule)
      },
      {
        path: 'registrar',
        loadChildren: () => import('./Registrar/Registrar.module').then(mod => mod.RegistrarModule)
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
