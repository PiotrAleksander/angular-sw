import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IVehicle, IResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  baseUrl = 'https://swapi.dev/api/vehicles';

  constructor(private httpClient: HttpClient) {}

  getVehicles(): Observable<IResponse<IVehicle[]>> {
    return this.httpClient.get<IResponse<IVehicle[]>>(this.baseUrl);
  }

  getVehicle(id: string): Observable<IVehicle> {
    return this.httpClient.get<IVehicle>(`${this.baseUrl}/${id}`);
  }
}
