import { Component, OnInit } from '@angular/core';
import { LeisApiModel } from 'src/app/services/leis-api-model';
import { LeisApiService } from 'src/app/services/leis-api.service';
@Component({
  selector: 'app-leis-page',
  templateUrl: './leis-page.component.html',
  styleUrls: ['./leis-page.component.css']
})
export class LeisPageComponent implements OnInit {

  leis: LeisApiModel[] = [];
  constructor(public leisApi: LeisApiService) { }

  ngOnInit(): void {
    this.leisApi.get().subscribe({
      next: (retornoDaApi: LeisApiModel[]) => {
        this.leis = retornoDaApi;
  }
  })
    
  }
}
