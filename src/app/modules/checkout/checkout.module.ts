import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Nav3Component } from '../home/components/nav3/nav3.component';
import { NavbarComponent } from '../login/components/navbar/navbar.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TotalComponent } from './components/total/total.component';
import { ProcessingComponent } from './components/processing/processing.component';
import { SuccessComponent } from './components/success/success.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ChatComponent } from './components/chat/chat.component';



@NgModule({
  declarations: [
    CheckoutComponent,
    DeliveryComponent,
    OrderComponent,
    PaymentComponent,
    TotalComponent,
    ProcessingComponent,
    SuccessComponent,
    ChatComponent,
    
    
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HomeModule,
    MatProgressSpinnerModule
    
  ]
})
export class CheckoutModule { }
