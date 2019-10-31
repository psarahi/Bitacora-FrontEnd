import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from './Registrar.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Registrar',
      urls: [
        { title: 'Registrar', url: '/Registrar' },
        { title: 'Registrar' }
      ]
    },
    component: RegistrarComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [RegistrarComponent],
  providers: []
})
export class RegistrarModule { }

