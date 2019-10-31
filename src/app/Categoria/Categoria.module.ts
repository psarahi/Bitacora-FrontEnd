import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './Categoria.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Categoria',
      urls: [
        { title: 'Categoria', url: '/Categoria' },
        { title: 'Categoria' }
      ]
    },
    component: CategoriaComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [CategoriaComponent],
  providers: []
})
export class CategoriaModule { }

