import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Bike} from "../Shared/Bike";
import {BikeService} from "../services/bike.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HighlightOnFocusDirective} from "../directive/highlight-on-focus.directive";
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckbox, MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from '@angular/material/tooltip';



@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    MatTooltipModule,
    ReactiveFormsModule,
    HighlightOnFocusDirective,
    MatButtonModule,
    MatDividerModule,
    MatCheckbox,
    MatLabel,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent {
  bikeForm: FormGroup;
  bike!: Bike;

  constructor(private bikeService: BikeService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
    this.bikeForm = this.fb.group({
      number: ['', Validators.required],
      name: ['', Validators.required],
      model: ['', Validators.required],
      color: ['', Validators.required],
      isAdmin: [false],
      imgURL: [''],

    });
  }

  ngOnInit(): void {
    const number = this.route.snapshot.paramMap.get('number');
    if (number) {
      this.bikeService.getBikesByNumber(+number).subscribe(bike => {
        if (bike) {
          this.bike = bike;
          this.bikeForm.patchValue(bike);
        }
      });
    }
  }

  onSubmit(): void {
    const bike: Bike = this.bikeForm.value;
    if (bike.number) {
      this.bikeService.updateBike(bike).subscribe(() => {
        this.router.navigate(['/bikes']);
        this.bikeForm.reset();
      });
    } else {
      bike.number = this.bikeService.generateNewNumber();
      this.bikeService.addBike(bike).subscribe(updatedBikes => {
        this.router.navigate(['/bikes']);
        this.bikeForm.reset();
      });
    }
  }
}



