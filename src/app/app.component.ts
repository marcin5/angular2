import { Component } from '@angular/core'
import { MovieService } from "./movies/movie.service";

@Component ({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
         <pm-movies> </pm-movies>
    </div>
    `,
    providers: [MovieService]
})
export class AppComponent{
    pageTitle: string = 'Movies Management';
}
