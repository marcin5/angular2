import {Component, Input} from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieService } from './../movie/movie.service';
import { Movie } from './../movie/movie';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
        <h4 class="modal-title">Add VHS</h4>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
        <form>
            <div class="form-group">
                <input class="form-control form-control-sm" type="text" placeholder="Title" required="true" #movieTitle>
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" type="text" placeholder="Description" required="true" #description>
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" type="text" placeholder="Cover url" required="true">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" type="text" placeholder="Gif url" required="true">
            </div>
        </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary float-left" 
      (click)="true">Save</button>
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `,
  providers: [ MovieService ],
})
export class NgbdModalContent {
  @Input() name: any;
    movies: Movie[];
    selectedMovie: Movie;

  constructor(public activeModal: NgbActiveModal,
              private movieService: MovieService) {}
}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: 'app/add/add-movie.component.html'
})
export class NgbdModalComponent {
    errorMessage: any;
    closeResult: string;

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
