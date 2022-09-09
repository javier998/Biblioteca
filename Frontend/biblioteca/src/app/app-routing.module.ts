import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorListarComponent } from './autor-listar/autor-listar.component';
import { AutorModificarComponent } from './autor-modificar/autor-modificar.component';
import { AutorVerComponent } from './autor-ver/autor-ver.component';

const routes: Routes = [
  {path:"", redirectTo:"autor-listar", pathMatch:"full"},
  {path:"autor-listar", component:AutorListarComponent},
  {path:"autor-ver/:id", component:AutorVerComponent},
  {path:"autor-modificar", component:AutorModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
