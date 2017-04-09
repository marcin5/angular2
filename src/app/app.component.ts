import { Component } from '@angular/core';
import { MovieService } from './movies/movie.service';

@Component ({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-toggleable-md navbar-light '>
            
                <span id='homeImg'><img src='app/media/images/home.png'/></span>
                
                <div class='navbar-nav'>
                    <li><a class="nav-item nav-link active" [routerLink]="['/movies']">Available Movies</a></li>
                    <li><a class="nav-item nav-link" [routerLink]="['/rented']">Rented Movies</a></li>
                </div>
                
           
        </nav>
        <div id='title' class="nav-item float-right">{{pageTitle}}</div>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    providers: [MovieService]
})
export class AppComponent {
    pageTitle: string = 'VHS rental store';
}
