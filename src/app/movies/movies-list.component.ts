import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
    selector: 'pm-movies',
    moduleId: module.id,
    templateUrl: 'movies-list.component.html',
    styleUrls: ['movie-list.component.css'],
    styles: [`
        a{
            text-decoration: none
        }
        td{
            vertical-align: middle;
        }
    `]
})
export class MoviesListComponent implements OnInit {
    pageTitle: string = 'Movies List';
    imageWidth: number = 70;
    listFilter: string = '';
    movies: IMovie[];
    temp: any = 'movieTitle';
    errorMessage: any;

    constructor (private _movieService: MovieService){
    }

    ngOnInit(): void {
        this._movieService.getMovies()
                .subscribe(
                    movies => this.movies = movies,
                    error => this.errorMessage = <any>error
                );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Movies List: ' + message;
    }
}