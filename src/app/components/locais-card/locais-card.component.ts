import { Component, Input, OnInit } from '@angular/core';
import { locaisApiModel } from 'src/app/services/locais-api-model';

@Component({
  selector: 'app-locais-card',
  templateUrl: './locais-card.component.html',
  styleUrls: ['./locais-card.component.css']
})
export class LocaisCardComponent implements OnInit {

  @Input() locais: locaisApiModel | undefined; //

  constructor() { }

  ngOnInit(): void {
  }

}
