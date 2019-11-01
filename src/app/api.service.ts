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

  getCategoriaById(id){
    return this.http.get(this.apiUrl + 'categoria/' + id);
  }

  deleteCategoria(id){
    return this.http.delete(this.apiUrl + 'categoria/' + id);
  }

  createCategoria(categoria: any) {
    return this.http.post(this.apiUrl + 'categoria/', categoria);
  }
}
