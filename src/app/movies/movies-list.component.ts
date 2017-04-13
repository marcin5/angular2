import { Component, OnInit} from '@angular/core';
import { Movie } from './../movie/movie';
import { MovieService } from './../movie/movie.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'movies',
    templateUrl: './movies-list.component.html',
})
export class MoviesListComponent implements OnInit {
    pageTitle: string = 'Available Movies List';
    imageWidth: number = 50;
    listFilter: string = '';
    movies: Movie[];
    temp: any = 'movieTitle';
    asc: boolean = true;
    errorMessage: any;
    closeResult: string;
    selectedMovie: Movie;
    movie: Movie = new Movie(0, null, null, null, 0, null, null, true, null);

    constructor (private movieService: MovieService) {}

    ngOnInit(): void {
        this.getMovies();
    }

    refresh() {
        this.getMovies();
    }

     getMovies(): void {
        this.movieService.getMovies().subscribe(
            movies => this.movies = movies,
            error => this.errorMessage = <any>error
        );
    }

    rent(movie: Movie): void {
        this.movieService.rent(movie);
        this.refresh();
    }

    getNotification(addedMovie: Movie) {
        this.refresh();
        console.log(addedMovie);
    }

    addMovie(movie: Movie): void {
        this.movieService.create(movie);
        this.refresh();
    }

    selectMovie(movie: Movie): void {
        this.selectedMovie = movie;
    }
}