import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quem-somos-page',
  templateUrl: './quem-somos-page.component.html',
  styleUrls: ['./quem-somos-page.component.css']
})
export class QuemSomosPageComponent implements OnInit {
  public titulo = 'Sobre o SOS Mulheres';
  public descricao = 'O Projeto Amazonas é uma organização sem fins lucrativos que visa dar suporte às mulheres vítimas de violência doméstica e que por algum motivo não conseguem denunciar seus agressores. Mediamos o contato entre as vítimas e instituições de apoio além de prestar informações sobre direitos da vítima em questões familiares, jurídicas, psicológicas e financeiras.';

  constructor() {}

  ngOnInit(): void {

  }

}
