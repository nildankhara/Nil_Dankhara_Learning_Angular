import { Pipe, PipeTransform } from '@angular/core';
import {Bike} from "../Shared/Bike";

@Pipe({
  name: 'bikeNameWithModel',
  standalone: true
})
export class BikeNameWithModelPipe implements PipeTransform {

  transform(bike: Bike): string {
    return `${bike.model} ${bike.name}`;
  }

}
