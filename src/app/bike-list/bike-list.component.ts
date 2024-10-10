import { Component } from '@angular/core';
import {NgClass, NgForOf, NgStyle} from "@angular/common";
import {Bike} from "../Shared/Bike";
import {BikeListItemComponent} from "../bike-list-item/bike-list-item.component";
import {BikeService} from "../services/bike.service";

@Component({
  selector: 'app-bike-list',
  standalone: true,
  imports: [
    NgForOf,
    BikeListItemComponent,
    NgClass,
    NgStyle
  ],
  templateUrl: './bike-list.component.html',
  styleUrl: './bike-list.component.css'
})
export class BikeListComponent {
  bikeList: Bike[] = [];

  constructor(private bikeService: BikeService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.bikeService.getBikes().subscribe({
      next: (data: Bike[]) => this.bikeList = data,
      error: error => console.log(error),
      complete: () => console.log("Bike fetched")
    })
  }

}

