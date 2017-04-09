import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieFilterPipe } from './movies/movie-filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './star/rating.component';
import { SortPipe } from './movies/sort.pipe';
import { MovieDetailComponent } from './movies/movie-detail.component';
import { RentedMoviesComponent } from './rented/rented-movies.component';
import { AvailablePipe } from './movies/available.pipe';
import { RentedPipe } from './movies/rented.pipe';
import { MovieDetailGuard } from './movies/movie-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    RouterModule.forRoot([
      { path: 'movies', component: MoviesListComponent },
      { path: 'movie/:movieId',
        canActivate: [MovieDetailGuard],
        component: MovieDetailComponent },
      { path: 'rented', component: RentedMoviesComponent },
      { path: '', redirectTo: 'movies', pathMatch: 'full' },
      { path: '**', redirectTo: 'movies', pathMatch: 'full' }
    ])
 ],
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieFilterPipe,
    RatingComponent,
    SortPipe,
    MovieDetailComponent,
    RentedMoviesComponent,
    AvailablePipe,
    RentedPipe
  ],
  providers: [ MovieDetailGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
