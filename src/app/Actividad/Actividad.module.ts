import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ActividadComponent } from './Actividad.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Actividad',
      urls: [
        { title: 'Actividad', url: '/Actividad' },
        { title: 'Actividad' }
      ]
    },
    component: ActividadComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [ActividadComponent],
  providers: []
})
export class ActividadModule { }

