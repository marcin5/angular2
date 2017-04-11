import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NgbdModalComponent, NgbdModalContent } from './add/add-movie.component';
import { JsonpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data/in-memory-data.service';
import { CommonModule } from '@angular/common';
import { MovieService } from './movie/movie.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    NgbModule.forRoot(),
    AppRoutingModule
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
    RentedPipe,
    NgbdModalComponent,
    NgbdModalContent
  ],
  entryComponents: [NgbdModalContent],
  providers: [ MovieService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
