import {Component, Input} from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'rating',
  templateUrl: 'app/star/rating.component.html',
  providers: [NgbRatingConfig],
  styles: [`   
    .star {
      position: relative;  
      display: inline-block;
      font-size: 2rem;
      color: grey;
    }
    .full {
      color: red;
    }
    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: red;
    }
  `]
})
export class RatingComponent {
  @Input() rating: number;
  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
}
