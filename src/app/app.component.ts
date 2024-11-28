import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Bike} from "./Shared/Bike";
import {BikeService} from "./services/bike.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  selectedBike?: Bike | undefined;
  // title: "Nil Dankhara" | undefined;

  constructor(private bikeService: BikeService) {
  }
ngOnInit():void {
  this.bikeService.getBikesByNumber(3).subscribe(bike=>{
    this.selectedBike=bike;
  })
}
}
