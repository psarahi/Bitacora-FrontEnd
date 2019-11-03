import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from './../api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as moment from 'moment';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-Registrar',
  templateUrl: './Registrar.component.html',
  styleUrls: ['./Registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  _apiService: ApiService;
  actividades: any;
  categorias: any;
  modalRef: BsModalRef;
  fechadia: any;

  constructor(apiService: ApiService, private modalService: BsModalService) {
    this._apiService = apiService;
    this._apiService.getAllActividad().subscribe((data: any) => {

      this.actividades = data.result;
    });

    this._apiService.getAll().subscribe(data => {
      this.categorias = data;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  borrarActividad(id) {
    this._apiService.deleteActividad(id).toPromise().then((data: any) => {
      this.actividades.forEach((item, index) => {
        if (item.id === data.id) { this.actividades.splice(index, 1); }
      });
    });
  }

  abrirModal(id) {

  }
  onCreateCategoria(data) {
    this.fechadia = moment().format('YYYY-MM-DD');
    console.log(data);

    this._apiService.createActividad({
      fecha: data.fecha,
      descripcion: data.descripcion,
      categoriaId: data.categoriaId,
      horaInicial: this.fechadia + 'T' + data.horaInicial,
      horaFinal: this.fechadia + 'T' + data.horaFinal
    }).toPromise().then(actividad => {
      Swal.fire(
        'Agregado',
        '',
        'success'
      );

      this._apiService.getAllActividad().toPromise().then((data: any) => {
        this.actividades = data.result;
      });

      // this.actividades.push(actividad);


    });
  }

  ngOnInit() {


  }

}
