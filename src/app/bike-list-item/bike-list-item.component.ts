import {Component, Input, input} from '@angular/core';
import {Bike} from "../Shared/Bike";
import {CurrencyPipe, DatePipe, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {BikeService} from "../services/bike.service";
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {BikeNameWithModelPipe} from "../customPipe/bike-name-with-model.pipe";
import {RoleColorPipe} from "../customPipe/role-color.pipe";

@Component({
  selector: 'app-bike-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    BikeNameWithModelPipe,
    NgIf,
    RoleColorPipe

  ],
  templateUrl: './bike-list-item.component.html',
  styleUrl: './bike-list-item.component.css'
})
export class BikeListItemComponent {
  @Input() bike?: Bike;


}
