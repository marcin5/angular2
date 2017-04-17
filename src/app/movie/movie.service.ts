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

    getMovie(id: number): Observable<Movie> {
        const url = `${this.moviesUrl}/${id}`;
        return this.http.get(url)
            .map(response => response.json().data as Movie)
            .catch(this.handleError);
    }

    getMovies(): Observable<Movie[]> {
        return this.http.get(this.moviesUrl)
            .map(response => response.json().data as Movie[])
            .catch(this.handleError);
    }

    rent(movie: Movie): Promise<Movie> {
        movie.available = false;
        return this.update(movie);
    }

    returnMovie(movie: Movie): Promise<Movie> {
        movie.available = true;
        return this.update(movie);
    }

    update(movie: Movie): Promise<Movie> {
        const url = `${this.moviesUrl}/${movie.id}`;
        return this.http
            .put(url, JSON.stringify(movie), { headers: this.headers })
            .toPromise()
            .then(() => movie)
            .catch(this.handleError);
    }

    create(movie: Movie): Promise<Movie> {
        return this.http
            .post(this.moviesUrl, JSON.stringify({
                movieTitle: movie.movieTitle,
                description: movie.description,
                price: movie.price,
                starRating: movie.starRating,
                imgUrl: movie.imgUrl,
                gifUrl: movie.gifUrl,
                available: movie.available,
                releaseDate: movie.releaseDate
            }), { headers: this.headers })
            .toPromise()
            .then(response => response.json().data as Movie)
            .catch(this.handleError);
    }
}