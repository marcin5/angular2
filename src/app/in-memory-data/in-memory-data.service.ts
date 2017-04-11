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
            rentDate: '12.01.2013',
            imageUrl: 'app/media/images/pulp.jpg',
            gifUrl: 'app/media/gifs/pulp.gif',
            available: true
        },
        {
            id: 2,
            movieTitle: 'Dr Strangelove',
            description: 'jak pokochalem bombe',
            price: 32.99,
            starRating: 4.2,
            rentDate: '12.02.2013',
            imageUrl: 'app/media/images/dr.jpg',
            gifUrl: 'app/media/gifs/dr.gif',
            available: true
        },
        {
            id: 3,
            movieTitle: 'Forest Gump',
            description: 'Historia życia Forresta, chłopca o niskim ilorazie inteligencji',
            price: 8.9,
            starRating: 4.8,
            rentDate: '12.03.2013',
            imageUrl: 'app/media/images/forest.jpg',
            gifUrl: 'app/media/gifs/forest.gif',
            available: true
        },
        {
            id: 4,
            movieTitle: 'Natural Born Killers',
            description: 'Historia dwojga młodych kochanków-morderców.',
            price: 10.9,
            starRating: 4.3,
            rentDate: '12.04.2013',
            imageUrl: 'app/media/images/born.jpg',
            gifUrl: 'app/media/gifs/natural_born.gif',
            available: true
        },
        {
            id: 5,
            movieTitle: '2001: A Space Odyssey',
            description: 'Jeden z najwybitniejszych filmów fantastycznych w historii kina.',
            price: 15.9,
            starRating: 4.2,
            rentDate: '12.05.2013',
            imageUrl: 'app/media/images/odyssey.jpg',
            gifUrl: 'app/media/gifs/odyssey.gif',
            available: false
        },
        {
            id: 6,
            movieTitle: 'Star Wars: The Force Awakens',
            description: 'Złe Imperium zostaje zastąpione przez Najwyższy Porządek, który chce władzy nad galaktyką.',
            price: 15.9,
            starRating: 2.3,
            rentDate: '12.04.2013',
            imageUrl: 'app/media/images/star_wars.jpg',
            gifUrl: 'app/media/gifs/star_wars.gif',
            available: false
        }
    ];
        return { movies };
    }

}