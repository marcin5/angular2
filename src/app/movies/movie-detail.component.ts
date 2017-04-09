import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from './movie';

@Component({
    templateUrl: 'app/movies/movie-detail.component.html',
})

export class MovieDetailComponent implements OnInit{
    pageTitle: string = 'Movie Detail';
    movie: IMovie;

    constructor(private _route: ActivatedRoute,
                private _router: Router) {

    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['movieId'];
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/movies']);
    }
}