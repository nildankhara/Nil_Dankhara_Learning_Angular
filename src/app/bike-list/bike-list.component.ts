import { Component } from '@angular/core';
import {NgClass, NgForOf, NgStyle} from "@angular/common";
import {Bike} from "../Shared/Bike";
import {BikeListItemComponent} from "../bike-list-item/bike-list-item.component";

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


  bikeList: Bike[]=[
    {number:1,name:"Harley",model:2024,color:"red",isAdmin:true },
  {number:2,name:"Honda",model:2022,color:"blue",isAdmin:false },
  {number:3,name:"Hero",model:2015,color:"black",isAdmin:false },
  {number:4,name:"Bajaj",model:2009,color:"purple",isAdmin:true },
  {number:5,name:"TVS",model:2017,color:"green",isAdmin:false },
  {number:6,name:"OLA",model:2014,color:"Multi",isAdmin:false },
  ];

}
