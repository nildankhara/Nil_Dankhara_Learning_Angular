import {Component, Input, input} from '@angular/core';
import {Bike} from "../Shared/Bike";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {BikeService} from "../services/bike.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-bike-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf

  ],
  templateUrl: './bike-list-item.component.html',
  styleUrl: './bike-list-item.component.css'
})
export class BikeListItemComponent {
  @Input() bike?: Bike;

  bikes: Bike[] = [];
  currentIndex: number = 0;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private bikeService: BikeService, private router: Router) {}

  ngOnInit(): void {
    this.bikeService.getBikes().subscribe({
      next: (bikes) => {
        this.bikes = bikes;
        this.error = null;

        // this.route.paramMap.subscribe(params => {
        //   const number = Number(params.get('number'));
        //   if (number) {
        //     this.currentIndex = this.bikes.findIndex(bike => bike.number === number);
        //     this.bike = this.bikes[this.currentIndex];
        //   }
        // });
      },
      error: (err) => {
        this.error = 'Error fetching books: bike list item.ts';
        console.error('Error fetching books: bike list item.ts', err);
      }
    });
  }

}
