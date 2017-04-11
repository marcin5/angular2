import { PipeTransform, Pipe } from '@angular/core';
import { Movie } from './../movie/movie';

@Pipe({
    name: 'movieFilter'
})

export class MovieFilterPipe implements PipeTransform {

    transform(value: Movie[], filterBy: string): Movie[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((movie: Movie) =>
            movie.movieTitle.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}