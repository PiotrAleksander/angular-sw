import { IResponse, IHero } from './types';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  baseUrl = 'https://swapi.dev/api/people';

  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<IResponse<IHero[]>> {
    return this.httpClient.get<IResponse<IHero[]>>(this.baseUrl);
  }

  getHero(id: string): Observable<IHero> {
    return this.httpClient.get<IHero>(`${this.baseUrl}/${id}/`);
  }
}
