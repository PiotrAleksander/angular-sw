import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { StarshipsService } from './../starships.service';
import { IStarship } from './../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css'],
})
export class StarshipDetailsComponent implements OnInit {
  starship: IStarship;

  constructor(
    private starshipsService: StarshipsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.starshipsService.getStarship(id).subscribe((starship) => {
      this.starship = starship;
    });
  }
}
