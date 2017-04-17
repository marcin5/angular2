import { async, inject, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, XHRBackend, Response, ResponseOptions } from '@angular/http';

import { MovieService } from "../movie/movie.service";
import { Movie } from "../movie/movie";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const makeMovieData = () => [
    { movieTitle: "x" },
    { movieTitle: "y" },
    { movieTitle: "z" }
] as Movie[];

describe('MoviesService', function () {


  beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                MovieService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        })
            .compileComponents();
    }));

    it('should instantiate service when inject service',
        inject([MovieService], (service: MovieService) => {
            expect(service instanceof MovieService).toBe(true);
        })
    );

    it('should instantiate service with "new"', inject([Http], (http: Http) => {
        expect(http).not.toBeNull('http should be provided');
        let service = new MovieService(http);
        expect(service instanceof MovieService).toBe(true, 'service should be ok');
    }));

    it('should provide the mockBackend as XHRBackend',
        inject([XHRBackend], (backend: MockBackend) => {
            expect(backend).not.toBeNull('backend should be provided');
    }));

    describe('when getMovies', () => {
        let backend: MockBackend;
        let service: MovieService;
        let fakeMovies: Movie[];
        let response: Response;

        beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
            backend = be;
            service = new MovieService(http);
            fakeMovies = makeMovieData();
            let options = new ResponseOptions({status: 200, body: {data: fakeMovies}});
            response = new Response(options);
        }));

        it('should have set fake movies', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
            service.getMovies().subscribe(movies => {
                expect(movies.length).toBe(fakeMovies.length,
                    'should have expected movies.length');
                });
        })));
    });

});
