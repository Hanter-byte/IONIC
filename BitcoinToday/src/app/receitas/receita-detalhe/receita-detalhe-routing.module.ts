import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaDetalhePage } from './receita-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitaDetalhePageRoutingModule {}
