import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  APP_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  Mostrar_Producto(): Observable<any[]>{
    return this.http.get<any>(this.APP_URL+'/productos');
  }

  Agregar_Producto(producto: any): Observable<any[]>{
    return this.http.post<any>(this.APP_URL+'/productos', producto);
  }

}
