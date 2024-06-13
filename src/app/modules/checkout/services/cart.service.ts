import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/product';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private countSource = new BehaviorSubject<Map<number, number>>(new Map());
  currentCount = this.countSource.asObservable();
  private apiUrl = environment.apiUrl;
  

  private cartData: Product[] = [];
  private totalPriceSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalPrice$: Observable<number> = this.totalPriceSubject.asObservable();
  
 

  constructor(private http: HttpClient) {}

  incrementCount(productId: number) {
    const currentCountMap = this.countSource.value;
    const currentCount = currentCountMap.get(productId) || 1;
    currentCountMap.set(productId, currentCount + 1);
    this.countSource.next(new Map(currentCountMap));
    console.log(currentCountMap.get(productId));
    this.calculateTotalPrice();
  }

  decrementCount(productId: number) {
    const currentCountMap = this.countSource.value;
    const currentCount = currentCountMap.get(productId) || 1;
    if (currentCount > 0) {
      currentCountMap.set(productId, currentCount - 1);
      this.countSource.next(new Map(currentCountMap));
    }
    this.calculateTotalPrice();
  }

  setData(data: Product[]) {
    this.cartData = data;
    this.calculateTotalPrice();
  }

 
  getCartItems(email: string): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/user/cart/get/${email}`).pipe(
      map(response => {
        console.log('API response:', response); // Log the full response
        if (response.status === 'Ok' && response.message && Array.isArray(response.message.items)) {
          return response.message.items
        } else {
          throw new Error('Invalid response format');
        }
      }),
      catchError(error => {
        console.error('Error fetching cart items:', error);
        return throwError('Error fetching cart items');
      })
    );
  }

  getCheckout(email: string, coupon?: string): Observable<any> {
    let params = new HttpParams().set('email', email);
    if (coupon) {
        params = params.set('coupon', coupon);
    }
    return this.http.get<any>(`${this.apiUrl}/user/cart/checkout`, { params });
}

  verifyRazorpayPayment(email: string, payment_id: any, order_id: string, signature: any): Observable<any> {
    const data = {
        email: email,
        razorpay_payment_id: payment_id,
        razorpay_order_id: order_id,
        razorpay_signature: signature
    };
    return this.http.post<any>(`${this.apiUrl}/user/cart/verify`, data);
}

private calculateTotalPrice() {
  let totalPrice = 0;
  let dicountedPrice = 0;
  this.cartData.forEach(item => {
    totalPrice += item.count * item.price;
   
  });
  this.totalPriceSubject.next(totalPrice);
}
  

private totalPaySource = new BehaviorSubject<number>(0);
private discountedPaySource = new BehaviorSubject<number>(0);


  totalPay$ = this.totalPaySource.asObservable();
  discountedPay$ = this.discountedPaySource.asObservable();
  
  
  setTotalPay(totalPay: number, dicountedPrice: number) {
    this.totalPaySource.next(totalPay);
    this.discountedPaySource.next(dicountedPrice);
    
  }
}
