import { IPlanet } from './../types';
import { PlanetsService } from './../planets.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css'],
})
export class PlanetDetailsComponent implements OnInit {
  planet: IPlanet;

  constructor(
    private planetsService: PlanetsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.planetsService.getPlanet(id).subscribe((planet) => {
      this.planet = planet;
    });
  }
}
