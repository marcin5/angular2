import { Component, OnInit } from '@angular/core';
import { Movie } from './../movie/movie';
import { MovieService } from './../movie/movie.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/rented/rented-movies.component.html',
    styles: [`
    th{
        min-width: 200px!important;
    }
  `]
})
export class RentedMoviesComponent implements OnInit {
    pageTitle: string = 'Rented Movies List';
    imageWidth: number = 50;
    listFilter: string = '';
    movies: Movie[];
    asc: boolean = true;
    errorMessage: any;
    temp: any = 'movieTitle';

    constructor(
        private movieService: MovieService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getMovies();
    }

    getMovies(): void {
        this.movieService.getMovies()
            .subscribe(
                movies => this.movies = movies,
                error => this.errorMessage = <any>error
            );
    }

    returnMovie(movie: Movie): void {
        this.movieService.returnMovie(movie);
        this.refresh();
    }

    refresh() {
        this.getMovies();
    }

}
