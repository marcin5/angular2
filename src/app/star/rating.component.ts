import {Component, Input} from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'rating',
  templateUrl: 'app/star/rating.component.html',
  providers: [NgbRatingConfig]
  styles: [`
    
    .star {
      position: relative;  
      display: inline-block;
      font-size: 2rem;
      color: #d3d3d3;
    }
    .full {
      color: grey;
    }
    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: grey;
    }
  `]
})
export class RatingComponent {
  @Input() rating: number;
  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;

  }
}
