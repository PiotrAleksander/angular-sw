import { PlanetsService } from './../planets.service';
import { IPlanet } from './../types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {
  planets: IPlanet[];

  constructor(private planetsService: PlanetsService) {}

  ngOnInit(): void {
    this.planetsService.getPlanets().subscribe(({ results: planets }) => {
      this.planets = planets;
    });
  }
}
