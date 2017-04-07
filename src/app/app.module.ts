import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieFilterPipe } from './movies/movie-filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './star/rating.component';
import { SortPipe } from './movies/sort.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule
 ],
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieFilterPipe,
    RatingComponent,
    SortPipe,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
