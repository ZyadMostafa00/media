import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  mediaType: string = '';
  item: any;
  similarMovies: any[] = [];
  people: any[] = [];

  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) {}

  ngOnInit(): void {
    const { id, media_type } = this._ActivatedRoute.snapshot.params;
    this.mediaType = media_type;

    this._MoviesService.getTrendingPeople().subscribe({
      next: response => this.people = response.results,
      error: err => console.error(err)
    });

    this._MoviesService.getItemDetails(id, media_type).subscribe({
      next: data => this.item = data,
      error: err => console.error(err)
    });

    this._MoviesService.getSimilar(id, media_type).subscribe({
      next: data => this.similarMovies = data.results.filter((item: any) => item.poster_path !== null),
      error: err => console.error(err)
    });
  }

  getSimilar(id: string, media_type: string): void {
    this._MoviesService.getSimilar(id, media_type).subscribe({
      next: data => this.similarMovies = data.results.filter((item: any) => item.poster_path !== null),
      error: err => console.error(err)
    });

    this._MoviesService.getItemDetails(id, media_type).subscribe({
      next: data => this.item = data,
      error: err => console.error(err)
    });
  }
}
