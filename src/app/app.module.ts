import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent }  from './app.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import { RatingComponent } from './star/star.component';

import { MovieDetailComponent } from './detail/movie-detail.component';
import { RentedMoviesComponent } from './rented/rented-movies.component';
import { SortPipe } from './pipes/sort.pipe';
import { AvailablePipe } from './pipes/available.pipe';
import { RentedPipe } from './pipes/rented.pipe';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data/in-memory-data.service';

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
    AppRoutingModule
 ],
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieFilterPipe,
    RatingComponent,
    MovieDetailComponent,
    RentedMoviesComponent,
    SortPipe,
    AvailablePipe,
    RentedPipe,
    RatingComponent
  ],
  providers: [ MovieService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
