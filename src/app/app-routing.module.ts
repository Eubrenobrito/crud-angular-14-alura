import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CriarPensamentoComponent} from "./pensamentos/criar-pensamento/criar-pensamento.component";
import {ListarPensamentoComponent} from "./pensamentos/listar-pensamento/listar-pensamento.component";
import {ExcluirPensamentoComponent} from "./pensamentos/excluir-pensamento/excluir-pensamento.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path:'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path:'listarPensamento',
    component: ListarPensamentoComponent
  },
  {
    path:'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
