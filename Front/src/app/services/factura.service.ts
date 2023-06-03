import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  APP_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  Ver_Factura(): Observable<any[]>{
    return this.http.get<any>(this.APP_URL+'/facturas');
  }

  Agregar_Factura(factura: any): Observable<any[]>{
    return this.http.post<any>(this.APP_URL+'/facturas', factura);
  }

  Eliminar_Factura(id: any): Observable<any[]>{
    return this.http.delete<any>(this.APP_URL+'/facturas/'+id);
  }

  Ver_Una_Factura(id: any): Observable<any[]>{
    return this.http.get<any>(this.APP_URL+'/facturas/'+id);
  }

  Editar_Factura(id: any, factura: any): Observable<any[]>{
    return this.http.put<any>(this.APP_URL+'/facturas/'+id, factura);
  }
}
