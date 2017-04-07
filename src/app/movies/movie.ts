export interface IMovie{
    movieId: number;
    movieTitle: string;
    description: string;
    price: number;
    rentDate: string;
    starRating: number;
    imageUrl: string;
}

export class Movie implements IMovie{
    constructor(public movieId: number,
                public movieTitle: string,
                public description: string,
                public price: number,
                public rentDate: string,
                public starRating: number,
                public imageUrl: string) {

    }

    calculateFee(percent: number): number {
        return this.price -(this.price * percent / 100);
    }
}