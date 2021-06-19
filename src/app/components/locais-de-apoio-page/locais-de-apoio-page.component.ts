import { Component, OnInit } from '@angular/core';
import { locaisApiModel } from 'src/app/services/locais-api-model';
import { LocaisApiService } from 'src/app/services/locais-api.service';

@Component({
  selector: 'app-locais-de-apoio-page',
  templateUrl: './locais-de-apoio-page.component.html',
  styleUrls: ['./locais-de-apoio-page.component.css']
})
export class LocaisDeApoioPageComponent implements OnInit {

  locaisDeApoio: locaisApiModel[] = [];

  constructor(public locaisApi: LocaisApiService) { }

  ngOnInit(): void {
    this.locaisApi.get().subscribe({
      next: (retornodaApi: locaisApiModel[]) => {
        this.locaisDeApoio = retornodaApi
      }
    })
  }

}
