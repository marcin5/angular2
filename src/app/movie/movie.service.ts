import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { Movie } from './movie';

@Injectable()
export class MovieService {
    private moviesUrl = 'api/movies';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getMovie(id: number): Promise<Movie> {
        const url = `${this.moviesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Movie)
            .catch(this.handleError);
    }

    getMovies(): Observable<Movie[]> {
        return this.http.get(this.moviesUrl)
            .map(response => response.json().data as Movie[])
            .catch(this.handleError);
    }
}