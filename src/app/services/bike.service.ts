import { Injectable } from '@angular/core';
import {catchError, Observable, of, throwError} from "rxjs";
import {Bike} from "../Shared/Bike";
import {bikeList} from "../data/mock-bike";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private bikes: Bike[] = bikeList;
  private apiUrl = 'api/bikes';


  constructor(private http: HttpClient) {}
  getBikes(): Observable<Bike[]> {
    return this.http.get<Bike []>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getBikesByNumber(number: number): Observable<Bike> {
    return this.http.get<Bike>(`${this.apiUrl}/${number}`).pipe(catchError(this.handleError));

  }

  addBike(newBike: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.apiUrl, newBike).pipe(catchError(this.handleError));
  }


  updateBike(updatedBike: Bike): Observable<Bike| undefined> {
    const url = `${this.apiUrl}/${updatedBike.number}`;
    return this.http.put<Bike>(url, updatedBike).pipe(catchError(this.handleError));
  }

  deleteBike(bikeNumber: number): Observable<{}> {
    const url = `${this.apiUrl}/${bikeNumber}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  generateNewNumber():number {
    return this.bikes.length>0 ? Math.max(...this.bikes.map(bike => bike.number)) + 1 :1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server Error'));
  }
}
