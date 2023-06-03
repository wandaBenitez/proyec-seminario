import { Component, OnInit } from '@angular/core';
import { SesionService } from '../services/sesion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {

  constructor(private sesionService: SesionService) { }

  ngOnInit() {}

  Cerrar(){
    this.sesionService.Cerrar_Sesion();
  }
}
