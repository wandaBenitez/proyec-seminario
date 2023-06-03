import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { NavbarComponent } from './navbar.component'; 
import { NavbarRoutingModule } from './navbar-routing.module'; 
import { ListadoComponent } from './listado/listado.component'; 
import { FRegistroComponent } from './f-registro/f-registro.component';

@NgModule({
  declarations: [NavbarComponent, ListadoComponent, FRegistroComponent],
  imports: [BrowserModule, IonicModule.forRoot(), NavbarRoutingModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [NavbarComponent],
})
export class NavbarModule {}
