import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { AuthInterceptorService } from '../../../../services/auth-interceptor.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  items: any[]=[];
  count: number = 0;
  cartItems: any[] = [];
  loading: boolean = true;
  error: string = '';
  quantity: any[]=[];
  totalPrice:number=0;
  discountedPrice:number=0;
  
  constructor(private router:Router,private cartService:CartService, private auth: AuthInterceptorService){
    this.cartService.setTotalPay(this.totalPrice,this.discountedPrice);
  }
  userEmail: string = this.auth.email;

  
home(){
  this.router.navigate(['/home']);
}

// ngOnInit(): void {
//   this.cartService.getCartItems(this.userEmail).subscribe(
//     (items: Product[]) => {
//       this.cartItems = items;
//       console.log('Cart items:', this.cartItems);
//     },
//     error => {
//       console.error('Error fetching cart items:', error);
//     }
//   );

//   // this.cartService.currentCount.subscribe(count => this.count = count);
// }

ngOnInit(): void {
  this.cartService.getCartItems(this.userEmail).subscribe(
    (items: any[]) => {
      this.items = items;
      this.loading = false;
      console.log('Cart items:', this.items);
      this.calculateTotalPrice();
    },
    error => {
      this.error = 'Error fetching cart items';
      this.loading = false;
      console.error('Error fetching cart items:', error);
    }
  );

}
calculateTotalPrice(): void {
  this.totalPrice = 0;
   // Reset total price before recalculating
  for (let item of this.items) {
    // Multiply quantity and price, then add to total price
    this.totalPrice += item.quantity * item.price;
    if(item.isBestDeal){
      this.discountedPrice += item.quantity * item.discountedPrice;
    }else{
      this.discountedPrice += item.quantity * item.price;
    }
    
  }
  console.log('Total price:', this.totalPrice);
  console.log('discounted price',this.discountedPrice);
  this.cartService.setTotalPay(this.totalPrice, this.discountedPrice);
}





}
