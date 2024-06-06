import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCarroComponent } from './page/crear-carro/crear-carro.component';
import { ListaCarroComponent } from './page/lista-carro/lista-carro.component';
import { ActualizarCarroComponent } from './page/actualizar-carro/actualizar-carro.component';

const routes: Routes = [ { path:"pagina/crearCarro",component:CrearCarroComponent},{ path:"pagina/listaCarro",component:ListaCarroComponent},{ path:"pagina/actualizarCarro",component:ActualizarCarroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
