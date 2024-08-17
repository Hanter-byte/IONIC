import { Component, OnInit } from '@angular/core';
import { Receita } from './receitas.module';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {
  receitas: Receita[] = [
    {
      id: 1,
      titulo: 'Bolo de cenoura',
      imageUrl:
        'https://recipesblob.oetker.com.br/assets/70c51771234240e4bca26a7703b09716/750x910/bolo-de-cenoura-com-cobertura-de-chocolate.jpg',
      ingredientes: [
        '3 cenouras médias',
        '4 ovos',
        '1 xícara de óleo',
        '2 xícaras de açúcar',
        '2 xícaras de farinha de trigo',
        '1 colher de fermento em pó',
      ],
      data: '10/10/2020',
    },
    {
      id: 2,
      titulo: 'Bolo de chocolate',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikz9-Lmzjecg536v2yf-_GVVcJJUUAU1qDBHvwi_EztYSsa1u45Utq7nUPeNj_Xujrto',
      ingredientes: [
        '3 ovos',
        '1 xícara de óleo',
        '1 xícara de água',
        '2 xícaras de açúcar',
        '1 xícara de chocolate em pó',
        '3 xícaras de farinha de trigo',
        '1 colher de fermento em pó',
      ],
      data: '11/10/2020',
    },
    {
      id: 3,
      titulo: 'Bolo de laranja',
      imageUrl:
        'https://www.receiteria.com.br/wp-content/uploads/bolo-de-laranja-molhadinho.jpeg',
      ingredientes: [
        '3 ovos',
        '1 xícara de suco de laranja',
        '1 xícara de óleo',
        '2 xícaras de açúcar',
        '3 xícaras de farinha de trigo',
        '1 colher de fermento em pó',
      ],
      data: '12/10/2020',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
