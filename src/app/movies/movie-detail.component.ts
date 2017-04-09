import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from './movie';
import { MovieService } from './movie.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: 'app/movies/movie-detail.component.html',
})

export class MovieDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Movie Detail';
    movie: IMovie;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _movieService: MovieService) {
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
        this._movieService.getMovie(id).subscribe(
            movie => this.movie = movie,
            error => this.errorMessage = <any>error);
    }
}