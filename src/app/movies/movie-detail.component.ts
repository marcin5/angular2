import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from './../movie/movie';
import { MovieService } from './../movie/movie.service';
import { Subscription } from 'rxjs/Subscription';

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

export class MovieDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Movie Detail';
    movie: Movie;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private movieService: MovieService) {
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['movieId'];
                this.getMovie(id);
        });
    }

    onBack(): void {
        this._router.navigate(['/movies']);
    }

    getMovie(id: number) {
        this.movieService.getMovie(id);
    }
}