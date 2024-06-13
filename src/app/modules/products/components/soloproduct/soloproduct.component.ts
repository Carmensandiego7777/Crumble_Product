import { Component,Input,Inject } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { CardComponent } from '../card/card.component';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../../../checkout/services/cart.service';
import { ProductsService } from '../../services/products.service';
import { AuthInterceptorService } from '../../../../services/auth-interceptor.service';

@Component({
  selector: 'app-soloproduct',
  templateUrl: './soloproduct.component.html',
  styleUrl: './soloproduct.component.scss'
})
export class SoloproductComponent {
  @Input() cardData:any;
  count: number =1;
  userId: number=1;
  addedToCart:boolean = false;
  buttonColor:string = '#fb641b';
  buttonText:string ='ADD TO CART';
  totalPrice: number=0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private cartService: CartService, private productService: ProductsService,private auth: AuthInterceptorService){
    this.cardData=data.cardData;
  }
  email: string = this.auth.email;

  ngOnInit() {
    this.cartService.currentCount.subscribe(countMap => {
      this.count = countMap.get(this.cardData.id) || 1;
    });
  }
  increment() {
    this.count++;
    this.cartService.incrementCount(this.cardData.id);
  }
  decrement() {
    if (this.count > 0) {
      this.count--;
      this.cartService.decrementCount(this.cardData.id);
    }
  }

  addToCart(){
    
    this.productService.addToCart(this.email,this.cardData.id,this.count).subscribe(
      response => {
        this.buttonText="ADDED TO CART";
    this.buttonColor="#007bff";
    this.addedToCart=true;
    console.log('Product added to cart:', response);
    console.log(this.email);
      },
    error => {
      console.error('Error adding product to cart:', error);
    });
    
  }

  
}

