import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Bike} from "./Shared/Bike";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  bike1 : Bike={number:1,name:"Harley",model:2024,color:"red",isAdmin:true };
  bike2 : Bike={number:2,name:"Honda",model:2022,color:"blue",isAdmin:false };
  bike3 : Bike={number:3,name:"Hero",model:2015,color:"black",isAdmin:false };
  bike4 : Bike={number:4,name:"Bajaj",model:2009,color:"purple",isAdmin:true };
  bike5 : Bike={number:5,name:"TVS",model:2017,color:"green",isAdmin:false };
  bike6 : Bike={number:6,name:"OLA",model:2014,color:"Multi",isAdmin:false };

  bikeList: Bike[]=[this.bike1,this.bike2,this.bike3,this.bike4,this.bike5]

}
