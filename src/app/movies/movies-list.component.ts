import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from "./movie.service";

@Component({
    selector: 'pm-movies',
    moduleId: module.id,
    templateUrl: 'movies-list.component.html',
    styleUrls: ['movie-list.component.css']
})
export class MoviesListComponent implements OnInit {
    pageTitle: string = 'Movies List';
    imageWidth: number = 50;
    listFilter: string = '';
    movies: IMovie[];

    constructor (private _movieService: MovieService){
        
    }

    ngOnInit(): void {
        this.movies = this._movieService.getMovies();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Movies List: ' + message;
    }
}