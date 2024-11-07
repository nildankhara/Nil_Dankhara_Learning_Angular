import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {Bike} from "../Shared/Bike";
import {BikeListItemComponent} from "../bike-list-item/bike-list-item.component";
import {BikeService} from "../services/bike.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bike-list',
  standalone: true,
  imports: [
    NgForOf,
    BikeListItemComponent,
    NgClass,
    NgStyle,
    NgIf
  ],
  templateUrl: './bike-list.component.html',
  styleUrl: './bike-list.component.css'
})
export class BikeListComponent {
  bikeList: Bike[] = [];
  error: string | null = null;


  constructor(private bikeService: BikeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
this.bikeService.getBikes().subscribe({
  next: (result) => {
    this.bikeList = result;
    this.error = null;
    },
  error: err => {
    this.error = 'Error fetching Bikes bike-list.ts'; // Set an error message
    console.error("Error fetching Bikes bike-list.ts", err);
  }
  });
  }
  //
  onEdit(bike: Bike) {
    this.router.navigate(['/modify-bike',bike.number])
  }


  deleteBike(number: number) {
    this.bikeService.deleteBike(number);
    this.bikeList = this.bikeList.filter(bike => bike.number !== number);
  }
}

