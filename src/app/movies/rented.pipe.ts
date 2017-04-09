import { PipeTransform, Pipe } from '@angular/core';
import { IMovie } from './movie';

@Pipe({
    name: 'rented'
})

export class RentedPipe implements PipeTransform {
    transform(value: IMovie[]): IMovie[] {
        let filterBy = true;
        return filterBy ? value.filter((movie: IMovie) =>
            movie.available !== filterBy) : value;
    }
}