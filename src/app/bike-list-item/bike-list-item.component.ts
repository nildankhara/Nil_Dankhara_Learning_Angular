import {Component, Input, input} from '@angular/core';
import {Bike} from "../Shared/Bike";
import {CurrencyPipe, DatePipe, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {BikeNameWithModelPipe} from "../customPipe/bike-name-with-model.pipe";
import {RoleColorPipe} from "../customPipe/role-color.pipe";
import {HoverHighlightDirective} from "../directive/hover-highlight.directive";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-bike-list-item',
  standalone: true,
  imports: [
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    NgOptimizedImage,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    BikeNameWithModelPipe,
    NgIf,
    RoleColorPipe,
    HoverHighlightDirective,


  ],
  templateUrl: './bike-list-item.component.html',
  styleUrl: './bike-list-item.component.css'
})
export class BikeListItemComponent {
  @Input() bike?: Bike;


}
