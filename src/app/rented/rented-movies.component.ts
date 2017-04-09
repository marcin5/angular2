import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movies/movie';
import { MovieService } from '../movies/movie.service';

@Component({
    templateUrl: 'app/rented/rented-movies.component.html',
    styles: [`
        a{
            text-decoration: none
        }
        td{
            vertical-align: middle;
        }
        
    `]
})
export class RentedMoviesComponent implements OnInit {
    pageTitle: string = 'Rented';
    imageWidth: number = 70;
    listFilter: string = '';
    movies: IMovie[];
    asc: boolean = true;
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

    
}
