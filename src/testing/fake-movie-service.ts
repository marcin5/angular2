import {Observable} from "rxjs/Observable";
import {Movie} from "../app/movie/movie";

export class FakeMovieService {

  getMovie(id: number): Observable<Movie> {
    return Observable.of(new Movie(0, 'pies', null, null, 0, null, null, false, null));
  }

  getMovies(): Observable<Movie[]> {
    return Observable.of([new Movie(0, 'pies', null, null, 0, null, null, false, null)]);
  }

  rent(movie: Movie): Promise<Movie> {
    return new Promise(function (resolve) { });
  }

  returnMovie(movie: Movie): Promise<Movie>  {
    return new Promise(function (resolve) { });
  }

  update(movie: Movie): Promise<Movie>  {
    return new Promise(function (resolve) { });
  }

  create(movie: Movie): Promise<Movie>  {
    return new Promise(function (resolve) { });
  }
}