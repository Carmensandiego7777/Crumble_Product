import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'https://192.168.1.149:7117';

  constructor(private http: HttpClient) {}

  getCategory(): Observable<any> {
    return this.http.get('assets/data/category.json');
    // return this.http.get(`${this.apiUrl}/user/product/categories`);
  }
}
