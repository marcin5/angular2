import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IMovie } from "./movie";


@Injectable()
export class MovieService {

    private _moviesUrl = 'db/movies/movies.json';

    constructor(private _http: Http){

    }

    getMovies(): Observable<IMovie[]> {
        return this._http.get(this._moviesUrl).map((response: Response) => <IMovie[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}