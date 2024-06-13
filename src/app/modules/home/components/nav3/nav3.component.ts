import { Component ,EventEmitter,Output} from '@angular/core';
import { CartService } from '../../../checkout/services/cart.service';

@Component({
  selector: 'app-nav3',
  templateUrl: './nav3.component.html',
  styleUrl: './nav3.component.scss'
})
export class Nav3Component {
  @Output() proceedToPay: EventEmitter<any> = new EventEmitter();
  totalPrice: number = 0;
  discountedPrice: number = 0;
  constructor(private cartService:CartService){}

  proceedToPayClicked() {
    // Emit the event when "Proceed to Pay" is clicked
    this.proceedToPay.emit();
  }

  ngOnInit(): void{
    this.cartService.totalPay$.subscribe((totalPay)=>{
      this.totalPrice =totalPay;
     
      console.log("value passed in razor:",this.totalPrice)

    })
    this.cartService.discountedPay$.subscribe((discountedPay)=>{
      this.discountedPrice =discountedPay;
    })
}
}