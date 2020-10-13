import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { IStarship } from './../types';
import { StarshipsService } from './../starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent implements OnInit {
  starships: IStarship[];

  constructor(private starshipsService: StarshipsService) {}

  ngOnInit(): void {
    this.starshipsService.getStraships().subscribe(({ results: starships }) => {
      this.starships = starships;
    });
  }
}
