import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Bike} from "./Shared/Bike";
import {NgForOf} from "@angular/common";
import {BikeListComponent} from "./bike-list/bike-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, BikeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



}
