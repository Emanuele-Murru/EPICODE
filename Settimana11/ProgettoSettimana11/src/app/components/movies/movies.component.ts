import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/Services/movie.service';
import { Favorites } from 'src/app/models/favorites.favorites';

@Component({
  selector: 'app-prodotti',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] | undefined;
  favorites: Favorites[] | undefined;
  preferiti: Favorites[] | undefined;

  constructor(private movieSrv: MovieService) {}

  ngOnInit(): void {
    //In questo modo peschiamo dal service il metodo 'recuperaFilm' e utilizziamo l'observable subcribe
    this.movieSrv.recuperaFilms().subscribe((movies: Movie[]) => {
      this.movies = movies;
      console.log(movies);
    });

    this.movieSrv.favorites().subscribe((_favorites: Favorites[]) => {
      this.favorites = _favorites;
      console.log(this.favorites);
    });
  }


  setFavorites(movieId: number) {

  }
}
