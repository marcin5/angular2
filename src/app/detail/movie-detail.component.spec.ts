import { MovieDetailComponent } from './movie-detail.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterLinkStubDirective, RouterOutletStubComponent } from '../../testing';

import { MovieService } from "../movie/movie.service";
import { Movie } from "../movie/movie";
import { Observable } from "rxjs/Observable";

import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { RatingComponent } from '../star/star.component';

import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import {FakeLocationStubDirective} from '../../testing/fake-location';
import {FakeRouteStubDirective} from '../../testing/fake-route';
import {FakeMovieService} from '../../testing/fake-movie-service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

describe('MoviesDetailComponent', function () {
  let fixture: ComponentFixture<MovieDetailComponent>;
  let de: DebugElement;
  let comp: MovieDetailComponent;
  let el: HTMLElement;
  let route = new FakeRouteStubDirective();
  let location = new FakeLocationStubDirective();
  let movieService = new FakeMovieService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ FormsModule, HttpModule],
        declarations: [
            MovieDetailComponent,
            RouterLinkStubDirective,
            RouterOutletStubComponent,
            RatingComponent
        ],
        providers: [
            {provide: MovieService, useValue: movieService},
            {provide: ActivatedRoute, useValue: route},
            {provide: Location, useValue: location}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(comp).toBeDefined();
  });

  it('should go back', () => {
    spyOn(location, 'back');
    comp.onBack();
    expect(location.back).toHaveBeenCalled();
  });

  it('should set movie on init', () => {
    var movie: Movie = new Movie(0, 'pies', 'sth', 1, 0, 'forest.jpg', 'forest.gif', false, new Date('1990-01-01'));
    spyOn(movieService, 'getMovie').and.returnValue(Observable.of(movie));
    comp.ngOnInit();
    expect(movieService.getMovie).toHaveBeenCalled();
    expect((comp.movie.id) === (0));
  });

});
