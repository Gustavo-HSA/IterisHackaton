import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { locaisApiModel } from './locais-api-model';
​
@Injectable({
  providedIn: 'root'
})
export class LocaisApiService {

​
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/instituicoesMulheres.json';
​
   public get(): Observable<locaisApiModel[]> {
    return this.http.get<locaisApiModel[]>(this.apiUrl);
  }
}
