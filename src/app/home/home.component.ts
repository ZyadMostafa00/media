// home.component.ts
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
// import { MoviesService } from './movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPeople: any[] = [];
  searchTextMovies: string = '';
  searchTextTv: string = '';
  searchTextPeople: string = '';

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getTrending('movie').subscribe((data: any) => {
      this.trendingMovies = data.results;
    });
    this.moviesService.getTrending('tv').subscribe((data: any) => {
      this.trendingTv = data.results;
    });
    this.moviesService.getTrendingPeople().subscribe((data: any) => {
      this.trendingPeople = data.results;
    });
  }
}
