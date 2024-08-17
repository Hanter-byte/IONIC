import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../receitas.service';
import { ActivatedRoute } from '@angular/router';
import { Receita } from '../receitas.module';

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita-detalhe.page.html',
  styleUrls: ['./receita-detalhe.page.scss'],
})
export class ReceitaDetalhePage implements OnInit {
  loadedReceita: Receita | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private receitasService: ReceitasService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('receitaId')) {
        // redirect
        return;
      }
      const receitaId = paramMap.get('receitaId');
      console.log(receitaId);
      this.loadedReceita = this.receitasService.getReceita(receitaId as string);
    });
  }
}
