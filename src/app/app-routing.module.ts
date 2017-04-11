import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesListComponent } from './movies/movies-list.component';
import { RentedMoviesComponent } from './rented/rented-movies.component';
import { MovieDetailComponent } from './movies/movie-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies',  component: MoviesListComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'rented',  component: RentedMoviesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}