import {Component, Input, input} from '@angular/core';
import {Bike} from "../Shared/Bike";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-bike-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage

  ],
  templateUrl: './bike-list-item.component.html',
  styleUrl: './bike-list-item.component.css'
})
export class BikeListItemComponent {
  @Input() bike?: Bike;

}
