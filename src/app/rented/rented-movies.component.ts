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
    selectedMovie: Movie = new Movie(0, null, null, null, 0, null, null, true, null);

    damage: boolean = false;
    rewinded: boolean = false;
    delayed: boolean = false;
    cost: number;

    constructor(private movieService: MovieService,
                private router: Router) { }

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

    selectMovie(movie: Movie): void {
        this.selectedMovie = movie;
    }

    sum(damage: boolean, rewinded: boolean, delayed: boolean): Number {
        this.cost = 0;
        if (damage) {
            this.cost += 100;
        }
        if (rewinded) {
            this.cost += 10;
        }
        if (delayed) {
            this.cost += 5;
        }
        return this.cost;
    }
}
