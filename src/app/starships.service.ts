import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IResponse, IStarship } from './types';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  baseUrl = 'https://swapi.dev/api/starships';

  constructor(private httpClient: HttpClient) {}

  getStraships(): Observable<IResponse<IStarship[]>> {
    return this.httpClient.get<IResponse<IStarship[]>>(this.baseUrl);
  }

  getStarship(id: string): Observable<IStarship> {
    return this.httpClient.get<IStarship>(`${this.baseUrl}/${id}`);
  }
}
