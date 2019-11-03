import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from './../api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
  newname: any;
  id: any = 0;

  constructor(apiService: ApiService, private modalService: BsModalService) {
    this._apiService = apiService;
    this._apiService.getAll().subscribe(data => {
      this.categorias = data;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  editModal(template: TemplateRef<any>, arrayDatos) {
    this.id = arrayDatos.id;
    this.modalRef = this.modalService.show(template);
    this.newname = arrayDatos.nombre;

  }

  borrarCategoria(id) {
    this._apiService
      .deleteCategoria(id)
      .toPromise()
      .then((data: any) => {
        this.categorias.forEach((item, index) => {
          if (item.id === data.id) {
            this.categorias.splice(index, 1);
          }
        });
      });
  }

  onCreateCategoria(data) {
    console.log(data);

    if (this.id === 0) {
      this._apiService
        .createCategoria({ nombre: data.nombre })
        .toPromise()
        .then(categoria => {
          Swal.fire('Agregado', '', 'success');
          this.categorias.push(categoria);
          this.id = 0;
        });

    } else {

      this._apiService.putCategoria(this.id, { id: +this.id, nombre: data.nombre })
        .toPromise()
        .then(categoria => {
          Swal.fire('Actualizado', '', 'success');
          debugger;
          this.categorias.forEach((item, index) => {
            if (item.id === this.id) {
              this.categorias[index] = categoria;
            }
          });
          this.id = 0;
        });
    }



  }

  ngOnInit() { }
}
