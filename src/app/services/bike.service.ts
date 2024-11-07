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

  getBikesByNumber(number: number): Observable<Bike |undefined> {
    const bike = this.bikes.find(bike => bike.number === number);
    return of(bike);
  }

  addBike(newBike: Bike): Observable<Bike[]> {
    this.bikes.push(newBike);
    return of(this.bikes);
  }


  updateBike(updatedBike: Bike): Observable<Bike| undefined> {
    const index = this.bikes.findIndex(bike => bike.number === updatedBike.number);
    if (index > -1) {
        this.bikes[index] = updatedBike;
      return of(updatedBike);
    }
  return of(undefined);
  }

  deleteBike(bikeNumber: number): void {
    this.bikes = this.bikes.filter(bike => bike.number !== bikeNumber);
  }

  generateNewNumber() {
    return this.bikes.length>0 ? Math.max(...this.bikes.map(bike => bike.number)) + 1 :1;
  }
}
