import { Injectable } from '@angular/core';
import { IMovie } from "./movie";


@Injectable()
export class MovieService {
    getMovies(): IMovie[] {
        return [
        {
            'movieId': 1,
            'movieTitle': 'Pulp Fiction',
            'description': 'murzyn i trawolta',
            'price': 19.95,
            'starRating': 3.6,
            'rentDate': 'kmsk',
            'imageUrl': 'app/media/images/pulp.jpg'
        },
        {
            'movieId': 2,
            'movieTitle': 'Dr Strangelove',
            'description': 'jak pokochalem bombe',
            'price': 32.99,
            'starRating': 4.2,
            'rentDate': 'kmsk',
            'imageUrl': 'app/media/images/dr.jpg'
        },
        {
            'movieId': 5,
            'movieTitle': 'Forest Gump',
            'description': 'Historia życia Forresta, chłopca o niskim ilorazie inteligencji',
            'price': 8.9,
            'starRating': 4.8,
            'rentDate': 'kmsk',
            'imageUrl': 'app/media/images/forest.jpg',
        },
    ];
    }
}