import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private Url = `https://api.themoviedb.org/3/`;
  private apiKey = 'ab3c730f3442f5c038fe06badc75b41c'; // Your API key
  private apiUrl: string = 'https://api.themoviedb.org/3';
  private apiKey2: string = 'ab3c730f3442f5c038fe06badc75b41c';

  constructor(private _HttpClient: HttpClient) { }

  getItemDetails(id: string, mediaType: string): Observable<any> {
    return this._HttpClient.get(`${this.Url}${mediaType}/${id}?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getSimilar(id: string, mediaType: string): Observable<any> {
    return this._HttpClient.get(`${this.Url}${mediaType}/${id}/similar?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getTrending(mediaType: string): Observable<any> {
    return this._HttpClient.get(`${this.Url}trending/${mediaType}/week?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getTrendingPeople(): Observable<any> {
    return this._HttpClient.get(`${this.Url}trending/person/week?api_key=${this.apiKey}`);
  }

  getTrendingPeople2(): Observable<any> {
    return this._HttpClient.get(`${this.apiUrl}/trending/person/week?api_key=${this.apiKey2}`);
  }

  getPersonDetails(personId: number): Observable<any> {
    return this._HttpClient.get(`${this.apiUrl}/person/${personId}?api_key=${this.apiKey2}`);
  }

  searchMovies(query: string): Observable<any[]> {
    return this._HttpClient.get<any[]>(`${this.Url}search/movie?api_key=${this.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
  }

  searchTvShows(query: string): Observable<any[]> {
    return this._HttpClient.get<any[]>(`${this.Url}search/tv?api_key=${this.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
  }

  searchPeople(query: string): Observable<any[]> {
    return this._HttpClient.get<any[]>(`${this.Url}search/person?api_key=${this.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
  }
}
