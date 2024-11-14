import { Pipe, PipeTransform } from '@angular/core';
import {Bike} from "../Shared/Bike";

@Pipe({
  name: 'roleColor',
  standalone: true
})
export class RoleColorPipe implements PipeTransform {

  transform(isAdmin: boolean | undefined): string {
    return isAdmin ? 'red' : 'black';
  }

}
