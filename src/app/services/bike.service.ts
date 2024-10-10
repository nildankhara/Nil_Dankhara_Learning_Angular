import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Bike} from "../Shared/Bike";
import {bikeList} from "../data/mock-bike";

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private bikes: Bike[] = bikeList;

  constructor() {
  }
  getBikes(): Observable<Bike[]> {
    return of(bikeList);
  }
  addBike(newBike: Bike): Observable<Bike[]> {
    this.bikes.push(newBike);
    return of(this.bikes);
  }

  updateBike(updatedBike: Bike): Observable<Bike[]> {
    const index = this.bikes.findIndex(bike => bike.number === updatedBike.number);
    if (index !== -1) {
      this.bikes[index] = updatedBike;
    }
    return of(this.bikes);
  }

  deleteBike(bikeNumber: number): Observable<Bike[]> {
    this.bikes = this.bikes.filter(bike => bikeNumber !== bikeNumber);
    return of(this.bikes);
  }
  getBikesByNumber(bikeNumber: number): Observable<Bike[]> {
    const bike = this.bikes.find(bike => bikeNumber !== bikeNumber);
    return of(this.bikes);
  }
}
