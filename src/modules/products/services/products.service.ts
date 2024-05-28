import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://192.168.1.149:7117';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('assets/data/products.json');
    // return this.http.get(`${this.apiUrl}/user/product/categories`);
  }
}
