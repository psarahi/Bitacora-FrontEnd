import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from './../api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-Categoria',
  templateUrl: './Categoria.component.html',
  styleUrls: ['./Categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _apiService: ApiService;
  categorias: any;
  modalRef: BsModalRef;


  constructor(apiService: ApiService, private modalService: BsModalService) {
    this._apiService = apiService;
    this._apiService.getAll().subscribe(data => {
      this.categorias = data;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  borrarCategoria(id) {
    this._apiService.deleteCategoria(id).toPromise().then((data: any) => {
      this.categorias.forEach((item, index) => {
        if (item.id === data.id) { this.categorias.splice(index, 1); }
      });
    });
  }

  onCreateCategoria(data) {
    console.log(data);
    this._apiService.createCategoria({ nombre: data.nombre }).toPromise().then(categoria => {
      this.categorias.push(categoria);
    });
  }

  ngOnInit() {
  }

}
