import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import * as moment from 'moment';
import { format } from 'util';
@Component({
  selector: 'app-Actividad',
  templateUrl: './Actividad.component.html',
  styleUrls: ['./Actividad.component.css']
})
export class ActividadComponent implements OnInit {
  // _apiService: ApiService;
  actividades: any;
  actividadesHoy: any;
  fechadia: any;
  fechaInicial: any;
  fechaFinal: any;
  constructor(private apiService: ApiService) {
    //this._apiService = apiService;

  }

  hoy() {
    this.fechadia = moment().format('YYYY-MM-DD');
    this.apiService.GetActividadByFecha().subscribe(

      (data: any) => {
        this.actividades = data.result;
        // console.log(this.actividades);
      }
    );
  }

  Mostrar() {
    this.fechadia = moment().format('YYYY-MM-DD');
    this.apiService.GetActividadByFilter(this.fechaInicial, this.fechaFinal).subscribe(

      (data: any) => {
        this.actividades = data.result;
        // console.log(this.actividades);
      }
    );
  }
  ngOnInit() {




  }

}
