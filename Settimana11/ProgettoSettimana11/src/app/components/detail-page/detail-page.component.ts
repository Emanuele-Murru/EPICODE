import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  movie:any;
  movieId!:number;

  constructor(private movieSrv: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {

      this.route.params.subscribe(params => {
        this.movieId = params['id'];
        this.movieSrv.recuperaFilm(this.movieId).subscribe(movie => {
          this.movie = movie
        })
      })


  }

}
