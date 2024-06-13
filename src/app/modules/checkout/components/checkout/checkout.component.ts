import { Component, ViewChild } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { DeliveryComponent } from '../delivery/delivery.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  
  isEditable = false;
  isNext=false;
  firstFormGroup!: FormGroup | undefined;
  secondFormGroup!: FormGroup | undefined;
  thirdFormGroup!: FormGroup | undefined;
  allowNavigation = false;
  address: string = "";
  name: string = "";
  address2: string = "";
  address3: string = "";
  ngOnInit() {
    console.log(localStorage.getItem("login"));
  }

  @ViewChild('stepper') stepper: MatStepper | undefined;
  

  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog) {
    
  }
  matStepper() {
    this.stepper!.next(); // Move to the next step regardless of form validity
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DeliveryComponent, {
  //     data: {name: this.name, address: this.address},
  //   });

    openDialog(): void {
      const dialogRef = this.dialog.open(DeliveryComponent, {
        data: { name: this.name, address: this.address, address2: this.address2, address3: this.address3},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.address = result.address;
      this.address2 = result.address2;
      this.address3 = result.address3;
          
        }
      });
    }


  }


 