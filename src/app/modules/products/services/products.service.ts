import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { Product } from '../../checkout/models/product';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = environment.apiUrl;
  

  constructor(private http: HttpClient) {}

  // getProducts(userId:number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/user/product/products/${userId}`);
  // }
  // getProducts(userId: number): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${this.apiUrl}/user/product/get/category/${userId}`);
  // }

  getProducts(userId: number): Observable<Product[]> {
    return this.http.get<{ status: string, message: Product[] }>(`${this.apiUrl}/user/product/get/category/${userId}`)
      .pipe(
        map(response => response.message)
      );
  }

  addToCart(email: string, itemId: number, quantity: number): Observable<any> {
    const payload = {
      email: email,
      cartItems: [
        {
          itemId: itemId,
          quantity: quantity
        }
      ]
    };
    return this.http.post<any>(`${this.apiUrl}/user/cart/update`, payload);
  }



  
}
