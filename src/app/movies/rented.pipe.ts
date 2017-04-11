import { PipeTransform, Pipe } from '@angular/core';
import { Movie } from './../movie/movie';

@Pipe({
    name: 'rented'
})

export class RentedPipe implements PipeTransform {
    transform(value: Movie[]): Movie[] {
        let filterBy = true;
        return filterBy ? value.filter((movie: Movie) =>
            movie.available !== filterBy) : value;
    }
}