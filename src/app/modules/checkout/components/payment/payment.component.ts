import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  selectedOption: string='';
  proceed: boolean = false;

  setProceed() {
    this.proceed = !!this.selectedOption;
  }

}
