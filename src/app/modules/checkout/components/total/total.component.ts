import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { AuthInterceptorService } from '../../../../services/auth-interceptor.service';

declare var Razorpay: any;

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'] // Corrected `styleUrl` to `styleUrls`
})
export class TotalComponent {
  order: any[] = [];
  message: string = '';
  coupon: string = '123';
  paymentId: string = '';
  order_id: string = '';
  totalPrice: number =0;
  delivery: string ='Your order has been allocated to your delivery partner :';
  discountedPrice: number = 0;
  
  constructor(private router: Router, private cartService: CartService, private http: HttpClient, private auth:AuthInterceptorService) {

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
  userEmail: string = this.auth.email;

  onClick() {
    this.cartService.getCheckout(this.userEmail).subscribe(
      response => {
        if (response.status === 'Ok') {
          this.message = response.message;
          this.order_id = response.message;
          console.log('Checkout successful', response);
          this.initiateRazorpayPayment(this.order_id, this.totalPrice); 
        } else {
          console.error('Checkout response not OK', response);
        }
      },
      error => {
        console.error('Checkout failed', error);
      }
    );
  }

  initiateRazorpayPayment(order_id: string,total: number) {
    const value = total;
    const RazorpayOptions = {
      
      currency: 'INR',
      amount: value,
      name: 'Soorya',
      key: 'rzp_test_ZA37FGbXg036CZ',
      image: 'https://i.imgur.com/FApqk3D.jpeg',
      order_id: order_id, 
      prefill: {
        name: 'christic',
        email: this.userEmail,
        phone: '9898989898'
      },
      theme: {
        color: '#6466e3'
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        }
      },
      handler: (paymentResponse: any) => {
        
        console.log('Payment successful', paymentResponse);
        this.verifyPayment(paymentResponse, order_id); 
      }
    };

    const rzp = new Razorpay(RazorpayOptions);
    rzp.open();
  }

  verifyPayment(paymentResponse: any, order_id: string) {
    const paymentDetails = {
      email: this.userEmail,
      razorpay_payment_id: paymentResponse.razorpay_payment_id,
      razorpay_order_id: order_id,
      razorpay_signature: paymentResponse.razorpay_signature
    };

    this.paymentId = paymentDetails.razorpay_payment_id;
    console.log("Payment Details:", paymentDetails);

    this.cartService.verifyRazorpayPayment(
      paymentDetails.email,
      paymentDetails.razorpay_payment_id,
      paymentDetails.razorpay_order_id,
      paymentDetails.razorpay_signature
    ).subscribe(
      response => {
        console.log('Payment verification response:', response);
        
        this.delivery=response;
        this.router.navigate(['/processing']);
        setTimeout(() => {
          this.router.navigate(['/success']);
        }, 2000);
        
      },
      error => {
        console.error('Payment verification failed:', error);
      
      }
    );
  }

  get_id() {
    if (this.order_id) {
      console.log(this.order_id);
    } else {
      console.log("no data available");
    }
  }
}
