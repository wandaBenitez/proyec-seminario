import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
    public email ='wygamboa@unipacifico.edu.co'
    public correo: any;
    public contrasena: any;

  constructor(private ruta: Router, private sesionService: SesionService) { }

  ngOnInit() {}

  Inicio(){
    this.sesionService.Iniciar_Sesion(this.correo, this.contrasena).then(async (data)=>{
      console.log(data.data.token);
      if(data.data.token){
        await Preferences.set({
          key: 'token',
          value: data.data.token
        })
        this.ruta.navigate(['/indice/list']);
      }
    })
  }
}
