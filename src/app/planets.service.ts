import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IResponse, IPlanet } from './types';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  private baseUrl = 'https://swapi.dev/api/planets';

  constructor(private httpClient: HttpClient) {}

  getPlanets(): Observable<IResponse<IPlanet[]>> {
    return this.httpClient.get<IResponse<IPlanet[]>>(this.baseUrl);
  }

  getPlanet(id: string): Observable<IPlanet> {
    return this.httpClient.get<IPlanet>(`${this.baseUrl}/${id}/`);
  }
}
