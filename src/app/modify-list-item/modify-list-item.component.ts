import { Component, OnInit } from '@angular/core';
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Bike } from "../Shared/Bike";
import { BikeService } from "../services/bike.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    PageNotFoundComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {
  bikeForm: FormGroup;
  bike: Bike | undefined;
  error: string | null = null;

  constructor(
    private bikeService: BikeService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
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
    const number = Number(this.route.snapshot.paramMap.get('number'));
    if (number) {
      this.bikeService.getBikesByNumber(number).subscribe({
        next: bike => {
          if (bike) {
            // this.bike = bike;
            this.bikeForm.patchValue(bike); // Patch form with bike data
          }
        },
        error: (err) => {
          this.error = 'Error fetching bike details';
          console.error('Error fetching bike details:', err);
        },
      });
    }
  }

  onSubmit(): void {
    if (this.bikeForm.valid) {
      const bike: Bike = this.bikeForm.value;

      if (bike.number) {
        // If bike has a number, update it
        this.bikeService.updateBike(bike).subscribe(() => this.router.navigate(['/bikes']));
      } else {
        // If bike doesn't have a number (new bike), generate new number and add it
        bike.number = this.bikeService.generateNewNumber();
        this.bikeService.addBike(bike).subscribe(() => this.router.navigate(['/bikes']));
      }
    }
  }
}
