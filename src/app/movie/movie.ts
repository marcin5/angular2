export class Movie {
 /*   movieId: number;
    movieTitle: string;
    description: string;
    price: number;
    rentDate: string;
    starRating: number;
    imageUrl: string;
    gifUrl: string;
    available: boolean;*/

    constructor(
        public id: number,
        public movieTitle: string,
        public description: string,
        public price: number,
        public rentDate: string,
        public starRating: number,
        public imageUrl: string,
        public gifUrl: string,
        public available: boolean
    ) {    }
}

