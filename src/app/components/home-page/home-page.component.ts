import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public titulo = 'SOS Mulheres';
  public descricao =
    'Você não está sozinha. Aqui você tem toda a informação e suporte que precisa para denunciar a violência contra a mulher.';

  constructor() {}

  ngOnInit(): void {}
}
