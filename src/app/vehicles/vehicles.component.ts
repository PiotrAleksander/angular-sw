import { VehiclesService } from './../vehicles.service';
import { IVehicle } from './../types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent implements OnInit {
  vehicles: IVehicle[];

  constructor(private vehiclesService: VehiclesService) {}

  ngOnInit(): void {
    this.vehiclesService.getVehicles().subscribe(({ results: vehicles }) => {
      this.vehicles = vehicles;
    });
  }
}
