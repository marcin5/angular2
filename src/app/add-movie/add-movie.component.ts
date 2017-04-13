import {Component, OnInit, EventEmitter, Output, OnChanges, Input } from '@angular/core';

import { MovieService } from './../movie/movie.service';
import { Movie } from './../movie/movie';
import { NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html'
})
export class AddMovieComponent implements OnInit, OnChanges {
    @Input() name: string;
    movie: Movie;

    constructor(private movieService: MovieService,
                public activeModal: NgbActiveModal) {}

    save(movie: Movie): void {
        this.movieService.create(movie);
    }

    ngOnInit(): void {
        this.movie = new Movie(0, null, null, null, 0, null, null, true);
    }

    ngOnChanges(): void {
        this.movie = new Movie(0, null, null, null, 0, null, null, true);
    }
}
