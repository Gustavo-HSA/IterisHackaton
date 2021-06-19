import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sobre-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class SobrePageComponent implements OnInit {
  public titulo = 'SOS Mulheres';
  public descricao =
    'Você não está sozinha. Aqui você tem toda a informação e suporte que precisa para denunciar a violência contra a mulher.';
  constructor() {}
  ngOnInit(): void {}
}
