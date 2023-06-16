import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/Services/movie.service';
import { Favorites } from 'src/app/models/favorites.favorites';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthData } from 'src/app/auth/auth-data.interface';

@Component({
  selector: 'app-prodotti',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = []
  favorites: Favorites[] = []
  utente: AuthData | null = null;

  constructor(private authSrv: AuthService, private movieSrv: MovieService, private http:HttpClient) {}

  ngOnInit(): void {
    //Recupero metodo dal service per vedere a schermo i film
    this.movieSrv.recuperaFilms().subscribe((favMovies: Movie[]) => {
      this.movies = favMovies;
      console.log(favMovies);
    });

    this.authSrv.user$.subscribe((utente) => {
      this.utente = utente;
      if (this.utente) {
        this.recuperaFavoritiUtente(this.utente.user.id);
      }
    });

  }

//Recupero tutti i film favoriti
recuperaFavoritiUtente(userId: number): void {
  this.movieSrv.recuperaFavorites(userId).subscribe((prefe: Favorites[]) => {
    this.favorites = prefe;
    console.log("Favorite movies:",this.favorites);

  });
}
//Aggiungo il film ai favoriti
aggiungiFavorite(film: Movie): void {
  if (this.utente) {
    const favorito: Favorites = {
      id: 0,
      userId: this.utente.user.id,
      movieId: film.id,
    };

    this.movieSrv.addFav(favorito).subscribe(() => {
      this.recuperaFavoritiUtente(this.utente!.user.id);
    });

    console.log("Favorite movie added:", favorito);
  }
}

rimuoviFavorite(film: Movie): void {

  if (this.utente) {

    const favoritoId = this.getFavoritoId(film);

    if (favoritoId) {

      this.movieSrv.removefav(favoritoId).subscribe(() => {

        this.recuperaFavoritiUtente(this.utente!.user.id);

      });
    }
    console.log("film preferito eliminato con successo", film.id, film.title);
  }
}
//metodo per verificare se il film è tra i preferiti dell' utente
isFavorite(film: Movie): boolean {
  return this.favorites.some((m) => m.movieId === film.id);
}


getFavoritoId(film: Movie): number | undefined {
  const favorito = this.favorites.find((f) => f.movieId === film.id);
  console.log(favorito?.id)
  return favorito?.id;
}

}
