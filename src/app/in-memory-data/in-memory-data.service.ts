import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        let movies = [
        {
            id: 1,
            movieTitle: 'Pulp Fiction',
            description: 'murzyn i trawolta',
            price: 19.95,
            starRating: 3.6,
            imgUrl: 'pulp.jpg',
            gifUrl: 'pulp.gif',
            available: true,
            releaseDate: '1990-01-01',
        },
        {
            id: 2,
            movieTitle: 'Dr Strangelove',
            description: 'jak pokochalem bombe',
            price: 32.99,
            starRating: 4.2,
            imgUrl: 'dr.jpg',
            gifUrl: 'dr.gif',
            available: true,
            releaseDate: '1990-01-01',
        },
        {
            id: 3,
            movieTitle: 'Forest Gump',
            description: 'Historia życia Forresta, chłopca o niskim ilorazie inteligencji',
            price: 8.9,
            starRating: 4.8,
            imgUrl: 'forest.jpg',
            gifUrl: 'forest.gif',
            available: true,
            releaseDate: '1990-01-01',
        },
        {
            id: 4,
            movieTitle: 'Natural Born Killers',
            description: 'Historia dwojga młodych kochanków-morderców.',
            price: 10.9,
            starRating: 4.3,
            imgUrl: 'born.jpg',
            gifUrl: 'natural_born.gif',
            available: true,
            releaseDate: '1990-01-01',
        },
        {
            id: 5,
            movieTitle: '2001: A Space Odyssey',
            description: 'Jeden z najwybitniejszych filmów fantastycznych w historii kina.',
            price: 15.9,
            starRating: 4.2,
            imgUrl: 'odyssey.jpg',
            gifUrl: 'odyssey.gif',
            available: false,
            releaseDate: '1990-01-01',
        },
        {
            id: 6,
            movieTitle: 'Star Wars: The Force Awakens',
            description: 'Złe Imperium zostaje zastąpione przez Najwyższy Porządek, który chce władzy nad galaktyką.',
            price: 15.9,
            starRating: 2.3,
            imgUrl: 'star_wars.jpg',
            gifUrl: 'star_wars.gif',
            available: false,
            releaseDate: '1990-01-01',
        }
    ];
        return { movies };
    }

}