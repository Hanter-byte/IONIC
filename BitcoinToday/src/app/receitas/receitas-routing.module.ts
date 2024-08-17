import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitasPage } from './receitas.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitasPage
  },
  {
    path: 'receita-detalhe',
    loadChildren: () => import('./receita-detalhe/receita-detalhe.module').then( m => m.ReceitaDetalhePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitasPageRoutingModule {}
