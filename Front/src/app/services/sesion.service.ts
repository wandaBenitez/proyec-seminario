import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@capacitor-community/http';
import { HttpResponse } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {


  constructor(private router: Router) { }

  Iniciar_Sesion = async (correo: string, contrasena: string) =>{
    const option = {
      url: 'http://localhost:3000/users/login',
      headers: { accept: 'application/json', 'Content-type': 'application/json' },
      data: { email: correo , password: contrasena }
    };

    const response: HttpResponse = await Http.post(option);
    return response;
  }

  Sesion_Iniciada(): Boolean{
    return !!localStorage.getItem('CapacitorStorage.token')
  }

  getToken(){
    return localStorage.getItem('CapacitorStorage.token')
  }

  Cerrar_Sesion(){
    localStorage.removeItem('CapacitorStorage.token');
    this.router.navigate(['/home']);
  }
}
