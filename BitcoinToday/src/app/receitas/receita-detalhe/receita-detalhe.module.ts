import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitaDetalhePageRoutingModule } from './receita-detalhe-routing.module';

import { ReceitaDetalhePage } from './receita-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaDetalhePageRoutingModule
  ],
  declarations: [ReceitaDetalhePage]
})
export class ReceitaDetalhePageModule {}
