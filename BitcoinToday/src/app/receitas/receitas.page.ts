import { Component, OnInit } from '@angular/core';
import { ReceitasService } from './receitas.service';
import { Receita } from './receitas.module';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {
  receitas: Receita[] | undefined;

  constructor(private receitasService: ReceitasService) {}

  ngOnInit() {
    this.receitas = this.receitasService.getAllReceitas();
  }
}
