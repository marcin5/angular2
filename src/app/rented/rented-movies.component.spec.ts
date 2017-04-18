import { RentedMoviesComponent } from './rented-movies.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterLinkStubDirective, RouterOutletStubComponent } from '../../testing';

import { MovieService } from '../movie/movie.service';
import { Movie } from '../movie/movie';
import { Observable } from 'rxjs/Observable';

import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { RatingComponent } from '../star/star.component';

import { MovieFilterPipe } from '../pipes/movie-filter.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { AvailablePipe } from '../pipes/available.pipe';
import { RentedPipe } from '../pipes/rented.pipe';

let movies = [
    new Movie(0, 'pies', null, null, 0, null, null, false, null),
    new Movie(1, 'slon', null, null, 0, null, null, false, null),
    new Movie(2, 'kot', null, null, 0, null, null, true, null),
];

describe('RentedMoviesComponent', function () {
  let fixture: ComponentFixture<RentedMoviesComponent>;
  let de: DebugElement;
  let comp: RentedMoviesComponent;
  let el: HTMLElement;
  let movieService: MovieService;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ FormsModule, HttpModule ],
        declarations: [
            RentedMoviesComponent,
            RouterLinkStubDirective,
            RouterOutletStubComponent,
            MovieFilterPipe,
            SortPipe,
            AvailablePipe,
            RentedPipe,
            RatingComponent
        ],
        providers: [
            MovieService
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
        fixture = TestBed.createComponent(RentedMoviesComponent);
        comp = fixture.componentInstance;
        movieService = fixture.debugElement.injector.get(MovieService);
        spy = spyOn(movieService, 'getMovies').and.returnValue(Observable.of(movies));
  });

  it('should show table', () => {
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('tbody'));
        el = de.nativeElement;
        expect(el).toBeDefined();
  });

  it('should show only rented movies', () => {
        fixture.detectChanges();
        let de2 = fixture.debugElement.queryAll(By.css('tr'));
        let tableRows = new Array();
        de2.forEach(tableRow => {
            tableRows.push(tableRow.nativeElement);
        });
        expect(tableRows.length - 1).toEqual(2);
  });

});
