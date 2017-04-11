import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Movie } from './../movie/movie';
import { MovieService } from './../movie/movie.service';
import { Subscription } from 'rxjs/Subscription';
import { Location }from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: 'app/movies/movie-detail.component.html',
    styles: [`
    h3{
        padding: 10px;
    }

    .panel-footer{
        padding: 10px;
    }
  `]
})

export class MovieDetailComponent implements OnInit {
    pageTitle: string = 'Movie Detail';
    movie: Movie;
    errorMessage: string;
    private sub: Subscription;
    selectedMovie: Movie;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private movieService: MovieService,
                private location: Location) {
    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.route.params
            .switchMap(() => this.movieService.getMovie(id))
            .subscribe(movie => this.movie = movie);
    }

    onBack(): void {
        this.location.back();
    }

    getMovie(id: number) {
        this.movieService.getMovie(id);
    }
}