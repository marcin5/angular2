import {Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styles: [`   
    .star {
      position: relative;  
      display: inline-block;
      font-size: 2rem;
      color: red;
    }
    .crop {
    overflow: hidden;
}
  `]
})
export class RatingComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 156 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}


