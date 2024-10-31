import {Component} from '@angular/core';
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Bike} from "../Shared/Bike";
import {BikeService} from "../services/bike.service";
import {ActivatedRoute, Router} from "@angular/router";




@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    PageNotFoundComponent,
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent {
  bikeForm : FormGroup;
  bike: Bike | undefined;

  constructor(private bikeService: BikeService,
              private fb: FormBuilder,
              private router: Router,
              private route : ActivatedRoute) {
    this.bikeForm = this.fb.group({
      number:['',Validators.required],
      name:['', Validators.required],
      model: ['', Validators.required],
      color: ['', Validators.required],
      isAdmin: [false],

    });
  }
  ngOnInit(): void {
    const number = this.route.snapshot.paramMap.get('number');
    if (number) {
      this.bikeService.getBikesByNumber(+number).subscribe(bike => {
          if (bike) {
            this.bike= bike;
            this.bikeForm.patchValue(bike);
          }
      });
    }
  }
  onSubmit(): void {
    const bike: Bike = this.bikeForm.value;
  if(this.bikeForm.invalid){
      this.bikeService.updateBike(bike).subscribe(()=>{
        this.router.navigate(['/bikes']);
      });
    }
      else {
      // This method will create a new ID
      bike.number = this.bikeService.generateNewNumber();
      this.bikeService.addBike(bike).subscribe(() => {
        this.router.navigate(['/bikes']);
      });

    }
    // Reseting form
      this.bikeForm.reset();
    }
}



