import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/models/movie';
import { environment } from 'src/environments/environment';
import { Genres } from '../models/genres.interface';
import { Favorites } from '../models/favorites.favorites';
import { AuthGuard } from '../auth/auth.guard';
import { User } from '../models/user';
import { AuthData } from '../auth/auth-data.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  baseUrl = environment.baseURL;

  constructor(private http: HttpClient) {}

  recuperaFilms() {
    return this.http.get<Movie[]>('http://localhost:4201/movies-popular');
  }

  recuperaGeneri() {
    return this.http.get<Genres[]>(`${this.baseUrl}genres`)
  }

  favorites() {
    return this.http.get<Favorites[]>(`${this.baseUrl}favorites`)
  }

  recuperaUserId():number | null {
    const recuperoId = localStorage.getItem('users');
    if (recuperoId) {
      const datiUser: AuthData = JSON.parse(recuperoId);
      return datiUser.user.id
    } else {
      alert("Non esiste alcun profilo");
      return null
    }
  }
}
