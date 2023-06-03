import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component'; 
import { ListadoComponent } from './listado/listado.component';
import { FRegistroComponent } from './f-registro/f-registro.component';
import { AuthGuard } from '../authentication/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'indice',
    pathMatch: 'full'
  },
  {
    path: 'indice',
    component: NavbarComponent,
    children: [
      {path: 'list', component: ListadoComponent, canActivate:[AuthGuard]},
      {path: 'factura', component: FRegistroComponent, canActivate:[AuthGuard]}
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
