import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieFilterPipe } from './movies/movie-filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './star/rating.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, NgbModule.forRoot() ],
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieFilterPipe,
    RatingComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
