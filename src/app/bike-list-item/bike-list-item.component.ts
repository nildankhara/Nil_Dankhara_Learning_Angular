import {Component, Input, input} from '@angular/core';
import {Bike} from "../Shared/Bike";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {BikeService} from "../services/bike.service";
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";

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
