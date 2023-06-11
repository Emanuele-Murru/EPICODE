import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/models/movie'

@Injectable({
    providedIn: 'root',
})
export class MovieService {

    baseURL = environment.baseURL;

    constructor(private http:HttpClient) {}

    recuperaFilms() {
        return this.http.get<Movie[]>('http://localhost:4201/movies-popular');
    }

}
