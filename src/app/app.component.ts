import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Bike} from "./Shared/Bike";
import {NgForOf} from "@angular/common";
import {BikeListComponent} from "./bike-list/bike-list.component";
import {BikeListItemComponent} from "./bike-list-item/bike-list-item.component";
import {BikeService} from "./services/bike.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, BikeListComponent, BikeListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  selectedBike?: Bike | undefined;
  title: "Nil Dankhara" | undefined;

  constructor(private bikeService: BikeService) {
  }
ngOnInit():void {
  this.bikeService.getBikesByNumber(3).subscribe(bike=>{
    this.selectedBike=bike;
  })
}
}
