import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Bike} from "../Shared/Bike";
import {bikeList} from "../data/mock-bike";

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor() {
  }
  getBikes(): Observable<Bike[]> {
    return of(bikeList);
  }
}
