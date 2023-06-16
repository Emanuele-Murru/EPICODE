import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/models/movie';
import { environment } from 'src/environments/environment';
import { Genres } from '../models/genres.interface';
import { Favorites } from '../models/favorites.favorites';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  baseUrl = environment.baseURL;

  constructor(private http: HttpClient) {}

  recuperaFilms() {
    return this.http.get<Movie[]>('http://localhost:4201/movies-popular');
  };

  recuperaGeneri() {
    return this.http.get<Genres[]>(`${this.baseUrl}genres`);
  };

  recuperaFavorites(userId: number) {
    return this.http.get<Favorites[]>(`${this.baseUrl}favorites?userId=${userId}`);
  };

  addFav(favorite: Favorites) {
    return this.http.post<Favorites>(`${this.baseUrl}favorites`, favorite)
  }

  removefav(favoriteId:number) {
    return this.http.delete(`${this.baseUrl}favorites/${favoriteId}`);
  };

  recuperaFilmById(id: number) {
    return this.http.get<Movie[]>(`http://localhost:4201/movies-popular/${id}`);
  }

}
