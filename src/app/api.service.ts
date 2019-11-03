import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = environment.endpoint;
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.apiUrl + 'categoria');
  }

  getCategoriaById(id) {
    return this.http.get(this.apiUrl + 'categoria/' + id);
  }

  deleteCategoria(id) {
    return this.http.delete(this.apiUrl + 'categoria/' + id);
  }

  createCategoria(categoria: any) {
    return this.http.post(this.apiUrl + 'categoria/', categoria);
  }

  putCategoria(id: any, categoria: any) {

    return this.http.put(this.apiUrl + 'categoria/' + id, categoria);
  }

  ///////////////////////////////////////////////////////////////////

  getAllActividad() {
    return this.http.get(this.apiUrl + 'Actividad/GetAll');
  }

  GetActividadByFecha() {
    return this.http.get(this.apiUrl + 'Actividad/GetActividadByFecha');
  }

  GetActividadByFilter(fechaInicial: any, fechaFinal: any) {

    // let params = new HttpParams().set("paramName", paramValue).set("paramName2", paramValue2);
    // this.http.get(url, { headers: headers, params: params });
    return this.http.get(this.apiUrl + 'Actividad/GetActividadByFilter?fechaInicial=' + fechaInicial + '&fechaFinal=' + fechaFinal);
  }

  GetActividadById(id) {
    return this.http.get(this.apiUrl + 'Actividad/' + id);
  }

  deleteActividad(id) {
    return this.http.delete(this.apiUrl + 'Actividad/' + id);
  }

  createActividad(actividad: any) {
    return this.http.post(this.apiUrl + 'Actividad/PostActividad/', actividad);
  }

}
