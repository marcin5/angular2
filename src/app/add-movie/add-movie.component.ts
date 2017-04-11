import {Component, Input, OnInit, OnChanges} from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieService } from './../movie/movie.service';
import { Movie } from './../movie/movie';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: 'app/add-movie/add-movie.component.html',

  providers: [ MovieService ],
})
export class AddMovieContent implements OnInit, OnChanges{
  @Input() name: any;
    movies: Movie[];
    movie: Movie;

  constructor(public activeModal: NgbActiveModal,
              private movieService: MovieService) {}

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

@Component({
  selector: 'add-movie',
  template: `
  <button class="btn btn-sm btn-secondary" role="button" (click)="open()"><span class="fa fa-plus"></span>Add movie</button>
  `,
})
export class AddMovieComponent {
    errorMessage: any;
    closeResult: string;

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(AddMovieContent);
    modalRef.componentInstance.name = 'World';
  }
}
