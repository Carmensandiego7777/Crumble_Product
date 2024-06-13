import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { AuthInterceptorService } from '../../../../services/auth-interceptor.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {
order: any;
message: string = '';
constructor(private cartService: CartService, private router: Router, private auth:AuthInterceptorService){}
userEmail: string = this.auth.email;

  ngOnInit(): void{
    this.cartService.getCheckout('asrithtechsys@gmail.com').subscribe(
      response => {
        if (response.status === 'Ok') {
          this.message = response.message;
          console.log('Checkout successful', response);
        } else {
          console.error('Checkout response not OK', response);
        }
      },
      error => {
        console.error('Checkout failed', error);
      }
    );

  }

  home(){
    this.router.navigate(['/home']);
  }
}
