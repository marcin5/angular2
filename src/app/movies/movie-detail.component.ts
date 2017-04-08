import { Component } from '@angular/core';

import { IMovie } from './movie';

@Component({
    templateUrl: 'app/movies/movie-detail.component.html',
})

export class MovieDetailComponent {
    pageTitle: string = 'Movie Detail';
    movie: IMovie;
}