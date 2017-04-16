import { MoviesListComponent } from './movies-list.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppModule } from "../app.module";
import { RouterLinkStubDirective, RouterOutletStubComponent,
     ActivatedRoute, ActivatedRouteStub, click, newEvent, Router, RouterStub, } from '../../testing';

import { MovieService } from "../movie/movie.service";
import { Movie } from "../movie/movie";
import { Observable } from "rxjs/Observable";

import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { RatingComponent } from '../star/star.component';

import { MovieFilterPipe } from '../pipes/movie-filter.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { AvailablePipe } from '../pipes/available.pipe';
import { RentedPipe } from '../pipes/rented.pipe';


let movies = [
    new Movie(0, 'pies', null, null, 0, null, null, true, null),
    new Movie(1, 'slon', null, null, 0, null, null, true, null),
    new Movie(2, 'kot', null, null, 0, null, null, true, null),
    new Movie(3, 'dinozar', null, null, 0, null, null, true, null),
    new Movie(4, 'okon', null, null, 0, null, null, true, null),
];

describe('MoviesListComponent', function () {
  let fixture: ComponentFixture<MoviesListComponent>;
  let de: DebugElement;
  let comp: MoviesListComponent;
  let el: HTMLElement;
  let movieService: MovieService;
  let spy: jasmine.Spy;

  let movieServiceStub = {
        getMovies() {
            return Observable.of(movies);
        }
    };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ FormsModule, HttpModule ],
        declarations: [
            MoviesListComponent,
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
    fixture = TestBed.createComponent(MoviesListComponent);
    comp = fixture.componentInstance;
    movieService = fixture.debugElement.injector.get(MovieService);
    spy = spyOn(movieService, 'getMovies')
                .and.returnValue(Observable.of(movies));
  });

  it('should create component', () => {
    expect(comp).toBeDefined();
  });

  it('should show movies list', () => {
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('tbody'));
        el = de.nativeElement;
        expect(el).toBeDefined();
  });

});
