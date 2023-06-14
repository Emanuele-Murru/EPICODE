import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthData } from 'src/app/auth/auth-data.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Genres } from 'src/app/models/genres.interface';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  user: AuthData | null = null;
  genres: Genres[] | null = null;
  baseUrl = environment.baseURL;

  constructor(
    private authSrv: AuthService,
    private movieSrv: MovieService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
    };

    this.movieSrv.recuperaGeneri().subscribe((_genres: Genres[]) => {
      this.genres = _genres;
      console.log(_genres);

    });

  }


  logOut() {
    this.authSrv.logout();
  }
}
