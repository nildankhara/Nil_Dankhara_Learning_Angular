import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Bike} from "./Shared/Bike";
import {NgForOf} from "@angular/common";
import {BikeListComponent} from "./bike-list/bike-list.component";
import {BikeListItemComponent} from "./bike-list-item/bike-list-item.component";
import {BikeService} from "./services/bike.service";
import {bikeList} from "./data/mock-bike";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, BikeListComponent, BikeListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedBike?: Bike | undefined;
  title: "Nil Dankhara" | undefined;

}
