import { Component } from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";
import {Bike} from "../Shared/Bike";
import {BikeListItemComponent} from "../bike-list-item/bike-list-item.component";
import {BikeService} from "../services/bike.service";
import {Router} from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-bike-list',
  standalone: true,
  imports: [
    NgForOf,
    BikeListItemComponent,
    NgStyle,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './bike-list.component.html',
  styleUrl: './bike-list.component.css'
})
export class BikeListComponent {
  bikeList: Bike[] = [];

  constructor(private bikeService: BikeService, private router: Router) {
  }

  ngOnInit(): void {
this.bikeService.getBikes().subscribe({
  next: (result) => {
    this.bikeList = result;
    }
  });
  }
  //
  onEdit(bike: Bike | undefined) {
    this.router.navigate(['/modify-bike',bike])
  }


  deleteBike(number: number) {
    this.bikeService.deleteBike(number);
    this.bikeList = this.bikeList.filter(bike => bike.number !== number);
  }


}

