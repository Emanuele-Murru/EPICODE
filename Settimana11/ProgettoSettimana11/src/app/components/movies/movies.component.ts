import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/Services/movie.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] | undefined;

  constructor(private movieSrv: MovieService) {}

  ngOnInit(): void {
    //In questo modo peschiamo dal service il metodo 'recuperaFilm' e utilizziamo l'observable subcribe
    this.movieSrv.recuperaFilms().subscribe((movies: Movie[]) => {
      this.movies = movies;
      console.log(movies);
    });
  }
}
