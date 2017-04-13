export class Movie {
    constructor(
        public id: number,
        public movieTitle: string,
        public description: string,
        public price: number,
        public starRating: number,
        public imgUrl: string,
        public gifUrl: string,
        public available: boolean,
        public releaseDate: Date,
    ) {    }
}

