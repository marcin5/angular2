import { PipeTransform, Pipe } from '@angular/core';
import { IMovie } from './movie';

@Pipe({
    name: 'available'
})

export class AvailablePipe implements PipeTransform {
    transform(value: IMovie[]): IMovie[] {
        let filterBy = true;
        return filterBy ? value.filter((movie: IMovie) =>
            movie.available === filterBy) : value;
    }
}