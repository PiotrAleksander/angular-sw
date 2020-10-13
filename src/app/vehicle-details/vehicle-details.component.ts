import { VehiclesService } from './../vehicles.service';
import { IVehicle } from './../types';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
})
export class VehicleDetailsComponent implements OnInit {
  vehicle: IVehicle;

  constructor(
    private vehiclesService: VehiclesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.vehiclesService.getVehicle(id).subscribe((vehicle) => {
      this.vehicle = vehicle;
    });
  }
}
