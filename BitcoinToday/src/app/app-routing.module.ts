import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'receitas', pathMatch: 'full' },
  {
    path: 'receitas',

    children: [
      {
        path: '',

        loadChildren: () =>
          import('./receitas/receitas.module').then(
            (m) => m.ReceitasPageModule
          ),
      },
      {
        path: ':receitaId',

        loadChildren: () =>
          import('./receitas/receita-detalhe/receita-detalhe.module').then(
            (m) => m.ReceitaDetalhePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
